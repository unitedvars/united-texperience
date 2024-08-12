import clsx from "clsx";
import Image from "next/image";

const Logo = ({
  className,
  variant = "logo",
}: {
  className?: string;
  variant?: "logo" | "isologo";
}) => {
  return (
    <div
      className={clsx(
        "relative",
        className,
        variant === "logo" ? "w-[53px] h-[66px]" : "w-56 h-28"
      )}
    >
      <Image
        src={variant === "logo" ? "/common/Logo.svg" : "/common/Isologo.svg"}
        fill
        alt="609"
      />
    </div>
  );
};

export default Logo;
