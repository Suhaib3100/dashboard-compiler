"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { users, columns, ColumnProps, UserProps } from "./data";
import { ScrollArea } from "@/components/ui/scroll-area";
const HeightTable = () => {
  return (
    <div className="h-[250px]">
      <ScrollArea className="h-full">
        <Table>
          <TableHeader>
            <TableRow>
              {
                columns.map((column: ColumnProps) => (
                  <TableHead key={column.key} className="last:text-right rtl:text-left rtl:last:text-right">
                    {column.label}
                  </TableHead>
                ))
              }
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item: UserProps) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell className="text-right rtl:last:text-right">{item.point}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default HeightTable;
