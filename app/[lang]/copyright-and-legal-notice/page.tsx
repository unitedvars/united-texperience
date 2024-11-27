import { sanityFetch } from "@/sanity/lib/fetch";
import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer";
import { CATEGORIES_QUERY, COPYRIGHT_QUERY } from "@/sanity/lib/queries";
import { Category } from "@/types";
import clsx from "clsx";
import { archivo, maitree } from "@/utils/fonts";
import PortableText from "@/app/components/common/PortableText";

export default async function Home(props : any) {
  const params = props.params;
  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  const copyright = await sanityFetch<any>({
    query: COPYRIGHT_QUERY,
    params: {
      language: params.lang
    }
  });

  return (
    <>
      <header className="flex flex-col">
        <Navbar categories={categories} showCategoryBar={false} />
      </header>
      <main className="pb-16 w-full px-8 ">
        <div
          className={clsx(
            "flex flex-col min-h-screen pb-8 [&>p]:mb-6 lg:max-w-4xl mx-auto pt-8",
            archivo.className
          )}
        >
          <h1
            className={clsx(
              maitree.className,
              "text-center mb-12 text-4xl lg:text-6xl lg:mb-16"
            )}
          >
            Copyright and Legal Notice
          </h1>

          <PortableText value={copyright.content}/>
        </div>

        <Footer lang={params.lang} />
      </main>
      
    </>
  );
}
