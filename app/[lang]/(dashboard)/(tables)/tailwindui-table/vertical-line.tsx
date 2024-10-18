import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataRows, users } from "./data";

const VerticalLine = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className=" font-semibold border-r">Name</TableHead>
          <TableHead className=" border-r"> Title</TableHead>
          <TableHead className=" border-r">Email</TableHead>
          <TableHead className="text-end">Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((item:DataRows) => (
          <TableRow key={item.email}>
            <TableCell className="font-medium  text-card-foreground/80 border-r">
              {item.name}
            </TableCell>
            <TableCell className="border-r last:border-none">
              {item.title}
            </TableCell>
            <TableCell className="border-r last:border-none">
              {item.email}
            </TableCell>
            <TableCell className="capitalize border-r last:border-none ">
              {item.role}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default VerticalLine;
