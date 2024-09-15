import { sanityFetch } from "@/sanity/lib/fetch";
import { PortableText } from "next-sanity";
import { ARTICLE, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import Navbar from "@/app/components/common/Navbar";
import LargeArticle from "@/app/components/LargeArticle";
import { Category } from "@/types";
import MotionWrapper from "@/app/components/common/MotionWrapper";
import Footer from "@/app/components/common/Footer";

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
        <article className="flex flex-col items-center w-full default-box pb-6 md:pb-12">
          <LargeArticle article={article} clickable={false} />
          <MotionWrapper
            initial={{ transform: "translateY(100px)", opacity: 0 }}
            animate={{
              transform: "translateY(0px)",
              opacity: 1,
            }}
            transition={{
              type: "spring",
              ease: "easeOut",
              bounce: 0,
              delay: 0.5,
            }}
          >
            <div className="py-20 small-box [&>p]:my-4 [&>h1]:text-xl">
              <PortableText value={article.content} />
            </div>
          </MotionWrapper>
          <Footer />
        </article>
      </main>
    </div>
  );
};

export default Article;
