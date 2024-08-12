import { sanityFetch } from "@/sanity/lib/fetch";
import { PortableText } from "next-sanity";
import { ARTICLE, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import Navbar from "@/app/components/common/Navbar";
import LargeArticle from "@/app/components/LargeArticle";
import { Category } from "@/types";

const Article = async ({ params }: { params: { id: string } }) => {
  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  const article = await sanityFetch<any>({
    query: ARTICLE,
    params: {
      slug: params.id,
    },
  });

  return (
    <div>
      <header className="flex flex-col">
        <Navbar categories={categories} showCategoryBar={false} />
      </header>
      <main>
        <article className="flex flex-col items-center w-full default-box">
          <LargeArticle article={article} />
          <div className="py-20 small-box">
            <PortableText value={article.content} />
          </div>
        </article>
      </main>
    </div>
  );
};

export default Article;
