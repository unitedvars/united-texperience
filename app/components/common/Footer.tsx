import menuLinks from "@/app/ui/menuLinks";
import { sanityFetch } from "@/sanity/lib/fetch";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";
import { Category } from "@/types";
import { archivo } from "@/utils/fonts";
import clsx from "clsx";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

export default async function Footer() {
  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  return (
    <footer className="flex flex-col gap-12 px-8">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Link href="/">
            <Logo variant="isologo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nulla elementum tortor
            pulvinar id tellus purus iaculis egestas tempor. Fermentum quis nunc
            egestas gravida faucibus urna.
          </p>
        </div>
        <div className="flex flex-col">
          <div>
            <strong>Subscribe</strong>
            <p>Get alerts of all the news we have for you</p>
          </div>
          <form className="flex items-center gap-4 justify-end h-full">
            <input
              type="text"
              className="border border-primary-600 h-12 rounded-md grow px-4"
              placeholder="Please enter your email..."
            />
            <Button className={"hidden lg:block"}>Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <ul className="flex justify-start">
          {menuLinks.map(({ label, href }, idx: number) => (
            <li
              key={label}
              className={clsx(
                archivo.className,
                "text-primary-500 text-right hover:text-primary-500 transition"
              )}
            >
              <Link href={`${href}`}>{label}</Link>
              {idx < menuLinks.length - 1 && <span className="mx-6">|</span>}
            </li>
          ))}
        </ul>
        <ul className="flex justify-start">
          {categories.map((category, idx: number) => (
            <li
              key={category.slug.current}
              className={clsx(
                archivo.className,
                "text-primary-500 text-right hover:text-primary-500 transition"
              )}
            >
              <Link href={`/category/${category.slug.current}`}>
                {category.name}
              </Link>
              {idx < categories.length - 1 && <span className="mx-6">|</span>}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <div className={clsx(archivo.className, "text-primary-900")}>
          Copyright © {new Date().getFullYear()} UnitedVars
        </div>
        <div className="mx-2">-</div>
        <div className={clsx(archivo.className, "text-primary-500")}>
          All rights reserved
        </div>
      </div>
    </footer>
  );
}
