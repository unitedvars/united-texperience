import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={clsx(
        props.className,
        "bg-secondary-600 text-secondary-100 rounded-full flex items-center justify-center h-[48px] text-2xl"
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
