"use client";

import { Article } from "@/types";
import ArticleThumbnail from "./ArticleThumbnail";
import { Suspense, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";

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

  console.log(totalPages);

  return (
    <Suspense>
      <div className="pt-8">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 grid-rows-6 sm:grid-rows-3 xl:grid-rows-none gap-8 sm:gap-x-3 sm:gap-y-16">
          {articles?.map((article: Article) => (
            <li key={article._id} className="gap-2 w-full h flex flex-col">
              <div className="grow rounded-md bg-white p-4">
                <ArticleThumbnail
                  imageUrl={article.mainImage}
                  title={article.title}
                  category={article.category.name}
                  author={article.author.name}
                  url={`/articles/${article.slug.current}`}
                  subtitle={article.subtitle}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full flex items-center justify-center py-8">
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
