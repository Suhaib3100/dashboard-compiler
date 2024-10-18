"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const ColorTooltip = () => {
  return (
    <div className="flex   flex-wrap gap-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Primary</Button>
          </TooltipTrigger>
          <TooltipContent color="primary">
            <p>Primary Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="secondary">Secondary</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Secondary Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="warning">Warning</Button>
          </TooltipTrigger>
          <TooltipContent color="warning">
            <p>Warning Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="destructive">Destructive</Button>
          </TooltipTrigger>
          <TooltipContent color="destructive">
            <p>Destructive Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="info">Info</Button>
          </TooltipTrigger>
          <TooltipContent color="info">
            <p>Info Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="success">Success</Button>
          </TooltipTrigger>
          <TooltipContent color="success">
            <p>Success Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ColorTooltip;
