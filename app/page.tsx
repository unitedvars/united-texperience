import { sanityFetch } from "@/sanity/lib/fetch";
import Navbar from "./components/common/Navbar";
import { CATEGORIES_QUERY, HOME_QUERY, ARTICLES } from "@/sanity/lib/queries";

import ArticleThumbnail from "./components/common/ArticleThumbnail";
import { Article, Category } from "@/types";
import clsx from "clsx";
import { orbitron } from "@/utils/fonts";
import Link from "next/link";
import LargeArticle from "./components/LargeArticle";

export default async function Home() {
  const { featuredArticle } = await sanityFetch<any>({
    query: HOME_QUERY,
  });

  const articles = await sanityFetch<any>({
    query: ARTICLES,
  });

  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  return (
    <>
      <header className="flex flex-col">
        <Navbar categories={categories} />
      </header>
      <main className="flex flex-col min-h-screen pb-16 default-box">
        <Link
          className="flex"
          href={`/articles/${featuredArticle.slug.current}`}
        >
          <LargeArticle article={featuredArticle} />
        </Link>
        <div className="flex-col lg:flex-row flex gap-4 mt-8 items-stretch">
          <div className="w-full lg:w-9/12 bg-white rounded-lg p-4">
            <h2
              className={clsx(
                "text-primary-500 text-2xl border-b pb-4 mb-4",
                orbitron.className
              )}
            >
              Latest news
            </h2>
            <div>
              <ul className="grid 2xl:grid-cols-3 2xl:grid-rows-3 gap-8 2xl:gap-3">
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
          <div className="w-full lg:w-3/12 bg-white rounded-lg p-4">
            <h2
              className={clsx(
                orbitron.className,
                "text-primary-500 text-2xl pb-4 mb-4 border-b"
              )}
            >
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
