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
const SmallTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {
            columns.map((column:ColumnProps) => (
              <TableHead key={column.key} className="h-10 p-2.5">
                {column.label}
              </TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.slice(0, 5).map((item:UserProps) => (
          <TableRow key={item.id}>
            <TableCell className="p-2.5">{item.id}</TableCell>
            <TableCell className="p-2.5">{item.name}</TableCell>
            <TableCell className="p-2.5">{item.email}</TableCell>
            <TableCell className="p-2.5">{item.age}</TableCell>
            <TableCell className="p-2.5">{item.point}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SmallTable;
