import { sanityFetch } from "@/sanity/lib/fetch";
import { HOME_QUERY, ARTICLES, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Navbar from "./components/common/Navbar";
import ArticleThumbnail from "./components/common/ArticleThumbnail";
import { Article } from "./types";
import { SanityDocument } from "sanity";
import clsx from "clsx";

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
        <div className="flex bg-gradient-sunrise grow pb-12">
          <div className="grow relative max-w-6xl mx-auto overflow-hidden rounded-xl shadow-2xl flex border border-gray-300">
            <div className="relative grow">
              <Image
                src={articles[0].mainImage}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white flex-col right-0 h-full w-1/3">
              <ul className="flex flex-col h-full">
                {articles.map((article: any, idx: any) => {
                  return (
                    idx <= 2 && (
                      <li
                        key={article.slug}
                        className="flex flex-col grow h-1/3 p-4 border-y first:border-0 last:border-0 first:border-l-yellow-400 first:border-l-4 bg-gray-100 first:bg-white cursor-pointer hover:bg-gray-50 transition"
                      >
                        <span
                          className={clsx(
                            "uppercase text-blue-500 text-[10px] mb-1"
                          )}
                        >
                          {article.category.name}
                        </span>
                        <h1
                          className={clsx(
                            "text-lg font-semibold mb-2 leading-tight"
                          )}
                        >
                          {article.title}
                        </h1>
                        <p className={"text-sm text-gray-500"}>
                          {article.subtitle}
                        </p>
                        <span
                          className={clsx("text-[10px] mt-auto opacity-70")}
                        >{`Por ${article.author.name}`}</span>
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col min-h-screen pb-16">
        <div className="flex gap-4 mt-8 items-stretch px-24">
          <div className="w-9/12">
            <h2 className="text-primary-500 text-2xl border-b py-4 mb-4">
              Últimos Artículos
            </h2>
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
