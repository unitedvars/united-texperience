"use client";

import clsx from "clsx";
import Image from "next/image";
import { maitree, orbitron } from "@/utils/fonts";
import Link from "next/link";

import { motion } from "framer-motion";
import { Author, Category, Lang } from "@/types";
import { useParams } from "next/navigation";
import { formatDate, getCategoryName } from "@/utils/utils";

interface ArticleThumbnailProps {
  title: string;
  category: Category;
  author: Author;
  editorial: string;
  imageUrl?: string;
  titleSize?: "large";
  className?: string;
  url?: string;
  subtitle?: string;
  showAuthorDetails?: boolean;
  releaseDate: string;
}

const ArticleThumbnail = ({
  showAuthorDetails = false,
  imageUrl,
  title,
  category,
  author,
  editorial,
  titleSize,
  className,
  url,
  subtitle,
  releaseDate,
}: ArticleThumbnailProps) => {
  const { lang } = useParams();
  return (
    <Link href={`/${lang}/${url}` || "#"} className="group">
      <div className={clsx(className, "flex gap-2 flex-col group")}>
        {imageUrl && (
          <div className="w-full min-w-[150px] h-[220px] 2xl:h-[150px] relative rounded-md overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover ph-image"
            />
          </div>
        )}

        <div className="flex flex-col pr-1">
          <div
            className={clsx(
              "uppercase text-primary-500 text-sm mb-1 flex items-center gap-1",
              orbitron.className
            )}>
              <strong
                className={clsx(
                  "uppercase text-primary-500 text-xs font-medium",
                  orbitron.className
                )}
              >
                {getCategoryName(category, lang as Lang)}
              </strong>
              
              
              <span className="text-gray-400 text-xs">-</span>
              <span className="text-gray-600 text-xs">
                {formatDate(releaseDate, lang as string)}
              </span>
          </div>
          <h3
            className={clsx(  
              "text-lg leading-[22px] bg-no-repeat transition-all duration-400 hover:bg-[length:100%_0.1em,0_0.1em] hover:bg-position-[100%_100%,0_100%] group-hover:underline mb-3",
              titleSize === "large" && "text-[26px] leading-[26px] "
            )}
          >
            {title}
          </h3>

          <p className="text-sm text-gray-600">{subtitle}</p>

          <div className="flex gap-2 items-center">
            <span
              className={clsx("block text-xs opacity-70", maitree.className)}
            >{`By ${author.name}`}</span>

            {showAuthorDetails && (
              <>
                <span className="text-xs opacity-50">|</span>
                {author.role && (
                  <span
                    className={clsx(
                      "block text-xs opacity-70",
                      maitree.className
                    )}
                  >{`${author.role.name}`}</span>
                )}
              </>
            )}
            {editorial && (
              <>
                <span className="text-xs opacity-50´">|</span>

                <span
                  className={clsx(
                    "text-xs text-primary-800",
                    maitree.className
                  )}
                >
                  {editorial}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleThumbnail;
