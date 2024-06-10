import { sanityFetch } from "@/sanity/lib/fetch";
import Navbar from "./components/common/Navbar";
import { SanityDocument } from "sanity";
import { CATEGORIES_QUERY, HOME_QUERY, ARTICLES } from "@/sanity/lib/queries";
import Image from "next/image";
import clsx from "clsx";
import { Archivo, Maitree, Orbitron } from "next/font/google";
import ArticleThumbnail from "./components/common/ArticleThumbnail";

const archivo = Archivo({ subsets: ["latin"] });
const maitree = Maitree({ weight: ["400"], subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });

interface Article {
  _id: string;
  mainImage: string;
  title: string;
  author: {
    name: string;
  };
  category: {
    name: string;
  };
}

export default async function Home() {
  const categories = await sanityFetch<SanityDocument[]>({
    query: CATEGORIES_QUERY,
  });

  const { featuredArticle } = await sanityFetch<any>({
    query: HOME_QUERY,
  });

  const articles = await sanityFetch<any>({
    query: ARTICLES,
  });

  return (
    <>
      <header className="flex flex-col">
        <Navbar categories={categories} />
      </header>
      <main className="flex flex-col min-h-screen pb-16 px-[50px]">
        <div className="flex">
          <div className="h-[480px] w-[112px]"></div>
          <div className="grow bg-primary-200 h-[480px] relative">
            <Image
              src={featuredArticle.mainImage}
              alt=""
              fill
              className="object-cover"
            />
            <div className="bg-white absolute z-10 w-[882px] bottom-0 left-0 p-4 flex flex-col">
              <span
                className={clsx(
                  "uppercase text-primary-500 text-sm mb-4",
                  orbitron.className
                )}
              >
                {featuredArticle.category.name}
              </span>
              <h1
                className={clsx(
                  "text-[68px] leading-none mb-4",
                  archivo.className
                )}
              >
                {featuredArticle.title}
              </h1>
              <strong className={clsx(maitree.className)}>
                {featuredArticle.subtitle}
              </strong>
              <span
                className={clsx(maitree.className, "text-xs mt-2 opacity-70")}
              >{`Por ${featuredArticle.author.name}`}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-8 items-stretch">
          <div className="w-9/12">
            <h2 className="text-primary-500 text-2xl border-b py-4 mb-4">
              Latest news
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
