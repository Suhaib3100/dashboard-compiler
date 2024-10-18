
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
import avatar9 from "@/public/images/avatar/avatar-9.jpg";
import avatar10 from "@/public/images/avatar/avatar-10.jpg";
import avatar11 from "@/public/images/avatar/avatar-11.jpg";

const AvatarGroupSize = () => {
  return (
    <div className="space-y-4">
      <AvatarGroup>
        <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background  h-10 w-10">
          <AvatarImage src={avatar5.src} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background  h-10 w-10">
          <AvatarImage src={avatar6.src} />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background  h-10 w-10">
          <AvatarImage src={avatar7.src} />
          <AvatarFallback>CD</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background  h-10 w-10">
          <AvatarImage src={avatar8.src} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background  h-10 w-10">
          <AvatarImage src={avatar9.src} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background  h-10 w-10">
          <AvatarImage src={avatar10.src} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background  h-10 w-10">
          <AvatarImage src={avatar11.src} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-10 w-10">
          <AvatarFallback className="  font-normal">M</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar className=" ring-1ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
          <AvatarImage src={avatar5.src} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
          <AvatarImage src={avatar6.src} />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
          <AvatarImage src={avatar7.src} />
          <AvatarFallback>CD</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
          <AvatarImage src={avatar8.src} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
          <AvatarImage src={avatar9.src} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
          <AvatarImage src={avatar10.src} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
          <AvatarImage src={avatar11.src} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>

        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
          <AvatarFallback className="  font-normal">M</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar className=" ring-1ring-background ring-offset-[2px]  ring-offset-background  h-6 w-6">
          <AvatarImage src={avatar5.src} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1ring-background ring-offset-[2px]  ring-offset-background  h-6 w-6">
          <AvatarImage src={avatar6.src} />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1ring-background ring-offset-[2px]  ring-offset-background  h-6 w-6">
          <AvatarImage src={avatar7.src} />
          <AvatarFallback>CD</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1ring-background ring-offset-[2px]  ring-offset-background  h-6 w-6">
          <AvatarImage src={avatar8.src} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background  h-6 w-6">
          <AvatarImage src={avatar9.src} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background  h-6 w-6">
          <AvatarImage src={avatar10.src} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background  h-6 w-6">
          <AvatarImage src={avatar11.src} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
          <AvatarFallback className=" font-normal">M</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  );
};

export default AvatarGroupSize;
