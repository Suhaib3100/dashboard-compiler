"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Label } from "@/components/ui/label";
const ChangeTheme = () => {
  const [selected, setSelected] = useState<string>("apple");
  const handleSelect = (value: string) => {
    setSelected(value)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="w-full justify-start gap-3  bg-transparent  hover:bg-default-50 group px-1.5"
        >
          <span className="w-5 h-5 rounded-full bg-default-200 group-hover:bg-default-300 flex justify-center items-center">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
          </span>
          <span className="text-xs text-default-600">Change Theme</span>
        </Button>
      </DialogTrigger>
      <DialogContent size="sm">
        <DialogHeader className="flex justify-between">
          <DialogTitle className="text-center text-2xl">Themes</DialogTitle>
        </DialogHeader>
        <div>
          <RadioGroup defaultValue="theme_1" onValueChange={handleSelect}>
            <div className="flex flex-wrap justify-center gap-7 mt-5">
              <Label
                htmlFor="theme_1"
                className="h-16 w-16 rounded-full bg-primary block"
              >
                <RadioGroupItem value="theme_1" id="theme_1" className="hidden">
                  {" "}
                </RadioGroupItem>
              </Label>
              <Label
                htmlFor="theme_6"
                className="h-16 w-16 rounded-full bg-secondary block"
              >
                <RadioGroupItem value="theme_6" id="theme_6" className="hidden">
                  {" "}
                </RadioGroupItem>
              </Label>
              <Label
                htmlFor="theme_2"
                className="h-16 w-16 rounded-full bg-info block"
              >
                <RadioGroupItem value="theme_2" id="theme_2" className="hidden">
                  {" "}
                </RadioGroupItem>
              </Label>
              <Label
                htmlFor="theme_3"
                className="h-16 w-16 rounded-full bg-warning block"
              >
                <RadioGroupItem value="theme_3" id="theme_3" className="hidden">
                  {" "}
                </RadioGroupItem>
              </Label>
              <Label
                htmlFor="theme_4"
                className="h-16 w-16 rounded-full bg-success block"
              >
                <RadioGroupItem value="theme_4" id="theme_4" className="hidden">
                  {" "}
                </RadioGroupItem>
              </Label>
              <Label
                htmlFor="theme_5"
                className="h-16 w-16 rounded-full bg-destructive block"
              >
                <RadioGroupItem value="theme_5" id="theme_5" className="hidden">
                  {" "}
                </RadioGroupItem>
              </Label>
            </div>
          </RadioGroup>
        </div>
        <DialogFooter className="mt-8 sm:justify-center">
          <DialogClose asChild>
            <Button type="button" variant="outline" color="destructive">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeTheme;
