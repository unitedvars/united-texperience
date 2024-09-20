"use client";

import { Category } from "@/types";
import { archivo } from "@/utils/fonts";
import clsx from "clsx";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const CategoryBar = ({ categories }: { categories: Category[] }) => {
  const params = useParams();
  const pathname = usePathname();
  const all = pathname.split("/")[2];

  return (
    <ul className="flex gap-x-[2.5rem] gap-y-[1rem] justify-center flex-wrap">
      <li
        className={clsx(
          archivo.className,
          "text-primary-700 text-right hover:text-primary-500 transition",
          all === "all" && "!text-primary-500 border-b border-primary-500"
        )}
      >
        <Link href={`/category/all?page=1`}>All</Link>
      </li>
      {categories.map(
        (category) =>
          !category.hide_in_category_bar && (
            <li
              key={category.slug.current}
              className={clsx(
                archivo.className,
                "text-primary-700 text-right hover:text-primary-500 transition",
                params.category === category.slug.current &&
                  "!text-primary-500 border-b border-primary-500"
              )}
            >
              <Link href={`/category/${category.slug.current}?page=1`}>
                {category.name}
              </Link>
            </li>
          )
      )}
    </ul>
  );
};

export default CategoryBar;
