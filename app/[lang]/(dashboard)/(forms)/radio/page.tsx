"use client";
import Card from "@/components/ui/card-snippet";
import BasicRadio from "./basic-radio";
import DisabledRadio from "./disabled-radio";
import SizesRadio from "./sizes-radio";
import RadioRight from "./radio-right";
import DefaultFilled from "./default-filled";
import ColorsRadio from "./colors-radio";
import ControlledRadio from "./controlled-radio";
import DefaultRadioGroup from "./default-radio-group";
import DisabledRadioGroup from "./disabled-radio-group";
import HorizontalRadioGroup from "./horizontal-radio-group";
import VerticalRadioGroup from "./vertical-radio-group";
import LabelPlacementRadio from "./label-placement-radio";
import CustomLabel from "./custom-label";
import { labelPlacement } from "../input/source-code";
import IconInRadio from "./icon-inradio";
import LabelSlot from "./label-slot";
import CustomImplementation from "./custom-implementations";
import AccessibleRadio from "./accessible-radio";
import RadioWithBackground from "./radio-with-bg";
import CustomStyledRadio from "./custom-style-radio";
import RadioTylesGrouped from "./radio-tyles-grouped";
import RadioCards from "./radio-cards";

import {
  accessibleRadio,
  basicRadio,
  colorsRadio,
  controlledRadio,
  customImplementation,
  customLabel,
  customStyledRadio,
  defaultFilled,
  defaultRadioGroup,
  disabledRadio,
  disabledRadioGroup,
  horizontalRadioGroup,
  iconInRadio,
  labelSlot,
  radioCards,
  radioRight,
  radioTylesGrouped,
  radioWithBackground,
  sizesRadio,
} from "./source-code";

const RadioInputPage = () => {
  return (
    <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
      <Card title="Basic Radio Button" code={basicRadio}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          No <span className="text-primary">Props</span> are required for the
          default radio input.{" "}
        </p>
        <BasicRadio />
      </Card>
      <Card title="Disabled Radio Button" code={disabledRadio}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use the <span className="text-primary">disabled</span> attribute to
          deactivate the radio input.
        </p>
        <DisabledRadio />
      </Card>
      <Card title="Sizes Radio Button" code={sizesRadio}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The size prop is used to change the input radio sizes. Our available
          sizes are{" "}
          <span className="text-primary">
            extra-small(xs), small (sm), medium (md), large (lg), and
            extra-large (xl)
          </span>
          .{" "}
        </p>
        <SizesRadio />
      </Card>
      <Card title="Radio Button Right" code={radioRight}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Our design system offers flexibility; you can effortlessly shift the
          input and label to the left or right by adjusting the position of the
          label and input, or alternatively, you can modify it using the flex
          property.
        </p>
        <RadioRight />
      </Card>
      <Card title="Default Filled Radio Button" code={defaultFilled}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Default design for an active and disabled radio input field.
        </p>
        <DefaultFilled />
      </Card>
      <Card title="Colors Radio Button" code={colorsRadio}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <span className="text-primary">color</span> prop is used to change
          the input color. Our available colors are{" "}
          <span className="text-primary">
            default, primary, info, warning, success, destructive
          </span>
          .
        </p>
        <ColorsRadio />
      </Card>
      <Card title="Controlled Radio Button" code={controlledRadio}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Pass the <span className="text-primary">handleSelect</span> method
          through the <span className="text-primary">onValueChange</span> props
          to collect radio input data.
        </p>
        <ControlledRadio />
      </Card>
      <Card title="Default Radio Group" code={defaultRadioGroup}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          {" "}
          Set a default checked value in the radio input by passing it to the{" "}
          <span className="text-primary">defaultValue props</span>
          on the <span className="text-primary">RadioGroup component</span>.
        </p>
        <DefaultRadioGroup />
      </Card>
      <Card title="Disabled Radio Group" code={disabledRadioGroup}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Disable the selection by passing the{" "}
          <span className="text-primary">disabled props</span> to the{" "}
          <span className="text-primary">RadioGroup</span> component.
        </p>
        <DisabledRadioGroup />
      </Card>
      <Card title="Horizontal Radio Group" code={horizontalRadioGroup}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Our radio group inputs are horizontally aligned by default; no action
          is required.
        </p>
        <HorizontalRadioGroup />
      </Card>
      <Card title="Vertical Radio Group" code={horizontalRadioGroup}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          To vertically align the radio input, include{" "}
          <span className="text-primary">flex-col</span> in the{" "}
          <span className="text-primary">className prop</span> of the RadioGroup
          component.
        </p>
        <VerticalRadioGroup />
      </Card>
      <Card title="Label Placement Radio Button" code={labelPlacement}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Adjust the label position using custom CSS.
        </p>
        <LabelPlacementRadio />
      </Card>
      <Card title="Custom Label Radio Button" code={customLabel}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Utilize our label component to showcase the radio input label.
        </p>
        <CustomLabel />
      </Card>
      <Card title="Icons Radio Button" code={iconInRadio}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          To show icon in radio button we can use{" "}
          <code className="text-primary">icon </code> prop that passes different
          icon to show in radio button.
        </p>
        <IconInRadio />
      </Card>
      <Card title="Label Slot Radio Button" code={labelSlot}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Label slot for radio button can be use alternative of RadioButton
          Wrapper and use <code className="text-primary">Label </code> component
          to show label with the component and customize it on label.
        </p>
        <LabelSlot />
      </Card>
      <Card
        title="Custom Implementations Radio Button"
        code={customImplementation}
      >
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Custom component for radio button{" "}
          <code className="text-primary">RadioGroup </code> component wrap the
          label with the
          <code className="text-primary"> RadioGroupItem </code> to separate
          different item to select.
        </p>
        <CustomImplementation />
      </Card>
      <Card title="Accessible Radio Button " code={accessibleRadio}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Accessible button for radio button{" "}
          <code className="text-primary">RadioGroup </code> component wrap the
          label with the
          <code className="text-primary"> RadioGroupItem </code> to separate
          different item to select and use dynamic class to show selected item.
        </p>
        <AccessibleRadio />
      </Card>
      <Card title="Radio Button With Background" code={radioWithBackground}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Background radio for radio button{" "}
          <code className="text-primary">RadioGroup </code> component wrap the
          label with the
          <code className="text-primary"> RadioGroupItem </code> to separate
          different item to select and use dynamic class to show different
          background.
        </p>
        <RadioWithBackground />
      </Card>
      <div className="col-span-2">
        <Card title="Custom Style Radio Button" code={customStyledRadio}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            Custom style for radio button{" "}
            <code className="text-primary">RadioGroup </code> component wrap the
            label with the
            <code className="text-primary"> RadioGroupItem </code> to separate
            different item to select and use dynamic class to show different
            item as profile.
          </p>
          <CustomStyledRadio />
        </Card>
      </div>
      <div className="col-span-2">
        <Card
          title="Group Styled As Tiles Radio Button"
          code={radioTylesGrouped}
        >
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            Group Styled component for radio button{" "}
            <code className="text-primary">RadioGroup </code> component wrap the
            label with the
            <code className="text-primary"> RadioGroupItem </code> to separate
            different item to select and use dynamic class to show different
            item as different item.
          </p>
          <RadioTylesGrouped />
        </Card>
      </div>
      <div className="col-span-2">
        <Card title="Radio Cards" code={radioCards}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            Card Styled component for radio button{" "}
            <code className="text-primary">RadioGroup </code> component wrap the
            label with the
            <code className="text-primary"> RadioGroupItem </code> to separate
            different item to select and use dynamic class to show different
            item as different item.
          </p>
          <RadioCards />
        </Card>
      </div>
    </div>
  );
};

export default RadioInputPage;
