"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil } from "lucide-react";
import Flatpickr from "react-flatpickr";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import projectLogo from "@/public/images/projects/project-placeholder.jpg";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Settings = () => {
  return (
    <Card>
      <CardHeader className="border-none mb-3 px-7 pt-7">
        <CardTitle>Project Settings</CardTitle>
      </CardHeader>
      <CardContent className="px-7 mt-5 space-y-6">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-3">
            <div className="text-sm font-medium text-default-700">
              Project Logo
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="w-28 h-28 shadow-sm rounded-md relative">
              <Image
                src={projectLogo}
                className="w-full h-full object-cover rounded-md"
                alt="Project Logo"
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Label
                      htmlFor="changeProjectLogo"
                      className="absolute -top-2 -right-2 w-6 h-6  bg-primary-500 text-primary-foreground rounded-full grid place-content-center"
                    >
                      <>
                        <Pencil className="w-3 h-3" />
                        <Input
                          type="file"
                          placeholder="Project Logo"
                          id="changeProjectLogo"
                          className="hidden"
                        />
                      </>
                    </Label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Change Avatar</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="mt-2 text-sm font-medium text-default-500">
              Allowed file types: png, jpg, jpeg.
            </div>
          </div>
        </div>
        {/* project name */}
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <Label htmlFor="projectName" className="text-sm font-medium text-default-700">
              Project Name
            </Label>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Input
              defaultValue="Dashtail Dashboard Template"
              size="lg"
              id="projectName"
            />
          </div>
        </div>
        {/* project Type */}
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <Label htmlFor="projectType" className="text-sm font-medium text-default-700">
              Project Type
            </Label>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Input id="projectType" defaultValue="Admin Template" size="lg" />
          </div>
        </div>
        {/* project Descriptions */}
        <div className="grid grid-cols-12  gap-5">
          <div className="col-span-12 md:col-span-3">
            <Label htmlFor="projectDescription" className="text-sm font-medium text-default-700">
              Project Description
            </Label>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Textarea
              id="projectDescription"

              defaultValue="Elevate your web app with our sleek Next.js dashboard template. Packed with modern components, responsive design, and easy customization, it's the perfect foundation for crafting stunning, efficient dashboards. Boost productivity now!"
            />
          </div>
        </div>
        {/* Due Date */}
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <div className="text-sm font-medium text-default-700">Due Date</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Flatpickr
              className="w-full bg-background border border-default-300 pl-3 text-default-500 placeholder:text-default-500 text-sm   focus:outline-none h-10 rounded-md px-2 "
              placeholder="Due Date"
            />
          </div>
        </div>
        {/* Notifications */}
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <div className="text-sm font-medium text-default-700">
              Notifications
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Checkbox className="w-4 h-4" id="email" />
                <Label htmlFor="email">Email</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox className="w-4 h-4" id="phone" />
                <Label htmlFor="phone">Phone</Label>
              </div>
            </div>
          </div>
        </div>
        {/* Status */}
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <div className="text-sm font-medium text-default-700">Status</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="flex items-center gap-3">
              <Switch defaultChecked id="active" />
              <Label htmlFor="active">Active</Label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="md:col-span-3"></div>
          <div className="col-span-12 md:col-span-9 flex items-center gap-3">
            <Button variant="outline">Discard</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Settings;
