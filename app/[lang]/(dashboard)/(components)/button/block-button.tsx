"use client"
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
const BlockButton = () => {
  return (
    <>
      <Button className="w-full">Primary</Button>
      <Button className="w-full" color="success">
        <Icon icon="heroicons:heart-20-solid" className="w-6 h-6 ltr:mr-2 rtl:ml-2 " />
        Icon Left
      </Button>
      <Button className="w-full" color="warning">
        Icon Right Outline
        <Icon icon="heroicons:heart-20-solid" className="w-6 h-6 ltr:ml-2 rtl:mr-2 " />
      </Button>
    </>
  );
};

export default BlockButton;
