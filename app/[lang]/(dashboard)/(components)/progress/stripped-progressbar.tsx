"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";

const StrippedProgressbar = () => {

  return (
    <>
      <Progress value={50} color="primary" isStripe />
      <Progress value={30} color="dark" isStripe />
      <Progress value={20} color="destructive" isStripe />
      <Progress value={60} color="warning" isStripe />
      <Progress value={70} color="info" isStripe />
      <Progress value={90} color="success" isStripe />
    </>
  );
};

export default StrippedProgressbar;
