import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger as Trigger,
} from "@/components/ui/accordion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";

interface AccordionTriggerProps {
  children: React.ReactNode;
  value: string,
  activeItem: string | null;
  setActiveItem: React.Dispatch<React.SetStateAction<string | null>>
}
const AccordionTrigger = ({ children, value, activeItem, setActiveItem }: AccordionTriggerProps) => {


  const isOpen = activeItem === value;

  const toggleOpen = () => {
    setActiveItem(isOpen ? null : value);
  };
  return (
    <Trigger arrow onClick={toggleOpen}>
      <div className=" flex gap-2  items-center">
        <Avatar
          className={cn("rounded-xl", {
            "ring-1 ring-primary  ring-offset-background ring-offset-2": isOpen,
          })}
        >
          <AvatarImage src={avatar2.src} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>

        <div> {children}</div>
      </div>
    </Trigger>
  );
};

const AccordionWithContent = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  return (
    <Accordion type="single" collapsible className="w-full  space-y-3.5">
      <AccordionItem value="item-1">
        <AccordionTrigger
          value="item-1"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        >
          <div className="flex flex-col  text-start">
            <div>Accordion 1</div>
            <div className=" text-xs  text-default-600  mt-1">
              Press to expand
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          value="item-2"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        >
          <div className="flex flex-col  text-start">
            <div>Accordion 2</div>
            <div className=" text-xs  text-default-600  mt-1">
              Press to expand
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger
          value="item-3"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        >
          <div className="flex flex-col  text-start">
            <div>Accordion 3</div>
            <div className=" text-xs  text-default-600  mt-1">
              Press to expand
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionWithContent;
