"use client";
import React from "react";
import { Stepper, Step, StepLabel } from "@/components/ui/steps";
import { useMediaQuery } from "@/hooks/use-media-query";

const DefaultSteps = () => {
  
  const steps:string[] = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <Stepper current={1} direction={isTablet ? "vertical" : "horizontal"}>
      {steps?.map((label, i) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default DefaultSteps;
