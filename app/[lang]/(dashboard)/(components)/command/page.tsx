"use client";

import Card from "@/components/ui/card-snippet";
import BasicCommand from "./basic-command"
import { basicCommand } from "./source-code"
const CommandPage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Command" code={basicCommand}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Command </code> component wraps the
          other command component.{" "}
          <code className="text-primary">CommandInput </code> takes input.{" "}
          <code className="text-primary">CommandEmpty </code> component shows if
          there is no item relevant.{" "}
          <code className="text-primary">CommandGroup </code> to wrap the{" "}
          <code className="text-primary">CommandItem </code> that hold the other
          component as necessary.
        </p>
        <div className="max-w-md">
          <BasicCommand />
        </div>
      </Card>
    </div>
  );
};

export default CommandPage;
