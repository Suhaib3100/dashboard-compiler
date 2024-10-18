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
const TablesWithoutBorders = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className=" border-none">
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
        {
          users.slice(0, 5).map((item: UserProps) => (
            <TableRow key={item.id} className="border-none">
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell >{item.point}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
};

export default TablesWithoutBorders;
