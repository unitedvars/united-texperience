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

export default async function Home({
  params: { lang },
}: {
  params: {
    lang: "en" | "es";
  };
}) {
  const { featuredArticle } = await sanityFetch<any>({
    query: HOME_QUERY,
    params: {
      language: lang,
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
    },
  });

  const hotnews_articles = await sanityFetch<any[]>({
    query: ARTICLES_BY_CATEGORY,
    params: {
      category: "hot-news",
      language: lang,
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

        {stats.length > 0 && (
          <div className="flex-col lg:flex-row flex items-stretch">
            <div className="w-full lg:w-full bg-white rounded-lg p-4 pb-2">
              <h2
                className={clsx(
                  "text-primary-500 text-2xl border-b pb-4 mb-4",
                  orbitron.className
                )}
              >
                Stats & Numbers
              </h2>

              <div className="overflow-x-scroll pb-2">
                <ul className="flex flex-row gap-8">
                  {stats.map((stat: Stats) => (
                    <li key={stat._id} className="w-[500px]">
                      <StatThumbnail
                        imageUrl={stat.mainImage}
                        title={stat.title}
                        description={stat.description}
                        className={"min-h-[124px]"}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

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
                    index > 0 &&
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

        {events.length > 0 && (
          <div
            className="flex-col lg:flex-row flex items-stretch"
            id="events-and-training"
          >
            <div className="w-full lg:w-full bg-white rounded-lg p-4">
              <h2
                className={clsx(
                  "text-primary-500 text-2xl border-b pb-4 mb-4",
                  orbitron.className
                )}
              >
                Events & Trainings
              </h2>

              <div className="overflow-x-scroll overflow-y-hidden">
                <ul className="flex flex-row gap-8">
                  {events.map((event: Events) => (
                    <li key={event._id} className="w-[500px]">
                      <EventsThumbnail
                        url={event.url}
                        imageUrl={event.mainImage}
                        title={event.title}
                        subtitle={event.subtitle}
                        className={"min-h-[124px]"}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

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
        <Footer />
      </main>
    </>
  );
}
