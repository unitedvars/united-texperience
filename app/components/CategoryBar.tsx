"use client";

import { Category } from "@/types";
import { archivo } from "@/utils/fonts";
import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";

const CategoryBar = ({ categories }: { categories: Category[] }) => {
  const params = useParams();

  console.log(params);
  return (
    <ul className="flex gap-10 justify-center">
      <li
        className={clsx(
          archivo.className,
          "text-primary-700 text-right hover:text-primary-500 transition"
        )}
      >
        <Link href={`/category/all?page=1`}>All</Link>
      </li>
      {categories.map((category) => (
        <li
          key={category.slug.current}
          className={clsx(
            archivo.className,
            "text-primary-700 text-right hover:text-primary-500 transition"
          )}
        >
          <Link href={`/category/${category.slug.current}?page=1`}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryBar;
