"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { users, columns, ColumnProps, UserProps } from "./data";
const TableFoot = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {
            columns.map((column: ColumnProps) => (
              <TableHead key={column.key}>
                {column.label}
              </TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.slice(0, 5).map((item: UserProps) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.point}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="bg-default-100 border-t border-default-300">
        <TableRow>
          <TableCell colSpan={4} className="text-sm  text-default-600  font-semibold">
            Total
          </TableCell>
          <TableCell className="text-sm text-default-600  font-semibold text-right">41.05</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TableFoot;
