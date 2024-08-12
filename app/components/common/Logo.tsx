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
        variant === "logo"
          ? "w-[32px] h-[32px] lg:w-[53px] lg:h-[66px]"
          : "w-36 h-20 lg:w-56 lg:h-28"
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
