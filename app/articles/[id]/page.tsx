import { sanityFetch } from "@/sanity/lib/fetch";
import { PortableText } from "next-sanity";
import Image from "next/image";
import {
  ALL_COUNT,
  ARTICLE,
  ARTICLES,
  CATEGORIES_QUERY,
} from "@/sanity/lib/queries";
import Navbar from "@/app/components/common/Navbar";
import LargeArticle from "@/app/components/LargeArticle";
import { Category, Article as ArticleType } from "@/types";
import MotionWrapper from "@/app/components/common/MotionWrapper";
import Footer from "@/app/components/common/Footer";
import { orbitron } from "@/utils/fonts";
import clsx from "clsx";
import ArticleThumbnail from "@/app/components/common/ArticleThumbnail";
import moment from "moment";
import Link from "next/link";

const Article = async ({ params }: { params: { id: string } }) => {
  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  const article = await sanityFetch<any>({
    query: ARTICLE,
    params: {
      slug: params.id,
    },
  });

  const other_articles = await sanityFetch<any>({
    query: ARTICLES,
    params: {
      slug: params.id,
      trim_start: 0,
      trim_end: 4,
    },
  });

  const countAll = await sanityFetch<number>({
    query: ALL_COUNT,
  });

  const randomIntFromInterval = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const randomArticlePos = randomIntFromInterval(0, countAll);

  const randomArticles = await sanityFetch<ArticleType[]>({
    query: ARTICLES,
    params: {
      trim_start: randomArticlePos - 1,
      trim_end: randomArticlePos,
    },
  });

  const randomArticle = randomArticles[0];

  return (
    <div className="pb-10">
      <header className="flex flex-col">
        <Navbar categories={categories} showCategoryBar={false} />
      </header>
      <main>
        <article className="flex flex-col items-center w-full default-box pb-6 md:pb-12">
          <LargeArticle article={article} clickable={false} />
          <MotionWrapper
            initial={{ transform: "translateY(100px)", opacity: 0 }}
            animate={{
              transform: "translateY(0px)",
              opacity: 1,
            }}
            transition={{
              type: "spring",
              ease: "easeOut",
              bounce: 0,
              delay: 0.5,
            }}
          >
            <div className="py-20 small-box [&>p]:my-4 [&>h1]:text-xl">
              <PortableText value={article.content} />
            </div>
          </MotionWrapper>
        </article>
        <Link href={`/articles/${randomArticle.slug.current}`}>
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
              <div>
                <ul className="flex flex-col gap-4 lg:flex-row">
                  {other_articles.map((article: ArticleType) => (
                    <li key={article._id} className="w-1/4">
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
                  ))}
                </ul>
              </div>
            </div>
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
                    <span>{randomArticle.category.name}</span>
                    <span className="text-gray-400">-</span>
                    <span className="text-gray-600">
                      {moment(randomArticle._createdAt).format(`YY-MM-DD`)}
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
                    <div className={clsx("text-xs opacity-70 hidden md:block")}>
                      {randomArticle.author.role.name}
                    </div>
                    <div className="h-3 w-px bg-gray-300 hidden md:block" />
                    <div className={clsx("text-xs opacity-70 hidden md:block")}>
                      {randomArticle.author.institution.name}
                    </div>
                    <div className="h-3 w-px bg-gray-300 hidden md:block" />
                    <div className={clsx("text-xs text-primary-800")}>
                      {moment(randomArticle._createdAt).fromNow()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-4">
              <Footer />
            </div>
          </div>
        </Link>
      </main>
    </div>
  );
};

export default Article;
