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
import { Progress } from "@/components/ui/progress";

// images
import avatar1 from "@/public/images/avatar/avatar-7.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";

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
  },
];

interface DataItem {
  id: number;
  name: string;
  task: string;
  deadline: string;
  workload: number;
  avatar: {
    src: string;
  };
}

const upcomingDeadlineData: DataItem[] = [
  {
    id: 1,
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    workload: 50,
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    workload: 40,
    avatar: avatar1,
  },
  {
    id: 3,
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    workload: 70,
    avatar: avatar2,
  },
  {
    id: 4,
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    workload: 80,
    avatar: avatar3,
  },
  {
    id: 5,
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    workload: 60,
    avatar: avatar4,
  },
  {
    id: 6,
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    workload: 90,
    avatar: avatar5,
  },
];
const UpcomingDeadline = () => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center mb-0">
        <CardTitle>Upcoming Deadlines</CardTitle>
        <Button type="button" color="secondary" >
          View all
        </Button>
      </CardHeader>
      <CardContent className="px-0 overflow-x-auto pb-0">
        <Table>
          <TableHeader className="bg-default-200">
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className="text-sm font-semibold text-default-800"
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {upcomingDeadlineData.map((item) => (
              <TableRow key={item.id} className="hover:bg-default-100">
                <TableCell className="flex items-center gap-2 py-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={item?.avatar.src} alt="" />
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-defualt-600 whitespace-nowrap">
                    {item.name}
                  </span>
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 overflow-hidden text-ellipsis whitespace-nowrap max-w-[181px] py-2">
                  {item.task}
                </TableCell>
                <TableCell className="text-sm font-medium text-destructive whitespace-nowrap py-2">
                  {item.deadline}
                </TableCell>
                <TableCell className="min-w-[120px] text-sm font-medium text-default-600 last:text-end py-2">
                  <Progress
                    value={item.workload}
                    size="lg"
                    showValue
                  />
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
