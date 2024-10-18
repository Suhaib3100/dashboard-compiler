"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const icons = [
  { name: "heroicons:academic-cap" },
  { name: "heroicons:adjustments-horizontal" },
  { name: "heroicons:adjustments-vertical" },
  { name: "heroicons:archive-box" },
  { name: "heroicons:archive-box-arrow-down" },
  { name: "heroicons:archive-box-x-mark" },
  { name: "heroicons:arrow-down" },
  { name: "heroicons:arrow-down-circle" },
  { name: "heroicons:arrow-down-left" },
  { name: "heroicons:arrow-down-on-square" },
  { name: "heroicons:arrow-up-tray" },
  { name: "heroicons:arrows-pointing-in" },
  { name: "heroicons:cloud" },
  { name: "heroicons:cog" },
  { name: "heroicons:command-line" },
  { name: "heroicons:computer-desktop" },
  { name: "heroicons:cpu-chip" },
  { name: "heroicons:document-arrow-down" },
  { name: "heroicons:envelope" },
  { name: "heroicons:envelope-open" },
  { name: "heroicons:exclamation-circle" },
  { name: "heroicons:exclamation-triangle" },
  { name: "heroicons:eye" },
  { name: "heroicons:eye-dropper" },
  { name: "heroicons:film" },
  { name: "heroicons:heart" },
  { name: "heroicons:inbox" },
  { name: "heroicons:inbox" },
  { name: "heroicons:information-circle" },
  { name: "heroicons:lifebuoy" },
  { name: "heroicons:identification" },
  { name: "heroicons:key" },
  { name: "heroicons:link" },
  { name: "heroicons:pencil-square" },
  { name: "heroicons:rectangle-stack" },
  { name: "heroicons:rocket-launch" },
  { name: "heroicons:window" },
  { name: "heroicons:wifi" },
  { name: "heroicons:wallet" },
  { name: "heroicons:variable" },
  { name: "heroicons:users" },
  { name: "heroicons:user-plus" },
  { name: "heroicons:user-minus" },
  { name: "heroicons:user-group" },
  { name: "heroicons:user-circle" },
  { name: "heroicons:user" },
  { name: "heroicons:square-2-stack" },
  { name: "heroicons:shopping-bag" },
  { name: "heroicons:shield-check" },
  { name: "heroicons:share" },
  { name: "heroicons:wrench" },
  { name: "heroicons:bell" },
  { name: "heroicons:camera" },
];
const IconPage = () => {
  return (
    <div>
      <div className="flex  flex-wrap gap-5">
        {icons.map((item, i) => (
          <TooltipProvider key={`iconify-icon-${i}`}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-default-200 text-default-600 hover:bg-background hover:text-primary"
                >
                  <Icon icon={item.name} className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
                <TooltipArrow className=" fill-primary" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Button asChild>
          <Link
            href="https://icon-sets.iconify.design"
            target="_blank"
            className="text-sm font-medium text-default-900"
          >
            View All 
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default IconPage;
