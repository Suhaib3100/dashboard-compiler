import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SimpleAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full  space-y-3.5">
      <AccordionItem value="item-1">
        <AccordionTrigger className="[&[data-state=open]]:bg-accent dark:[&[data-state=open]]:bg-default-50 -my-3.5 -mx-4 rounded-t-md px-4 py-3.5">
          Accordion 1
        </AccordionTrigger>
        <AccordionContent className="[&[data-state=open]>div]:pt-7  ">
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="[&[data-state=open]]:bg-accent dark:[&[data-state=open]]:bg-default-50 -my-3.5 -mx-4 rounded-t-md px-4 py-3.5">
          Accordion 2
        </AccordionTrigger>
        <AccordionContent className="[&[data-state=open]>div]:pt-7  ">
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="[&[data-state=open]]:bg-accent dark:[&[data-state=open]]:bg-default-50 -my-3.5 -mx-4 rounded-t-md px-4 py-3.5">
          Accordion 3
        </AccordionTrigger>
        <AccordionContent className="[&[data-state=open]>div]:pt-7  ">
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SimpleAccordion;
