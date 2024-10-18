"use client";
import React from "react";
import { Stepper, Step, StepLabel } from "@/components/ui/steps";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
const ClickableStep = () => {
  const [activestep, setActiveStep] = React.useState<number>(0);
  const [skipped, setSkipped] = React.useState<Set<number>>(new Set());
  const steps: string[] = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
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

  const handleSkip = () => {
    if (!isStepOptional(activestep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activestep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onSubmit = () => {
    toast({
      title: "You submitted the following values:",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 top-0 right-0">
          <p className="text-primary-foreground">Done</p>
        </div>
      ),
    });
  };

  return (
    <div className="mt-4">
      <Stepper
        current={activestep}
        direction={isTablet ? "vertical" : "horizontal"}
      >
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <StepLabel>Optional</StepLabel>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activestep === steps.length ? (
        <React.Fragment>
          <div className="mt-2 mb-2 font-semibold text-center">
            All steps completed - you&apos;re finished
          </div>
          <div className="flex pt-2">
            <div className=" flex-1" />
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
          <div className=" mt-2 mb-1 text-default-900 font-semibold uppercase text-base">
            Step {activestep + 1}
          </div>
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
              {isStepOptional(activestep) && (
                <Button
                  size="xs"
                  variant="outline"
                  color="warning"
                  className="cursor-pointer"
                  onClick={handleSkip}
                >
                  Skip
                </Button>
              )}

              {activestep === steps.length - 1 ? (
                <Button
                  size="xs"
                  variant="outline"
                  color="success"
                  className="cursor-pointer"
                  onClick={() => {
                    if (onSubmit) onSubmit();
                    handleNext();
                  }}
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

export default ClickableStep;
