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

const BasicTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {
            columns.map((column: ColumnProps) => (
              <TableHead key={`simple-table-${column.key}`}>
                {column.label}
              </TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.slice(0, 5).map((item:UserProps) => (
          <TableRow key={item.id} >
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.point}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BasicTable;
