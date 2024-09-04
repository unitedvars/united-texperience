import { sanityFetch } from "@/sanity/lib/fetch";
import { PortableText } from "next-sanity";
import { ARTICLES_BY_CATEGORY, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import Navbar from "@/app/components/common/Navbar";
import LargeArticle from "@/app/components/LargeArticle";
import { Category } from "@/types";
import CategoryBar from "@/app/components/CategoryBar";
import { Article as ArticleType } from "@/types";
import ArticleThumbnail from "@/app/components/common/ArticleThumbnail";

const Article = async ({ params }: { params: { category: string } }) => {
  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  const articles = await sanityFetch<any>({
    query: ARTICLES_BY_CATEGORY,
    params: {
      category: params.category,
    },
  });

  console.log(articles);

  return (
    <div>
      <header className="flex flex-col">
        <Navbar categories={categories} showCategoryBar={false} />
      </header>
      <main className="flex flex-col min-h-screen pb-16 pt-10 default-box">
        <h1 className="text-6xl text-center">Articles</h1>
        <div className="divide-y py-8 border-t border-b mt-6">
          <CategoryBar categories={categories} />
        </div>
        <div>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 grid-rows-6 sm:grid-rows-3 xl:grid-rows-2 gap-8 sm:gap-x-3 sm:gap-y-16">
            {articles.map(
              (article: ArticleType, index: number) =>
                index < 6 && (
                  <li key={article._id} className="gap-2 w-full">
                    <ArticleThumbnail
                      imageUrl={article.mainImage}
                      title={article.title}
                      category={article.category.name}
                      author={article.author.name}
                      url={`/articles/${article.slug.current}`}
                    />
                  </li>
                )
            )}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Article;
