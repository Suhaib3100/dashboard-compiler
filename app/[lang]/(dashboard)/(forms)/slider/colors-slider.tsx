"use client"
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

export default ColorsSlider;