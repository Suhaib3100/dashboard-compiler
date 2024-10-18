"use client";
import { Kbd } from "@/components/ui/kbd";

const StyleKbd = () => {
  return (
    <>
      <Kbd keys={["command", "shift"]}>N</Kbd>
      <div className=" flex flex-wrap gap-2 items-center">
        <Kbd keys={[""]}>win</Kbd>
        <span>+</span>
        <Kbd keys={[""]}>shift</Kbd>
        <span>+</span>
        <Kbd keys={[""]}>del</Kbd>
      </div>
      <div className=" flex gap-2 items-center">
        <Kbd keys={[""]}>win</Kbd> <Kbd keys={[""]}>shift</Kbd>
        <Kbd keys={[""]}>K</Kbd>
      </div>
    </>
  );
};

export default StyleKbd;
