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
          "fixed bg-white max-h-screen xl:w-[550px] xl:top-[2vh] xl:left-4 opacity-0 pointer-events-none transition-all duration-500 -translate-x-48 px-4 lg:px-6 py-4 lg:py-4 z-40 xl:h-[96dvh] shadow-lg w-full top-0 left-0 xl:rounded-lg flex flex-col overflow-y-auto h-screen",
          isOpen && "opacity-100 pointer-events-auto !translate-x-0"
        )}
      >
        <div
          className="pt-3 pb-8 "
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <div className="group cursor-pointer w-fit flex items-center gap-3">
            <HamburgerIcon setIsActive={setIsOpen} active />
            <label
              className={clsx(
                orbitron.className,
                "cursor-pointer text-primary-800 group-hover:text-primary-500"
              )}
            >
              close
            </label>
          </div>
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
                key={"all"}
                className={clsx(
                  orbitron.className,
                  "text-primary-800 text-xl hover:text-primary-500 transition"
                )}
              >
                <Link href={`/all?page=1`}>All</Link>
              </li>
              {categories.map((category) => (
                <li
                  key={category.slug.current}
                  className={clsx(
                    orbitron.className,
                    "text-primary-800 text-xl hover:text-primary-500 transition"
                  )}
                >
                  <Link href={`/${category.slug.current}?page=1`}>
                    {category.name}
                  </Link>
                </li>
              ))}
              <li
                key={"events-and-training"}
                className={clsx(
                  orbitron.className,
                  "text-primary-800 text-xl hover:text-primary-500 transition cursor-pointer"
                )}
                onClick={() => {
                  document
                    .querySelector("#events-and-training")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  setIsOpen(false);
                }}
              >
                Events & Training
              </li>
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
                    "text-primary-800 text-xl hover:text-primary-500 transition"
                  )}
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
