"use client";
import { CircularProgress } from "@/components/ui/progress";

const CustomTextProgressbar = () => {

  return (
    <>
      <CircularProgress
        value={70}
        color="primary"
        showValue
        customContent="75 Days"
      />
      <CircularProgress
        value={100}
        color="success"
        showValue
        customContent="Done"
      />
    </>
  );
};

export default CustomTextProgressbar;
