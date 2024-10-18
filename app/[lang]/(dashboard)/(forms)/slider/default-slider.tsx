"use client";
import { Slider } from "@/components/ui/slider";
const DefaultSlider = () => {
  return (
    <div className="space-y-10">
      <Slider defaultValue={[75]} />
    </div>
  );
};

export default DefaultSlider;
