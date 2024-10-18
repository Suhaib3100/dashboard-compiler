export const defaultTooltip = `"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const DefaultTooltip = () => {
  return (
    <div className="flex  justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="secondary">Hover Me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>I am a Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default DefaultTooltip;
`;
export const arrowTooltip = `"use client";
import React from "react";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
const ArrowTooltip = () => {
  return (
    <div className="flex  justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button >Hover Me</Button>
          </TooltipTrigger>
          <TooltipContent color="primary">
            <p>I am tooltip</p>
            <TooltipArrow className=" fill-primary" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ArrowTooltip;
`;
export const colorTooltip = `"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const ColorTooltip = () => {
  return (
    <div className="flex  space-x-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button >Primary</Button>
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
`;
export const placementTooltip = `"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const PlacementTooltip = () => {
  return (
    <div className="flex  space-x-3">
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
`;
export const offsetTooltip = `"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const OffsetTooltip = () => {
  return (
    <div className="flex  space-x-3">
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
          <TooltipContent color="primary" sideOffset="0">
            <p>I am tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>7 Offset</Button>
          </TooltipTrigger>
          <TooltipContent color="primary" sideOffset="7">
            <p>I am tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>3 Offset</Button>
          </TooltipTrigger>
          <TooltipContent color="primary" sideOffset="3">
            <p>I am tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>-7 Offset</Button>
          </TooltipTrigger>
          <TooltipContent color="primary" sideOffset="-7">
            <p>I am tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default OffsetTooltip;
`;
export const variousTooltip = `"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";

const VariousTooltip = () => {
  return (
    <div className="flex space-x-4">
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
              <AvatarImage src={faker.image.avatarLegacy()} />
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
`;
export const controlTooltip = `"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const ControlTooltip = () => {
    const [isOpen, setIsOpen] = React.useState(false);
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
`;
export const withDelay = `"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const WithDelay = () => {
  return (
    <div className="flex  space-x-3">
      <TooltipProvider delayDuration={1000}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='soft' >Delay Open (1000ms)</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tooltip Delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={2000}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='soft' >Delay Open (2000ms)</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tooltip Delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={1000}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='soft' >Hover Me (delay 1000ms)</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tooltip Delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider >
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='soft' >Then Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tooltip Delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default WithDelay;
`;
