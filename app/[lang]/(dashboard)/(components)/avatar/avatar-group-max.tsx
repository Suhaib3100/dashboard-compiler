"use client"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/avatar";

import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";
const AvatarGroupMax = () => {
  return (

    <AvatarGroup max={4}>
      <Avatar className=" ring-1ring-background ring-offset-[2px]  ring-offset-background">
        <AvatarImage src={avatar5.src} />
        <AvatarFallback>SN</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1ring-background ring-offset-[2px]  ring-offset-background">
        <AvatarImage src={avatar6.src} />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1ring-background ring-offset-[2px]  ring-offset-background">
        <AvatarImage src={avatar7.src} />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1ring-background ring-offset-[2px]  ring-offset-background">
        <AvatarImage src={avatar8.src} />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
        <AvatarFallback className="  font-normal">+3</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  );
};

export default AvatarGroupMax;
