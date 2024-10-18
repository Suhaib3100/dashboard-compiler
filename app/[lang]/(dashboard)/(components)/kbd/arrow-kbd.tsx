"use client";
import { Kbd } from "@/components/ui/kbd";

const ArrowKbd = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Kbd keys={["up"]}></Kbd>
      </div>
      <div className="flex gap-6">
        <Kbd keys={["left"]}></Kbd>
        <Kbd keys={["right"]}></Kbd>
      </div>
      <div>
        <Kbd keys={["down"]}></Kbd>
      </div>
    </div>
  );
};

export default ArrowKbd;
