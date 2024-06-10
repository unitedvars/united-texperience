import clsx from "clsx";
import Image from "next/image";
import { Archivo, Maitree, Orbitron } from "next/font/google";

const maitree = Maitree({ weight: ["400"], subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });

interface ArticleThumbnailProps {
  title: string;
  category: string;
  author: string;
  imageUrl?: string;
  titleSize?: "large";
  className?: string;
}

const ArticleThumbnail = ({
  imageUrl,
  title,
  category,
  author,
  titleSize,
  className,
}: ArticleThumbnailProps) => {
  return (
    <div className={clsx(className, "flex gap-2")}>
      {imageUrl && (
        <div className="min-w-[150px] h-[124px] relative">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="flex flex-col">
        <strong
          className={clsx(
            orbitron.className,
            "uppercase text-primary-500 text-xs font-medium"
          )}
        >
          {category}
        </strong>
        <h3
          className={clsx(
            "text-xl leading-[22px] mt-1",
            titleSize === "large" && "text-[26px] leading-[26px]"
          )}
        >
          {title}
        </h3>
        <span
          className={clsx(
            "block mt-auto text-xs opacity-70",
            maitree.className
          )}
        >{`Por ${author}`}</span>
      </div>
    </div>
  );
};

export default ArticleThumbnail;
