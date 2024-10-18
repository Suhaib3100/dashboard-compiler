"use client";
import { Kbd } from "@/components/ui/kbd";

const InTextKbd = () => {
  return (
    <div>
      Press <Kbd keys={["command"]}>K </Kbd> to pay respects
    </div>
  );
};

export default InTextKbd;
