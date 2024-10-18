"use client";

import Card from "@/components/ui/card-snippet";
import DefaultSlider from "./default-slider";
import DisabledSlider from "./disabled-slider";
import MinMaxSlider from "./min-max-slider";
import StepsSlider from "./steps-slider";
import ColorsSlider from "./colors-slider";
import SizesSlider from "./sizes-slider";
import MultipleValueSlider from "./slider-with-multiplevalue";
import {
  colorsSlider,
  defaultSlider,
  disabledSlider,
  labelSlider,
  minMaxSlider,
  multipleValueSlider,
  sizesSlider,
  stepsSlider,
  tooltipSlider,
  verticalSlider,
} from "./source-code";
import VerticalSlider from "./vertical-slider";
import LabelSlider from "./label-slider";
import TooltipSlider from "./tooltip-slider";
const RangeSliderPage = () => {
  return (
    <div className=" grid grid-cols-1 xl:grid-cols-2 gap-6">
      <Card title="Default Slider" code={defaultSlider}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> Slider</code> component make with
          default value make range slider visible.
        </p>
        <DefaultSlider />
      </Card>
      <Card title="Disabled Slider" code={disabledSlider}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> disabled</code> prop in
          <code className="text-primary"> Slider</code> component make range
          slider disabled.
        </p>
        <DisabledSlider />
      </Card>
      <Card title="Tooltip Slider" code={tooltipSlider}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> showTooltip</code> prop in
          <code className="text-primary"> Slider</code> component make range
          slider show tooltip on long hover.
        </p>
        <TooltipSlider />
      </Card>
      <Card title="Min & Max" code={minMaxSlider}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> min </code>and
          <code className="text-primary"> max </code> prop in
          <code className="text-primary"> Slider</code> component make a bound
          on with minimum and maximum value slider.
        </p>
        <MinMaxSlider />
      </Card>
      <Card title="Steps Slider" code={stepsSlider}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> min </code>and
          <code className="text-primary"> max </code> prop in
          <code className="text-primary"> Slider</code> component make a bound
          on with minimum and maximum value slider also{" "}
          <code className="text-primary"> showSteps </code>prop show the steps
          in range slider and
          <code className="text-primary"> step </code> prop with a value helps
          how many steps will its takes on slider.
        </p>
        <div className="space-y-5">
          <StepsSlider />
        </div>
      </Card>
      <Card title="Colors Slider" code={colorsSlider}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> color </code> prop in
          <code className="text-primary"> Slider</code> component make range
          slider colored.
        </p>
        <ColorsSlider />
      </Card>
      <Card title="Sizes Slider" code={sizesSlider}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> size </code> prop in
          <code className="text-primary"> Slider</code> component make slider in
          different size.
        </p>
        <SizesSlider />
      </Card>
      <Card title="Multiple Value Slider" code={multipleValueSlider}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> defaultValue </code> prop in
          <code className="text-primary"> Slider</code> component with two value
          in the array will make two pointer to show.
        </p>
        <MultipleValueSlider />
      </Card>
      <Card title="Label Slider" code={labelSlider}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> marks </code> prop in
          <code className="text-primary"> Slider</code> component will show
          label in label slider.
        </p>
        <LabelSlider />
      </Card>
      <Card title="Multiple Value Slider" code={verticalSlider}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> orientation="vertical" </code> prop in
          <code className="text-primary"> Slider</code> component will change
          from horizontal to vertical.
        </p>
        <VerticalSlider />
      </Card>
    </div>
  );
};

export default RangeSliderPage;
