"use client";

import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import clsx from "clsx";
import Image from "next/image";

import { Mukta } from "next/font/google";

import { SanityDocument } from "next-sanity";
import Link from "next/link";

const mukta = Mukta({ subsets: ["latin"], weight: ["400"] });

const Navbar = ({ categories }: { categories: SanityDocument[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="bg-gray-900 px-12 py-1">
        <ul className="flex gap-3 justify-end">
          {categories.map((category) => (
            <li
              key={category.slug.current}
              className="flex items-center gap-3 group"
            >
              <div className="h-2 w-2 bg-gray-700 rounded-full group-first:hidden" />
              <div
                className={clsx(
                  mukta.className,
                  "text-gray-200 text-right uppercase"
                )}
              >
                <Link href={`/category/${category.slug.current}`}>
                  {category.name}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center px-24 py-12 justify-between">
        <div className="h-16 aspect-video relative">
          <Image src="/common/Logo.svg" fill alt="Soberanía" />
        </div>
        <HamburgerIcon
          className="z-30"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
      </div>
      <div
        className={clsx(
          "fixed bg-primary-800 h-screen w-[550px] top-0 right-0 opacity-0 pointer-events-none transition-all duration-500 translate-x-48 px-[50px] pt-[100px] pb-[36px] z-20",
          isMenuOpen && "opacity-100 pointer-events-auto !translate-x-0"
        )}
      >
        <div className="border-t pt-9 border-primary-200">
          <p
            className={clsx(
              "text-2xl text-primary-200 font-normal block tracking-wide mb-3 text-right"
            )}
          >
            Menú
          </p>
          <ul className="flex flex-col gap-1">
            {categories.map((category) => (
              <li
                key={category.slug.current}
                className={clsx(mukta.className, "text-primary-500 text-right")}
              >
                <Link href={`/category/${category.slug.current}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
