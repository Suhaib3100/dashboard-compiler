"use client";

import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { DataTableRowActions } from "./data-table-row-actions";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ColumnDef } from "@tanstack/react-table";

const colors: Record<string, "success" | "warning" | "destructive" | "default"> = {
  completed: "success",
  review: "warning",
  "in progress": "default",
  cancelled: "destructive",
}
interface ProjectData {
  title: string;
  status: string;
  projectImage: StaticImageData;
  assign: { image: { src: string }; label: string }[];
  percentage: number;
  isFavourite: boolean;
}

export const columns: ColumnDef<ProjectData>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2 max-w-[240px] truncate  ">
          <Image src={row.original.projectImage} alt={row.getValue("title")} height={32} width={32} className="rounded" priority={true} />
          <span className="text-sm font-medium text-default-900 whitespace-nowrap"> {row.getValue("title")}</span>
        </div>
      )
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div>
          <Badge
            color={colors[row.getValue("status") as keyof typeof colors] || ""}
            variant="soft"
            className="capitalize whitespace-nowrap"
          >
            {row.getValue("status")}
          </Badge>
        </div>
      )
    }
  },

  {
    accessorKey: "assign",
    header: "Team",
    cell: ({ row }) => {
      return (
        <>
          <AvatarGroup
            max={3}
            total={row?.original?.assign?.length}
            countClass="w-7 h-7"
          >
            {row?.original?.assign?.map((item, i) => (
              <div key={`assined-team-member-${i}`}>
                {typeof item === "object" ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-7 w-7">
                          <AvatarImage src={item?.image?.src} />
                          <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item?.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <div>{item}</div>
                )}
              </div>
            ))}
          </AvatarGroup>
        </>
      );
    },
  },
  {
    accessorKey: "percentage",
    header: "Progress",
    cell: ({ row }) => {
      return (
        <div className="min-w-[190px]">
          <div className="flex justify-end mb-2">
            <Label className="text-end">{row.getValue("percentage")}%</Label>
          </div>
          <Progress value={row.getValue("percentage")} size="sm" />
        </div>
      );
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
