"use client";

import clsx from "clsx";
import Image from "next/image";
import { Article, Lang } from "@/types";
import { orbitron } from "@/utils/fonts";
import { motion } from "framer-motion";
import { formatDate, getCategoryName } from "@/utils/utils";
import { useParams } from "next/navigation";

const LargeArticle = ({
  article,
  clickable = true,
}: {
  article: Article;
  clickable?: boolean;
}) => {
  const { lang } = useParams();
  return (
    <div className="grow bg-primary-200 min-h-[611px] h-full relative rounded-xl w-full group">
      {article.mainImage && (
        <Image
          src={article.mainImage}
          alt={article.title}
          fill
          className="object-cover rounded-lg xl:rounded-xl ph-image"
        />
      )}

      <div className="w-full bg-white absolute z-10 xl:w-[882px] bottom-0 left-0 p-4 lg:p-4 flex flex-col xl:rounded-tr-lg xl:rounded-bl-lg">
        <div
          className={clsx(
            "uppercase text-primary-500 text-sm mb-4 flex gap-1",
            orbitron.className
          )}
        >
          <span>{getCategoryName(article.category, lang as Lang)}</span>
          <span className="text-gray-400">-</span>
          <span className="text-gray-600">
            {formatDate(article.releaseDate, lang as string)}
          </span>
        </div>
        <h1
          className={clsx(
            "text-2xl xl:text-[56px] leading-none mb-4",
            clickable && "group-hover:underline"
          )}
        >
          {article.title}
        </h1>
        <strong className="font-thin line-clamp-2">{article.subtitle}</strong>
        <div className="flex flex-row gap-2 justify-between md:justify-normal md:items-center mt-2">
          <div
            className={clsx("text-xs opacity-70")}
          >{`By ${article.author.name}`}</div>
          <div className="h-3 w-px bg-gray-300 hidden md:block" />
          {article.author.role && (
            <div className={clsx("text-xs opacity-70 hidden md:block")}>
              {article.author.role.name}
            </div>
          )}
          <div className="h-3 w-px bg-gray-300 hidden md:block" />
          <div className={clsx("text-xs text-primary-800")}>
            {article.editorial.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeArticle;
