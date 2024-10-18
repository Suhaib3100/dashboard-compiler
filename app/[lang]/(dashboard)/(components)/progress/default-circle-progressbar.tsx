"use client";

import { CircularProgress } from "@/components/ui/progress";

const DefaultCircleProgressbar = () => {

  return (
    <>
      <CircularProgress value={70} />
      <CircularProgress value={70} showValue />
    </>
  );
};

export default DefaultCircleProgressbar;
