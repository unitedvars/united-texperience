import { sanityFetch } from "@/sanity/lib/fetch";
import {
  CATEGORIES_QUERY,
  CATEGORY_COUNT,
  PAGINATED_ARTICLES_BY_CATEGORY,
  PAGINATED_ARTICLES_BY_CATEGORY_ASC,
  PAGINATED_ARTICLES_BY_CATEGORY_DESC
} from "@/sanity/lib/queries";
import Navbar from "@/app/components/common/Navbar";
import { Category } from "@/types";
import CategoryBarList from "@/app/components/CategoryBarList";
import Footer from "@/app/components/common/Footer";
import ArticleList from "../../components/common/ArticleList";
import SearchBar from "@/app/components/common/SearchBar";
import { getArticlePageParams, getTotalPages } from "@/utils/utils";

const Article = async (props: any) => {
  const params = props.params;
  const searchParams = props.searchParams;
  const currentPage = parseInt(searchParams.page);
  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  const categoryCount = await sanityFetch<number>({
    query: CATEGORY_COUNT,
    params: {
      language: params.lang,
      category: params.category,
      author: searchParams.author || null,
      editorial: searchParams.editorial || null,
      dateFrom: searchParams.dateFrom || null,
      dateTo: searchParams.dateTo || null,
      searchParam: searchParams.searchParam || null,
    },
  });

  let totalPages = getTotalPages(categoryCount);

  const articles = await sanityFetch<any>({
    query:
      searchParams.sort === "asc"
        ? PAGINATED_ARTICLES_BY_CATEGORY_ASC
        : searchParams.sort === "desc"
          ? PAGINATED_ARTICLES_BY_CATEGORY_DESC
          : PAGINATED_ARTICLES_BY_CATEGORY,
    params: {
      ...getArticlePageParams(currentPage),
      language: params.lang,
      category: params.category,
      author: searchParams.author || null,
      editorial: searchParams.editorial || null,
      dateFrom: searchParams.dateFrom || null,
      dateTo: searchParams.dateTo || null,
      searchParam: searchParams.searchParam || null,
    },
  });

  return (
    <div className="pb-12">
      <header className="flex flex-col">
        <Navbar categories={categories} showCategoryBar={false} />
      </header>
      <main className="flex flex-col pb-16 pt-10 default-box">
        <div className="divide-y py-8 border-t border-b mt-6">
          <CategoryBarList categories={categories} />
        </div>
        <div>
          <SearchBar />
          <ArticleList articles={articles} totalPages={totalPages} />
        </div>
      </main>
      <Footer lang={params.lang} />
    </div>
  );
};

export default Article;
