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
const StripedColumns = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {
            columns.map((column:ColumnProps) => (
              <TableHead key={column.key} >
                {column.label}
              </TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.slice(0, 5).map((item:UserProps) => (
          <TableRow key={item.id}>
            <TableCell className="even:bg-default-100">{item.id}</TableCell>
            <TableCell className="even:bg-default-100">{item.name}</TableCell>
            <TableCell className="even:bg-default-100">{item.email}</TableCell>
            <TableCell className="even:bg-default-100">{item.age}</TableCell>
            <TableCell className="even:bg-default-100">{item.point}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StripedColumns;
