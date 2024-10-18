"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";

const VariousTooltip = () => {
  return (
    <div className="flex gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="secondary" variant="outline">
              Button
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>I am a Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Avatar>
              <AvatarImage src={avatar6.src} />
              <AvatarFallback>SN</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>
            <p>I am a Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="secondary" size="icon">
              <Icon icon="heroicons:home" className=" h-6 w-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>I am a Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default VariousTooltip;
