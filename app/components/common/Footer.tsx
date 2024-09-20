import menuLinks from "@/app/ui/menuLinks";
import { sanityFetch } from "@/sanity/lib/fetch";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";
import { Category } from "@/types";
import { archivo, orbitron } from "@/utils/fonts";
import clsx from "clsx";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

export default async function Footer() {
  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  return (
    <div className="bg-white rounded-lg p-8 default-box">
      <footer className="flex flex-col gap-12 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col lg:w-1/2">
            <Link href="/">
              <Logo variant="isologo" />
            </Link>
            <p className={clsx(archivo.className)}>
              Lorem ipsum dolor sit amet consectetur. Nulla elementum tortor
              pulvinar id tellus purus iaculis egestas tempor. Fermentum quis
              nunc egestas gravida faucibus urna.
            </p>
          </div>
          <div className="flex flex-col lg:w-1/2 gap-8">
            <div className="flex flex-col lg:items-end">
              <strong
                className={clsx(
                  orbitron.className,
                  "text-xl lg:text-right font-normal text-primary-900"
                )}
              >
                Subscribe
              </strong>
              <p className={clsx(archivo.className)}>
                Get alerts of all the news we have for you
              </p>
            </div>
            <form className="flex flex-col lg:flex-row items-center gap-4 justify-end h-full ">
              <input
                type="text"
                className={clsx(
                  archivo.className,
                  "w-full lg:w-auto border border-primary-600 h-12 rounded-md grow px-4"
                )}
                placeholder="Please enter your email..."
              />
              <Button className="w-full lg:w-auto">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col gap-8 lg:gap-4">
          <ul className="flex justify-start flex-col lg:flex-row">
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
                  href={`${href}`}
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
          <ul className="flex justify-start flex-col lg:flex-row">
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
                  href={`/category/${category.slug.current}`}
                >
                  {category.name}
                </Link>
                {idx < categories.length - 1 && (
                  <span className="mx-3 opacity-30 xl:mx-6 hidden lg:inline-block">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 lg:gap-0 text-center lg:text-left lg:flex-row">
          <div className={clsx(archivo.className, "text-primary-900")}>
            Copyright © {new Date().getFullYear()} UnitedVars
          </div>
          <div className="hidden lg:inline-block mx-2">-</div>
          <Link
            href="#"
            className={clsx(
              archivo.className,
              "hover:border-primary-200 pb-1 border-transparent transition border-b text-primary-500"
            )}
          >
            All rights reserved
          </Link>
        </div>
      </footer>
    </div>
  );
}
