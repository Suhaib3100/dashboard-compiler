"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const OutlineCheckbox = () => {
  return (
    <div className="flex gap-6">
      <div className="flex items-center">
        <Checkbox variant="outline" defaultChecked id="outline_1">
          Right
        </Checkbox>
      </div>
      <div className="flex items-center">
        <Checkbox variant="outline" id="outline_2" />
        <Label
          htmlFor="outline_2"
          className="text-sm text-muted-foreground font-normal ltr:pl-2.5 rtl:pr-2.5"
        >
          Wrong
        </Label>
      </div>
    </div>
  );
};

export default OutlineCheckbox;
