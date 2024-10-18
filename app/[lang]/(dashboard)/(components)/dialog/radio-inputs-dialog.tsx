"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const RadioInputsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Modal With Radio Inputs</Button>
      </DialogTrigger>
      <DialogContent size="md" >
        <DialogHeader>
          <span>Select Your Course</span>
        </DialogHeader>
        <RadioGroup defaultValue="ux">
          <ul className="space-y-4 w-full">
            <li className="border-2 border-default-200 rounded-sm p-3 group hover:border-primary">
              <RadioGroupItem value="ux" className="hidden" id="job_1" />
              <Label htmlFor="job_1" className="w-full">
                <div className="flex items-center">
                  <div className="grow flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-default-950 group-hover:text-primary">UX/UI Design Course</h3>
                    <span className="text-xs text-default-600">DashTail</span>
                    <span className="text-xs text-default-600">20 seats available</span>
                  </div>
                  <div>
                    <span className="text-xl"><Icon icon="ph:arrow-right-light" /></span>
                  </div>
                </div>
              </Label>
            </li>
            <li className="border-2 border-default-200 rounded-sm p-3 group hover:border-primary">
              <RadioGroupItem value="php-laravel" className="hidden" id="job_2" />
              <Label htmlFor="job_2" className="w-full">
                <div className="flex items-center">
                  <div className="grow flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-default-950 group-hover:text-primary">PHP/Laravel Course</h3>
                    <span className="text-xs text-default-600">DashTail</span>
                    <span className="text-xs text-default-600">20 seats available</span>
                  </div>
                  <div>
                    <span className="text-xl"><Icon icon="ph:arrow-right-light" /></span>
                  </div>
                </div>
              </Label>
            </li>
            <li className="border-2 border-default-200 rounded-sm p-3 group hover:border-primary">
              <RadioGroupItem value="marketting" className="hidden" id="job_3" />
              <Label htmlFor="job-3" className="w-full">
                <div className="flex items-center">
                  <div className="grow flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-default-950 group-hover:text-primary">Digital Marketing Course</h3>
                    <span className="text-xs text-default-600">DashTail</span>
                    <span className="text-xs text-default-600">20 seats available</span>
                  </div>
                  <div>
                    <span className="text-xl"><Icon icon="ph:arrow-right-light" /></span>
                  </div>
                </div>
              </Label>
            </li>
          </ul>
        </RadioGroup>
        <DialogFooter className="mt-4 p-5">
          <DialogClose asChild>
            <Button
              variant="outline"
              color="warning">
              Cancel
            </Button>
          </DialogClose>
          <Button>Purchase Course</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RadioInputsDialog;
