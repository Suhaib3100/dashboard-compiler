"use client";

import { Stepper, Step, StepLabel } from "@/components/ui/steps";

const VSteps = () => {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  return (
    <div className="max-w-xl">
      <Stepper current={3} direction="vertical">
        {steps?.map((label, i) => (
          <Step key={label}>
            <StepLabel >{label}</StepLabel>
            <StepLabel className="text-xs">Paragraph Text</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default VSteps;
