"use client";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Home } from "lucide-react";
import coverImage from "@/public/images/all-img/user-cover.png"
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
const SettingsHeader = () => {

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>
          <Home className="h-4 w-4" />
        </BreadcrumbItem>
        <BreadcrumbItem>Pages</BreadcrumbItem>
        <BreadcrumbItem>Utility</BreadcrumbItem>
        <BreadcrumbItem>User Profile</BreadcrumbItem>
      </Breadcrumbs>
      <Card className="mt-6 rounded-2xl ">
        <CardContent className="p-0">
          <div className="relative h-[210px] xl:h-[296px] rounded-2xl w-full object-cover bg-no-repeat"
            style={{ backgroundImage: `url(${coverImage.src})` }}
          >
            <Button  className="absolute bottom-5 right-6 rounded px-5" size="sm">
              <Icon className="w-4 h-4 mr-1" icon="heroicons:pencil-square" />
              Change Cover
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SettingsHeader;