"use client";

import Image from "next/image";
import clsx from "clsx";
import { Article } from "../types";
import { useState } from "react";

const HeroArticleView = ({ articles }: { articles: Article[] }) => {
  const [hoveredArticle, setHoveredArticle] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(0);

  return (
    <div className="grow relative max-w-7xl mx-auto overflow-hidden rounded-xl shadow-2xl flex border border-gray-300">
      <div className="w-2/3 flex relative bg-black">
        {articles.map((article, idx) => {
          return (
            <div
              className={clsx(
                "absolute w-full h-full transition-all duration-300 opacity-0 ",
                hoveredArticle === idx && "w-10/12 opacity-100"
              )}
              key={idx}
            >
              <Image
                src={article.mainImage}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="bg-white flex-col right-0 h-full w-1/3">
        <ul className="flex flex-col h-full">
          {articles.map((article: any, idx: any) => {
            return (
              <li
                key={article.slug}
                className={clsx(
                  "flex flex-col grow h-1/3 p-4 border-y first:border-y-0 last:border-y-0  bg-gray-100 cursor-pointer hover:bg-gray-50 transition-all",
                  selectedArticle == idx &&
                    "border-l-4 bg-white border-l-yellow-400"
                )}
                onMouseEnter={() => {
                  setHoveredArticle(idx);
                }}
                onClick={() => {
                  setSelectedArticle(idx);
                }}
              >
                <span
                  className={clsx("uppercase text-blue-500 text-[10px] mb-1")}
                >
                  {article.category.name}
                </span>
                <h1
                  className={clsx("text-2xl font-semibold mb-2 leading-tight")}
                >
                  {article.title}
                </h1>
                <p className={"text-xl font-thin text-gray-500"}>
                  {article.subtitle}
                </p>
                <span
                  className={clsx("text-sm mt-auto opacity-70")}
                >{`Por ${article.author.name}`}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeroArticleView;
