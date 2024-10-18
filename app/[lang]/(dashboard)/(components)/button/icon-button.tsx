"use client"
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
const IconButton = () => {
  return (
    <>
      <Button size="icon">
        <Icon icon="heroicons:heart-20-solid" className="h-6 w-6 " />
      </Button>
      <Button size="icon" variant="outline" className="group">
        <Icon icon="heroicons:heart-20-solid" className=" h-6 w-6 " />
      </Button>
      <Button size="icon" variant="ghost" className="group">
        <Icon icon="heroicons:heart-20-solid" className=" h-6 w-6 " />
      </Button>
      <Button size="icon" className=" rounded-full">
        <Icon icon="heroicons:heart-20-solid" className=" h-6 w-6 " />
      </Button>
      <Button>
        <Icon icon="heroicons:heart-20-solid" className="w-6 h-6 ltr:mr-2 rtl:ml-2 " />
        Icon Left
      </Button>
      <Button>
        Icon Right Outline
        <Icon icon="heroicons:heart-20-solid" className="w-6 h-6 ltr:ml-2 rtl:mr-2 " />
      </Button>
    </>
  );
};

export default IconButton;
