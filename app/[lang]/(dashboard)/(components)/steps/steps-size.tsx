"use client";

import { Stepper, Step, StepLabel } from "@/components/ui/steps";
import { useMediaQuery } from "@/hooks/use-media-query";

const StepsSize = () => {
  const steps: string[] = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      <Stepper current={3} size="sm" direction={isTablet ? "vertical" : "horizontal"}>
        {steps?.map((label, i) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <br />
      <Stepper current={2} size="md" direction={isTablet ? "vertical" : "horizontal"}>
        {steps?.map((label, i) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <br />
      <Stepper current={4} size="lg" direction={isTablet ? "vertical" : "horizontal"}>
        {steps?.map((label, i) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <br />
      <Stepper current={1} size="xl" direction={isTablet ? "vertical" : "horizontal"}>
        {steps?.map((label, i) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default StepsSize;
