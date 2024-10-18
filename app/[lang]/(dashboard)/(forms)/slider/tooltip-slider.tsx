"use client";
import { Slider } from "@/components/ui/slider";
const TooltipSlider = () => {
  return (
    <div>
      <Slider defaultValue={[25]} showTooltip color="primary" />
    </div>
  );
};

export default TooltipSlider;
