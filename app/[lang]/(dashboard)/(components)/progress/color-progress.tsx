"use client";

import { Progress } from "@/components/ui/progress";
const ColorProgress = () => {

  return (
    <div className="flex flex-wrap gap-2">
      <Progress value={30} color="primary" />
      <Progress value={40} color="dark" />
      <Progress value={80} color="destructive" />
      <Progress value={60} color="warning" />
      <Progress value={70} color="info" />
      <Progress value={20} color="success" />
    </div>
  );
};

export default ColorProgress;
