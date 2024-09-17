import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_COUNT, ARTICLES, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import Navbar from "@/app/components/common/Navbar";
import { Category } from "@/types";
import CategoryBar from "@/app/components/CategoryBar";
import Footer from "@/app/components/common/Footer";
import ArticleList from "@/app/components/common/ArticleList";
import SearchBar from "@/app/components/common/SearchBar";
import { getArticlePageParams, getTotalPages } from "@/utils/utils";

const Article = async ({ searchParams }: { searchParams: any }) => {
  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  const allCount = await sanityFetch<number>({
    query: ALL_COUNT,
  });

  const currentPage = parseInt(searchParams.page);

  let totalPages = getTotalPages(allCount);

  console.log(getArticlePageParams(currentPage));

  const articles = await sanityFetch<any>({
    query: ARTICLES,
    params: getArticlePageParams(currentPage),
  });

  return (
    <div className="pb-12">
      <header className="flex flex-col">
        <Navbar categories={categories} showCategoryBar={false} />
      </header>
      <main className="flex flex-col pb-16 pt-10 default-box">
        <h1 className="text-6xl text-center">Articles</h1>
        <div className="divide-y py-8 border-t border-b mt-6">
          <CategoryBar categories={categories} />
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
