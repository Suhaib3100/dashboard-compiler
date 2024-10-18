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
import { Checkbox } from "@/components/ui/checkbox";

import pdfi from "@/public/images/files/pdf.png";
import htmli from "@/public/images/files/html.png";
import zipi from "@/public/images/files/zip.png";
import figmai from "@/public/images/files/figma.png";
import aii from "@/public/images/files/ai.png";
import Image from "next/image";
import { type File } from "./view-files";

const ListFileCard = ({ files }: { files: File[] }) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const handleSelectAll = (event: any) => {
    if (selectedRows?.length === files?.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(files.map((row) => row.id));
    }
  };

  const handleRowSelect = (id: string) => {
    const updatedSelectedRows = [...selectedRows];
    if (selectedRows.includes(id)) {
      updatedSelectedRows.splice(selectedRows.indexOf(id), 1);
    } else {
      updatedSelectedRows.push(id);
    }
    setSelectedRows(updatedSelectedRows);
  };
  const selectEvenRows = () => {
    const evenRowIds = files
      .filter((_, index) => index % 2 !== 0)
      .map((row) => row.id);
    setSelectedRows(evenRowIds);
  };

  const selectOddRows = () => {
    const oddRowIds = files
      .filter((_, index) => index % 2 === 0)
      .map((row) => row.id);
    setSelectedRows(oddRowIds);
  };
  return (

    <div className="w-full h-[calc(100vh-180px)] overflow-auto no-scrollbar">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="flex items-center  space-x-1">
                <Checkbox
                  checked={
                    selectedRows.length === files.length || "indeterminate"
                  }
                  onCheckedChange={handleSelectAll}
                />
              </div>
            </TableHead>
            <TableHead className="font-semibold">File Name</TableHead>
            <TableHead> Type</TableHead>
            <TableHead>Size</TableHead>
            <TableHead className="whitespace-nowrap">Upload Date</TableHead>
            <TableHead className=" text-end">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {files.map((item) => (
            <TableRow
              key={item.id}
              className="hover:bg-muted whitespace-nowrap"
              data-state={selectedRows.includes(item.id) && "selected"}
            >
              <TableCell>
                <Checkbox
                  checked={selectedRows.includes(item.id)}
                  onCheckedChange={() => handleRowSelect(item.id)}
                />
              </TableCell>
              <TableCell className="font-medium  text-card-foreground/80">
                <div className="flex space-x-3  rtl:space-x-reverse items-center">
                  <div className="h-10 w-10">
                    <Image
                      alt=""
                      className="h-full w-full object-cover"
                      src={
                        (item?.ext === "pdf" && pdfi) ||
                        (item?.ext === "html" && htmli) ||
                        (item?.ext === "ai" && aii) ||
                        (item?.ext === "fig" && figmai) ||
                        (item?.ext === "zip" && zipi) ||
                        item?.background || ""
                      }
                    />
                  </div>
                  <span className=" text-sm  whitespace-nowrap text-card-foreground">
                    {item?.heading}
                  </span>
                </div>
              </TableCell>

              <TableCell>.{item?.ext}</TableCell>
              <TableCell>{item?.size}</TableCell>
              <TableCell>{item?.date}</TableCell>

              <TableCell className="flex justify-end">
                <div className="flex space-x-3 rtl:space-x-reverse">
                  <Button
                    size="icon"
                    variant="outline"
                    className=" h-7 w-7"
                  >
                    <Icon
                      icon="heroicons:arrow-down-tray"
                      className=" h-4 w-4  "
                    />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className=" h-7 w-7"
                    color="destructive"
                  >
                    <Icon icon="heroicons:trash" className=" h-4 w-4  " />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListFileCard;
