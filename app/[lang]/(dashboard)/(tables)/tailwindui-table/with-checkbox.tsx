"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataRows, users } from "./data";
import { Checkbox } from "@/components/ui/checkbox";

const WithCheckbox = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleSelectAll = () => {
    if (selectedRows?.length === users?.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(users.map((row) => row.id));
    }
  };

  const handleRowSelect = (id:number) => {
    const updatedSelectedRows = [...selectedRows];
    if (selectedRows.includes(id)) {
      updatedSelectedRows.splice(selectedRows.indexOf(id), 1);
    } else {
      updatedSelectedRows.push(id);
    }
    setSelectedRows(updatedSelectedRows);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox
              checked={selectedRows.length === users.length || "indeterminate"}
              onCheckedChange={handleSelectAll}
            />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead> Title</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users.map((item:DataRows) => (
          <TableRow
            key={item.id}
            data-state={selectedRows.includes(item.id) && "selected"}
          >
            <TableCell>
              <Checkbox
                checked={selectedRows.includes(item.id)}
                onCheckedChange={() => handleRowSelect(item.id)}
              />
            </TableCell>
            <TableCell className="  font-medium  text-card-foreground/80">
              {item.name}
            </TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell className="capitalize">{item.role}</TableCell>
            <TableCell>
              <Button className=" p-0 h-auto hover:bg-transparent bg-transparent text-primary hover:text-primary/80  hover:underline">
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default WithCheckbox;
