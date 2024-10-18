"use client";

import { Progress } from "@/components/ui/progress";

const DefaultSizeProgress = () => {
  return (
    <>
      <Progress value={20} size="xs" />
      <Progress value={30} size="sm" />
      <Progress value={40} size="md" />
      <Progress value={70} size="lg" />
      <Progress value={90} size="xl" />
    </>
  );
};

export default DefaultSizeProgress;
