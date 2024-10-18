"use client";
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
