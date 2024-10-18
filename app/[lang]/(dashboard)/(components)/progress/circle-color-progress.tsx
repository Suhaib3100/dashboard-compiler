"use client";

import { CircularProgress} from "@/components/ui/progress";

const CircleColorProgress = () => {

  return (
    <>
      <CircularProgress value={30} color="primary" />
      <CircularProgress value={60} color="dark" />
      <CircularProgress value={90} color="warning" />
      <CircularProgress value={20} color="destructive" />
      <CircularProgress value={50} color="success" />
      <CircularProgress value={80} color="info" />
    </>
  );
};

export default CircleColorProgress;
