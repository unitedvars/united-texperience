import { Category, Lang } from "@/types";
import menuLinks from "@/app/ui/menuLinks";
import clsx from "clsx";
import { orbitron, archivo } from "@/utils/fonts";
import Link from "next/link";
import MenuContainer from "./MenuContainer";
import { useParams } from "next/navigation";
import { getCategoryName } from "@/utils/utils";

const Menu = ({
  categories,
  isOpen,
  setIsOpen,
}: {
  categories: Category[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const { lang } = useParams();
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
              {categories.map((category) => (
                <li
                  key={category.slug.current}
                  className={clsx(
                    orbitron.className,
                    "text-primary-800 text-xl hover:text-primary-500 transition"
                  )}
                >
                  <Link href={`/${lang}/${category.slug.current}?page=1`}>
                    {getCategoryName(category, lang as Lang)}
                  </Link>
                </li>
              ))}
              <li
                key={"events-and-training"}
                className={clsx(
                  orbitron.className,
                  "text-primary-800 text-xl hover:text-primary-500 transition cursor-pointer"
                )}
              >
                <Link href={`/${lang}/events?page=1`}>Events & Training</Link>
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
              <li
                className={clsx(
                  orbitron.className,
                  "text-primary-800 text-xl hover:text-primary-500 transition"
                )}
              >
                <Link href={`/`}>Home</Link>
              </li>
              {menuLinks.map(({ label, href }, idx: number) => (
                <li
                  key={label}
                  className={clsx(
                    orbitron.className,
                    "text-primary-800 text-xl hover:text-primary-500 transition"
                  )}
                >
                  <Link href={`/en/${href}`}>{label}</Link>
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
