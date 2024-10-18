"use client"
import { Slider } from "@/components/ui/slider";
const DisabledSlider = () => {
  return (
    <Slider defaultValue={[70]} disabled />
  );
};

export default DisabledSlider;