"use client";
import React from "react";
import { CircularProgress, Progress } from "@/components/ui/progress";

const CustomContentProgressbar = () => {
  const [value, setValue] = React.useState<number>(30);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Progress value={value} color="warning" showValue />

      <div className="flex gap-4">
        <CircularProgress
          value={value}
          color="success"
          showValue
          customContent="Done"
        />
        <CircularProgress value={value} color="warning" showValue />
      </div>
    </>
  );
};

export default CustomContentProgressbar;
