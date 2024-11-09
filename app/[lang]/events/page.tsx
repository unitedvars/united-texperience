import { sanityFetch } from "@/sanity/lib/fetch";
import {
  EVENTS_COUNT,
  CATEGORIES_QUERY,
  EVENTS,
  EVENTS_ASC,
  EVENTS_DESC,
} from "@/sanity/lib/queries";
import Navbar from "@/app/components/common/Navbar";
import { Category } from "@/types";
import CategoryBarList from "@/app/components/CategoryBarList";
import Footer from "@/app/components/common/Footer";
import SearchBar from "@/app/components/common/SearchBar";
import { getArticlePageParams, getTotalPages } from "@/utils/utils";
import EventList from "@/app/components/common/EventList";

const Events = async ({
  params,
  searchParams,
}: {
  params: { lang: "en" | "es" };
  searchParams: any;
}) => {
  const currentPage = parseInt(searchParams.page);

  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  const eventsCount = await sanityFetch<number>({
    query: EVENTS_COUNT,
    params: {
      language: params.lang,
      author: searchParams.author || null,
      editorial: searchParams.editorial || null,
      dateFrom: searchParams.dateFrom || null,
      dateTo: searchParams.dateTo || null,
      searchParam: searchParams.searchParam || null,
    },
  });

  let totalPages = getTotalPages(eventsCount);

  const events = await sanityFetch<any>({
    query:
      searchParams.sort === "asc"
        ? EVENTS_ASC
        : searchParams.sort === "desc"
          ? EVENTS_DESC
          : EVENTS,
    params: {
      ...getArticlePageParams(currentPage),
      language: params.lang,
    },
  });

  return (
    <div className="pb-12">
      <header className="flex flex-col">
        <Navbar categories={categories} showCategoryBar={false} />
      </header>
      <main className="flex flex-col pb-16 pt-10 default-box">
        <h1 className="text-6xl text-center">Articles</h1>
        <div className="divide-y py-8 border-t border-b mt-6">
          <CategoryBarList categories={categories} />
        </div>
        <div>
          <SearchBar />
          <EventList events={events} totalPages={totalPages} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
