"use client";

import clsx from "clsx";
import { PortableText } from "next-sanity";
import MotionWrapper from "./common/MotionWrapper";
import LargeArticle from "./LargeArticle";
import { Article } from "@/types";
import ReactPlayer from "react-player";
import Image from "next/image";
import Link from "next/link";

const DefaultArticleLayout = ({ article }: { article: Article }) => {
  return (
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
        <div
          className={clsx(
            "py-20 small-box [&>p]:my-4 [&>h1]:text-xl portable-text"
          )}
        >
          <PortableText
            value={article.content}
            components={{
              types: {
                image: (props) => (
                  <div className="image">
                    <Image src={props.value.asset.url} alt="Shadow War" fill />
                  </div>
                ),
                slug: (props) => (
                  <div className="youtube-embed">
                    <ReactPlayer url={props.value.current} />
                  </div>
                ),
              },
            }}
          />
        </div>
      </MotionWrapper>
    </article>
  );
};

export default DefaultArticleLayout;
