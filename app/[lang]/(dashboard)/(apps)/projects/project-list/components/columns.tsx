"use client";
import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { priorities, statuses } from "../data/data";

import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { type Project } from "@/app/api/projects/data";

export const columns: ColumnDef<Project, any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="min-w-[40px] flex justify-center ltr:-ml-3 rtl:-ml-2.5">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="min-w-[40px] flex justify-center ltr:-ml-3 rtl:-ml-2.5">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <Link
          href={{
            pathname: `projects/${row?.original?.id}/overview`,
          }}
          className="flex items-center gap-2">
          <Avatar className="rounded-sm  h-8 w-8">
            <AvatarImage src={row?.original?.logo?.src} />
            <AvatarFallback className="bg-success/30 text-success">
              {row?.original?.title?.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className="max-w-[140px] truncate  ">
            <span className="font-semibold text-default-900 capitalize">
              {" "}
              {row.getValue("title")}
            </span>
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex  items-center">
          <Badge
            variant="soft"
            color={status?.color === "destructive" ||
              status?.color === "info" ||
              status?.color === "default" ||
              status?.color === "success" ||
              status?.color === "warning" ||
              status?.color === "secondary" ||
              status?.color === "dark" ? status?.color : "default"}
            className="whitespace-normal"
          >
            {status?.label}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
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
                  <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-7 w-7">
                    <AvatarImage src={item?.image?.src} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
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
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      );

      if (!priority) {
        return null;
      }

      return (
        <Badge color={priority?.color === "destructive" ||
          priority?.color === "info" ||
          priority?.color === "default" ||
          priority?.color === "success" ||
          priority?.color === "warning" ||
          priority?.color === "secondary" ||
          priority?.color === "dark" ? priority?.color : "default"} className="whitespace-nowrap">
          {priority.label} priority
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: ({ row }) => {
      return (
        <div className="text-sm font-medium text-default-600 whitespace-nowrap">
          {row.getValue("dueDate")}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
