"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AvatarsTonal = () => {
  return (
    <>
      <Avatar>
        <AvatarFallback className=" bg-primary/10 text-primary">
          PR
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className=" bg-secondary/70 text-muted-foreground">
          LI
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-destructive/10 text-destructive">
          SH
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-warning/10 text-warning">
          SU
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-success/10 text-success">
          PR
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-info/10 text-info">SR</AvatarFallback>
      </Avatar>
    </>
  );
};

export default AvatarsTonal;
