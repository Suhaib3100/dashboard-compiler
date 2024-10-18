"use client";
import { Progress } from "@/components/ui/progress";

const AnimateStripedProgressbar = () => {
  return (
    <>
      <Progress value={50} color="primary" isStripe isAnimate />
      <Progress value={30} color="dark" isStripe isAnimate />
      <Progress value={20} color="destructive" isStripe isAnimate />
      <Progress value={60} color="warning" isStripe isAnimate />
      <Progress value={70} color="info" isStripe isAnimate />
      <Progress value={90} color="success" isStripe isAnimate />
    </>
  );
};

export default AnimateStripedProgressbar;
