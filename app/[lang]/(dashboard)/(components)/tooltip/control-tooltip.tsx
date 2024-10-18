"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const ControlTooltip = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div className="space-y-3">
      <TooltipProvider>
        <Tooltip open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
          <TooltipTrigger asChild>
            <Button color="secondary">Hover Me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <p className="text-sm text-muted-foreground">
        Open: {isOpen ? "true" : "false"}
      </p>
    </div>
  );
};

export default ControlTooltip;
