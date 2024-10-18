"use client"
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Crown } from "@/components/svg";
import { type Data } from "./data"
const DetailsCard = ({ item, index }: { item: Data, index: number }) => {
  const { name, score, image, count } = item;

  let color = "success";

  if (index === 1) {
    color = "primary"
  } else if (index == 2) {
    color = "warning"
  }

  return (
    <div className={cn("mb-10 sm:mb-8 col-span-3 sm:col-span-1 ", {

      "sm:-order-1": index === 1,

    })}>
      <div className={`flex flex-col items-center  p-4  mb-3 rounded-lg  relative pt-12 bg-${color}/10 ${index < 1 && "sm:-mt-8"}`}>
        <div className="flex-1 w-full flex flex-col items-center gap-3 absolute -top-10 left-1/2 -translate-x-1/2">
          <div className="relative inline-block">
            {index < 1 &&
              <span className="absolute -top-[29px] left-1/2 -translate-x-1/2 text-warning ">
                <Crown className="h-10 w-10" />
              </span>
            }
            <Avatar className={cn("h-16 w-16", {
              "ring-2 ring-yellow-400": index < 1
            })}>
              <AvatarImage src={image.src} />
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            <Badge
              className="w-[18px] h-[18px] bg-yellow-400 text-[10px] font-semibold p-0  items-center justify-center   absolute left-[calc(100%-14px)] top-[calc(100%-20px)]">
              {index + 1}
            </Badge>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <div className="text-base font-medium text-default-800 mb-1">{name}</div>
            <Badge
              className="rounded-full h-8 "
              color={index === 1 ? "default" : color as any}
            >
              {count} <span className="text-xs font-medium ltr:ml-1.5 rtl:mr-1.5">Contributed</span>
            </Badge>
          </div>
        </div>
        <div className="flex-none w-full pt-[75px]">
          <div className="w-full">
            <div className="flex justify-between items-center gap-2 mb-1">
              <span className="text-xs font-medium text-default-900">Score</span>
              <span className="text-xs font-medium text-default-900">{score}%</span>
            </div>
            <Progress value={score as number} size="sm" color={color as any} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;