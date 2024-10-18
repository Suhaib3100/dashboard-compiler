"use client"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/avatar";
import avatar11 from "@/public/images/avatar/avatar-11.jpg";
import avatar10 from "@/public/images/avatar/avatar-10.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";
import avatar9 from "@/public/images/avatar/avatar-9.jpg";
const AvatarGroupCustom = () => {
  return (
    <AvatarGroup max={4} custom>
      <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
        <AvatarImage src={avatar5.src} />
        <AvatarFallback>SN</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
        <AvatarImage src={avatar6.src} />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
        <AvatarImage src={avatar7.src} />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
        <AvatarImage src={avatar8.src} />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
        <AvatarImage src={avatar9.src} />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
        <AvatarImage src={avatar10.src} />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
        <AvatarImage src={avatar11.src} />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  );
};

export default AvatarGroupCustom;
