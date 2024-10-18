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
const BorderedTables = () => {
  return (
    <Table className="border border-default-300">
      <TableHeader>
        <TableRow>
          {
            columns.map((column:ColumnProps) => (
              <TableHead key={column.key} className="border border-default-300 ">
                {column.label}
              </TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.slice(0, 5).map((item:UserProps) => (
          <TableRow key={item.id}>
            <TableCell className="border border-default-300">{item.id}</TableCell>
            <TableCell className="border border-default-300">{item.name}</TableCell>
            <TableCell className="border border-default-300">{item.email}</TableCell>
            <TableCell className="border border-default-300">{item.age}</TableCell>
            <TableCell className="border border-default-300">{item.point}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BorderedTables;
