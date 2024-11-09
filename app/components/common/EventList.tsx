"use client";

import { Article, Events } from "@/types";
import ArticleThumbnail from "./ArticleThumbnail";
import { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import clsx from "clsx";
import { motion } from "framer-motion";
import { archivo } from "@/utils/fonts";
import EventThumbnail from "./EventThumbnail";

const EventList = ({
  events,
  totalPages,
}: {
  events: Events[];
  totalPages: number;
}) => {
  console.log(totalPages > 0);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const page = parseInt(searchParams.get("page") as string);

  return (
    <Suspense>
      {events.length > 0 ? (
        <div className="pt-8">
          <ul className="grid gap-y-8 w-full max-w-[32rem] mx-auto">
            {events?.map((event: Events) => (
              <li key={event._id} className="gap-2 w-full h flex flex-col">
                <div className="grow rounded-md bg-white p-4">
                  <EventThumbnail
                    imageUrl={event.mainImage}
                    title={event.title}
                    url={event.url}
                    subtitle={event.subtitle}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className={clsx("w-full flex items-center justify-center py-8")}>
            {page && totalPages && totalPages > 0 && (
              <Pagination
                count={totalPages}
                page={page}
                onChange={(_, page) => {
                  router.push(`${pathname}?page=${page}`);
                }}
              />
            )}
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ transform: "translateY(20px)" }}
          animate={{
            transform: "translateY(0px)",
          }}
          transition={{
            type: "spring",
            ease: "easeOut",
            bounce: 0,
          }}
          className="h-80 flex items-center justify-center"
        >
          <strong className={clsx("text-1xl font-light", archivo.className)}>
            No articles found...
          </strong>
        </motion.div>
      )}
    </Suspense>
  );
};

export default EventList;
