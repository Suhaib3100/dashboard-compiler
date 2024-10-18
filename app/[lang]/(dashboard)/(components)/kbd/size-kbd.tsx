"use client";
import { Kbd } from "@/components/ui/kbd";

const SizeKbd = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Kbd size="sm" keys={["command"]}>
          K
        </Kbd>
        <Kbd size="sm" keys={["command", "shift"]}>
          N
        </Kbd>
        <Kbd size="sm" keys={["option", "command"]}>
          P
        </Kbd>
        <Kbd size="sm" keys={["command", "shift", "ctrl"]}>
          F
        </Kbd>
      </div>
      <div className="flex flex-wrap gap-4">
        <Kbd size="md" keys={["command"]}>
          K
        </Kbd>
        <Kbd size="md" keys={["command", "shift"]}>
          N
        </Kbd>
        <Kbd size="md" keys={["option", "command"]}>
          P
        </Kbd>
        <Kbd size="md" keys={["command", "shift", "ctrl"]}>
          F
        </Kbd>
      </div>
      <div className="flex flex-wrap gap-4">
        <Kbd size="lg" keys={["command"]}>
          K
        </Kbd>
        <Kbd size="lg" keys={["command", "shift"]}>
          N
        </Kbd>
        <Kbd size="lg" keys={["option", "command"]}>
          P
        </Kbd>
        <Kbd size="lg" keys={["command", "shift", "ctrl"]}>
          F
        </Kbd>
      </div>
      <div className="flex flex-wrap gap-4">
        <Kbd size="xl" keys={["command"]}>
          K
        </Kbd>
        <Kbd size="xl" keys={["command", "shift"]}>
          N
        </Kbd>
        <Kbd size="xl" keys={["option", "command"]}>
          P
        </Kbd>
        <Kbd size="xl" keys={["command", "shift", "ctrl"]}>
          F
        </Kbd>
      </div>
    </>
  );
};

export default SizeKbd;
