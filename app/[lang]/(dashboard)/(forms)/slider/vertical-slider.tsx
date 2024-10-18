"use client";
import { Slider } from "@/components/ui/slider";

const VerticalSlider = () => {
  return (
    <div className="flex sm:mx-auto justify-around max-w-3xl h-[248px] gap-2 sm:gap-6 w-11/12 sm:w-full">
      <Slider
        showTooltip
        defaultValue={[33]}
        max={100}
        step={1}
        orientation="vertical"
      />
      <Slider
        step={4}
        max={100}
        min={0}
        orientation="vertical"
        marks={[
          {
            value: 70,
            label: "30%",
          },
          {
            value: 40,
            label: "60%",
          },
          {
            value: 10,
            label: "90%",
          },
        ]}
        defaultValue={[30]}
      />

      <Slider
        defaultValue={[33, 80]}
        showTooltip
        max={100}
        step={3}
        min={0}
        orientation="vertical"
        marks={[
          {
            value: 20,
            label: "80%",
          },
          {
            value: 67,
            label: "33%",
          },
        ]}
      />
      <Slider
        defaultValue={[80]}
        max={100}
        step={3}
        min={0}
        orientation="vertical"
        marks={[
          {
            value: 20,
            label: "80%",
          },
        ]}
      />
    </div>
  );
};

export default VerticalSlider;
