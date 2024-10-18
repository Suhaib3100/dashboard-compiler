"use client";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// avatar

import avatar1 from "@/public/images/avatar/avatar-7.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import Link from "next/link";

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
  },
];

interface User {
  id: number;
  name: string;
  task: string;
  deadline: string;
  overdue: string;
  avatar: { src: string };
}

const users: User[] = [
  {
    id: 1,
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar1,
  },
  {
    id: 3,
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar2,
  },
  {
    id: 4,
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar3,
  },
  {
    id: 5,
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar4,
  },
];

const OverdueTask = () => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center mb-0">
        <CardTitle>Overdue Task</CardTitle>
        <Button
          type="button"
          color="secondary"
          asChild
        >
          <Link href="#"> View all</Link>
        </Button>
      </CardHeader>
      <CardContent className="px-0 pb-0 overflow-x-auto">
        <Table>
          <TableHeader className="bg-default-200">
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className="text-sm font-semibold text-default-800 last:text-right  h-12"
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.id} className="hover:bg-default-100">
                <TableCell className="flex items-center gap-2 py-1">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={item?.avatar?.src} alt="" />
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-defualt-600 py-1 whitespace-nowrap">
                    {item.name}
                  </span>
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 py-1 overflow-hidden text-ellipsis whitespace-nowrap max-w-[181px]">
                  {item.task}
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 py-1 whitespace-nowrap">
                  {item.deadline}
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 last:text-end py-1 whitespace-nowrap">
                  <Badge color="warning" variant="soft">
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
