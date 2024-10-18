"use client"
import { Slider } from "@/components/ui/slider";
const MinMaxSlider = () => {
  return (
    <Slider defaultValue={[50]} min={30} max={80} />
  );
};

export default MinMaxSlider;