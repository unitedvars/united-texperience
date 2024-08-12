import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { orbitron } from "@/utils/fonts";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={clsx(
        props.className,
        "bg-secondary-600 text-secondary-100  flex items-center justify-center h-[48px] text-white px-8 rounded bg-button-gradient ",
        orbitron.className
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
