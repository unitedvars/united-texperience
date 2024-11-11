"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";

interface ArticleThumbnailProps {
  title: string;
  imageUrl?: string;
  titleSize?: "large";
  className?: string;
  url?: string;
  subtitle?: string;
}

const EventThumbnail = ({
  imageUrl,
  title,
  titleSize,
  className,
  url,
  subtitle,
}: ArticleThumbnailProps) => {
  return (
    <Link href={url || "#"} className="group" target="_blank">
      <div>
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

          <div className="flex flex-col pr-1 gap-2">
            <h3
              className={clsx(
                "text-lg leading-[22px] bg-no-repeat transition-all duration-400 hover:bg-[length:100%_0.1em,0_0.1em] hover:bg-position-[100%_100%,0_100%] group-hover:underline",
                titleSize === "large" && "text-[26px] leading-[26px] "
              )}
            >
              {title}
            </h3>

            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventThumbnail;
