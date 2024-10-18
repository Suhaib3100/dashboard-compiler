export const defaultKbd = `"use client";
import { Kbd } from "@/components/ui/kbd";

const DefaultKbd = () => {
  return (
    <div>
      <Kbd keys={["command"]}>K</Kbd>
    </div>
  );
};

export default DefaultKbd;
`;
export const keysKbd = `"use client";
import { Kbd } from "@/components/ui/kbd";

const KeysKbd = () => {
  return (
    <>
      <div className="space-x-4">
        <Kbd keys={["command"]}>K</Kbd>
        <Kbd keys={["command", "shift"]}>N</Kbd>
        <Kbd keys={["option", "command"]}>P</Kbd>
        <Kbd keys={["command", "shift", "ctrl"]}>F</Kbd>
      </div>
      <div className="space-x-4">
        <Kbd keys={["command"]}></Kbd>
        <Kbd keys={["shift"]}></Kbd>
        <Kbd keys={["option"]}></Kbd>
        <Kbd keys={["ctrl"]}></Kbd>
      </div>
    </>
  );
};

export default KeysKbd;
`;
export const sizeKbd = `"use client";
import { Kbd } from "@/components/ui/kbd";

const SizeKbd = () => {
  return (
    <>
      <div className="gap-4 flex">
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
      <div className="gap-4 flex">
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
      <div className="gap-4 flex">
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
      <div className="gap-4 flex">
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
`;
export const styleKbd = `"use client";
import { Kbd } from "@/components/ui/kbd";

const StyleKbd = () => {
  return (
    <>
      <Kbd keys={["command", "shift"]}>N</Kbd>
      <div className=" flex gap-2 items-center">
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

`;
export const inTextKbd = `"use client";
import { Kbd } from "@/components/ui/kbd";

const InTextKbd = () => {
  return (
    <div>
      Press <Kbd keys={["command"]}>K </Kbd> to pay respects
    </div>
  );
};

export default InTextKbd;
`;
export const arrowKbd = `"use client";
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
`;