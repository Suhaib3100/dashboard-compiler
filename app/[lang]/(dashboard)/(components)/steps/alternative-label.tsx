"use client";
import {
  Stepper,
  Step,
  StepLabel,
  StepDescription,
} from "@/components/ui/steps";
import { useMediaQuery } from "@/hooks/use-media-query";
const AlterNativeLabel = () => {
  const steps:string[] = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <Stepper
          current={1}
          alternativeLabel
          direction={isTablet ? "vertical" : "horizontal"}
        >
          {steps?.map((label, i) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepDescription>Paragraph Text</StepDescription>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
};

export default AlterNativeLabel;
