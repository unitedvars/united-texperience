import clsx from "clsx";
import { orbitron } from "@/utils/fonts";
import HamburgerIcon from "./HamburgerIcon";
import { ReactNode } from "react";

const MenuContainer = ({
  isOpen,
  setIsOpen,
  children,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
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
        <div className="flex flex-col grow">{children}</div>
      </div>
    </>
  );
};

export default MenuContainer;
