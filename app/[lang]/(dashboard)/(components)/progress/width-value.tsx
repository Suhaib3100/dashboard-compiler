"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";

const WidthValue = () => {
  const [value, setValue] = React.useState<number>(50);

  return (
    <>
      <div className="space-y-2">
        <Label>{value}%</Label>
        <Progress value={value} color="warning" />
      </div>
      <Progress value={value} color="warning" showValue />
      <div className="flex gap-2">
        <Progress className="flex-1" value={value} color="warning" />
        <Label className="inline-flex">{value}%</Label>
      </div>
    </>
  );
};

export default WidthValue;
