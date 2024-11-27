import { sanityFetch } from "@/sanity/lib/fetch";
import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer";
import { CATEGORIES_QUERY, DATA_PROTECTION_QUERY } from "@/sanity/lib/queries";
import PortableText from "@/app/components/common/PortableText";

import { Category } from "@/types";
import clsx from "clsx";
import { archivo, maitree } from "@/utils/fonts";

export default async function Home({
  params,
}: {
  params: { id: string; lang: 'en' | 'es' };
}) {
  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
    params: {
      language: params.lang
    }
  });


  const dataProtection = await sanityFetch<any>({
    query: DATA_PROTECTION_QUERY,
    params: {
      language: params.lang
    }
  });

  return (
    <>
      <header className="flex flex-col">
        <Navbar categories={categories} showCategoryBar={false} />
      </header>
      <main className="pb-16">
        <div
          className={clsx(
            "flex flex-col min-h-screen pb-16 px-8 lg:px-0 lg:max-w-4xl [&>p]:mb-6 pt-8 mx-auto",
            archivo.className
          )}
        >
          <h1 className={clsx(maitree.className, "text-center mb-8 text-6xl")}>
            Data Protection Notice
          </h1>
          <PortableText value={dataProtection.content}/>
        </div>
        <Footer lang={params.lang} />
      </main>
      
    </>
  );
}
