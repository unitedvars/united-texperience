"use client";

import { Article } from "@/types";
import ArticleThumbnail from "./ArticleThumbnail";
import { Suspense, useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import clsx from "clsx";
import client from "@/sanity/lib/client";
import { groq } from "next-sanity";

const ArticleList = ({
  articles,
  totalPages,
}: {
  articles: Article[];
  totalPages: number;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const page = parseInt(searchParams.get("page") as string);

  const [posts, setPosts] = useState([]);

  const editorial = searchParams.get("editorial");
  const author = searchParams.get("author");
  const dateFrom = searchParams.get("dateFrom");
  const dateTo = searchParams.get("dateTo");

  useEffect(() => {
    // Build GROQ query dynamically based on available parameters
    let filter = '*[_type == "article"]';
    let filters = [];

    if (author) filters.push(`author == "${author}"`);
    if (editorial) filters.push(`editorial == "${editorial}"`);
    if (dateFrom) filters.push(`dateFrom == "${dateFrom}"`);
    if (dateTo) filters.push(`dateFrom == "${dateTo}"`);

    if (filters.length) {
      filter += ` && ${filters.join(" && ")}`;
    }

    // Fetch filtered posts from Sanity
    fetch("/api/articles/" + `${filter} | order(publishedAt desc)`).then(
      (data: any) => {
        console.log(data);
        setPosts(data);
      }
    );
  }, [editorial, author, dateFrom, dateTo]);

  return (
    <Suspense>
      <div className="pt-8">
        <ul className="grid gap-y-8 w-full max-w-[32rem] mx-auto">
          {articles?.map((article: Article) => (
            <li key={article._id} className="gap-2 w-full h flex flex-col">
              <div className="grow rounded-md bg-white p-4">
                <ArticleThumbnail
                  showAuthorDetails
                  imageUrl={article.mainImage}
                  title={article.title}
                  category={article.category}
                  author={article.author}
                  editorial={article.editorial?.name}
                  url={`${article.category.slug.current}/${article.slug.current}`}
                  subtitle={article.subtitle}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className={clsx("w-full flex items-center justify-center py-8")}>
          {page && totalPages && (
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, page) => {
                router.push(`${pathname}?page=${page}`);
              }}
            />
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default ArticleList;
