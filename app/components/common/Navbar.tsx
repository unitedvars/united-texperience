"use client";

import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import clsx from "clsx";

import { Orbitron } from "next/font/google";
import { Archivo } from "next/font/google";

import { SanityDocument } from "next-sanity";
import Link from "next/link";

const orbitron = Orbitron({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });

const Navbar = ({ categories }: { categories: SanityDocument[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="">
      <div className="h-[52px] flex items-center px-[50px] justify-end">
        <HamburgerIcon
          className="z-30"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
      </div>
      <div
        className={clsx(
          "fixed bg-primary-800 h-screen w-[550px] z-10 top-0 right-0 opacity-0 pointer-events-none transition-all duration-500 translate-x-48 px-[50px] pt-[100px] pb-[36px] z-20",
          isMenuOpen && "opacity-100 pointer-events-auto !translate-x-0"
        )}
      >
        <div className="border-t pt-9 border-primary-200">
          <p
            className={clsx(
              orbitron.className,
              "text-2xl text-primary-200 font-normal block tracking-wide mb-3 text-right"
            )}
          >
            Categories
          </p>
          <ul className="flex flex-col gap-1">
            {categories.map((category) => (
              <li
                key={category.slug.current}
                className={clsx(
                  archivo.className,
                  "text-primary-500 text-right"
                )}
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
