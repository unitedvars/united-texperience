import { ARTICLE, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import Navbar from "@/app/components/common/Navbar";
import { SanityDocument } from "sanity";
import clsx from "clsx";
import { Orbitron } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"] });

const Article = async ({ params }: { params: { id: string } }) => {
  const categories = await sanityFetch<SanityDocument[]>({
    query: CATEGORIES_QUERY,
  });

  console.log(params.id);
  const article = await sanityFetch<any>({
    query: ARTICLE,
    params: {
      slug: params.id,
    },
  });
  console.log(article);
  return (
    <div>
      <header className="flex flex-col">
        <Navbar categories={categories} />
      </header>
      <main className="px-8">
        <article className="flex flex-col items-center">
          <strong
            className={clsx(
              "text-center block text-primary-500 uppercase mb-4",
              orbitron.className
            )}
          >
            {article.category.name}
          </strong>
          <h1 className="text-6xl text-center block max-w-4xl">
            {article.title}
          </h1>
          <p className="text-center mt-6">{article.subtitle}</p>
          <div className="w-full h-[384px] relative mt-12">
            <Image
              src={article.mainImage}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        </article>
      </main>
    </div>
  );
};

export default Article;
