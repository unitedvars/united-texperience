import { sanityFetch } from "@/sanity/lib/fetch";
import Navbar from "./components/common/Navbar";
import { SanityDocument } from "sanity";
import { CATEGORIES_QUERY, HOME_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import clsx from "clsx";
import { Archivo, Maitree, Orbitron } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });
const maitree = Maitree({ weight: ["400"], subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });

export default async function Home() {
  const categories = await sanityFetch<SanityDocument[]>({
    query: CATEGORIES_QUERY,
  });

  const { featuredArticle } = await sanityFetch<any>({
    query: HOME_QUERY,
  });

  return (
    <>
      <header className="flex flex-col">
        <Navbar categories={categories} />
      </header>
      <main className="flex flex-col min-h-screen pb-16 px-[50px]">
        <div className="flex">
          <div className="h-[480px] w-[112px]"></div>
          <div className="grow bg-primary-200 h-[480px] relative">
            <Image src="" alt="" fill />
            <div className="bg-white absolute z-10 w-[882px] bottom-0 left-0 p-4 flex flex-col">
              <span
                className={clsx(
                  "uppercase text-primary-500 text-sm mb-4",
                  orbitron.className
                )}
              >
                {featuredArticle.category.name}
              </span>
              <h1
                className={clsx(
                  "text-[68px] leading-none mb-4",
                  archivo.className
                )}
              >
                {featuredArticle.title}
              </h1>
              <strong className={clsx(maitree.className)}>
                {featuredArticle.subtitle}
              </strong>
              <span
                className={clsx(maitree.className)}
              >{`Por ${featuredArticle.author.name}`}</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
