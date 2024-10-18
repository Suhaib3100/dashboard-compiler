"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import avatar from "@/public/images/avatar/avatar-3.jpg"
import { Icon } from "@iconify/react";
import Image from "next/image";
const UserMeta = () => {
  return (
    <Card>
      <CardContent className="p-6 flex flex-col items-center">
        <div className="w-[124px] h-[124px] relative rounded-full">
          <Image src={avatar} alt="avatar" className="w-full h-full object-cover rounded-full" priority={true} />
          <Button asChild
            size="icon"
            className="h-8 w-8 rounded-full cursor-pointer absolute bottom-0 right-0"
          >
            <Label
              htmlFor="avatar"
            >
              <Icon className="w-5 h-5 text-primary-foreground" icon="heroicons:pencil-square" />
            </Label>
          </Button>
          <Input type="file" className="hidden" id="avatar" />
        </div>
        <div className="mt-4 text-xl font-semibold text-default-900">Jennyfer Frankin</div>
        <div className="mt-1.5 text-sm font-medium text-default-500">Data Analytics</div>
      </CardContent>
    </Card>
  );
};

export default UserMeta;