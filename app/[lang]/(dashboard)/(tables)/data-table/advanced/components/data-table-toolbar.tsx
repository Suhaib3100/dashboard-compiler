"use client";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import { priorities, statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { Table } from "@tanstack/react-table";
interface DataTableToolbarProps {
  table: Table<any>;
}
export function DataTableToolbar({ table }: DataTableToolbarProps) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    table.getColumn("title")?.setFilterValue(value);
  };
  const statusColumn = table.getColumn("status");
  const priorityColumn = table.getColumn("priority");

  return (
    <div className="flex flex-1 flex-wrap items-center gap-2">
      <Input
        placeholder="Filter tasks..."
        value={table.getColumn("title")?.getFilterValue() as string || ""}
        onChange={handleFilterChange}
        className="h-8 min-w-[200px] max-w-sm"
      />

      {statusColumn && (
        <DataTableFacetedFilter
          column={statusColumn}
          title="Status"
          options={statuses}
        />
      )}
      {priorityColumn && (
        <DataTableFacetedFilter
          column={priorityColumn}
          title="Priority"
          options={priorities}
        />
      )}
      {isFiltered && (
        <Button
          variant="outline"
          onClick={() => table.resetColumnFilters()}
          className="h-8 px-2 lg:px-3"
        >
          Reset
          <X className="ltr:ml-2 rtl:mr-2 h-4 w-4" />
        </Button>
      )}
      <DataTableViewOptions table={table} />
    </div>

  );
}
