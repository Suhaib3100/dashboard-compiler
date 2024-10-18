"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { DataRow } from "../data";


export const columns: ColumnDef<DataRow, any>[] = [
  {
    id: "id",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="INVOICE ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => (
      <div className="flex gap-2 items-center">
        <Avatar className=" rounded-full">
          <AvatarImage src={row?.original?.customer?.avatar?.src as any} />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className=" text-sm font-medium text-default-600 whitespace-nowrap"> {row?.original?.customer?.name} </span>
          <span className=" text-xs text-default-500 whitespace-nowrap"> {row?.original?.customer?.email} </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <span className="whitespace-nowrap">{row.getValue("date")}</span>
    ),
  },
  {
    accessorKey: "amount",
    header: "Total",
    cell: ({ row }) => (
      <span>${row.getValue("amount")}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        className="rounded capitalize whitespace-nowrap"
        variant="soft"

        color={row.getValue("status") === "confirmed" ? "success" : row.getValue("status") === "closed" ? "warning" : "default"}
      >
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    cell: ({ row }) => (
      <Badge
        className="capitalize whitespace-nowrap"
        variant="soft"
        color={row.getValue("paymentStatus") === "paid" ? "success" : row.getValue("paymentStatus") === "pending" ? "warning" : "default"}
      >
        {row.getValue("paymentStatus")}
      </Badge>
    ),
  },
  {
    accessorKey: "",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-3 items-center justify-end">
        <Button
          asChild
          size="icon"
          className="h-9 w-9 rounded bg-default-100 dark:bg-default-200 text-default-500 hover:text-primary-foreground"
        >
          <Link href="/invoice-details">
            <Icon icon="heroicons:eye" className="w-5 h-5" />
          </Link>
        </Button>
        <Button
          size="icon"
          className="h-9 w-9 rounded bg-default-100 dark:bg-default-200 text-default-500 hover:text-primary-foreground"
        >
          <Icon icon="heroicons:pencil-square" className="w-5 h-5" />
        </Button>
        <Button
          size="icon"
          className="h-9 w-9 rounded bg-default-100 dark:bg-default-200 text-default-500 hover:text-primary-foreground"
        >
          <Icon icon="heroicons:trash" className="w-5 h-5" />
        </Button>
      </div>
    ),
  },


];
