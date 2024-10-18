"use client";
import { Label } from "@/components/ui/label";
import { CircularProgress, Progress } from "@/components/ui/progress";
import React from "react";

const WithLabelProgressbar = () => {
  return (
    <>
      <div className="space-y-2">
        <Label>Loading....</Label>
        <Progress value={50} color="success" />
      </div>
      <CircularProgress
        value={50}
        color="success"
        showValue
        customContent="...."
      />
    </>
  );
};

export default WithLabelProgressbar;
