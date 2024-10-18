"use client"
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Icon } from "@iconify/react";
import { Label } from "@/components/ui/label";
import avatarImage from "@/public/images/avatar/avatar-5.jpg"

const BadgeVisibility = () => {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="space-y-5">
        <div className="space-y-3">
          <div className="relative inline-block">
            <Avatar className="h-[56px] w-[56px]">
              <AvatarImage src={avatarImage.src} />
              <AvatarFallback>SN</AvatarFallback>
            </Avatar>
            {show && (
              <Badge className=" h-5 min-w-5 p-1.5 text-xs font-normal items-center justify-center absolute left-[calc(100%-18px)] bottom-[calc(100%-18px)]">
                {count}
              </Badge>
            )}
          </div>
          <div className="flex items-center justify-start gap-x-2">
            <Switch
              id="airplane-mode"
              checked={show}
              onCheckedChange={() => setShow(!show)}
            />
            <Label>Show</Label>
          </div>
        </div>
        <div className="flex gap-x-2">
          <Button
            className=" group"
            color="secondary"
            size="icon"
            variant="outline"
            onClick={() => setCount(Math.max(count - 1, 0))}
            disabled={!show}
          >
            <Icon icon="eva:minus-fill" className="rounded-lg w-4 h-4" />
          </Button>
          <Button
            className=" group"
            color="secondary"
            size="icon"
            variant="outline"
            onClick={() => setCount(Math.max(count + 1))}
            disabled={!show}
          >
            <Icon icon="eva:plus-fill" className="rounded-lg w-4 h-4 " />
          </Button>
        </div>
      </div>
    </>
  );
};

export default BadgeVisibility;
