"use client";

import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs";

const SizesTabs = () => {
  return (
    <>
      <div className=" overflow-x-auto">
        <Tabs defaultValue="account" className=" inline-block">
          <TabsList>
            <TabsTrigger value="account" className=" px-2 text-xs">
              Account
            </TabsTrigger>
            <TabsTrigger value="password" className=" px-2 text-xs">
              Password
            </TabsTrigger>
            <TabsTrigger value="profile" className=" px-2 text-xs">
              Profile
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className=" overflow-x-auto">
        <Tabs defaultValue="account" className=" inline-block">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className=" overflow-x-auto">
        <Tabs defaultValue="account" className=" inline-block">
          <TabsList>
            <TabsTrigger value="account" className=" text-base px-4">
              Account
            </TabsTrigger>
            <TabsTrigger value="password" className="  text-base px-4">
              Password
            </TabsTrigger>
            <TabsTrigger value="profile" className="  text-base px-4">
              Profile
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </>
  );
};

export default SizesTabs;
