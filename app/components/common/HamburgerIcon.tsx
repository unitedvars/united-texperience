import clsx from "clsx";
import { useState } from "react";

const HamburgerIcon = ({
  className,
  onClick,
  active,
  setIsActive,
}: {
  active?: boolean;
  className?: string;
  setIsActive: (isActive: boolean) => void;
  onClick?: () => void;
}) => {
  const LINE_STYLES =
    "w-full h-0.5 bg-primary-800 transition group-hover:bg-primary-500";
  return (
    <div
      className={clsx(
        className,
        "flex flex-col h-[14px] w-[20px] justify-between cursor-pointer"
      )}
      onClick={() => {
        if (onClick) onClick();
        setIsActive(!active);
      }}
    >
      <div className={clsx(LINE_STYLES, active && "opacity-0")}></div>
      <div className="relative">
        <div
          className={clsx(
            LINE_STYLES,
            "absolute -bottom-px left-0",
            active && "rotate-45"
          )}
        ></div>
        <div
          className={clsx(
            LINE_STYLES,
            "absolute -bottom-px left-0",
            active && "-rotate-45"
          )}
        ></div>
      </div>
      <div className={clsx(LINE_STYLES, active && "opacity-0")}></div>
    </div>
  );
};

export default HamburgerIcon;
