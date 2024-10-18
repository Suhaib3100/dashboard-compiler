import { Switch } from "@/components/ui/switch";
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
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const ColumnSticky = () => {
  return (
    <Card className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold sticky left-0 bg-background drop-shadow-md"> Avatar</TableHead>
            <TableHead className="font-semibold">Name</TableHead>
            <TableHead className="font-semibold"> Title</TableHead>
            <TableHead className="font-semibold">Email</TableHead>
            <TableHead className="font-semibold">Email</TableHead>
            <TableHead className="font-semibold">Email</TableHead>
            <TableHead className="font-semibold">Role</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="text-center sticky right-0 bg-background drop-shadow-md">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((item: DataRows) => (
            <TableRow key={item.email} className="hover:bg-muted">
              <TableCell className="font-medium  text-card-foreground/80 sticky left-0 bg-background drop-shadow-md">
                <Avatar className="rounded-full">
                  <AvatarImage src={item.avatar} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              </TableCell>

              <TableCell>{item.name}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                <Badge
                  variant="soft"
                  color={
                    (item.role === "admin" && "default") ||
                    (item.role === "member" && "success") ||
                    (item.role === "owner" && "info") || "default"
                  }
                  className=" capitalize"
                >
                  {item.role}
                </Badge>
              </TableCell>
              <TableCell>
                <Switch id={item.email} />
              </TableCell>
              <TableCell className="flex gap-3 justify-end bg-background  drop-shadow-md">
                <Button
                  size="icon"
                  variant="outline"
                  color="secondary"
                  className=" h-7 w-7"
                >
                  <Icon icon="heroicons:pencil" className=" h-4 w-4  " />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className=" h-7 w-7"
                  color="secondary"
                >
                  <Icon icon="heroicons:eye" className=" h-4 w-4  " />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className=" h-7 w-7"
                  color="secondary"
                >
                  <Icon icon="heroicons:trash" className=" h-4 w-4  " />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ColumnSticky;
