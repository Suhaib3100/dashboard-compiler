export const basicTabs = `"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BasicTabs = () => {
  return (
    <Tabs defaultValue="account" className="md:w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default BasicTabs;
`;
export const disabledTabs = `"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DisabledTabs = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password" disabled>
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default DisabledTabs;
`;
export const sizesTabs = `"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SizesTabs = () => {
  return (
    <div className=" space-y-5">
      <div>
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
    </div>
  );
};

export default SizesTabs;
`;
export const roundedTabs = `"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RoundedTabs = () => {
  return (
    <div className=" space-y-5">
      <div>
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
    </div>
  );
};

export default RoundedTabs;
`;
export const colorVariants = `"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
`;
export const styleVariants = `"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <Tabs defaultValue="account" className=" inline-block">
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
`;
export const iconVariants = `"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";

const IconVariants = () => {
  return (
    <Tabs defaultValue="account" className=" inline-block">
      <TabsList className=" border bg-background ">
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
          <Icon icon="ph:house-line" className="h-5 w-5  mr-2 " />
          Profile
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default IconVariants;
`;
