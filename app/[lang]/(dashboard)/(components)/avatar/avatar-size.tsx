"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar1 from "@/public/images/avatar/avatar-1.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";
const AvatarSize = () => {
  return (
    <>
      <Avatar className="h-[64px] w-[64px]">
        <AvatarImage src={avatar1.src} alt="" />
        <AvatarFallback>SN</AvatarFallback>
      </Avatar>
      <Avatar className="h-[56px] w-[56px]">
        <AvatarImage src={avatar2.src} alt="" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src={avatar3.src} alt="" />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar className="h-11 w-11">
        <AvatarImage src={avatar4.src} alt="" />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatar5.src} alt="" />
        <AvatarFallback>GH</AvatarFallback>
      </Avatar>
      <Avatar className="h-9 w-9">
        <AvatarImage src={avatar6.src} alt="" />
        <AvatarFallback>IJ</AvatarFallback>
      </Avatar>
      <Avatar className="h-8 w-8">
        <AvatarImage src={avatar7.src} alt="" />
        <AvatarFallback>KL</AvatarFallback>
      </Avatar>
      <Avatar className="h-[30px] w-[30px]">
        <AvatarImage src={avatar8.src} alt="" />
        <AvatarFallback>MN</AvatarFallback>
      </Avatar>
    </>
  );
};

export default AvatarSize;
