import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionBorder = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border border-t dark:border-slate-700 rounded-md   divide-y dark:bg-accent dark:shadow-none  "
    >
      <AccordionItem
        value="item-1"
        className=" shadow-none dark:shadow-none dark:bg-accent   border-b-0 border-x-0  rounded-t"
      >
        <AccordionTrigger>Accordion 1</AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className=" shadow-none dark:shadow-none dark:bg-accent  border border-x-0 border-b-0 rounded-none"
      >
        <AccordionTrigger>Accordion 3</AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className=" shadow-none dark:shadow-none dark:bg-accent  border border-x-0  rounded-b rounded-t-none"
      >
        <AccordionTrigger>Accordion 3</AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie..
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionBorder;
