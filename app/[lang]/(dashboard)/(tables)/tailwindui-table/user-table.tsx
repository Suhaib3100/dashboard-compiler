"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataRows, users } from "./data";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
const UserTable = () => {
  const columns: { key: string, label: string }[] = [
    {
      key: "avatar",
      label: "avatar"
    },
    {
      key: "name",
      label: "name"
    },
    {
      key: "email",
      label: "email"
    },
    {
      key: "role",
      label: "role"
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
            {
              columns.map(column => (
                <TableHead key={column.key}>{column.label}</TableHead>
              ))
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((item: DataRows) => (
            <TableRow key={item.email}>
              <TableCell className="font-medium  text-card-foreground/80">
                <Avatar>
                  <AvatarImage src={item.avatar} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium  text-card-foreground/80">
                {item.name}
              </TableCell>
              <TableCell>{item.email}</TableCell>

              <TableCell>
                <Badge
                  variant="outline"
                  color={
                    (item.role === "admin" && "default") ||
                    (item.role === "member" && "success") ||
                    (item.role === "owner" && "info") ||
                    (item.role === "editor" && "warning") ||
                    "default"
                  }
                  className="capitalize"
                >
                  {item.role}
                </Badge>
              </TableCell>
              <TableCell className="ltr:pr-5 rtl:pl-5">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="icon"
                      color="secondary"
                      className=" h-7 rounded-full bg-transparent w-7 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground  "
                    >
                      <Icon
                        icon="heroicons:ellipsis-horizontal"
                        className=" h-6 w-6 "
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" avoidCollisions>
                    <DropdownMenuLabel>Action Center</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Icon
                        icon="heroicons:pencil"
                        className=" h-4 w-4 mr-2 "
                      />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Icon icon="heroicons:eye" className=" h-4 w-4 mr-2 " />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Icon icon="heroicons:trash" className=" h-4 w-4 mr-2 " />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>

  );
};

export default UserTable;
