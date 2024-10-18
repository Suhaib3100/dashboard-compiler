"use client";
import * as React from "react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState
} from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icon } from "@iconify/react";
import { Grip } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { StaticImageData } from "next/image";

const statusColors: { [key: string]: any } = {
  todo: "warning",
  completed: "success",
};
const priorityColors: { [key: string]: any } = {
  high: "success",
  medium: "warning",
  low: "destructive",
};
import { Menu } from "lucide-react";
import { type Task as TaskType } from "@/app/api/tasks/data";

const TaskTable = ({ data, handleEditSheetOpen, handleSidebar }: {
  data: TaskType[],
  handleEditSheetOpen: () => void,
  handleSidebar: () => void,
}) => {
  const isDesktop = useMediaQuery("(max-width: 1280px)");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const columns: ColumnDef<TaskType, any>[] = [
    {
      accessorKey: "title",
      header: ({ table }) => (
        <div className="flex items-center gap-3 pl-8">
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
          <span className="text-default-800">Task Name</span>
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-3 pr-4">
          <Button
            type="button"
            size="icon"
            className="h-5 w-5 bg-default-100 rounded hover:bg-default-200 cursor-move"
          >
            <Grip className="w-3 h-3 text-default-400" />
          </Button>
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
          <div className="flex items-center gap-2">
            <Avatar className=" rounded-[2px] h-8 w-8">

              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <div className="text-sm  text-default-600 capitalize truncate max-w-[160px]">
              {row.original?.title}
            </div>
          </div>
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },

    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div>
          <Badge
            variant="soft"
            color={statusColors[row.getValue("status") as string]}
            className="capitalize"
          >
            {row.getValue("status")}
          </Badge>
        </div>
      ),
    },
    {
      accessorKey: "assign",
      header: "Assigned",
      cell: ({ row }: any) => (
        <div>
          {row.getValue("assign")?.length > 0 && (
            <div className="flex items-center gap-3">
              <AvatarGroup
                max={2}

                total={(row.getValue("assign") as any[]).length}
                countClass="w-8 h-8"
              >
                {row.getValue("assign").map((user: any, index: number) => (
                  <TooltipProvider key={`assigned-user-${index}`}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Avatar className="h-8 w-8 ring-1 ring-background ring-offset-[2px]  ring-offset-background">
                          <AvatarImage src={user.image.src} />
                          <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent color="primary">
                        <p>{user.name}</p>
                        <TooltipArrow className=" fill-primary" />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </AvatarGroup>
            </div>
          )}
        </div>
      ),
    },
    {
      accessorKey: "priority",
      header: "Priority",
      cell: ({ row }) => (
        <Badge
          color={priorityColors[row.getValue("priority") as string] || ""}
          className="capitalize"
        >
          {row.getValue("priority")}
        </Badge>
      ),
    },
    {
      accessorKey: "date",
      header: "Due Date",
      cell: ({ row }) => (
        <div className="text-sm  text-default-600 whitespace-nowrap">
          {row.getValue("date")}
        </div>
      ),
    },
    {
      accessorKey: "id",
      header: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex justify-center items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              className=" h-7 w-7"
              onClick={handleEditSheetOpen}
            >
              <Icon icon="heroicons:pencil" className=" h-4 w-4  " />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="h-7 w-7"
              color="warning"
            >
              <Icon icon="heroicons:trash" className=" h-4 w-4  " />
            </Button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full flex flex-col h-full">
      <CardHeader className="flex-none p-3 sm:p-6 flex-row flex-wrap mb-0">
        <div className="flex-1 flex items-center gap-3 md:gap-4">
          {isDesktop && (
            <Menu
              className=" h-5 w-5 cursor-pointer text-default-600 "
              onClick={handleSidebar}
            />
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-default-300 text-default-500"
              >
                Sort <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Asc</DropdownMenuItem>
              <DropdownMenuItem>Desc</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-default-300 text-default-500"
              >
                All Tasks <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Task 1</DropdownMenuItem>
              <DropdownMenuItem>Task 2</DropdownMenuItem>
              <DropdownMenuItem>Task 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="w-full md:w-fit md:flex-none">
          <div className="relative">
            <Search className="w-4 h-4 text-default-400 absolute top-1/2 ltr:left-2 rtl:right-2 -translate-y-1/2" />
            <Input
              placeholder="Search Projects"
              className="ltr:pl-7 rtl:pr-7 h-10"

              value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}

              onChange={(event) =>
                table.getColumn("title")?.setFilterValue(event.target.value)
              }
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-0 w-full">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup, index) => (
                <TableRow key={`task-headerGroup-${index}`}>
                  {headerGroup.headers.map((header, index) => {
                    return (
                      <TableHead
                        key={`task-header-${index}`}
                        className="text-sm text-default-800 border-r border-default-200 last:text-center rtl:text-right rtl:first:pr-5"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="[&_tr:last-child]:border-1">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <TableRow
                    key={`task-bodyGroup-${index}`}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell, index) => (
                      <TableCell
                        key={`task-bodyGroup-${index}`}
                        className="border-r border-default-200"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="flex-none mt-4">
        <div className="flex items-center gap-4 flex-wrap  w-full">
          <div className="flex-1 text-sm whitespace-nowrap text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>

          <div className="flex-none flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="w-8 h-8 "
            >
              <Icon icon="heroicons:chevron-left" className="w-4 h-4 rtl:rotate-180" />
            </Button>
            <ul className=" flex gap-3 items-center">
              {table.getPageOptions().map((page, pageIdx) => (
                <li key={`pagination-${pageIdx}`}>
                  <Button
                    onClick={() => table.setPageIndex(pageIdx)}
                    className={`w-8 h-8`}

                  >
                    {page + 1}
                  </Button>
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              size="icon"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="w-8 h-8 rtl:rotate-180"
            >
              <Icon icon="heroicons:chevron-right" className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </div>
  );
};

export default TaskTable;
