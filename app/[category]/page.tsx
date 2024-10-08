import { sanityFetch } from "@/sanity/lib/fetch";
import {
  CATEGORIES_QUERY,
  CATEGORY_COUNT,
  PAGINATED_ARTICLES_BY_CATEGORY,
} from "@/sanity/lib/queries";
import Navbar from "@/app/components/common/Navbar";
import { Category } from "@/types";
import CategoryBarList from "@/app/components/CategoryBarList";
import CategoryBar from "@/app/components/CategoryBar";
import Footer from "@/app/components/common/Footer";
import ArticleList from "@/app/components/common/ArticleList";
import SearchBar from "@/app/components/common/SearchBar";
import { getArticlePageParams, getTotalPages } from "@/utils/utils";

const Article = async ({
  params,
  searchParams,
}: {
  params: { category: string; page: string };
  searchParams: any;
}) => {
  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  const categoryCount = await sanityFetch<number>({
    query: CATEGORY_COUNT,
    params: {
      category: params.category,
    },
  });

  const currentPage = parseInt(searchParams.page);

  let totalPages = getTotalPages(categoryCount);

  const articles = await sanityFetch<any>({
    query: PAGINATED_ARTICLES_BY_CATEGORY,
    params: {
      ...getArticlePageParams(currentPage),
      category: params.category,
    },
  });

  console.log(articles);
  return (
    <div className="pb-12">
      <header className="flex flex-col">
        <Navbar categories={categories} showCategoryBar={false} />
      </header>
      <main className="flex flex-col pb-16 pt-10 default-box">
        <h1 className="text-6xl text-center">Articles</h1>
        <div className="divide-y py-8 border-t border-b mt-6">
          <CategoryBarList categories={categories} />
        </div>
        <div>
          <SearchBar />
          <ArticleList articles={articles} totalPages={totalPages} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Article;