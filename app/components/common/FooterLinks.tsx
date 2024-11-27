"use client";

import menuLinks from "@/app/ui/menuLinks";
import { Category, Lang } from "@/types";
import { archivo } from "@/utils/fonts";
import { getCategoryName } from "@/utils/utils";
import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";

const FooterLinks = ({ categories }: { categories: Category[] }) => {
  const { lang } = useParams();

  return (
    <>
      <ul className="flex justify-start flex-col lg:flex-row gap-3">
        {menuLinks.map(({ label, href }, idx: number) => (
          <li
            key={label}
            className={clsx(
              archivo.className,
              "text-primary-500 lg:text-right hover:text-primary-500 transition"
            )}
          >
            <Link
              className="hover:border-primary-200 pb-1 border-transparent transition border-b"
              href={`/en/${href}`}
            >
              {label}
            </Link>
            {idx < menuLinks.length - 1 && (
              <span className="mx-3 opacity-30 xl:mx-6 hidden lg:inline-block group-hover:border-b">
                |
              </span>
            )}
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap gap-3 justify-start flex-col lg:flex-row">
        {categories.map((category, idx: number) => (
          <li
            key={category.slug.current}
            className={clsx(
              archivo.className,
              "text-primary-500 lg:text-right hover:text-primary-500 transition"
            )}
          >
            <Link
              className="hover:border-primary-200 pb-1 border-transparent transition border-b"
              href={`/${lang}/${category.slug.current}?page=1`}
            >
              {getCategoryName(category, lang as Lang)}
            </Link>
            {idx < categories.length - 1 && (
              <span className="mx-3 opacity-30 xl:mx-6 hidden lg:inline-block">
                |
              </span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterLinks;
