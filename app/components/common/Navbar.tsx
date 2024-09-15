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
import { motion } from "framer-motion";
import CategoryBar from "../CategoryBar";

const Navbar = ({
  categories,
  showCategoryBar = true,
}: {
  categories: Category[];
  showCategoryBar?: boolean;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.div
        className="py-4 2xl:py-8 default-box"
        initial={{ transform: "translateY(-200px)" }}
        animate={{
          transform: "translateY(0px)",
        }}
        transition={{
          type: "spring",
          ease: "easeOut",
          bounce: 0,
        }}
      >
        <div className="h-[52px] flex items-center w-full">
          <div
            className="flex gap-3 items-center w-1/3 cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <HamburgerIcon
              setIsActive={setIsMenuOpen}
              active={isMenuOpen}
              className="z-30"
            />
            <label className={orbitron.className}>menu</label>
          </div>
          <div className="w-1/3 flex justify-center">
            <Link href="/">
              <Logo variant="isologo" />
            </Link>
          </div>
          <div className="w-1/3 justify-end flex">
            <Button className={"hidden lg:block"}>Subscribe</Button>
          </div>
        </div>
        {/* CATEGORIES BAR */}
        {showCategoryBar && (
          <div className="hidden lg:block pt-10 pb-4">
            <CategoryBar categories={categories} />
          </div>
        )}
        {/* MENU */}
      </motion.div>
      <Menu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        categories={categories}
      />
    </>
  );
};

export default Navbar;
