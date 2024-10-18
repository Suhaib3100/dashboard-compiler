export const defaultSteps = `"use client";
import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
} from "@/components/ui/steps";

const DefaultSteps = () => {

  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

  return (
    <>
      <Stepper className="mb-4" current={1}>
        {steps?.map((label, i) => (
          <Step key={label}>
            <StepLabel className="mt-2 mb-4">{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default DefaultSteps;
`;
export const clickableStep = `"use client";
import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
} from "@/components/ui/steps";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const ClickableStep = () => {
  const [activestep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

  return (
    <div className="mt-4">
      <Stepper className="mb-4" current={activestep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <StepLabel variant="caption">Optional</StepLabel>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel className="mt-2" {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activestep === steps.length ? (
        <React.Fragment>
          <div className="mt-3 mb-2 text-center font-semibold">
            All steps completed - you&apos;re finished
          </div>
          <div className="flex ">
            <div className=" flex-1 mb-1" />
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
              sx={{ mr: 1 }}
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
                  color="inherit"
                  onClick={handleSkip}
                  sx={{ mr: 1 }}
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
`;
export const stepsWithLineSpace = `"use client";
import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
} from "@/components/ui/steps";

const StepsWithLineSpace = () => {
    const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  return (
    <div>
      <Stepper current={3} className="mb-4" gap="sm">
        {steps?.map((label, i) => (
          <Step key={label}>
            <StepLabel className="mt-2">{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default StepsWithLineSpace;
`;
export const alterNativeLabel = `"use client";
import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepDescription,
} from "@/components/ui/steps";

const AlterNativeLabel = () => {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <Stepper current={1} alternativeLabel>
          {steps?.map((label, i) => (
            <Step key={label}>
              <StepLabel >
                {label}
              </StepLabel>
              <StepDescription>Paragraph Text</StepDescription>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
};

export default AlterNativeLabel;
`;
export const alternativeLabelStepGap = `"use client";
import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepDescription,
} from "@/components/ui/steps";

const AlternativeLabelStepGap = () => {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <Stepper current={1} alternativeLabel gap>
          {steps?.map((label, i) => (
            <Step key={label}>
              <StepLabel className=" text-default-900">
                {label}
              </StepLabel>
              <StepDescription>Paragraph Text</StepDescription>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
};

export default AlternativeLabelStepGap;
`;
export const stepsSize = `"use client";
import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
} from "@/components/ui/steps";

const StepsSize = () => {
    const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  return (
    <>
      <Stepper current={3} size="sm">
        {steps?.map((label, i) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <br />
      <Stepper current={2} size="md">
        {steps?.map((label, i) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <br />
      <Stepper current={4} size="lg">
        {steps?.map((label, i) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <br />
      <Stepper current={1} size="xl">
        {steps?.map((label, i) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default StepsSize;`;
export const verticalSteps = `"use client";
import React from "react";
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
`;
export const vStepsLineSpace = `"use client";
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
`;
export const vStepsWithContent = `"use client";
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
 
  const [activestep, setActiveStep] = React.useState(0);

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
                  <div className=" mb-2">
                    <div className=" space-x-3 mt-2 mb-4">
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
                          color="info"
                          onClick={handleNext}
                        >
                          Continue
                        </Button>
                      )}

                      <Button
                        size="xs"
                        variant="outline"
                        color="warning"
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
`;
export const errorAlertSteps = `"use client";
import {
  Stepper,
  Step,
  StepLabel,
  StepDescription,
} from "@/components/ui/steps";
const ErrorAlertSteps = () => {
  const steps = ["Step 1", "Step 2", "Step 3"];
  const isStepFailed = (step) => {
    return step === 1;
  };
  return (
    <div className="max-w-5xl">
      <Stepper current={1} status="error" content="right">
        {steps.map((label, index) => {
          const labelProps = {};
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
`;
export const stepsWithAction = `"use client";
import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepDescription,
} from "@/components/ui/steps";
import { Button } from "@/components/ui/button";

const StepsWithAction = () => {
  const [activestep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = ["Step 1", "Step 2", "Step 3"];

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
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
      <Stepper className="my-4" current={activestep} content="right">
        {steps?.map((label, i) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(i)) {
            labelProps.optional = (
              <StepLabel variant="caption">Optional</StepLabel>
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
              variant="destructive"
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
              variant="secondary"
              className="cursor-pointer"
              disabled={activestep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <div className="flex-1	gap-4 " />
            <div className="flex	gap-2 ">
              {activestep === steps.length - 1 ? (
                <Button
                  size="xs"
                  variant="outline"
                  variant="success"
                  className="cursor-pointer"
                  onClick={handleNext}
                >
                  Finish
                </Button>
              ) : (
                <Button
                  size="xs"
                  variant="outline"
                  variant="secondary"
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
`;
export const stepsWithDataContent = `"use client";
import { Icon } from "@iconify/react";
import {
  Stepper,
  Step,
  StepLabel,
  StepDescription,
} from "@/components/ui/steps";
import { AlarmClockOff } from "lucide-react";
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

      <Stepper  current={1} content="right">
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
      <Stepper  current={1} content="bottom">
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
`;
