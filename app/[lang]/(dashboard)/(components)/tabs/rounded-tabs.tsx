"use client";

import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs";

const RoundedTabs = () => {
  return (
    <>
      <div className=" overflow-x-auto">
        <Tabs defaultValue="account" className=" inline-block">
          <TabsList className=" rounded-full">
            <TabsTrigger value="account" className=" px-2 text-xs rounded-full">
              Account
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className=" px-2 text-xs rounded-full"
            >
              Password
            </TabsTrigger>
            <TabsTrigger value="profile" className=" px-2 text-xs rounded-full">
              Profile
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className=" overflow-x-auto">
        <Tabs defaultValue="account" className=" inline-block">
          <TabsList className=" rounded-full">
            <TabsTrigger value="account" className=" rounded-full">
              Account
            </TabsTrigger>
            <TabsTrigger value="password" className=" rounded-full">
              Password
            </TabsTrigger>
            <TabsTrigger value="profile" className=" rounded-full">
              Profile
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className=" overflow-x-auto">
        <Tabs defaultValue="account" className=" inline-block">
          <TabsList className=" rounded-full">
            <TabsTrigger
              value="account"
              className=" text-base px-4 rounded-full"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="  text-base px-4 rounded-full"
            >
              Password
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="  text-base px-4 rounded-full"
            >
              Profile
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </>
  );
};

export default RoundedTabs;
