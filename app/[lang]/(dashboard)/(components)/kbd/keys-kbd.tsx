"use client";
import { Kbd } from "@/components/ui/kbd";

const KeysKbd = () => {
  return (
    <>
      <div className="flex flex-wrap gap-3 lg:gap-4">
        <Kbd keys={["command"]}>K</Kbd>
        <Kbd keys={["command", "shift"]}>N</Kbd>
        <Kbd keys={["option", "command"]}>P</Kbd>
        <Kbd keys={["command", "shift", "ctrl"]}>F</Kbd>
      </div>
      <div className="flex flex-wrap gap-3 lg:gap-4">
        <Kbd keys={["command"]}></Kbd>
        <Kbd keys={["shift"]}></Kbd>
        <Kbd keys={["option"]}></Kbd>
        <Kbd keys={["ctrl"]}></Kbd>
      </div>
    </>
  );
};

export default KeysKbd;
