"use client";

import clsx from "clsx";
import { PortableText } from "next-sanity";
import MotionWrapper from "./common/MotionWrapper";
import DefaultArticleHeader from "./DefaultArticleHeader";
import { Article } from "@/types";
import ReactPlayer from "react-player";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

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
            components={{
              types: {
                image: (props) => {
                  return (
                    <div className="relative aspect-video w-full bg-gray-200 rounded-md overflow-hidden">
                      <Image
                        src={props.value.asset.url}
                        alt="United Texperience"
                        fill
                        className="object-contain"
                      />
                    </div>
                  );
                },
                slug: (props) => (
                  <div className="youtube-embed">
                    <ReactPlayer url={props.value.current} />
                  </div>
                ),
                quote: (props) => {
                  return (
                    <figure>
                      <blockquote className="bg-gray-200 p-6 rounded-md text-xl leading-relaxed italic">
                        <PortableText value={props.value.text} />{" "}
                      </blockquote>
                    </figure>
                  );
                },
              },
            }}
          />
        </div>
      </MotionWrapper>
    </article>
  );
};

export default DefaultArticleLayout;
