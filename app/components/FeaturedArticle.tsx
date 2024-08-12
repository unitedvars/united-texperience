import Image from "next/image";
import clsx from "clsx";
import { Article } from "@/types";
import { orbitron } from "@/utils/fonts";
import Link from "next/link";
import moment from "moment";

const article = ({ article }: { article: Article }) => {
  console.log(article);
  return (
    <Link className="flex" href={`/articles/${article.slug.current}`}>
      <div className="grow bg-primary-200 h-[611px] relative rounded-lg overflow-hidden">
        <Image src={article.mainImage} alt="" fill className="object-cover" />
        <div className="bg-white absolute z-10 w-[882px] bottom-0 left-0 p-4 flex flex-col rounded-tr-lg">
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
          <h1 className={clsx("text-[56px] leading-none mb-4")}>
            {article.title}
          </h1>
          <strong className="font-thin">{article.subtitle}</strong>
          <div className="flex gap-2 items-center mt-2">
            <div
              className={clsx("text-xs opacity-70")}
            >{`By ${article.author.name}`}</div>
            <div className="h-3 w-px bg-gray-300" />
            <div className={clsx("text-xs opacity-70")}>
              {article.author.role.name}
            </div>
            <div className="h-3 w-px bg-gray-300" />
            <div className={clsx("text-xs opacity-70")}>
              {article.author.institution.name}
            </div>
            <div className="h-3 w-px bg-gray-300" />
            <div className={clsx("text-xs text-primary-800")}>
              {moment(article._createdAt).fromNow()}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default article;
