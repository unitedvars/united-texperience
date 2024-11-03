import clsx from "clsx";
import { orbitron, archivo } from "@/utils/fonts";
import HamburgerIcon from "./HamburgerIcon";
import { ReactNode } from "react";
import Button from "./Button";

const SubscribeModal = ({
  isOpen,
  setIsOpen,
}: {
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
          "fixed bg-white max-h-screen xl:w-[550px] xl:top-[2vh] xl:left-4 opacity-0 pointer-events-none transition-all duration-500 -translate-x-48 px-4 lg:px-6 py-4 lg:py-4 z-40 xl:h-[96dvh] shadow-lg w-full top-0 left-0 xl:rounded-lg flex flex-col overflow-y-auto h-screen",
          isOpen && "opacity-100 pointer-events-auto !translate-x-0"
        )}
      >
        <div
          className="pt-3 pb-8"
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

        <div className="flex flex-col py-5 grow border-t border-gray-400">
          <strong
            className={clsx(
              "text-lg text-primary-500 font-normal block tracking-wide mb-3",
              archivo.className
            )}
          >
            Subscribe
          </strong>

          <form className="flex flex-col items-start gap-4 h-full">
            <input
              type="text"
              className={clsx(
                archivo.className,
                "w-full border border-primary-600 h-12 rounded-md px-4"
              )}
              placeholder="Please enter your Name..."
            />

            <input
              type="text"
              className={clsx(
                archivo.className,
                "w-full border border-primary-600 h-12 rounded-md px-4"
              )}
              placeholder="Please enter your Last Name..."
            />

            <input
              type="text"
              className={clsx(
                archivo.className,
                "w-full border border-primary-600 h-12 rounded-md px-4"
              )}
              placeholder="Please enter your Email..."
            />

            <input
              type="text"
              className={clsx(
                archivo.className,
                "w-full border border-primary-600 h-12 rounded-md px-4"
              )}
              placeholder="Please enter your City..."
            />
            
            <input
              type="text"
              className={clsx(
                archivo.className,
                "w-full border border-primary-600 h-12 rounded-md px-4"
              )}
              placeholder="Please enter your Country..."
            />

            <Button className="w-full lg:w-auto self-end">Send</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SubscribeModal;
