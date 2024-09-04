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
        <div className="h-[52px] flex items-center justify-center">
          <div className="flex gap-3 items-center basis-0">
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
          <Link href="/" className="mx-auto">
            <Logo variant="isologo" />
          </Link>
          <Button className={"hidden lg:block basis-0"}>Subscribe</Button>
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
