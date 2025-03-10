"use client";

import React from "react";
import StatThumbnail from "@/app/components/common/StatThumbnail";
import { Stats } from "@/types";
import clsx from "clsx";
import { orbitron } from "@/utils/fonts";

interface StatsScrollerProps {
  stats: Stats[];
}

const StatsScroller: React.FC<StatsScrollerProps> = ({ stats }) => {
  const scrollLeft = () => {
    document.getElementById('stats-container')?.scrollBy({ left: -500, behavior: 'smooth' });
  };

  const scrollRight = () => {
    document.getElementById('stats-container')?.scrollBy({ left: 500, behavior: 'smooth' });
  };

  return (
    <div className="flex-col lg:flex-row flex items-stretch">
      <div className="w-full lg:w-full bg-white rounded-lg p-4 pb-2 relative">
        <h2
          className={clsx(
            "text-primary-500 text-2xl border-b pb-4 mb-4",
            orbitron.className
          )}
        >
          Stats & Numbers
        </h2>

        <button
          className="absolute left-6 top-1/2 transform z-10 bg-gray-50 p-2 rounded-full flex items-center justify-center"
          onClick={scrollLeft}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#28bcef" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div id="stats-container" className="overflow-x-scroll pb-2 flex items-center">
          <ul className="flex flex-row gap-8">
            {stats.map((stat: Stats) => (
              <li key={stat._id} className="w-[500px]">
                <StatThumbnail
                  imageUrl={stat.mainImage}
                  title={stat.title}
                  description={stat.description}
                  className={"min-h-[124px]"}
                />
              </li>
            ))}
          </ul>
        </div>

        <button
          className="absolute right-6 top-1/2 transform z-10 bg-gray-50 p-2 rounded-full flex items-center justify-center"
          onClick={scrollRight}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#28bcef" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StatsScroller;
