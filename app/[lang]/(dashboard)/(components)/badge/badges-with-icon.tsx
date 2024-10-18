"use client";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
const BadgesWithIcon = () => {
  return (
    <>
      <Badge>
        <Star className=" ltr:mr-1 rtl:ml-1 h-3 w-3" />
        Badge
      </Badge>
      <Badge color="secondary">
        <Star className=" ltr:mr-1 rtl:ml-1 h-3 w-3" />
        Secondary
      </Badge>
      <Badge color="success">
        <Star className=" ltr:mr-1 rtl:ml-1 h-3 w-3" />
        Success
      </Badge>
      <Badge color="info">
        <Star className=" ltr:mr-1 rtl:ml-1 h-3 w-3" />
        Info
      </Badge>
      <Badge color="warning">
        <Star className=" ltr:mr-1 rtl:ml-1 h-3 w-3" />
        Warning
      </Badge>
      <Badge color="destructive">
        <Star className=" ltr:mr-1 rtl:ml-1 h-3 w-3" />
        Danger
      </Badge>
      <Badge color="dark">
        <Star className=" ltr:mr-1 rtl:ml-1 h-3 w-3" />
        Dark
      </Badge>
    </>
  );
};

export default BadgesWithIcon;
