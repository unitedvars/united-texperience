import clsx from "clsx";
import Image from "next/image";

const Logo = ({ className }: { className: string }) => {
  return (
    <div className={clsx("relative w-[53px] h-[66px]", className)}>
      <Image src="/common/logo.png" fill alt="609" />
    </div>
  );
};

export default Logo;
