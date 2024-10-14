import { orbitron } from "@/utils/fonts";
import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { Article } from "@/types";
import Link from "next/link";

const HotNewsArticleLayout = ({ article }: { article: Article }) => {
  return (
    <article className="flex flex-col items-center w-full default-box pb-6 md:pb-12 md:my-16">
      <div className="flex flex-col-reverse gap-3 md:flex-row md:gap-6">
        <div className="bg-white p-4 rounded-lg grow md:max-w-[50%]">
          <div
            className={clsx(
              "uppercase text-primary-500 text-sm mb-4 flex gap-1",
              orbitron.className
            )}
          >
            <span>{article.category.name}</span>
            <span className="text-gray-400">-</span>
            <span className="text-gray-600">
              {moment(article._createdAt).format(`DD-MM-YY`)}
            </span>
          </div>

          <h1 className={clsx("text-2xl xl:text-[48px] leading-none mb-4")}>
            {article.title}
          </h1>
          <div className={clsx("py-0 [&>p]:my-4 [&>h1]:text-xl portable-text")}>
            <PortableText
              value={article.content}
              components={{
                types: {
                  slug: (props) => (
                    <p className="youtube-embed">
                      Read full article{" "}
                      <Link href={props.value.current}>here</Link>
                    </p>
                  ),
                },
              }}
            />
          </div>
        </div>

        <div className="relative w-full md:w-auto min-h-64 md:min-w-[50%]">
          <Image
            src={article.mainImage}
            alt=""
            fill
            className="object-cover rounded-lg xl:rounded-xl w-full"
          />
        </div>
      </div>
    </article>
  );
};

export default HotNewsArticleLayout;
