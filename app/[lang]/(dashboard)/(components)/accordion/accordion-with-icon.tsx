import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon } from "@iconify/react";

const AccordionWithIcon = () => {
  return (
    <Accordion type="single" collapsible className="w-full  space-y-3.5">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center space-x-2">
            <div>
              <Icon icon="heroicons:squares-2x2" className=" h-4 w-4" />
            </div>
            <div>Accordion 1</div>
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
        <AccordionTrigger>
          <div className="flex items-center space-x-2">
            <div>
              <Icon icon="heroicons:square-3-stack-3d" className=" h-4 w-4" />
            </div>
            <div>Accordion 2</div>
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
        <AccordionTrigger>
          <div className="flex items-center space-x-2">
            <div>
              <Icon icon="heroicons:star" className=" h-4 w-4" />
            </div>
            <div>Accordion 3</div>
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

export default AccordionWithIcon;
