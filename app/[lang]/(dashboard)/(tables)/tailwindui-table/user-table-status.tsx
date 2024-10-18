"use client"
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { users } from "./data";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const UserTableStatus = () => {
  const columns: { key: string, label: string }[] = [
    {
      key: "user",
      label: "user"
    },
    {
      key: "email",
      label: "email"
    },
    {
      key: "title",
      label: "title"
    },
    {
      key: "role",
      label: "role"
    },
    {
      key: "status",
      label: "status"
    },
    {
      key: "action",
      label: "action"
    },
  ]
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map(column => (
              <TableHead key={column.key}> {column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.email} className="hover:bg-default-100">
              <TableCell className=" font-medium  text-card-foreground/80">
                <div className="flex gap-3 items-center">
                  <Avatar className="rounded-lg">
                    <AvatarImage src={item.avatar} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <span className="text-sm  text-default-600">
                    {item.name}
                  </span>
                </div>
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.title}</TableCell>

              <TableCell>
                <Badge
                  variant="soft"
                  color={
                    (item.role === "admin" && "default") ||
                    (item.role === "member" && "success") ||
                    (item.role === "owner" && "info") ||
                    (item.role === "editor" && "warning") || "default"
                  }
                  className=" capitalize"
                >
                  {item.role}
                </Badge>
              </TableCell>
              <TableCell>
                <Switch id={item.email} />
              </TableCell>
              <TableCell className="flex gap-3  justify-end">
                <Button
                  size="icon"
                  variant="outline"
                  className=" h-7 w-7"
                  color="secondary"
                >
                  <Icon icon="heroicons:pencil" className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className=" h-7 w-7"
                  color="secondary"
                >
                  <Icon icon="heroicons:eye" className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className=" h-7 w-7"
                  color="secondary"
                >
                  <Icon icon="heroicons:trash" className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default UserTableStatus;
