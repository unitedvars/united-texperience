import { Category } from "@/types";
import { archivo } from "@/utils/fonts";
import clsx from "clsx";
import Link from "next/link";

const CategoryBar = ({ categories }: { categories: Category[] }) => {
  return (
    <ul className="flex gap-10 justify-center">
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
