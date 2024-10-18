"use client";
import Card from "@/components/ui/card-snippet";
import BasicTextarea from "./basic-textarea";
import LabelTextarea from "./label-textarea";
import DisplayedRows from "./displayed-rows";
import DisabledTextarea from "./disabled-textarea";
import ReadonlyTextarea from "./readonly-textarea";
import RequiredTextarea from "./required-textarea";
import TextareaWithDescription from "./textarea-with-description";
import ControlledTextarea from "./controlled-textarea";
import ColorsTextarea from "./colors-textarea";
import VariantTextarea from "./textarea-variant";
import RadiusTextarea from "./radius-textarea";
import {
  basicTextarea,
  colorsTextarea,
  controlledTextarea,
  disabledTextarea,
  displayedRows,
  labelTextarea,
  radiusTextarea,
  readonlyTextarea,
  requiredTextarea,
  textareaWithDescription,
  variantTextarea,
} from "./source-code";

const TextAreaPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="Basic Textarea" code={basicTextarea}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          No <span className="text-primary">props</span> are required when using
          the default style.
        </p>
        <BasicTextarea />
      </Card>
      <Card title="Disabled Textarea" code={disabledTextarea}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use <span className="text-primary">disabled</span> attribute to
          disable textarea.
        </p>
        <DisabledTextarea />
      </Card>
      <Card title="Readonly Textarea" code={readonlyTextarea}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Apply <span className="text-primary">the readonly attribute</span> to
          make the textarea non-editable.
        </p>
        <ReadonlyTextarea />
      </Card>
      <Card title="Label Textarea" code={labelTextarea}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use <span className="text-primary">Label</span> components for our
          label style
        </p>
        <LabelTextarea />
      </Card>
      <Card title="Required Textarea" code={requiredTextarea}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use <span className="text-primary">required</span> attribute to
          required textarea.
        </p>
        <RequiredTextarea />
      </Card>
      <Card title="Textarea with description" code={textareaWithDescription}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use the <span className="text-primary">description</span> below the
          textarea field.
        </p>
        <TextareaWithDescription />
      </Card>
      <Card title="Displayed Rows" code={displayedRows}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use the <span className="text-primary">rows</span> prop in the
          textarea field to add extra row in the field.
        </p>
        <DisplayedRows />
      </Card>
      <Card title="Colors" code={colorsTextarea}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <span className="text-primary">color</span> prop is used to change
          the textarea color. <br />
          Our available colors are{" "}
          <span className="text-primary">
            default, primary, info, warning, success, destructive
          </span>{" "}
          . <br />
          Use <span className="text-primary">variant="flat"</span> prop to flat
          style.
        </p>
        <ColorsTextarea />
      </Card>
      <Card title="Variant" code={variantTextarea}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <span className="text-primary">variant</span> property is employed
          to modify the appearance of the textarea. <br />
          Our available variant values are{" "}
          <span className="text-primary">
            flat,underlined, filled, faded, borderedfaded, bgboredered, ghost
          </span>{" "}
          . <br />
        </p>
        <VariantTextarea />
      </Card>
      <Card title="Radius" code={radiusTextarea}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <span className="text-primary">radius</span> prop is used to set
          the radius of an textarea field. <br />
          Our available radius prop values are{" "}
          <span className="text-primary">sm,md,lg,xl</span> .
        </p>
        <RadiusTextarea />
      </Card>
      <Card title="Controlled" code={controlledTextarea}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          {" "}
          No props are available here.
        </p>
        <ControlledTextarea />
      </Card>
    </div>
  );
};

export default TextAreaPage;
