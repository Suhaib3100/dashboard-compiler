import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { data } from "./data";

export default function Projects() {
  return (
    <DataTable
      data={data}
      columns={columns}
    />
  );
}




