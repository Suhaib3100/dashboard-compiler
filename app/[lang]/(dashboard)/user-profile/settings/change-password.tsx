"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Eye, EyeOff } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import windowsImage from "@/public/images/social/windows.png"
import androidImage from "@/public/images/social/android.png"
import macImage from "@/public/images/social/mac.png"
import iphoneImage from "@/public/images/social/iphone.png"
import Image, { StaticImageData } from "next/image";
interface DataProps {
  id: number;
  browser: string;
  image: StaticImageData;
  device: string;
  location: string;
  recent_activites: string
}
const ChangePassword = () => {
  const [currentPasswordType, setCurrentPasswordType] = useState<string>("password")
  const [newPasswordType, setNewPasswordType] = useState<string>("password")
  const [confirmPasswordType, setConfirmPasswordType] = useState<string>("password")

  const data: DataProps[] = [
    {
      id: 1,
      browser: "Chrome on Windows",
      image: windowsImage,
      device: "Unknown",
      location: "Bangladesh",
      recent_activites: "10, Jan 2023 20:07"
    },
    {
      id: 2,
      browser: "Chrome on Android",
      image: androidImage,
      device: "Unknown",
      location: "Australia",
      recent_activites: "13, Jan 2023 20:07"
    },
    {
      id: 3,
      browser: "Chrome on MacOS",
      image: macImage,
      device: "Unknown",
      location: "United Kingdom",
      recent_activites: "12, Jan 2023 20:07"
    },
    {
      id: 4,
      browser: "Chrome on iPhone",
      image: iphoneImage,
      device: "iPhone 12 pro",
      location: "India",
      recent_activites: "11, Mar 2023 20:07"
    },
    {
      id: 5,
      browser: "Edge on Android",
      image: androidImage,
      device: "Unknown",
      location: "Canada",
      recent_activites: "10, Feb 2023 20:07"
    }
  ]
  return (
    <>
      <Card className="rounded-t-none pt-6">
        <CardContent>
          <div className="grid grid-cols-12 md:gap-x-12 gap-y-5">
            <div className="col-span-12 md:col-span-6">
              <Label htmlFor="currentPassword" className="mb-2 text-default-800">Current Password</Label>
              <div className="relative">
                <Input id="currentPassword" type={currentPasswordType} />
                <Eye
                  className={cn("absolute right-3 top-1/2 -translate-y-1/2 text-default-500 w-4 h-4 cursor-pointer", currentPasswordType === "text" && "hidden")}
                  onClick={() => setCurrentPasswordType("text")}
                />
                <EyeOff
                  className={cn("absolute right-3 top-1/2 -translate-y-1/2 text-default-500 w-4 h-4 cursor-pointer", currentPasswordType === "password" && "hidden")}
                  onClick={() => setCurrentPasswordType("password")}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6"></div>
            <div className="col-span-12 md:col-span-6">
              <Label htmlFor="newPassword" className="mb-2 text-default-800">New Password</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={newPasswordType}

                />
                <Eye
                  className={cn("absolute right-3 top-1/2 -translate-y-1/2 text-default-500 w-4 h-4 cursor-pointer", newPasswordType === "text" && "hidden")}
                  onClick={() => setNewPasswordType("text")}
                />
                <EyeOff
                  className={cn("absolute right-3 top-1/2 -translate-y-1/2 text-default-500 w-4 h-4 cursor-pointer", newPasswordType === "password" && "hidden")}
                  onClick={() => setNewPasswordType("password")}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Label htmlFor="confirmPassword" className="mb-2 text-default-800">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={confirmPasswordType}
                />
                <Eye
                  className={cn("absolute right-3 top-1/2 -translate-y-1/2 text-default-500 w-4 h-4 cursor-pointer", confirmPasswordType === "text" && "hidden")}
                  onClick={() => setConfirmPasswordType("text")}
                />
                <EyeOff
                  className={cn("absolute right-3 top-1/2 -translate-y-1/2 text-default-500 w-4 h-4 cursor-pointer", confirmPasswordType === "password" && "hidden")}
                  onClick={() => setConfirmPasswordType("password")}
                />
              </div>
            </div>
          </div>
          <div className="mt-5 text-sm font-medium text-default-800">Password Requirements:</div>
          <div className="mt-3 space-y-1.5">
            {
              [
                "Minimum 8 characters long - the more, the better.",
                "At least one lowercase character.",
                "At least one number, symbol, or whitespace character."
              ].map((item, index) => (
                <div
                  className="flex items-center gap-1.5"
                  key={`requirement-${index}`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-default-400"></div>
                  <div className="text-xs text-default-600">{item}</div>
                </div>
              ))
            }
          </div>
          <div className="mt-6 flex gap-5 justify-end">
            <Button color="secondary">Cancel</Button>
            <Button>
              <Icon icon="heroicons:lock-closed" className="w-5 h-5 text-primary-foreground me-1" />
              Change Password
            </Button>
          </div>
        </CardContent>
      </Card>
      {/* recent device table */}
      <Card className="mt-6">
        <CardHeader className="flex-row items-center border-none mb-0">
          <CardTitle className="flex-1 text-lg font-medium text-default-800">Recent Device</CardTitle>
          <Button className="flex-none" size="sm" variant="outline"> Logout All </Button>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                {
                  ["Browser", "DEVICE", "LOCATION", "RECEN ACTIVITIES", "ACTION"]
                    .map((column, index) => (
                      <TableHead
                        key={`column-${index}`}
                        className="last:text-right border-t border-default-200 first:pl-5 last:pr-5 whitespace-nowrap"
                      >
                        {column}
                      </TableHead>
                    ))
                }
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                data.map((item, index) => (
                  <TableRow
                    key={`device-row-${index}`}
                    className="border-default-200"
                  >
                    <TableCell
                      className="py-2">
                      <div className="flex items-center gap-2 text-sm font-medium text-default-600 whitespace-nowrap">
                        <div className="h-5 w-5 grid place-content-center rounded bg-default-100 dark:bg-default-50">
                          <Image className="w-3.5 h-3.5" src={item.image} alt={item.browser} priority={true} />
                        </div>
                        {item.browser}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm  text-default-600 py-2 whitespace-nowrap">{item.device}</TableCell>
                    <TableCell className="text-sm  text-default-600 capitalize py-2 whitespace-nowrap">{item.location}</TableCell>
                    <TableCell className="text-sm  text-default-600 capitalize py-2 whitespace-nowrap">{item.recent_activites}</TableCell>
                    <TableCell className="text-right py-2">
                      <Button size="sm" variant="ghost">Logout</Button>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default ChangePassword;