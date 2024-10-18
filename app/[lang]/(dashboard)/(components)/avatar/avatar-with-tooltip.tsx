"use client"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";
import avatar9 from "@/public/images/avatar/avatar-9.jpg";
import avatar10 from "@/public/images/avatar/avatar-10.jpg";
import avatar11 from "@/public/images/avatar/avatar-11.jpg";

const avatars = [
  {
    name: "Alex Smith",
    avatar: avatar5
  },
  {
    name: "Emily Johnson",
    avatar: avatar6
  },
  {
    name: "Max Brown",
    avatar: avatar7
  },
  {
    name: "Sophia Lee",
    avatar: avatar8
  },
  {
    name: "Liam Garcia",
    avatar: avatar9
  },
  {
    name: "Ava Martinez",
    avatar: avatar10
  },
  {
    name: "Noah Taylor",
    avatar: avatar11
  },
]
const AvatarWithTooltip = () => {
  return (
    <AvatarGroup>
      {
        avatars.map((item, index) => (
          <TooltipProvider
            key={`avatar-group-${index}`}
            delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background  h-10 w-10"
                >
                  <AvatarImage src={item.avatar.src} />
                  <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))
      }
    </AvatarGroup>
  );
};

export default AvatarWithTooltip;
