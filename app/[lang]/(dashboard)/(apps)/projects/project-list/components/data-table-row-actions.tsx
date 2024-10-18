"use client";

import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { type Project } from "@/app/api/projects/data";
import { Row } from "@tanstack/react-table";

interface DataTableRowActionsProps<TData> {
  row: Row<Project>;
}
export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {

  return (
    <div className="flex justify-end gap-3 items-center">
      <div>

        {row?.original?.isFavorite ? (
          <Icon
            icon="heroicons:star-16-solid"
            className="w-5 h-5 text-warning"
          />
        ) : (
          <Icon icon="heroicons:star" className="w-5 h-5 text-default-500" />
        )}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            className="flex h-6 w-6 rounded-full bg-default-100 hover:bg-default-200   p-0 data-[state=open]:bg-muted"
          >
            <MoreHorizontal className="h-4 w-4 text-default-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`projects/${row?.original?.id}/overview`}>View</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
