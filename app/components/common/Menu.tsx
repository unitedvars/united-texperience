import { Category } from "@/types";
import clsx from "clsx";
import { orbitron, archivo } from "@/utils/fonts";
import Link from "next/link";
import HamburgerIcon from "./HamburgerIcon";
import Button from "./Button";

const Menu = ({
  categories,
  isOpen,
  setIsOpen,
}: {
  categories: Category[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const unitedVarsLinks = [
    {
      label: "About Us",
      href: "#",
    },
    {
      label: "Partner with us",
      href: "#",
    },
    {
      label: "Privacy Policy",
      href: "#",
    },
  ];
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
          "fixed bg-white max-h-screen xl:w-[550px] xl:top-[2vh] xl:left-4 opacity-0 pointer-events-none transition-all duration-500 -translate-x-48 px-8 xl:px-[50px] py-[36px] z-40 xl:h-[96vh] shadow-lg w-full top-0 left-0 xl:rounded-lg flex flex-col overflow-y-auto",
          isOpen && "opacity-100 pointer-events-auto !translate-x-0"
        )}
      >
        <div
          className="pt-3 pb-8 flex items-center gap-3 cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <HamburgerIcon setIsActive={setIsOpen} active />
          <label className={clsx(orbitron.className, "text-gray-500")}>
            close
          </label>
        </div>
        <div className="flex flex-col grow">
          <div className="border-t py-5 border-gray-400">
            <strong
              className={clsx(
                "text-lg text-primary-500 font-normal block tracking-wide mb-3",
                archivo.className
              )}
            >
              Categories
            </strong>
            <ul className="flex flex-col gap-1">
              <li
                className={clsx(orbitron.className, "text-primary-800 text-xl")}
              >
                <Link href={`/category/all?page=1`}>All</Link>
              </li>
              {categories.map((category) => (
                <li
                  key={category.slug.current}
                  className={clsx(
                    orbitron.className,
                    "text-primary-800 text-xl"
                  )}
                >
                  <Link href={`/category/${category.slug.current}?page=1`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t py-5 border-gray-400">
            <strong
              className={clsx(
                "text-lg text-primary-500 font-normal block tracking-wide mb-3",
                archivo.className
              )}
            >
              United VARs
            </strong>
            <ul className="flex flex-col gap-1">
              {unitedVarsLinks.map((link) => (
                <li
                  key={link.label}
                  className={clsx(
                    orbitron.className,
                    "text-primary-800 text-xl"
                  )}
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col mt-auto gap-4 pt-8 border-t border-gray-400">
            <div>
              <strong
                className={clsx(
                  orbitron.className,
                  "text-xl lg:text-right font-normal text-primary-900"
                )}
              >
                Subscribe
              </strong>
              <p className={clsx(archivo.className)}>
                Get alerts of all the news we have for you
              </p>
            </div>
            <div>
              <form className="flex flex-col lg:flex-row items-center gap-4 justify-end h-full ">
                <input
                  type="text"
                  className={clsx(
                    archivo.className,
                    "w-full lg:w-auto border border-primary-600 h-12 rounded-md grow px-4"
                  )}
                  placeholder="Please enter your email..."
                />
                <Button className="w-full lg:w-auto">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
