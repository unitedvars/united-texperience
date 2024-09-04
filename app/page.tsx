import { sanityFetch } from "@/sanity/lib/fetch";
import Navbar from "./components/common/Navbar";
import {
  CATEGORIES_QUERY,
  HOME_QUERY,
  ARTICLES,
  ARTICLES_BY_CATEGORY,
} from "@/sanity/lib/queries";

import ArticleThumbnail from "./components/common/ArticleThumbnail";
import { Article, Category } from "@/types";
import clsx from "clsx";
import { archivo, maitree, orbitron } from "@/utils/fonts";
import Link from "next/link";
import LargeArticle from "./components/LargeArticle";
import Button from "./components/common/Button";
import Footer from "./components/common/Footer";

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

  const techpoint_articles = await sanityFetch<any[]>({
    query: ARTICLES_BY_CATEGORY,
    params: {
      category: "techpoint",
    },
  });

  const whats_coming_articles = await sanityFetch<any[]>({
    query: ARTICLES_BY_CATEGORY,
    params: {
      category: "what-s-coming-up",
    },
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
              Latest
            </h2>
            <div>
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 grid-rows-6 sm:grid-rows-3 xl:grid-rows-2 gap-8 sm:gap-x-3 sm:gap-y-16">
                {articles.map(
                  (article: Article, index: number) =>
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
                {articles.map(
                  (article: Article, index: number) =>
                    index < 4 && (
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
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-col lg:flex-row flex mt-8 items-stretch">
          <div className="w-full lg:w-full bg-white rounded-lg p-4">
            <h2
              className={clsx(
                "text-primary-500 text-2xl border-b pb-4 mb-4",
                orbitron.className
              )}
            >
              Techpoint
            </h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-3">
                <LargeArticle article={techpoint_articles[0]} />
              </div>
              <div>
                <ul className="flex flex-col gap-8">
                  {techpoint_articles.map(
                    (article: Article, index: number) =>
                      index >= 0 &&
                      index < 3 && (
                        <li key={article._id}>
                          <ArticleThumbnail
                            imageUrl={article.mainImage}
                            title={article.title}
                            category={article.category.name}
                            author={article.author.name}
                            titleSize={"large"}
                            className={"min-h-[124px]"}
                            url={`/articles/${article.slug.current}`}
                          />
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col lg:flex-row flex mt-8 items-stretch">
          <div className="w-full bg-white rounded-lg p-8 flex gap-4">
            <div className="w-7/12">
              <strong
                className={`text-6xl font-medium mb-3 inline-block ${archivo.className}`}
              >
                Stronger than One
              </strong>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur. In sed sed orci rhoncus
                tempus. Lorem ipsum dolor sit amet consectetur. In sed sed orci
                rhoncus tempus.
              </p>
            </div>
            <div className="w-5/12 h-full">
              <div className="flex items-center gap-4 justify-end h-full">
                <input
                  type="text"
                  className="border border-primary-600 h-12 rounded-md grow px-4"
                  placeholder="Please enter your email..."
                />
                <Button className={"hidden lg:block"}>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col lg:flex-row flex gap-4 mt-8 items-stretch">
          <div className="w-full bg-white rounded-lg p-4">
            <h2
              className={clsx(
                "text-primary-500 text-2xl border-b pb-4 mb-4",
                orbitron.className
              )}
            >
              What&apos;s coming up
            </h2>
            <div>
              <ul className="grid sm:grid-cols-2 md:grid-cols-4 grid-rows-6 sm:grid-rows-3 xl:grid-rows-2 gap-8 sm:gap-x-3 sm:gap-y-16">
                {whats_coming_articles.map(
                  (article: Article, index: number) =>
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
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
