"use client";
import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepDescription,
} from "@/components/ui/steps";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

const StepsWithAction = () => {
  const [activestep, setActiveStep] = React.useState<number>(0);
  const [skipped, setSkipped] = React.useState<Set<number>>(new Set());
  const steps = ["Step 1", "Step 2", "Step 3"];
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activestep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activestep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="max-w-5xl">
      <Stepper
        className="my-4"
        current={activestep}
        content="right"
        direction={isTablet ? "vertical" : "horizontal"}
      >
        {steps?.map((label, i) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          if (isStepOptional(i)) {
            labelProps.optional = (
              <StepLabel>Optional</StepLabel>
            );
          }

          return (
            <Step key={label} {...stepProps}>
              <StepLabel className="  mb-0.5 text-foreground">
                {label}
              </StepLabel>
              <StepDescription className=" text-xs">
                Paragraph Text
              </StepDescription>
            </Step>
          );
        })}
      </Stepper>
      {activestep === steps.length ? (
        <React.Fragment>
          <div className="flex pt-2">
            <div className=" flex-1 mb-1 " />
            <Button
              size="xs"
              variant="outline"
              color="destructive"
              className="cursor-pointer"
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="flex pt-2 ">
            <Button
              size="xs"
              variant="outline"
              color="secondary"
              className="cursor-pointer"
              disabled={activestep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <div className="flex-1	gap-4 " />
            <div className="flex	gap-2 ">
              {activestep === steps.length - 1 ? (
                <Button
                  size="xs"
                  variant="outline"
                  color="success"
                  className="cursor-pointer"
                  onClick={handleNext}
                >
                  Finish
                </Button>
              ) : (
                <Button
                  size="xs"
                  variant="outline"
                  color="secondary"
                  className="cursor-pointer"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default StepsWithAction;
