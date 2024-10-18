"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const PlacementTooltip = () => {
  return (
    <div className="flex   flex-wrap gap-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Bottom</Button>
          </TooltipTrigger>
          <TooltipContent color="primary" side="bottom">
            <p>Bottom Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Left</Button>
          </TooltipTrigger>
          <TooltipContent color="primary" side="left">
            <p>Left Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Right</Button>
          </TooltipTrigger>
          <TooltipContent color="primary" side="right">
            <p>Right Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Top</Button>
          </TooltipTrigger>
          <TooltipContent color="primary" side="top">
            <p>Top Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default PlacementTooltip;
