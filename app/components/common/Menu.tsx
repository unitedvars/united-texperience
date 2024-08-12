import { Category } from "@/types";
import clsx from "clsx";
import { orbitron, archivo } from "@/utils/fonts";
import Link from "next/link";
import HamburgerIcon from "./HamburgerIcon";

const Menu = ({
  categories,
  isOpen,
  setIsOpen,
}: {
  categories: Category[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div
      className={clsx(
        "fixed bg-white h-screen w-[550px] top-[2vh] left-4 opacity-0 pointer-events-none transition-all duration-500 -translate-x-48 px-[50px] py-[36px] z-30 2xl:h-[96vh] rounded-lg shadow-lg",
        isOpen && "opacity-100 pointer-events-auto !translate-x-0"
      )}
    >
      <div className="pt-3 pb-8 flex items-center gap-3">
        <HamburgerIcon
          setIsActive={setIsOpen}
          active
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <label className={clsx(orbitron.className, "text-gray-500")}>
          close
        </label>
      </div>
      <div className="border-t pt-9 border-primary-200">
        <p
          className={clsx(
            "text-2xl text-primary-200 font-normal block tracking-wide mb-3",
            archivo.className
          )}
        >
          Categories
        </p>
        <ul className="flex flex-col gap-1">
          {categories.map((category) => (
            <li
              key={category.slug.current}
              className={clsx(archivo.className, "text-primary-500")}
            >
              <Link href={`/category/${category.slug.current}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
