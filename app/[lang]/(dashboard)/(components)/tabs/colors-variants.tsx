"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ColorVariants = () => {
  return (
    <div className=" space-y-5">
      <div>
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
      <div>
        <Tabs defaultValue="account" className=" inline-block">
          <TabsList className=" rounded-full">
            <TabsTrigger
              value="account"
              className=" rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground "
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className=" rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground "
            >
              Password
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className=" rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground "
            >
              Profile
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>
        <Tabs defaultValue="account" className=" inline-block">
          <TabsList className=" rounded-full">
            <TabsTrigger
              value="account"
              className=" rounded-full data-[state=active]:bg-success data-[state=active]:text-success-foreground "
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className=" rounded-full data-[state=active]:bg-success data-[state=active]:text-success-foreground "
            >
              Password
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className=" rounded-full data-[state=active]:bg-success data-[state=active]:text-success-foreground "
            >
              Profile
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>
        <Tabs defaultValue="account" className=" inline-block">
          <TabsList className=" rounded-full">
            <TabsTrigger
              value="account"
              className=" rounded-full data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground "
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className=" rounded-full data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground "
            >
              Password
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className=" rounded-full data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground "
            >
              Profile
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>
        <Tabs defaultValue="account" className=" inline-block">
          <TabsList className=" rounded-full">
            <TabsTrigger
              value="account"
              className=" rounded-full data-[state=active]:bg-info data-[state=active]:text-info-foreground "
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className=" rounded-full data-[state=active]:bg-info data-[state=active]:text-info-foreground "
            >
              Password
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className=" rounded-full data-[state=active]:bg-info data-[state=active]:text-info-foreground "
            >
              Profile
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>
        <Tabs defaultValue="account" className=" inline-block">
          <TabsList className=" rounded-full">
            <TabsTrigger
              value="account"
              className=" rounded-full data-[state=active]:bg-warning data-[state=active]:text-warning-foreground "
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className=" rounded-full data-[state=active]:bg-warning data-[state=active]:text-warning-foreground "
            >
              Password
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className=" rounded-full data-[state=active]:bg-warning data-[state=active]:text-warning-foreground "
            >
              Profile
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default ColorVariants;
