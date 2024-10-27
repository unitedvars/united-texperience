import menuLinks from "@/app/ui/menuLinks";
import { sanityFetch } from "@/sanity/lib/fetch";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";
import { Category } from "@/types";
import { archivo, orbitron } from "@/utils/fonts";
import clsx from "clsx";
import Link from "next/link";
import Button from "./Button";
import LogoLink from "./LogoLink";
import FooterLinks from "./FooterLinks";

export default async function Footer() {
  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  return (
    <div className="bg-white rounded-lg p-8 default-box">
      <footer className="flex flex-col gap-12 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col lg:w-1/2">
            <LogoLink />

            <p className={clsx("text-1xl font-light", archivo.className)}>
              At United TeXperience, we believe in sharing news that empowers
              businesses and technology leaders to drive innovation. We
              spotlight the breakthroughs in enterprise solutions, cutting-edge
              software, and transformative technologies that are shaping the
              future of industries and the world.
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
          <FooterLinks categories={categories} />
        </div>
        <div className="flex flex-col gap-2 lg:gap-0 text-center lg:text-left lg:flex-row">
          <div className={clsx(archivo.className, "text-primary-900")}>
            Copyright © {new Date().getFullYear()} United VARs
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
