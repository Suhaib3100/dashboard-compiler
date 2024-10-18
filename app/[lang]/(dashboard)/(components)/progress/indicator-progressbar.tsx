"use client";
import React from "react";
import { CircularProgress, Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const IndicatorProgressbar = () => {
  const [value, setValue] = React.useState<number>(0);
  const [value2, setValue2] = React.useState<number>(10);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <CircularProgress value={70} />
      <CircularProgress value={70} showValue />
      <br />
      <h4>size</h4>
      <div className="flex space-x-3">
        <CircularProgress value={70} size="xs" />
        <CircularProgress value={70} size="sm" />
        <CircularProgress value={70} size="md" />
        <CircularProgress value={70} size="lg" />
        <CircularProgress value={70} size="xl" />
      </div>
      <h4>Color</h4>
      <div className="flex space-x-3">
        <CircularProgress value={50} color="primary" />
        <CircularProgress value={50} color="dark" />
        <CircularProgress value={50} color="warning" />
        <CircularProgress value={50} color="destructive" />
        <CircularProgress value={50} color="success" />
        <CircularProgress value={50} color="info" />
      </div>
      <h4>Loading</h4>
      <CircularProgress value={50} color="primary" loading />
      <div>striped</div>
      <Progress value={50} color="primary" isStripe />
      <div>animation stripe</div>
      <Progress value={50} color="primary" isStripe isAnimate />
      <CircularProgress value={value} color="warning" showValue />
      <div>custom content</div>
      <CircularProgress
        value={value}
        color="success"
        showValue
        customContent="Done"
      />
      <div>event diye example</div>
      <CircularProgress value={value2} color="primary" showValue />
      <br />
      <Progress value={value2} />
      <br />
      <Button onClick={() => setValue2(value2 + 5)}>+</Button>
      <Button onClick={() => setValue2(value2 - 5)}>-</Button>
    </div>
  );
};
export default IndicatorProgressbar;
