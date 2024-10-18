"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";

const DialogAutoDestroyable = () => {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => {
        setOpen(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [open])
  return (
    <Dialog open={open}>
      <Button type="button" onClick={() => setOpen(true)}>Open Modal Close in 5s</Button>
      <DialogContent >
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-sm border border-border grid place-content-center">
              <Icon icon="heroicons:square-3-stack-3d" className="w-5 h-5 text-default-500" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-default-700  mb-1"> Select Plan</h4>
              <p className="text-xs text-default-500 ">
                This modal will be destroyed after 5 second.
              </p>
            </div>
          </div>
        </DialogHeader>
        <RadioGroup defaultValue="1" className="cursor-pointer">
          <div className="sm:grid sm:grid-cols-2 mt-5 sm:gap-5">
            <Label htmlFor="basic" className="border-2 rounded-sm border-border p-3">
              <div className="flex justify-between items-center">
                <h3 className="grow text-xs font-semibold text-default-700 ">
                  Basic Plan
                </h3>
                <RadioGroupItem value="1" id="basic" />
              </div>
              <div className="mt-1">
                <h3 className="text-base font-semibold text-default-950 dark:text-primary-foreground">
                  $40/User
                </h3>
                <p className="text-[10px] text-default-500">
                  Includes 20GB individual data
                </p>
              </div>
              <ul className="mt-3 space-y-[6px]">
                <li className="flex items-center gap-[6px]">
                  <span className="text-primary text-xl">
                    <Icon icon="ri:checkbox-circle-line" />
                  </span>
                  <span>32+ Pages</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <span className="text-primary text-xl">
                    <Icon icon="ri:checkbox-circle-line" />
                  </span>
                  <span>Basic Report</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <span className="text-primary text-xl">
                    <Icon icon="ri:checkbox-circle-line" />
                  </span>
                  <span>UI Components</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <span className="text-primary text-xl">
                    <Icon icon="ri:checkbox-circle-line" />
                  </span>
                  <span>Customer Support</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <span className="text-primary text-xl">
                    <Icon icon="ri:checkbox-circle-line" />
                  </span>
                  <span>Lifetime Code Support</span>
                </li>
              </ul>
            </Label>
            <Label htmlFor="standard" className="border-2 rounded-sm border-border p-3">
              <div className="flex justify-between items-center">
                <h3 className="grow text-xs font-semibold text-default-700 ">
                  Standard Plan
                </h3>
                <RadioGroupItem value="2" id="standard" />
              </div>
              <div className="mt-1">
                <h3 className="text-base font-semibold text-default-950 dark:text-primary-foreground">
                  $40/User
                </h3>
                <p className="text-[10px] text-default-500">
                  Includes 20GB individual data
                </p>
              </div>
              <ul className="mt-3 space-y-[6px]">
                <li className="flex items-center gap-[6px]">
                  <span className="text-primary text-xl">
                    <Icon icon="ri:checkbox-circle-line" />
                  </span>
                  <span>32+ Pages</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <span className="text-primary text-xl">
                    <Icon icon="ri:checkbox-circle-line" />
                  </span>
                  <span>Basic Report</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <span className="text-primary text-xl">
                    <Icon icon="ri:checkbox-circle-line" />
                  </span>
                  <span>UI Components</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <span className="text-primary text-xl">
                    <Icon icon="ri:checkbox-circle-line" />
                  </span>
                  <span>Customer Support</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <span className="text-primary text-xl">
                    <Icon icon="ri:checkbox-circle-line" />
                  </span>
                  <span>Lifetime Code Support</span>
                </li>
              </ul>
            </Label>
          </div>
        </RadioGroup>
        <DialogFooter className="mt-6">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            color="warning"
          >
            Cancel
          </Button>
          <Button>Start Plan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  );
};

export default DialogAutoDestroyable;
