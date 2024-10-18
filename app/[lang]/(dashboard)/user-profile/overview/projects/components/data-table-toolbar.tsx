"use client";
import { Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import { Table } from "@tanstack/react-table";

export function DataTableToolbar<TData>({ table }: { table: Table<TData> }) {

  return (
    <div className="flex items-center flex-wrap gap-4 ">
      <div className="text-lg font-medium text-default-800 flex-1">My Project</div>
      <div className="flex-none relative">
        <Search className="absolute top-1/2 -translate-y-1/2 left-3 w-3 h-3 text-default-500" />
        <Input
          placeholder="Search Project..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="w-[186px] h-9 pl-7 placeholder:text-default-500"
        />
      </div>

      <Button asChild size="sm" variant="outline">
        <Link href="#">View All Project</Link>
      </Button>
    </div>

  );
}
