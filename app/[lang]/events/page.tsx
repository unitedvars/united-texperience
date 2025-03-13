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

const Events = async (props: any) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const currentPage = parseInt(searchParams.page);
  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  const eventsCount = await sanityFetch<number>({
    query: EVENTS_COUNT,
    params: {
      language: params.lang,
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
          : EVENTS_DESC,
    params: {
      ...getArticlePageParams(currentPage),
      dateFrom: searchParams.dateFrom || null,
      dateTo: searchParams.dateTo || null,
      searchParam: searchParams.searchParam || null,
      language: params.lang,
    },
  });

  return (
    <div className="pb-12">
      <header className="flex flex-col">
        <Navbar categories={categories} showCategoryBar={false} />
      </header>
      <main className="flex flex-col pb-16 pt-10 default-box">
        <div className="divide-y py-8 border-t border-b mt-6">
          <CategoryBarList categories={categories} />
        </div>
        <div>
          <SearchBar />
          <EventList events={events} totalPages={totalPages} />
        </div>
      </main>
      <Footer lang={params.lang} />
    </div>
  );
};

export default Events;
