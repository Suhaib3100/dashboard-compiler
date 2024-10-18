"use client";
import Card from "@/components/ui/card-snippet";
import DefaultCheckbox from "./default-checkbox";
import DisabledCheckbox from "./disabled-checkbox";
import SizeCheckbox from "./size-checkbox";
import FilledCheckbox from "./filled-checkbox";
import CircleCheckbox from "./circle-checkbox";
import OutlineCheckbox from "./outline-checkbox";
import OutlineFilledCheckbox from "./outline-filled-checkbox";
import OutlineCircleCheckbox from "./outline-circle-checkbox";
import CheckboxRight from "./checkbox-right";
import ColorsCheckbox from "./colors-checkbox";
import ColorOutlineCheckbox from "./color-outline-checkbox";
import RadiusCheckbox from "./radius-checkbox";
import OptionArrayCheckbox from "./option-array-checkbox";
import ControlledCheckbox from "./controlled-checkbox";
import LineThroughCheckbox from "./line-through-checkbox";
import LabelSlotCheckbox from "./label-slot-checkbox";
import CustomImplementation from "./custom-implementation";
import IconsCheckbox from "./icons-checkbox";
import AccessibleCheckbox from "./accessible-checkbox";
import CheckboxWithBackground from "./checkbox-with-bg";
import CustomStyledCheckbox from "./custom-style-checkbox";
import GroupedLabelCheckbox from "./grouped-label-checkbox";
import CheckboxCards from "./checkbox-cards";
import LabelPlacement from "./label-placement";
import HorizontalCheckbox from "./horizontal-checkbox";
import VerticalCheckbox from "./vertical-checkbox";
import BulkSelectCheckbox from "./custom-checkbox";
import {
  accessibleCheckbox,
  bulkSelectCheckbox,
  checkboxCards,
  checkboxRight,
  checkboxWithBackground,
  circleCheckbox,
  colorOutlineCheckbox,
  colorsCheckbox,
  controlledCheckbox,
  customImplementation,
  customStyledCheckbox,
  defaultCheckbox,
  disabledCheckbox,
  filledCheckbox,
  groupedLabelCheckbox,
  horizontalCheckbox,
  iconsCheckbox,
  labelPlacement,
  labelSlotCheckbox,
  lineThroughCheckbox,
  optionArrayCheckbox,
  outlineCheckbox,
  outlineCircleCheckbox,
  outlineFilledCheckbox,
  radiusCheckbox,
  sizeCheckbox,
  verticalCheckbox,
} from "./source-code";
const CheckBoxPage = () => {
  return (
    <div className="space-y-5">
      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card title="Default Checkbox" code={defaultCheckbox}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            <code className="text-primary">Checkbox</code> component are use to
            reserve and show radio button with label in it.
          </p>
          <DefaultCheckbox />
        </Card>
        <Card title="Disabled Checkbox" code={disabledCheckbox}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            Checkbox component with
            <code className="text-primary"> disabled </code>props makes checkbox
            component disabled.
          </p>
          <DisabledCheckbox />
        </Card>
      </div>
      <Card title="Sizes Checkbox" code={sizeCheckbox}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Checkbox component with
          <code className="text-primary"> size </code> props with different
          value makes checkbox size different.
        </p>
        <SizeCheckbox />
      </Card>
      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card title="Filled Checkbox" code={filledCheckbox}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            Checkbox component with
            <code className="text-primary"> variant </code> props for filled
            value checkbox component will be filled with shadow.
          </p>
          <FilledCheckbox />
        </Card>
        <Card title="Circle Checkbox" code={circleCheckbox}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            Checkbox component with
            <code className="text-primary"> radius="xl" </code> props value
            checkbox component will be circled.
          </p>
          <CircleCheckbox />
        </Card>
        <Card title="Outlined Checkbox" code={outlineCheckbox}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            Checkbox component with
            <code className="text-primary"> variant </code> props for outline
            value checkbox component will be filled with white background and
            checked with color.
          </p>
          <OutlineCheckbox />
        </Card>
        <Card title="Outlined Filled Checkbox" code={outlineFilledCheckbox}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            Checkbox component with
            <code className="text-primary"> variant </code> props for
            outline-filled value checkbox component will be filled with white
            background and checked with color and unchecked checkbox background
            will be shadowed.
          </p>
          <OutlineFilledCheckbox />
        </Card>
        <Card title="Outlined Circle Checkbox" code={outlineCircleCheckbox}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            Checkbox component with
            <code className="text-primary"> variant </code> props for
            outline-filled value checkbox component will be filled with white
            background and <code className="text-primary"> radius="xl" </code>{" "}
            props value checkbox component will be circled.
          </p>
          <OutlineCircleCheckbox />
        </Card>
        <Card title="Checkbox Right" code={checkboxRight}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            By alternating the place of{" "}
            <code className="text-primary">Label</code> and
            <code className="text-primary">Checkbox</code> checkbox can be take
            right.
          </p>
          <CheckboxRight />
        </Card>
      </div>
      <Card title="Colors Checkbox" code={colorsCheckbox}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Checkbox component with
          <code className="text-primary"> color </code> props for checkbox
          component will be filled with different background.
        </p>
        <ColorsCheckbox />
      </Card>
      <Card title="Colors Outline Checkbox" code={colorOutlineCheckbox}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Checkbox component with <code className="text-primary"> color </code>{" "}
          props and
          <code className="text-primary"> variant </code> props for outline
          value checkbox component will be filled with white background and
          checked with color.
        </p>
        <ColorOutlineCheckbox />
      </Card>
      <Card title="Radius Checkbox" code={radiusCheckbox}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Checkbox component with
          <code className="text-primary"> radius </code> props with different
          value checkbox component will be circled differently.
        </p>
        <RadiusCheckbox />
      </Card>
      <Card title="Icons Checkbox" code={iconsCheckbox}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Checkbox component with
          <code className="text-primary"> icon </code> props with value
          component for icon in checkbox component will be replaced with icon.
        </p>
        <IconsCheckbox />
      </Card>

      <div className="grid grid-cols-2  gap-6">
        <div className="col-span-2 lg:col-span-1">
          <Card title="Option Array Checkbox" code={optionArrayCheckbox}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              Checkbox component with different option's value will be shown
              when the checkbox will checked and it will display as a array and
              there will nothing to show when noting to change.
            </p>
            <OptionArrayCheckbox />
          </Card>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <Card title="Controlled Checkbox" code={controlledCheckbox}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              The value will be true when the checkbox is checked and the value
              will be false when it is not.
            </p>
            <ControlledCheckbox />
          </Card>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <Card title="Line Through Checkbox" code={lineThroughCheckbox}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              Checkbox component with
              <code className="text-primary"> lineThrough </code> props will
              make a line on label when it is checked.
            </p>
            <LineThroughCheckbox />
          </Card>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Card title="Label Slot Checkbox" code={labelSlotCheckbox}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              <code className="text-primary">Label</code> component can be
              passed in
              <code className="text-primary">Checkbox</code> component as a slot
              and customize it.
            </p>
            <LabelSlotCheckbox />
          </Card>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <Card title="Horizontal Checkbox" code={horizontalCheckbox}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              <code className="text-primary">Checkbox</code> component can
              placed horizontally.
            </p>
            <HorizontalCheckbox />
          </Card>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <Card title="Accessible Checkbox" code={accessibleCheckbox}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              <code className="text-primary">Checkbox</code> component wrap in
              different tag and show label color and checkbox color accordingly
              with dynamic css class.
            </p>
            <AccessibleCheckbox />
          </Card>
        </div>
        
        <div className="col-span-2 lg:col-span-1">
          <Card title="Vertical Checkbox" code={verticalCheckbox}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              <code className="text-primary">Checkbox</code> component can
              placed vertically.
            </p>
            <VerticalCheckbox />
          </Card>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <Card title="Custom Implement Checkbox" code={customImplementation}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              When the <code className="text-primary">checkbox</code> is checked
              the component will active.
            </p>
            <div className=" space-y-5">
              <CustomImplementation />
            </div>
          </Card>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Card title="Checkbox With Background" code={checkboxWithBackground}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              <code className="text-primary">Checkbox</code> component change
              background by checking the value with
              <code className="text-primary"> onCheckedChange</code>.
            </p>
            <CheckboxWithBackground />
          </Card>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Card title="Label Placement" code={labelPlacement}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              By alternating the place of{" "}
              <code className="text-primary">Label</code> and
              <code className="text-primary"> Checkbox</code> component can be
              positioned anywhere by using css class.
            </p>
            <LabelPlacement />
          </Card>
        </div>

        <div className="col-span-2">
          <Card title="Custom Style Checkbox" code={customStyledCheckbox}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              <code className="text-primary">Checkbox</code> component change
              outline and status by checking the value with
              <code className="text-primary"> onCheckedChange</code> and styled
              it as a profile.
            </p>
            <CustomStyledCheckbox />
          </Card>
        </div>

        <div className="col-span-2">
          <Card title="Grouped Label Checkbox" code={groupedLabelCheckbox}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              <code className="text-primary">Checkbox</code> component change
              value and status with
              <code className="text-primary"> onCheckedChange</code> of group
              component as a single tile wrapped by
              <code className="text-primary"> Label</code> with dynamic css
              class.
            </p>
            <GroupedLabelCheckbox />
          </Card>
        </div>

        <div className="col-span-2">
          <Card title="Checkbox Cards" code={checkboxCards}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              <code className="text-primary">Checkbox</code> component change
              value and status with
              <code className="text-primary"> onCheckedChange</code> of group
              component as a single tile wrapped by
              <code className="text-primary"> Label</code> with dynamic css
              class.
            </p>
            <CheckboxCards />
          </Card>
        </div>
        <div className="col-span-2">
          <Card title="Bulk Select Checkbox" code={bulkSelectCheckbox}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              <code className="text-primary">Checkbox</code> component are use
              to reserve and show radio button with label in it and here is
              bunch of those together.
            </p>
            <BulkSelectCheckbox />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckBoxPage;
