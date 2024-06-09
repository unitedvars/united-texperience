import clsx from "clsx";
import { useState } from "react";

const HamburgerIcon = ({
  className,
  onClick,
}: {
  className: string;
  onClick: () => void;
}) => {
  const [isActive, setIsActive] = useState(false);

  const LINE_STYLES = "w-full h-0.5 bg-primary-500 transition";
  return (
    <div
      className={clsx(
        className,
        "flex flex-col h-[14px] w-[20px] justify-between"
      )}
      onClick={() => {
        onClick();
        setIsActive(!isActive);
      }}
    >
      <div className={clsx(LINE_STYLES, isActive && "opacity-0")}></div>
      <div className="relative">
        <div
          className={clsx(
            LINE_STYLES,
            "absolute -bottom-px left-0",
            isActive && "rotate-45"
          )}
        ></div>
        <div
          className={clsx(
            LINE_STYLES,
            "absolute -bottom-px left-0",
            isActive && "-rotate-45"
          )}
        ></div>
      </div>
      <div className={clsx(LINE_STYLES, isActive && "opacity-0")}></div>
    </div>
  );
};

export default HamburgerIcon;
