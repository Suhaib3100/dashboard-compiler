"use client";
import React from "react";
import { Stepper, Step, StepLabel } from "@/components/ui/steps";
const VStepsLineSpace = () => {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  return (
    <div className="max-w-xl">
      <Stepper current={3} direction="vertical" gap>
        {steps?.map((label, i) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default VStepsLineSpace;
