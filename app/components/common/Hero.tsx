import Image from "next/image";

const Hero = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="h-[350px] w-full relative">
      <Image src={imageUrl} fill alt="609" className="object-cover"></Image>
    </div>
  );
};

export default Hero;
