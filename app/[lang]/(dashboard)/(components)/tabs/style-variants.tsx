"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StyleVariants = () => {
  return (
    <div className=" space-y-5">
      <div>
        <Tabs defaultValue="account" className=" inline-block">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>
        <Tabs defaultValue="account" className=" inline-block">
          <TabsList className=" bg-background">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>
        <Tabs defaultValue="account" className=" inline-block">
          <TabsList className=" bg-transparent p-0 border-b-2  rounded-none">
            <TabsTrigger
              className="capitalize  data-[state=active]:shadow-none  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 before:transition-all before:duration-150 relative before:absolute
         before:left-1/2 before:-bottom-[5px] before:h-[2px]
           before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
              value="Account"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              className="capitalize  data-[state=active]:shadow-none  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 before:transition-all before:duration-150 relative before:absolute
         before:left-1/2 before:-bottom-[5px] before:h-[2px]
           before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
              value="password"
            >
              Password
            </TabsTrigger>
            <TabsTrigger
              className="capitalize  data-[state=active]:shadow-none  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 before:transition-all before:duration-150 relative before:absolute
         before:left-1/2 before:-bottom-[5px] before:h-[2px]
           before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
              value="profile"
            >
              Profile
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>
        <Tabs defaultValue="account" className="inline-block">
          <TabsList className=" border bg-background ">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default StyleVariants;
