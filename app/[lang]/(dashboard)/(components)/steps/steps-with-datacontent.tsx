"use client";
import { Icon } from "@iconify/react";
import {
  Stepper,
  Step,
  StepLabel,
  StepDescription,
} from "@/components/ui/steps";
import { AlarmClockOff } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
const StepsWithDataContent = () => {
  const steps = [
    {
      label: "Step 1",
      icon: "heroicons:information-circle-20-solid",
    },
    {
      label: "Step 2",
      icon: "heroicons:arrow-down-on-square-stack-20-solid",
    },
    {
      label: "Step 3",
      icon: "heroicons:command-line-20-solid",
    },
  ];
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const steps2 = [
    {
      label: "Step 1",
      icon: <AlarmClockOff />,
    },
    {
      label: "Step 2",
      icon: <AlarmClockOff />,
    },
    {
      label: "Step 3",
      icon: <AlarmClockOff />,
    },
  ];
  return (
    <div className="max-w-5xl">
      <p className="text-sm text-default-500 ">
        The <span className="text-primary">default</span> Keyboard Key is used
        to change the background color of the alert.
      </p>

      <Stepper current={1} content="right" direction={isTablet ? "vertical" : "horizontal"}>
        {steps?.map((item, i) => (
          <Step key={item.label} icon={<Icon icon={item.icon} />}>
            <StepLabel className="  mb-0.5 text-foreground">
              {item.label}
            </StepLabel>
            <StepDescription className=" text-xs">
              Paragraph Text
            </StepDescription>
          </Step>
        ))}
      </Stepper>
      <br />
      <Stepper current={1} content="bottom" direction={isTablet ? "vertical" : "horizontal"}>
        {steps2?.map((item, i) => (
          <Step key={item.label} icon={item.icon}>
            <StepLabel className="  mb-0.5 text-foreground">
              {item.label}
            </StepLabel>
            <StepDescription className=" text-xs">
              Paragraph Text
            </StepDescription>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default StepsWithDataContent;
