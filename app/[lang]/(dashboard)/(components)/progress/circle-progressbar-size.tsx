"use client";

import { CircularProgress } from "@/components/ui/progress";

const CircleProgressbarSize = () => {

  return (
    <>
      <CircularProgress value={70} size="xs" />
      <CircularProgress value={70} size="sm" />
      <CircularProgress value={70} size="md" />
      <CircularProgress value={70} size="lg" />
      <CircularProgress value={70} size="xl" />
    </>
  );
};

export default CircleProgressbarSize;
