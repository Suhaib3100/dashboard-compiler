"use client"

import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Table } from "@tanstack/react-table";

export function DataTablePagination<TData>({ table }: { table: Table<TData> }) {
  return (
    <div className="flex items-center flex-wrap gap-2 justify-between  py-5 px-6">
      <div className="flex-1 text-sm text-default-600  whitespace-nowrap">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>

      <div className="flex-none flex gap-2  items-center">
        <Button
          size="icon"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="h-7 w-7 bg-default-100 dark:bg-default-50 text-default-800 rounded-md hover:bg-default-200 "
        >
          <Icon icon="heroicons:chevron-left" className="w-3 h-3 rtl:rotate-180" />
        </Button>

        {table.getPageOptions().map((page, pageIdx) => (
          <Button
            key={`project-data-table-${pageIdx}`}
            onClick={() => table.setPageIndex(pageIdx)}
            size="icon"
            className={cn("h-7 w-7 p-0 font-medium bg-default-100 dark:bg-default-50 dark:hover:bg-default-200 text-default-600 rounded-md hover:bg-default-200", {
              "bg-primary text-primary-foreground": table.getState().pagination.pageIndex === pageIdx,
            })}
          >
            {page + 1}
          </Button>

        ))}

        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          size="icon"
          className="h-7 w-7  bg-default-100 dark:bg-default-50 text-default-800 rounded-md hover:bg-default-200"
        >
          <Icon icon="heroicons:chevron-right" className="w-3 h-3 rtl:rotate-180" />
        </Button>
      </div>
    </div>
  );
}
