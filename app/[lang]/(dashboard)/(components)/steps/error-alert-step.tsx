"use client";
import {
  Stepper,
  Step,
  StepLabel,
} from "@/components/ui/steps";
import { useMediaQuery } from "@/hooks/use-media-query";
const ErrorAlertSteps = () => {
  const steps:string[] = ["Step 1", "Step 2", "Step 3"];
  const isStepFailed = (step:number) => {
    return step === 1;
  };
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <div className="max-w-5xl">
      <Stepper
        current={1}
        status="error"
        content="right"
        direction={isTablet ? "vertical":"horizontal"}
      >
        {steps.map((label, index) => {
          const labelProps:any = {};
          if (isStepFailed(index)) {
            labelProps.optional = (
              <StepLabel className=" text-destructive">Alert message</StepLabel>
            );

            labelProps.error = true;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

export default ErrorAlertSteps;
