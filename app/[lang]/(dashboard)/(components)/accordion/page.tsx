"use client";
import Card from "@/components/ui/card-snippet";
import BasicAccordion from "./basic-accordion";
import AccordionWithOutArrow from "./accordion-without-arrow";
import AccordionSubtitle from "./accordion-with-subtitle";
import AccordionBorder from "./accordion-with-border";
import CollapseIconAccordion from "./collapse-icon-accordion";
import AccordionWithIcon from "./accordion-with-icon";
import AdditionalActions from "./additional-actions";
import SimpleAccordion from "./simple-accordion";
import AccordionWithContent from "./accordion-with-content";
import CustomIndicator from "./custom-indicator";
import {
  accordionBorder,
  accordionSubtitle,
  accordionWithContent,
  accordionWithIcon,
  accordionWithOutArrow,
  additionalActions,
  basicAccordion,
  collapseIconAccordion,
  customIndicator,
  simpleAccordion,
} from "./source-code";

const AccordionPage = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
      <Card title="Basic  Accordion" code={basicAccordion}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">collapsible</code> prop is used to
          collapse the Accordion.
        </p>
        <BasicAccordion />
      </Card>
      <Card title="Accordion Without Arrow " code={accordionWithOutArrow}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">arrow</code> prop is used to hide
          the arrow icon in Accordion.
        </p>
        <AccordionWithOutArrow />
      </Card>
      <Card title="Accordion With Subtitle " code={accordionSubtitle}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">subtitle</code> is used to show a
          short description of the topic.
        </p>
        <AccordionSubtitle />
      </Card>
      <Card title="Accordion With Border " code={accordionBorder}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">border</code> is used to show
          border to the accordion.
        </p>
        <AccordionBorder />
      </Card>
      <Card title="Collapse Icon Accordion " code={collapseIconAccordion}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">icon</code> is used to change when
          the accordion is open or close .
        </p>
        <CollapseIconAccordion />
      </Card>
      <Card title="Accordion With Icon" code={accordionWithIcon}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">icon</code> is indicating the
          related topic.
        </p>
        <AccordionWithIcon />
      </Card>
      <Card title="Simple Accordion" code={simpleAccordion}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Accordion</code> is basic accordion
          that simply collapse and show data.
        </p>
        <SimpleAccordion />
      </Card>
      <Card title="Additional Actions" code={additionalActions}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">checkbox</code> is the action that
          act like collapsible icon.
        </p>
        <AdditionalActions />
      </Card>
      <Card title="Accordion With Content" code={accordionWithContent}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">content </code> is the presentation
          of the accordion thumb that helps understand the details.
        </p>
        <AccordionWithContent />
      </Card>
      <Card title="Custom Indicator" code={customIndicator}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">indicator</code> that alternate the
          icon presentation of the accordion.
        </p>
        <CustomIndicator />
      </Card>
    </div>
  );
};

export default AccordionPage;
