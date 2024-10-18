"use client";
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
