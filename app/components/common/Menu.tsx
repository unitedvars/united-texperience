import { Category } from "@/types";
import clsx from "clsx";
import { orbitron, archivo } from "@/utils/fonts";
import Link from "next/link";
import HamburgerIcon from "./HamburgerIcon";
import MenuContainer from "./MenuContainer";

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
      <MenuContainer setIsOpen={setIsOpen} isOpen={isOpen}>
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
      </MenuContainer>
    </>
  );
};

export default Menu;
