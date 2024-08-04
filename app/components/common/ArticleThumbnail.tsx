import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface ArticleThumbnailProps {
  title: string;
  category: string;
  author: string;
  imageUrl?: string;
  titleSize?: "large";
  className?: string;
  url?: string;
}

const ArticleThumbnail = ({
  imageUrl,
  title,
  category,
  author,
  titleSize,
  className,
  url,
}: ArticleThumbnailProps) => {
  return (
    <Link href={url || "#"}>
      <div className={clsx(className, "flex gap-2")}>
        {imageUrl && (
          <div className="min-w-[150px] h-[124px] relative">
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          </div>
        )}
        <div className="flex flex-col pr-1">
          <strong
            className={clsx("uppercase text-primary-500 text-xs font-medium")}
          >
            {category}
          </strong>
          <h3
            className={clsx(
              "text-lg leading-[22px] mt-1",
              titleSize === "large" && "text-[26px] leading-[26px]"
            )}
          >
            {title}
          </h3>
          <span
            className={clsx("block mt-auto text-xs opacity-70")}
          >{`Por ${author}`}</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleThumbnail;
