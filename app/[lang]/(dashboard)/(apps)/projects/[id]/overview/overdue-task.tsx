"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { users } from "./data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
const columns = [
  {
    key: "employee",
    label: "employee",
  },
  {
    key: "task name",
    label: "task name",
  },
  {
    key: "deadline",
    label: "deadline",
  },
  {
    key: "overdue",
    label: "overdue",
  }
];

const OverdueTask = () => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center mb-0">
        <CardTitle>Overdue Task</CardTitle>
        <Button
          type="button"
          color="secondary"
          variant="soft"
        >View all</Button>
      </CardHeader>
      <CardContent className="px-0 pb-0 overflow-x-auto">
        <Table>
          <TableHeader className="bg-default-200">
            <TableRow>
              {
                columns.map(column => (
                  <TableHead
                    key={column.key}
                    className="text-sm font-semibold text-default-800 last:text-right rtl:first:pl-6  h-12">
                    {column.label}
                  </TableHead>
                ))
              }
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item) => (
              <TableRow
                key={item.id}
                className="hover:bg-default-100"
              >
                <TableCell
                  className="flex items-center gap-2 py-2"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={item?.avatar?.src} alt="" />
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-defualt-600 py-1">{item.name}</span>
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 py-1 overflow-hidden text-ellipsis whitespace-nowrap max-w-[181px]">{item.task}</TableCell>
                <TableCell className="text-sm font-medium text-default-600 py-1">{item.deadline}</TableCell>
                <TableCell className="text-sm font-medium text-default-600 last:text-end py-1 whitespace-nowrap">
                  <Badge
                    color="warning"
                    variant="soft">
                    {item.overdue} day
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OverdueTask;