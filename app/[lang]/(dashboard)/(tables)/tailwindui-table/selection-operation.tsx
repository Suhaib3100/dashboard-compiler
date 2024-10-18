"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataRows, users } from "./data";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SelectionOperation = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleSelectAll = () => {
    if (selectedRows?.length === users?.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(users.map((row) => row.id));
    }
  };

  const handleRowSelect = (id: number) => {
    const updatedSelectedRows = [...selectedRows];
    if (selectedRows.includes(id)) {
      updatedSelectedRows.splice(selectedRows.indexOf(id), 1);
    } else {
      updatedSelectedRows.push(id);
    }
    setSelectedRows(updatedSelectedRows);
  };
  const selectEvenRows = () => {
    const evenRowIds = users
      .filter((_, index) => index % 2 !== 0)
      .map((row) => row.id);
    setSelectedRows(evenRowIds);
  };

  const selectOddRows = () => {
    const oddRowIds = users
      .filter((_, index) => index % 2 === 0)
      .map((row) => row.id);
    setSelectedRows(oddRowIds);
  };
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <div className="flex items-center gap-1">
              <Checkbox
                checked={
                  selectedRows.length === users.length || "indeterminate"
                }
                onCheckedChange={handleSelectAll}
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="icon"
                    color="secondary"
                    className=" h-7 rounded-full bg-transparent w-7 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground  "
                  >
                    <Icon icon="heroicons:chevron-down" className=" h-4 w-4 " />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" avoidCollisions>
                  <DropdownMenuLabel>Action Center</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSelectAll}>
                    Select All Data
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedRows([])}>
                    Invert Current Page
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedRows([])}>
                    Clear All Data
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={selectOddRows}>
                    Select Odd Row
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={selectEvenRows}>
                    Select Even Row
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TableHead>
          <TableHead className=" font-semibold">Name</TableHead>
          <TableHead> Title</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className=" text-end">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users.map((item: DataRows) => (
          <TableRow
            key={item.email}
            className="hover:bg-muted"
            data-state={selectedRows.includes(item.id) && "selected"}
          >
            <TableCell>
              <Checkbox
                checked={selectedRows.includes(item.id)}
                onCheckedChange={() => handleRowSelect(item.id)}
              />
            </TableCell>
            <TableCell className="  font-medium  text-card-foreground/80">
              <div className="flex gap-3 items-center">
                <Avatar className=" rounded-full">
                  <AvatarImage src={item.avatar} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className=" text-sm   text-card-foreground">
                  {item.name}
                </span>
              </div>
            </TableCell>

            <TableCell>{item.title}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              <Badge
                variant="outline"
                color={
                  (item.role === "admin" && "default") ||
                  (item.role === "member" && "success") ||
                  (item.role === "owner" && "info") ||
                  (item.role === "editor" && "warning") || "default"
                }
                className=" capitalize"
              >
                {item.role}
              </Badge>
            </TableCell>

            <TableCell className="flex justify-end">
              <div className="flex gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  color="secondary"
                  className="h-7 w-7"
                >
                  <Icon icon="heroicons:pencil" className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className=" h-7 w-7"
                  color="secondary"
                >
                  <Icon icon="heroicons:eye" className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className=" h-7 w-7"
                  color="secondary"
                >
                  <Icon icon="heroicons:trash" className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SelectionOperation;
