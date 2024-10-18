export const basicAccordion = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BasicAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full  space-y-3.5">
      <AccordionItem value="item-1">
        <AccordionTrigger >Accordion 1</AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger >Accordion 2</AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger >Accordion 3</AccordionTrigger>
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

export default BasicAccordion;
`;
export const accordionWithOutArrow = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionWithOutArrow = () => {
  return (
    <Accordion type="single" collapsible className="w-full  space-y-3.5">
      <AccordionItem value="item-1">
        <AccordionTrigger arrow>Accordion 1</AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger arrow>Accordion 2</AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger arrow>Accordion 3</AccordionTrigger>
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

export default AccordionWithOutArrow;
`;
export const accordionSubtitle = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionSubtitle = () => {
  return (
    <Accordion type="single" collapsible className="w-full  space-y-3.5">
      <AccordionItem value="item-1">
        <AccordionTrigger>
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
        <AccordionTrigger>
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
        <AccordionTrigger>
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

export default AccordionSubtitle;
`;
export const accordionBorder = `import {
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
      className="w-full border rounded-md divide-y "
    >
      <AccordionItem value="item-1" className=" shadow-none  rounded-none">
        <AccordionTrigger>Accordion 1</AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className=" shadow-none  rounded-none">
        <AccordionTrigger>Accordion 3</AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className=" shadow-none  rounded-none">
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
`;
export const accordionWithIcon = `import {
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
`;
export const collapseIconAccordion = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger as Trigger,
} from "@/components/ui/accordion";
import { Icon } from "@iconify/react";
import { useState } from "react";

const CollapseIconAccordion = () => {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <Accordion type="single" collapsible className="w-full  space-y-3.5">
      <AccordionItem value="item-1">
        <AccordionTrigger
          value="item-1"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        >
          Accordion 1
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
          Accordion 2
        </AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie..
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger
          value="item-3"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        >
          Accordion 3
        </AccordionTrigger>
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

export default CollapseIconAccordion;
`;
export const simpleAccordion = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SimpleAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full  space-y-3.5">
      <AccordionItem value="item-1">
        <AccordionTrigger className="[&[data-state=open]]:bg-accent -my-3.5 -mx-4 rounded-t-md px-4 py-3.5">
          Accordion 1
        </AccordionTrigger>
        <AccordionContent className="[&[data-state=open]>div]:pt-7">
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="[&[data-state=open]]:bg-accent -my-3.5 -mx-4 rounded-t-md px-4 py-3.5">
          Accordion 2
        </AccordionTrigger>
        <AccordionContent className="[&[data-state=open]>div]:pt-7">
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="[&[data-state=open]]:bg-accent -my-3.5 -mx-4 rounded-t-md px-4 py-3.5">
          Accordion 3
        </AccordionTrigger>
        <AccordionContent className="[&[data-state=open]>div]:pt-7">
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
`;
export const additionalActions = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger as Trigger,
} from "@/components/ui/accordion";
import { Icon } from "@iconify/react";
import { useState } from "react";

const AdditionalActions = () => {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <Accordion type="single" collapsible className="w-full  space-y-3.5">
      <AccordionItem value="item-1">
        <AccordionTrigger
          value="item-1"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        >
          Accordion 1
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
          Accordion 2
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
          Accordion 3
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

export default AdditionalActions;
`;
export const accordionWithContent = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger as Trigger,
} from "@/components/ui/accordion";
import { useState } from "react";


const AccordionWithContent = () => {
  const [activeItem, setActiveItem] = useState(null);
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
`;
export const customIndicator = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon } from "@iconify/react";

const CustomIndicator = () => {
  return (
    <Accordion type="single" collapsible className="w-full  space-y-3.5">
      <AccordionItem value="item-1">
        <AccordionTrigger arrow>
          Link
          <Icon icon="heroicons:link" />
        </AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger arrow>
          Moon
          <Icon icon="heroicons:moon" />
        </AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger arrow>
          Sun
          <Icon icon="heroicons:sun" />
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

export default CustomIndicator;
`;
