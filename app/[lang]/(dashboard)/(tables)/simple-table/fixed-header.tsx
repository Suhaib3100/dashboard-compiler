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

const FixedHeader = () => {
  return (

    <Table wrapperClass="h-[400px] overflow-auto custom-scrollbar">
      <TableHeader>
            <TableRow>
              {
                columns.map((column:ColumnProps) => (
                  <TableHead key={column.key} className="bg-default-100 last:pr-6  sticky top-0">
                    {column.label}
                  </TableHead>
                ))
              }
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item:UserProps) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell className="ltr:pr-6 rtl:pl-6">{item.point}</TableCell>
              </TableRow>
            ))}
          </TableBody>
    </Table>
  );
};

export default FixedHeader;
