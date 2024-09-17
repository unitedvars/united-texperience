"use client";

import clsx from "clsx";
import Image from "next/image";
import moment from "moment";
import { Article } from "@/types";
import { orbitron } from "@/utils/fonts";

import { motion } from "framer-motion";

const LargeArticle = ({
  article,
  clickable = true,
}: {
  article: Article;
  clickable?: boolean;
}) => {
  return (
    <motion.div
      initial={{ transform: "translateY(100px)", opacity: 0 }}
      animate={{
        transform: "translateY(0px)",
        opacity: 1,
      }}
      transition={{
        type: "spring",
        ease: "easeOut",
        bounce: 0,
      }}
      className="grow bg-primary-200 h-[611px] relative rounded-xl w-full group"
    >
      <Image
        src={article.mainImage}
        alt=""
        fill
        className="object-cover rounded-lg xl:rounded-xl"
      />
      <div className="w-full rounded-b bg-white absolute z-10 xl:w-[882px] bottom-0 left-0 py-4 px-0 lg:p-4 flex flex-col xl:rounded-tr-lg xl:rounded-bl-lg">
        <div
          className={clsx(
            "uppercase text-primary-500 text-sm mb-4 flex gap-1",
            orbitron.className
          )}
        >
          <span>{article.category.name}</span>
          <span className="text-gray-400">-</span>
          <span className="text-gray-600">
            {moment(article._createdAt).format(`YY-MM-DD`)}
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
          <div className={clsx("text-xs opacity-70 hidden md:block")}>
            {article.author.role.name}
          </div>
          <div className="h-3 w-px bg-gray-300 hidden md:block" />
          <div className={clsx("text-xs opacity-70 hidden md:block")}>
            {article.author.institution.name}
          </div>
          <div className="h-3 w-px bg-gray-300 hidden md:block" />
          <div className={clsx("text-xs text-primary-800")}>
            {moment(article._createdAt).fromNow()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LargeArticle;
