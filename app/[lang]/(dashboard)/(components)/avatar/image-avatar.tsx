"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar1 from "@/public/images/avatar/avatar-1.jpg";
const ImageAvatar = () => {
  return (
    <>
      <Avatar>
        <AvatarImage src={avatar1.src} />
        <AvatarFallback>SN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={avatar2.src} />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={avatar3.src} />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={avatar4.src} />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={avatar5.src} />
        <AvatarFallback>GH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={avatar6.src} />
        <AvatarFallback>IJ</AvatarFallback>
      </Avatar>
    </>
  );
};

export default ImageAvatar;
