"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface User {
  id: number;
  country: string;
  count: string;
}

interface UsersDataTableProps {
  users: User[];
}

const UsersDataTable = ({ users }: UsersDataTableProps) => {

  return (
    <div className="h-[250px]">
      <ScrollArea className="h-full">
        <Table className="border border-default-200">
          <TableHeader>
            <TableRow className="border-b border-default-200">
              <TableHead className="text-sm h-10 font-medium text-default-800">Top Countries</TableHead>
              <TableHead className="text-sm h-10 font-medium text-default-800 text-right">Users</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.id} className="border-b border-default-200">
                <TableCell className="text-xs text-default-600 py-2">{item.country}</TableCell>
                <TableCell className="text-xs text-default-600 text-right pr-6 py-2">{item.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>

  );
};

export default UsersDataTable;
