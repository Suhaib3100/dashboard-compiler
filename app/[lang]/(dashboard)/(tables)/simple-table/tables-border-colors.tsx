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
const TablesBorderColors = () => {
  return (
    <Table className="border-primary border">
      <TableHeader>
        <TableRow>
          {
            columns.map((column:ColumnProps) => (
              <TableHead key={column.key} className="border border-primary-300">
                {column.label}
              </TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.slice(0, 5).map((item:UserProps) => (
          <TableRow key={item.id}>
            <TableCell className="border border-primary-300">{item.id}</TableCell>
            <TableCell className="border border-primary-300">{item.name}</TableCell>
            <TableCell className="border border-primary-300">{item.email}</TableCell>
            <TableCell className="border border-primary-300">{item.age}</TableCell>
            <TableCell className="border border-primary-300">{item.point}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TablesBorderColors;
