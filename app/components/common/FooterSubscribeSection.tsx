"use client"
import { useState } from "react";
import SubscribeModal from "./SubscribeModal";
import Button from "./Button";

const FooterSubscribeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubscribeClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex items-end flex-col lg:w-1/2 gap-2">
        <div className="flex flex-col lg:items-end">
          {/* ... other content */}
        </div>
        <Button
          className="w-2/5"
          onClick={handleSubscribeClick}
        >
          Subscribe
        </Button>
      </div>
      <SubscribeModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};

export default FooterSubscribeSection;