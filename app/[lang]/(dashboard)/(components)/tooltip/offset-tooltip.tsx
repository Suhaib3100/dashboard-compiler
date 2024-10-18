"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const OffsetTooltip = () => {
  return (
    <div className="flex   flex-wrap gap-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Default Offset</Button>
          </TooltipTrigger>
          <TooltipContent color="primary">
            <p>I am tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>No Offset</Button>
          </TooltipTrigger>
          <TooltipContent color="primary" sideOffset={0}>
            <p>I am tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>7 Offset</Button>
          </TooltipTrigger>
          <TooltipContent color="primary" sideOffset={7}>
            <p>I am tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>3 Offset</Button>
          </TooltipTrigger>
          <TooltipContent color="primary" sideOffset={3}>
            <p>I am tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>-7 Offset</Button>
          </TooltipTrigger>
          <TooltipContent color="primary" sideOffset={-7}>
            <p>I am tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default OffsetTooltip;
