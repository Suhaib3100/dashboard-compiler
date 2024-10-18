export const defaultSlider = `"use client";
import { Slider } from "@/components/ui/slider";
const DefaultSlider = () => {
  return (
    <div className=" space-y-10">
      <Slider defaultValue={[75]} />
    </div>
  );
};

export default DefaultSlider;
`;
export const disabledSlider = `"use client"
import { Slider } from "@/components/ui/slider";
const DisabledSlider = () => {
  return (
    <div>
      <Slider defaultValue={[70]} disabled />
    </div>

  );
};

export default DisabledSlider;`;
export const colorsSlider = `"use client"
import { Slider } from "@/components/ui/slider";
const ColorsSlider = () => {
  return (
    <div className="flex flex-col gap-7">
      <Slider defaultValue={[90]} color="primary" />
      <Slider defaultValue={[40]} color="info" />
      <Slider defaultValue={[60]} color="warning" />
      <Slider defaultValue={[80]} color="success" />
      <Slider defaultValue={[50]} color="destructive" />
      <Slider defaultValue={[50]} color="dark" />
    </div>

  );
};

export default ColorsSlider;`;
export const sizesSlider = `"use client";
import { Slider } from "@/components/ui/slider";
const SizesSlider = () => {
  return (
    <div className="flex flex-col gap-7">
      <Slider defaultValue={[90]} size="sm" />
      <Slider defaultValue={[40]} size="md" />
      <Slider defaultValue={[60]} size="lg" />
      <Slider defaultValue={[80]} size="xl" />
    </div>
  );
};

export default SizesSlider;
`;
export const minMaxSlider = `"use client"
import { Slider } from "@/components/ui/slider";
const MinMaxSlider = () => {
  return (
    <div>
      <Slider defaultValue={[50]} min={30} max={80} />
    </div>

  );
};

export default MinMaxSlider;`;
export const stepsSlider = `"use client"
import { Slider } from "@/components/ui/slider";
const StepsSlider = () => {
  return (
    <div>
      <Slider defaultValue={[50]} min={30} max={80} step={5} color="success" />
    </div>

  );
};

export default StepsSlider;`;
export const multipleValueSlider = `"use client"
import { Slider } from "@/components/ui/slider";
const MultipleValueSlider = () => {
  return (
    <div>
      <Slider defaultValue={[25, 75]} />
    </div>

  );
};

export default MultipleValueSlider;`;
export const verticalSlider = `"use client";
import { Slider } from "@/components/ui/slider";

const VerticalSlider = () => {
  return (
    <div className="flex mx-auto justify-between max-w-3xl h-[248px] gap-6 w-full">
      <Slider defaultValue={[33]} max={100} step={1} orientation="vertical" />

      <Slider
        step={4}
        max={100}
        min={0}
        orientation="vertical"
        marks={[
          {
            value: 30,
            label: "30%",
          },
          {
            value: 60,
            label: "60%",
          },
          {
            value: 90,
            label: "90%",
          },
        ]}
        defaultValue={[30]}
      />
      <Slider
        defaultValue={[33, 80]}
        max={100}
        step={1}
        orientation="vertical"
      />
      <Slider
        defaultValue={[80]}
        max={100}
        step={1}
        orientation="vertical"
        marks={[
          {
            value: 20,
            label: "20%",
          },
          {
            value: 50,
            label: "50%",
          },
          {
            value: 80,
            label: "80%",
          },
        ]}
      />
    </div>
  );
};

export default VerticalSlider;
`;
export const labelSlider = `"use client";
import { Slider } from "@/components/ui/slider";

const LabelSlider = () => {
  return (
    <div className="space-y-12 mb-10">
      <Slider
        step={4}
        max={100}
        min={0}
        marks={[
          {
            value: 30,
            label: "30%",
          },
          {
            value: 60,
            label: "60%",
          },
          {
            value: 90,
            label: "90%",
          },
        ]}
        defaultValue={[30]}
      />
      <Slider
        step={4}
        max={100}
        color="success"
        min={0}
        marks={[
          {
            value: 20,
            label: "20%",
          },
          {
            value: 50,
            label: "50%",
          },
          {
            value: 80,
            label: "80%",
          },
        ]}
        defaultValue={[20]}
      />
    </div>
  );
};

export default LabelSlider;
`;
export const tooltipSlider = `"use client";
import { Slider } from "@/components/ui/slider";
const TooltipSlider = () => {
  return (
    <div>
      <Slider defaultValue={[25]} showTooltip color="primary" />
    </div>
  );
};

export default TooltipSlider;
`;
export const showStepSlider = `"use client";
import { Slider } from "@/components/ui/slider";

const ShowStepSlider = () => {
  return (
    <>
      {" "}
      <Slider
        size="sm"
        step={2}
        showSteps={true}
        max={40}
        min={0}
        defaultValue={[10]}
      />{" "}
      <Slider
        step={0.1}
        showSteps={true}
        max={1}
        min={0}
        defaultValue={[0.4]}
      />
    </>
  );
};

export default ShowStepSlider;
`;
