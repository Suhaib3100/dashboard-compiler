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
import { upcomingDeadlineData } from "./data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
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
    key: "workload",
    label: "workload",
  }
];

const UpcomingDeadline = () => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center mb-0">
        <CardTitle>Upcoming Deadlines</CardTitle>
        <Button
          type="button"
          color="secondary"
          variant="soft"
        >View all</Button>
      </CardHeader>
      <CardContent className="px-0 overflow-x-auto">
        <Table>
          <TableHeader className="bg-default-200">
            <TableRow>
              {
                columns.map(column => (
                  <TableHead
                    key={column.key}
                    className="text-sm font-semibold text-default-800 rtl:first:pl-7">
                    {column.label}
                  </TableHead>
                ))
              }
            </TableRow>
          </TableHeader>
          <TableBody>
            {upcomingDeadlineData.map((item) => (
              <TableRow
                key={item.id}
                className="hover:bg-default-100"
              >
                <TableCell
                  className="flex items-center gap-2"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={item?.avatar?.src} alt="" />
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-defualt-600">{item.name}</span>
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 overflow-hidden text-ellipsis whitespace-nowrap max-w-[181px]">{item.task}</TableCell>
                <TableCell className="text-sm font-medium text-default-600 whitespace-nowrap">{item.deadline}</TableCell>
                <TableCell className="min-w-[120px] text-sm font-medium text-default-600 last:text-end">
                  <Progress value={60} size="lg" showValue />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UpcomingDeadline;