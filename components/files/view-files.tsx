"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { UploadCloud, Search, LayoutGrid, List } from "lucide-react";
import React from "react";
import SingleFileCard from "./single-file-card";
import ninja from "@/public/images/files/imageninja.png";
import mountain from "@/public/images/files/imagemountain.png";
import temple from "@/public/images/files/imagetemple.jpg";
import ListFileCard from "./list-file-card";
import { Label } from "@/components/ui/label";
import { faker } from "@faker-js/faker";
const files = [
  {
    id: faker.string.uuid(),
    ext: "pdf",
    heading: "DashTail UI Figma.pdf",
    date: "6 Jan 2024",
    size: "155MB",
  },
  {
    id: faker.string.uuid(),
    ext: "html",
    heading: "DashTail UI Figma.pdf",
    date: "6 Jan 2024",
    size: "155MB",
  },
  {
    id: faker.string.uuid(),
    ext: "ai",
    heading: "DashTail UI Figma.pdf",
    date: "6 Jan 2024",
    size: "155MB",
  },
  {
    id: faker.string.uuid(),
    ext: "fig",
    heading: "DashTail UI Figma.pdf",
    date: "6 Jan 2024",
    size: "155MB",
  },
  {
    id: faker.string.uuid(),
    ext: "pdf",
    heading: "DashTail UI Figma.pdf",
    date: "6 Jan 2024",
    size: "155MB",
  },
  {
    id: faker.string.uuid(),
    ext: "png",
    heading: "DashTail UI Figma.pdf",
    date: "6 Jan 2024",
    size: "155MB",
    background: ninja,
  },
  {
    id: faker.string.uuid(),
    ext: "zip",
    heading: "DashTail UI Figma.pdf",
    date: "6 Jan 2024",
    size: "155MB",
  },
  {
    id: faker.string.uuid(),
    ext: "html",
    heading: "DashTail UI Figma.pdf",
    date: "6 Jan 2024",
    size: "155MB",
  },
  {
    id: faker.string.uuid(),
    ext: "ai",
    heading: "DashTail UI Figma.pdf",
    date: "6 Jan 2024",
    size: "155MB",
  },
  {
    id: faker.string.uuid(),
    ext: "pdf",
    heading: "DashTail UI Figma.pdf",
    date: "6 Jan 2024",
    size: "155MB",
  },
  {
    id: faker.string.uuid(),
    ext: "fig",
    heading: "DashTail UI Figma.pdf",
    date: "6 Jan 2024",
    size: "155MB",
  },
  {
    id: faker.string.uuid(),
    ext: "png",
    heading: "DashTail UI Figma.pdf",
    date: "6 Jan 2024",
    size: "155MB",
    background: mountain,
  },
  {
    id: faker.string.uuid(),
    ext: "html",
    heading: "DashTail UI Figma.pdf",
    date: "6 Jan 2024",
    size: "155MB",
  },
  {
    id: faker.string.uuid(),
    ext: 'png',
    heading: "DashTail UI Figma.pdf",
    date: "6 Jan 2024",
    size: "155MB",
    background: temple,
  },
  {
    id: faker.string.uuid(),
    ext: 'zip',
    heading: "DashTail UI Figma.pdf",
    date: "6 Jan 2024",
    size: "155MB",
  }
];

export type File = (typeof files)[number];

const ViewFiles = () => {
  const [fileView, setFileView] = React.useState<"grid" | "list">("grid");



  return (
    <Card className="mt-6">
      <CardHeader className="mb-0 border-none p-6">

        <div className="flex flex-wrap justify-between gap-4">

          <div className="flex-1">
            <div className="text-lg font-medium text-default-900 whitespace-nowrap">
              Project Files
            </div>
            <div className="text-xs lg:text-sm font-medium text-default-600 whitespace-nowrap">
              Total 382 files, 26GB space usage
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="icon"
              variant="outline"
              className={cn("hover:bg-transparent  ", {
                "hover:border-primary hover:text-primary": fileView === "grid",
                "hover:border-muted-foreground hover:text-muted-foreground":
                  fileView !== "grid",
              })}
              color={fileView === "grid" ? "primary" : "secondary"}
              onClick={() => setFileView("grid")}
            >
              <LayoutGrid className="h-5 w-5" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className={cn("hover:bg-transparent  ", {
                "hover:border-primary hover:text-primary": fileView === "list",
                "hover:border-muted-foreground hover:text-muted-foreground":
                  fileView !== "list",
              })}
              color={fileView === "list" ? "primary" : "secondary"}
              onClick={() => setFileView("list")}
            >
              <List className="h-5 w-5" />
            </Button>

            <div className="relative">
              <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 ltr:left-2 rtl:right-2 text-default-400" />
              <Input placeholder="Search File" className="ltr:pl-7 rtl:pr-8" />
            </div>
            <Select>
              <SelectTrigger className="w-[124px]">
                <SelectValue placeholder="Image" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="image">Image</SelectItem>
                <SelectItem value="file">File</SelectItem>
                <SelectItem value="audio">Audio</SelectItem>
                <SelectItem value="video">Video</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="fileUpload">
              <Button asChild>
                <span className="cursor-pointer flex items-center gap-1">
                  <UploadCloud className="h-4 w-4" />
                  Upload File  </span>
              </Button>
              <Input type="file" className="hidden" id="fileUpload" />
            </Label>

          </div>
        </div>
      </CardHeader>

      <CardContent>
        {fileView === "grid" && (
          <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {files?.map((item, i) => (
              <SingleFileCard item={item} key={i} />
            ))}
          </div>
        )}
        {fileView === "list" && <ListFileCard files={files} />}
      </CardContent>
    </Card>
  );
};

export default ViewFiles;
