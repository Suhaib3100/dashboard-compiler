"use client";
import { Slider } from "@/components/ui/slider";

const ShowStepSlider = () => {
  return (
    <>
      <Slider
        size="sm"
        step={2}
        showSteps={true}
        max={40}
        min={0}
        defaultValue={[10]}
      />
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
