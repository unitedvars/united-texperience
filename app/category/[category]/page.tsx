import { sanityFetch } from "@/sanity/lib/fetch";
import { PortableText } from "next-sanity";
import { ARTICLES_BY_CATEGORY, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import Navbar from "@/app/components/common/Navbar";
import LargeArticle from "@/app/components/LargeArticle";
import { Category } from "@/types";
import CategoryBar from "@/app/components/CategoryBar";
import { Article as ArticleType } from "@/types";
import ArticleThumbnail from "@/app/components/common/ArticleThumbnail";
import Footer from "@/app/components/common/Footer";

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
    <div className="pb-12">
      <header className="flex flex-col">
        <Navbar categories={categories} showCategoryBar={false} />
      </header>
      <main className="flex flex-col pb-16 pt-10 default-box">
        <h1 className="text-6xl text-center">Articles</h1>
        <div className="divide-y py-8 border-t border-b mt-6">
          <CategoryBar categories={categories} />
        </div>
        <div className="pt-8">
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 grid-rows-6 sm:grid-rows-3 xl:grid-rows-none gap-8 sm:gap-x-3 sm:gap-y-16">
            {articles.map((article: ArticleType, index: number) => (
              <li key={article._id} className="gap-2 w-full h flex flex-col">
                <div className="grow rounded-md bg-white p-4">
                  <ArticleThumbnail
                    imageUrl={article.mainImage}
                    title={article.title}
                    category={article.category.name}
                    author={article.author.name}
                    url={`/articles/${article.slug.current}`}
                    subtitle={article.subtitle}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <div className="bg-white rounded-lg p-8 default-box">
        <Footer />
      </div>
    </div>
  );
};

export default Article;
