import { sanityFetch } from "@/sanity/lib/fetch";
import { HOME_QUERY, ARTICLES, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import Navbar from "./components/common/Navbar";
import ArticleThumbnail from "./components/common/ArticleThumbnail";
import { Article } from "./types";
import { SanityDocument } from "sanity";
import clsx from "clsx";
import HeroArticleView from "./components/HeroArticleView";

export default async function Home() {
  const { featuredArticle } = await sanityFetch<any>({
    query: HOME_QUERY,
  });

  const articles = await sanityFetch<any>({
    query: ARTICLES,
  });

  const categories = await sanityFetch<SanityDocument[]>({
    query: CATEGORIES_QUERY,
  });

  return (
    <>
      <div></div>
      <header className="flex flex-col h-screen">
        <Navbar categories={categories} />
        <div className="flex grow pb-12">
          <HeroArticleView articles={articles.slice(0, 3)} />
        </div>
      </header>
      <main className="flex flex-col min-h-screen pb-16">
        <div className="flex gap-4 mt-8 items-stretch px-24">
          <div className="w-9/12">
            <h2 className="text-2xl border-b py-4 mb-4">Últimos Artículos</h2>
            <div>
              <ul className="grid grid-cols-3 grid-rows-3 ">
                {articles.map((article: Article) => (
                  <li key={article._id} className="flex gap-2">
                    <ArticleThumbnail
                      imageUrl={article.mainImage}
                      title={article.title}
                      category={article.category.name}
                      author={article.author.name}
                      url={`/articles/${article.slug.current}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[1px] bg-gray-300"></div>
          <div className="w-3/12">
            <h2 className="text-primary-500 text-2xl border-b py-4 mb-4">
              Popular
            </h2>
            <div>
              <ul className="flex flex-col gap-8">
                {articles.map((article: Article) => (
                  <li key={article._id}>
                    <ArticleThumbnail
                      title={article.title}
                      category={article.category.name}
                      author={article.author.name}
                      titleSize={"large"}
                      className={"min-h-[124px]"}
                      url={`/articles/${article.slug.current}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
