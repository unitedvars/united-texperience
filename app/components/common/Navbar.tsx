"use client";

import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import clsx from "clsx";

import { orbitron, archivo } from "@/utils/fonts";

import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import Menu from "./Menu";
import { Category } from "@/types";

const Navbar = ({ categories }: { categories: Category[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="py-8 default-box">
      {/*  */}
      <div className="h-[52px] flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <HamburgerIcon
            setIsActive={setIsMenuOpen}
            active={isMenuOpen}
            className="z-30"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
          <label className={orbitron.className}>menu</label>
        </div>
        <Link href="/">
          <Logo variant="isologo" />
        </Link>
        <Button>Subscribe</Button>
      </div>
      {/* CATEGORIES BAR */}
      <div className="pt-10 pb-4">
        <ul className="flex gap-10 justify-center">
          {categories.map((category) => (
            <li
              key={category.slug.current}
              className={clsx(
                archivo.className,
                "text-primary-700 text-right hover:text-primary-500 transition"
              )}
            >
              <Link href={`/category/${category.slug.current}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* MENU */}
      <Menu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        categories={categories}
      />
    </div>
  );
};

export default Navbar;
