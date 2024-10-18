"use client";
import React from "react";
import { Stepper, Step, StepLabel } from "@/components/ui/steps";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { faker } from "@faker-js/faker";
const BasicWizard = () => {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const steps = ["Account Details", "Personal Info", "Address", "Social Links"];

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="mt-4">
      <Stepper current={activeStep} direction={isTablet ? "vertical" : "horizontal"}>
        {steps.map((label, index) => {
          const stepProps: any = {};
          const labelProps: any = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <StepLabel>Optional</StepLabel>
            );
          }
          return (
            <Step key={faker.string.uuid()} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
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
          <form>
            <div className="grid grid-cols-12 gap-4">
              {activeStep === 0 && (
                <>
                  <div className="col-span-12 mb-4 mt-6">
                    <h4 className="text-sm font-medium text-default-600">
                      Enter Your Account Details
                    </h4>
                    <p className="text-xs text-default-600 mt-1">
                      Fill in the box with correct data
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="text" placeholder="Username" />
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="email" placeholder="Email Address" />
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="password" placeholder="Password" />
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="password" placeholder="Confirm Password" />
                  </div>
                </>
              )}
              {activeStep === 1 && (
                <>
                  <div className="col-span-12 mt-6 mb-4">
                    <h4 className="text-sm font-medium text-default-600">
                      Enter Your Personal Info
                    </h4>
                    <p className="text-xs text-default-600 mt-1">
                      Fill in the box with correct data
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="text" placeholder="First Name" />
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="text" placeholder="Last Name" />
                  </div>
                  <div className="col-span-12 lg:col-span-4">
                    <Input type="number" placeholder="Phone number" />
                  </div>
                  <div className="col-span-12 lg:col-span-4">
                    <Input type="number" placeholder="Your age" />
                  </div>

                  <div className="col-span-12 lg:col-span-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="arabic">Arabic</SelectItem>
                        <SelectItem value="bangla">Bangla</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
              {activeStep === 2 && (
                <>
                  <div className="col-span-12 mt-6 mb-4">
                    <h4 className="text-sm font-medium text-default-600">
                      Enter Your Address
                    </h4>
                    <p className="text-xs text-default-600 mt-1">
                      Fill in the box with correct data
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="text" placeholder="Present Address" />
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="text" placeholder="Permanent Address" />
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="text" placeholder="City" />
                  </div>
                  <div className="col-span-12 lg:col-span-3">
                    <Input type="number" placeholder="Zip Code" />
                  </div>
                  <div className="col-span-12 lg:col-span-3">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ban">Bangladesh</SelectItem>
                        <SelectItem value="in">India</SelectItem>
                        <SelectItem value="pak">Pakistan</SelectItem>
                        <SelectItem value="chi">China</SelectItem>
                        <SelectItem value="aus">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
              {activeStep === 3 && (
                <>
                  <div className="col-span-12 mt-6 mb-4">
                    <h4 className="text-sm font-medium text-default-600">
                      Enter Your Social Links
                    </h4>
                    <p className="text-xs text-default-600 mt-1">
                      Fill in the box with correct data
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="text" placeholder="http://facebook.com/abc" />
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="text" placeholder="http://twitter.com/abc" />
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="text" placeholder="http://linkedin.com/abc" />
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="text" placeholder="http://youtube.com/abc" />
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="text" placeholder="http://instagram.com/abc" />
                  </div>
                </>
              )}
            </div>
          </form>

          <div className="flex pt-2 ">
            <Button
              size="xs"
              variant="outline"
              color="secondary"
              className={cn("cursor-pointer", {
                hidden: activeStep === 0,
              })}
              onClick={handleBack}
            >
              Back
            </Button>
            <div className="flex-1	gap-4 " />
            <div className="flex	gap-2 ">
              {activeStep === steps.length - 1 ? (
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
                  Submit
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

export default BasicWizard;
