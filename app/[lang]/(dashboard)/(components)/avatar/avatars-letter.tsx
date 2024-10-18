"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AvatarsLetter = () => {
  return (
    <>
      <Avatar>
        <AvatarFallback className=" bg-primary text-primary-foreground">
          PR
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className=" bg-secondary text-secondary-foreground">
          LI
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-destructive text-destructive-foreground">
          SH
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-warning text-warning-foreground">
          SU
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-success text-success-foreground">
          PR
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-info text-info-foreground">
          SR
        </AvatarFallback>
      </Avatar>
    </>
  );
};

export default AvatarsLetter;
