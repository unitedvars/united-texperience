"use client";

import clsx from "clsx";
import Image from "next/image";
import { maitree, orbitron } from "@/utils/fonts";
import Link from "next/link";

import { motion } from "framer-motion";

interface ArticleThumbnailProps {
  title: string;
  category: string;
  author: string;
  imageUrl?: string;
  titleSize?: "large";
  className?: string;
  url?: string;
  subtitle?: string;
}

const ArticleThumbnail = ({
  imageUrl,
  title,
  category,
  author,
  titleSize,
  className,
  url,
  subtitle,
}: ArticleThumbnailProps) => {
  return (
    <Link href={url || "#"} className="group">
      <motion.div
        initial={{ transform: "translateY(40px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0)", opacity: 1 }}
        viewport={{
          once: true,
          margin: "-100px 0px",
        }}
      >
        <div className={clsx(className, "flex gap-2 flex-col group")}>
          {imageUrl && (
            <div className="w-full min-w-[150px] h-[220px] 2xl:h-[150px] relative rounded-md overflow-hidden">
              <Image src={imageUrl} alt={title} fill className="object-cover" />
            </div>
          )}
          <div className="flex flex-col pr-1 gap-2">
            <strong
              className={clsx(
                "uppercase text-primary-500 text-xs font-medium",
                orbitron.className
              )}
            >
              {category}
            </strong>
            <h3
              className={clsx(
                "text-lg leading-[22px] bg-no-repeat transition-all duration-400 hover:bg-[length:100%_0.1em,0_0.1em] hover:bg-position-[100%_100%,0_100%] group-hover:underline",
                titleSize === "large" && "text-[26px] leading-[26px] "
              )}
            >
              {title}
            </h3>
            <p className="text-sm text-gray-600">{subtitle}</p>
            <span
              className={clsx("block text-xs opacity-70", maitree.className)}
            >{`By ${author}`}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ArticleThumbnail;
