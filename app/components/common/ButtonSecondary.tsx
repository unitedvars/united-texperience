import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { orbitron } from "@/utils/fonts";

const ButtonSecondary = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={clsx(
        props.className,
        "text-secondary-100 flex items-center justify-center h-[48px] text-[#004A77] px-8 rounded border-2 border-[#004A77] transition",
        orbitron.className
      )}
    >
      {props.children}
    </button>
  );
};

export default ButtonSecondary;
