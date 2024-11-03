"use client";

import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import clsx from "clsx";

import { orbitron, archivo } from "@/utils/fonts";

import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import Menu from "./Menu";
import SubscribeModal from "./SubscribeModal";
import { Category } from "@/types";
import { motion } from "framer-motion";
import CategoryBar from "../CategoryBar";
import { useParams } from "next/navigation";

const Navbar = ({
  categories,
  showCategoryBar = true,
}: {
  categories: Category[];
  showCategoryBar?: boolean;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lang } = useParams();
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
            className="w-1/3 flex gap-12 items-center"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <div className="group cursor-pointer flex items-center gap-3 w-fit">
              <HamburgerIcon
                setIsActive={setIsMenuOpen}
                active={isMenuOpen}
                className="z-30"
              />
              <label
                className={clsx(
                  orbitron.className,
                  "cursor-pointer text-primary-800 group-hover:text-primary-500"
                )}
              >
                menu
              </label>
            </div>
          </div>

          <div className="w-1/3 flex justify-center">
            <Link href={`/${lang}`}>
              <Logo variant="isologo" />
            </Link>
          </div>


          <div className="w-1/3 justify-end flex gap-6 text-primary-600">
            <div
              className={clsx(
                orbitron.className,
                "flex items-center gap-2 text-sm"
              )}
            >
              <Link href="/en">EN</Link>
              <span>|</span>
              <Link href="/es">ES</Link>
            </div>


            <Button className={"hidden lg:block"} onClick={() => {
              setIsModalOpen(!isModalOpen);
            }} >Subscribe</Button>
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

      <SubscribeModal 
         isOpen={isModalOpen}
         setIsOpen={setIsModalOpen}
      />      
    </>
  );
};

export default Navbar;
