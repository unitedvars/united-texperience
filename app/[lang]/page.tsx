import { sanityFetch } from "@/sanity/lib/fetch";
import Navbar from "../components/common/Navbar";
import {
  CATEGORIES_QUERY,
  HOME_QUERY,
  ARTICLES,
  STATS,
  ARTICLES_BY_CATEGORY,
  EVENTS,
} from "@/sanity/lib/queries";

import ArticleThumbnail from "../components/common/ArticleThumbnail";
import EventsThumbnail from "../components/common/EventsThumbnail";
import StatThumbnail from "../components/common/StatThumbnail";
import { Article, Category, Stats, Events } from "@/types";
import clsx from "clsx";
import { orbitron } from "@/utils/fonts";
import Link from "next/link";
import LargeArticle from "../components/LargeArticle";
import Footer from "../components/common/Footer";
import StatsScroller from "./components/StatsScroller";
import EventsScroller from "./components/EventsScroller";

export default async function Home(props: any) {
  const { lang } = props.params;
  const { featuredArticle } = await sanityFetch<any>({
    query: HOME_QUERY,
    params: {
      language: lang,
      searchParam: null,
    },
  });

  const articles = await sanityFetch<any>({
    query: ARTICLES,
    params: {
      trim_start: 0,
      trim_end: 6,
      editorial: null,
      author: null,
      dateFrom: null,
      dateTo: null,
      language: lang,
      searchParam: null,
    },
  });

  const stats = await sanityFetch<any>({
    query: STATS,
    params: {
      trim_start: 0,
      trim_end: 6,
      language: lang,
    },
  });

  const events = await sanityFetch<any>({
    query: EVENTS,
    params: {
      trim_start: 0,
      trim_end: 100,
      dateFrom: null,
      dateTo: null,
      searchParam: null,
      language: lang,
    },
  });

  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  const techpoint_articles = await sanityFetch<any[]>({
    query: ARTICLES_BY_CATEGORY,
    params: {
      category: "techpoint",
      language: lang,
      searchParam: null,
    },
  });

  const hotnews_articles = await sanityFetch<any[]>({
    query: ARTICLES_BY_CATEGORY,
    params: {
      category: "hot-news",
      language: lang,
      searchParam: null,
    },
  });

  return (
    <>
      <header className="flex flex-col">
        <Navbar categories={categories} />
      </header>

      <main className="flex flex-col min-h-screen pb-16 default-box gap-8">
        <Link
          className="flex"
          href={`/${lang}/${featuredArticle.category.slug.current}/${featuredArticle.slug.current}`}
        >
          <LargeArticle article={featuredArticle} />
        </Link>

        {stats.length > 0 && <StatsScroller stats={stats} />}

        <div className="flex-col lg:flex-row flex gap-4 items-stretch">
          <div className="w-full lg:w-9/12 bg-white rounded-lg p-4">
            <h2
              className={clsx(
                "text-primary-500 text-2xl border-b pb-4 mb-4",
                orbitron.className
              )}
            >
              Hot News
            </h2>
            <div>
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-rows-2 gap-8 sm:gap-x-3 sm:gap-y-16">
                {hotnews_articles.map(
                  (article: Article, index: number) =>
                    index >= 0 &&
                    index < 7 && (
                      <li key={article._id} className="gap-2 w-full">
                        <ArticleThumbnail
                          imageUrl={article.mainImage}
                          title={article.title}
                          category={article.category}
                          author={article.author}
                          editorial={article.editorial?.name}
                          url={`/${article.category.slug.current}/${article.slug.current}`}
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
                    index < 5 && (
                      <li key={article._id}>
                        <ArticleThumbnail
                          title={article.title}
                          category={article.category}
                          author={article.author}
                          editorial={article.editorial?.name}
                          titleSize={"large"}
                          className={"min-h-[124px]"}
                          url={`/${article.category.slug.current}/${article.slug.current}`}
                        />
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>

        {events.length > 0 && <EventsScroller events={events} />}

        <div className="flex-col lg:flex-row flex items-stretch">
          <div className="w-full lg:w-full bg-white rounded-lg p-4">
            <h2
              className={clsx(
                "text-primary-500 text-2xl border-b pb-4 mb-4",
                orbitron.className
              )}
            >
              Techpoint
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="md:col-span-2 lg:col-span-3">
                <Link
                  className="h-full block"
                  href={`/${lang}/${techpoint_articles[0].category.slug.current}/${techpoint_articles[0].slug.current}`}
                >
                  <LargeArticle article={techpoint_articles[0]} />
                </Link>
              </div>
              <div>
                <ul className="flex flex-col gap-8">
                  {techpoint_articles.map(
                    (article: Article, index: number) =>
                      index > 0 &&
                      index < 3 && (
                        <li key={article._id}>
                          <ArticleThumbnail
                            imageUrl={article.mainImage}
                            title={article.title}
                            category={article.category}
                            author={article.author}
                            editorial={article.editorial?.name}
                            titleSize={"large"}
                            className={"min-h-[124px]"}
                            url={`/${article.category.slug.current}/${article.slug.current}`}
                          />
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer lang={lang} />
      </main>
    </>
  );
}
