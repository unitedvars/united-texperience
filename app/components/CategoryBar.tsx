"use client";

import { Category, Lang } from "@/types";
import { archivo } from "@/utils/fonts";
import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getCategoryName } from "@/utils/utils";

const CategoryBarList = ({ categories }: { categories: Category[] }) => {
  const params = useParams();

  const LINK_CLASS_NAME = clsx(
    archivo.className,
    "text-primary-700 text-right hover:text-primary-500 transition"
  );

  return (
    <ul className="flex gap-x-[2.5rem] gap-y-[1rem] justify-center flex-wrap">
      {categories.map(
        (category) =>
          !category.hide_in_category_bar && (
            <li
              key={category.slug.current}
              className={clsx(
                LINK_CLASS_NAME,
                params.category === category.slug.current &&
                  "!text-primary-500 border-b border-primary-500"
              )}
            >
              <Link href={`${params.lang}/${category.slug.current}?page=1`}>
                {getCategoryName(category, params.lang as Lang)}
              </Link>
            </li>
          )
      )}
      <li
        key={"events-and-training"}
        className={clsx(
          LINK_CLASS_NAME,
          params.category === "events-and-training" &&
            "!text-primary-500 border-b border-primary-500"
        )}
      >
        <Link href={`${params.lang}/events?page=1`}>Events & Training</Link>
      </li>
    </ul>
  );
};

export default CategoryBarList;
