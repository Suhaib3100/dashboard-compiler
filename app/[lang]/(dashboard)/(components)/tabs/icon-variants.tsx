"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";

const IconVariants = () => {
  return (
    <div className="overflow-x-auto">
      <Tabs defaultValue="account" className=" inline-block">
        <TabsList className=" border bg-background  ">
          <TabsTrigger
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            value="account"
          >
            <Icon icon="ph:house-line" className="h-5 w-5  mr-2 " />
            Account
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Icon icon="ph:house-line" className="h-5 w-5  mr-2 " />
            Password
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Icon icon="ph:user-circle" className="h-5 w-5  mr-2 " />
            Profile
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default IconVariants;
