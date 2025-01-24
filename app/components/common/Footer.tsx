import { sanityFetch } from "@/sanity/lib/fetch";
import { CATEGORIES_QUERY, HOME_QUERY } from "@/sanity/lib/queries";
import { Category } from "@/types";
import { archivo, orbitron } from "@/utils/fonts";
import clsx from "clsx";
import Link from "next/link";
import LogoLink from "./LogoLink";
import FooterLinks from "./FooterLinks";
import PortableText from "./PortableText";
import FooterSubscribeSection from "./FooterSubscribeSection";


export default async function Footer({lang} : {lang: 'en' | 'es'}) {
  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  const home = await sanityFetch<any>({
    query: HOME_QUERY,
    params: {
      language: lang,
    },
  });

  return (
    <div className="bg-white rounded-lg p-8 default-box">
      <footer className="flex flex-col gap-12 lg:px-8 max-w-[480px] lg:max-w-none mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col lg:w-1/2">
            <LogoLink />

            <span className={clsx("text-1xl font-light", archivo.className)}>
              <PortableText
                value={home.footer}
              />
            </span>
          </div>
          <div className="flex items-end flex-col lg:w-1/2 gap-2">
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
            <FooterSubscribeSection />
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
