"use client";
import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepDescription,
} from "@/components/ui/steps";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
const VStepsWithContent = () => {
  const steps = [
    {
      label: "Select campaign settings",
      description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "Create an ad group",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Create an ad",
      description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
  ];
  const [activestep, setActiveStep] = React.useState<number>(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div>
      <Stepper current={activestep} direction="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} className="min-h-[50px]">
            <StepLabel className="font-semibold text-base">
              {step.label}
            </StepLabel>
            <Collapsible open={activestep === index}>
              <CollapsibleContent className="CollapsibleContent">
                <StepDescription className="max-w-[300px]">
                  <div className=" text-sm">
                    {step.description}
                  </div>
                  <div className="mb-2">
                    <div className="flex gap-x-3 mt-2 mb-4">
                      {index === steps.length - 1 ? (
                        <Button
                          size="xs"
                          color="success"
                          onClick={handleNext}
                        >
                          Finish
                        </Button>
                      ) : (
                        <Button
                          size="xs"

                          onClick={handleNext}
                        >
                          Continue
                        </Button>
                      )}

                      <Button
                        size="xs"
                        variant="outline"
                        disabled={index === 0}
                        onClick={handleBack}
                      >
                        Back
                      </Button>
                    </div>
                  </div>
                </StepDescription>
              </CollapsibleContent>
            </Collapsible>
          </Step>
        ))}
      </Stepper>
      {activestep === steps.length && (
        <div>
          <div className="font-semibold mb-3">All steps completed - you're finished</div>
          <Button color="destructive" size="xs" onClick={handleReset}>
            Reset
          </Button>
        </div>
      )}
    </div>
  );
};

export default VStepsWithContent;
