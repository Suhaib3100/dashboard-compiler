"use client";
import { Slider } from "@/components/ui/slider";
const StepsSlider = () => {
  return (
    <>
      <Slider defaultValue={[50]} min={30} max={80} step={5}  />
      <Slider
        size="sm"
        step={2}
        showSteps={true}
        max={40}
        min={0}
        defaultValue={[10]}
      />{" "}
      <Slider
        step={1}
        showSteps={true}
        max={10}
        min={0}
        defaultValue={[4]}
      />
    </>
  );
};

export default StepsSlider;
