import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataRows, users } from "./data";
import { Button } from "@/components/ui/button";

const SimpleTable = () => {
  const columns: { key: string, label: string }[] = [
    {
      key: "name",
      label: "name"
    },
    {
      key: "title",
      label: "title"
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
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell><span className="capitalize font-medium">{item.role}</span></TableCell>
            <TableCell className="ltr:pr-5 rtl:pl-5">
              <Button className="p-0 h-auto hover:bg-transparent bg-transparent text-primary hover:text-primary/80  hover:underline">
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

  );
};

export default SimpleTable;
