import { sanityFetch } from "@/sanity/lib/fetch";
import Image from "next/image";
import {
  ALL_COUNT,
  ARTICLE,
  ARTICLES,
  CATEGORIES_QUERY,
} from "@/sanity/lib/queries";
import Navbar from "@/app/components/common/Navbar";
import { Category, Article as ArticleType, Lang } from "@/types";
import Footer from "@/app/components/common/Footer";
import { orbitron } from "@/utils/fonts";
import clsx from "clsx";
import ArticleThumbnail from "@/app/components/common/ArticleThumbnail";
import Link from "next/link";
import DefaultArticleLayout from "@/app/components/DefaultArticleLayout";
import HotNewsArticleLayout from "@/app/components/HotNewsArticleLayout";
import { formatDate, getCategoryName } from "@/utils/utils";

const Article = async ({
  params,
}: {
  params: { id: string; lang: 'en' | 'es' };
}) => {
  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  const article = await sanityFetch<any>({
    query: ARTICLE,
    params: {
      slug: params.id,
      language: params.lang,
    },
  });

  const other_articles = await sanityFetch<any>({
    query: ARTICLES,
    params: {
      slug: params.id,
      trim_start: 0,
      trim_end: 4,
      editorial: null,
      author: null,
      dateFrom: null,
      dateTo: null,
      searchParam: null,
      language: params.lang,
    },
  });

  const countAll = await sanityFetch<number>({
    query: ALL_COUNT,
    params: {
      editorial: null,
      author: null,
      dateFrom: null,
      dateTo: null,
      searchParam: null,
      language: params.lang,
    },
  });

  const randomIntFromInterval = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const randomArticlePos = randomIntFromInterval(0, countAll);

  const randomArticles = await sanityFetch<ArticleType[]>({
    query: ARTICLES,
    params: {
      trim_start: randomArticlePos - 1,
      trim_end: randomArticlePos,
      editorial: null,
      author: null,
      dateFrom: null,
      dateTo: null,
      language: params.lang,
      searchParam: null,
    },
  });

  const randomArticle = randomArticles[0];

  return (
    <div className="pb-10">
      <header className="flex flex-col">
        <Navbar categories={categories} showCategoryBar={false} />
      </header>
      <main>
        {article.category.slug.current === "hot-news" ? (
          <HotNewsArticleLayout article={article} />
        ) : (
          <DefaultArticleLayout article={article} />
        )}

        <div className="default-box flex flex-col gap-6">
          <div className="w-full bg-white rounded-lg p-4">
            <h2
              className={clsx(
                orbitron.className,
                "text-primary-500 text-2xl pb-4 mb-4 border-b"
              )}
            >
              What to read next
            </h2>

            {other_articles && (
              <div>
                <ul className="flex flex-col gap-4 lg:flex-row">
                  {other_articles.map((article: ArticleType) => (
                    <li key={article._id} className="lg:w-1/4">
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
                  ))}
                </ul>
              </div>
            )}
          </div>
          {randomArticle && (
            <Link
              href={`/${params.lang}/${randomArticle.category.slug.current}/${randomArticle.slug.current}`}
            >
              <div className="w-full bg-white rounded-lg p-4 flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/2 relative min-h-96">
                  <Image
                    src={randomArticle.mainImage}
                    alt=""
                    fill
                    className="object-cover rounded-lg xl:rounded-xl"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="w-full py-4 px-0 lg:p-4 flex flex-col xl:rounded-tr-lg xl:rounded-bl-lg group">
                    <div
                      className={clsx(
                        "uppercase text-primary-500 text-sm mb-4 flex gap-1",
                        orbitron.className
                      )}
                    >
                      <span>
                        {getCategoryName(
                          randomArticle.category,
                          params.lang as Lang
                        )}
                      </span>
                      <span className="text-gray-400">-</span>
                      <span className="text-gray-600">
                        {formatDate(randomArticle._createdAt, params.lang)}
                      </span>
                    </div>
                    <h1
                      className={clsx(
                        "text-2xl xl:text-5xl leading-none mb-4 group-hover:underline"
                      )}
                    >
                      {randomArticle.title}
                    </h1>
                    <strong className="font-thin line-clamp-2">
                      {randomArticle.subtitle}
                    </strong>
                    <div className="flex flex-row gap-2 justify-between md:justify-normal md:items-center mt-2">
                      <div
                        className={clsx("text-xs opacity-70")}
                      >{`By ${randomArticle.author.name}`}</div>
                      <div className="h-3 w-px bg-gray-300 hidden md:block" />
                      {randomArticle.author.role && (
                        <div
                          className={clsx("text-xs opacity-70 hidden md:block")}
                        >
                          {randomArticle.author.role.name}
                        </div>
                      )}
                      <div className="h-3 w-px bg-gray-300 hidden md:block" />
                      {randomArticle.editorial && (
                        <div className={clsx("text-xs text-primary-800")}>
                          {randomArticle.editorial.name}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          <div className="w-full bg-white rounded-lg p-4">
            <Footer lang={params.lang} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Article;
