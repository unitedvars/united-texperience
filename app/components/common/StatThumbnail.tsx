"use client";

import clsx from "clsx";
import Image from "next/image";
import { maitree, orbitron, archivo } from "@/utils/fonts";

import { motion } from "framer-motion";

interface StatThumbnailProps {
  stat: string;
  description: string;
  imageUrl?: string;
  className?: string;
}

const StatThumbnail = ({
  imageUrl,
  stat,
  description,
  className,
}: StatThumbnailProps) => {
  return (
    <motion.div
      initial={{ transform: "translateX(40px)", opacity: 0 }}
      whileInView={{ transform: "translateX(0)", opacity: 1 }}
      viewport={{
        once: true,
        margin: "-100px 0px",
      }}
      className="w-[500px]"
    >
      <div className={clsx(className, "flex gap-2 flex-row group")}>
        {imageUrl && (
          <div className="w-full min-w-[200px] h-[200px] relative rounded-md overflow-hidden">
            <Image src={imageUrl} alt={description} fill className="object-cover" />
          </div>
        )}
        
        <div className="flex flex-col gap-2">

          <h3
            className={clsx(
              "text-primary-500 text-2xl",
                orbitron.className
            )}
          > <strong>
            {stat}
          </strong>
          </h3>

          <p
            className={clsx(
              "text-secondary-100 text-1xl",
                archivo.className
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default StatThumbnail;
