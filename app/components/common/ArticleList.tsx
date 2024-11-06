"use client";

import { Article } from "@/types";
import ArticleThumbnail from "./ArticleThumbnail";
import { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import clsx from "clsx";
import { motion } from "framer-motion";
import { archivo, maitree } from "@/utils/fonts";

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

  return (
    <Suspense>
      {articles.length > 0 ? (
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
      ) : (
        <motion.div
          initial={{ transform: "translateY(20px)" }}
          animate={{
            transform: "translateY(0px)",
          }}
          transition={{
            type: "spring",
            ease: "easeOut",
            bounce: 0,
          }}
          className="h-80 flex items-center justify-center"
        >
          <strong
            className={clsx("text-1xl font-light", archivo.className)}
          >

            No articles found...
          </strong>
        </motion.div>
      )}
    </Suspense>
  );
};

export default ArticleList;
