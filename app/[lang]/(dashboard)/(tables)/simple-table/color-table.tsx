"use client"
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { users, columns, ColumnProps, UserProps } from "./data";
const ColorTable = () => {
  return (
    <div className="space-y-5">
      <Card>
        <Table className="bg-primary-100">
          <TableHeader>
            <TableRow>
              {
                columns.map((column: ColumnProps) => (
                  <TableHead key={column.key} className="text-primary">
                    {column.label}
                  </TableHead>
                ))
              }
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.slice(0, 5).map((item: UserProps) => (
              <TableRow key={item.id}>
                <TableCell className="text-primary">{item.id}</TableCell>
                <TableCell className="text-primary">{item.name}</TableCell>
                <TableCell className="text-primary">{item.email}</TableCell>
                <TableCell className="text-primary">{item.age}</TableCell>
                <TableCell className="text-primary">{item.point}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <Card>
        <Table className="bg-success bg-opacity-10">
          <TableHeader>
            <TableRow>
              {
                columns.map(column => (
                  <TableHead key={column.key} className="text-success">
                    {column.label}
                  </TableHead>
                ))
              }
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.slice(0, 5).map((item) => (
              <TableRow key={item.id}>
                <TableCell className="text-success/80" >{item.id}</TableCell>
                <TableCell className="text-success/80" >{item.name}</TableCell>
                <TableCell className="text-success/80" >{item.email}</TableCell>
                <TableCell className="text-success/80" >{item.age}</TableCell>
                <TableCell className="text-success/80 text-right" >{item.point}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ColorTable;
