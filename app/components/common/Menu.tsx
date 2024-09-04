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
    <>
      <div
        onClick={() => {
          setIsOpen(false);
        }}
        className={clsx(
          "fixed bg-[rgba(5,50,65,0.0)] w-screen h-screen z-30 top-0 left-0 pointer-events-none transition ",
          isOpen &&
            "bg-[rgba(5,50,65,0.4)] pointer-events-auto backdrop-blur-lg"
        )}
      ></div>
      <div
        className={clsx(
          "fixed bg-white h-screen xl:w-[550px] xl:top-[2vh] xl:left-4 opacity-0 pointer-events-none transition-all duration-500 -translate-x-48 px-8 xl:px-[50px] py-[36px] z-40 xl:h-[96vh] shadow-lg w-full top-0 left-0 xl:rounded-lg",
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
    </>
  );
};

export default Menu;
