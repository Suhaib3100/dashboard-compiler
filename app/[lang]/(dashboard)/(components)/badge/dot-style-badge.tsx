import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar1 from "@/public/images/avatar/avatar-1.jpg";
const DotStyleBadge = () => {
  return (
    <>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={avatar1.src} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge className=" h-2 w-2  p-0  items-center justify-center absolute left-[calc(100%-8px)] bottom-[calc(100%-8px)]"></Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={avatar2.src} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge
          color="secondary"
          className=" h-2 w-2  p-0  items-center justify-center absolute left-[calc(100%-8px)] bottom-[calc(100%-8px)]"
        ></Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={avatar3.src} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge
          color="success"
          className=" h-2 w-2  p-0  items-center justify-center absolute left-[calc(100%-8px)] bottom-[calc(100%-8px)]"
        ></Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={avatar4.src} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge
          color="info"
          className=" h-2 w-2  p-0  items-center justify-center absolute left-[calc(100%-8px)] bottom-[calc(100%-8px)]"
        ></Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={avatar5.src} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge
          color="destructive"
          className=" h-2 w-2  p-0  items-center justify-center absolute left-[calc(100%-8px)] bottom-[calc(100%-8px)]"
        ></Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={avatar6.src} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge
          color="warning"
          className=" h-2 w-2  p-0  items-center justify-center absolute left-[calc(100%-8px)] bottom-[calc(100%-8px)]"
        ></Badge>
      </div>
    </>
  );
};

export default DotStyleBadge;
