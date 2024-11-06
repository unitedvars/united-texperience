"use client";

import clsx from "clsx";
import { PortableText } from "next-sanity";
import MotionWrapper from "./common/MotionWrapper";
import DefaultArticleHeader from "./DefaultArticleHeader";
import { Article } from "@/types";
import { portableTextComponents } from "@/sanity/lib/portableText";

const DefaultArticleLayout = ({ article }: { article: Article }) => {
  return (
    <article className="flex flex-col items-center w-full default-box pb-6 md:pb-12">
      <DefaultArticleHeader article={article} clickable={false} />
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
        <div
          className={clsx(
            "py-20 small-box [&>p]:my-4 [&>h1]:text-xl portable-text"
          )}
        >
          <PortableText
            value={article.content}
            components={portableTextComponents}
          />
        </div>
      </MotionWrapper>
    </article>
  );
};

export default DefaultArticleLayout;
