"use client";
import Card from "@/components/ui/card-snippet";
import BasicTable from "./basic-table";
import StripedRows from "./striped-rows";
import StripedColumns from "./striped-columns";
import ColorTable from "./color-table";
import HoverableRows from "./hoverable-rows";
import BorderedTables from "./bordered-tables";
import TablesBorderColors from "./tables-border-colors";
import TablesWithoutBorders from "./tables-without-borders";
import SmallTable from "./small-table";
import TableHead from "./table-head";
import TableFoot from "./table-foot";
import CaptionsTable from "./captions-table";
import NestedTable from "./nested-table";
import HeightTable from "./height-table";
import FixedHeader from "./fixed-header";

const SimpleTablePage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Basic Table">
        <BasicTable />
      </Card>
      <Card title="Striped Rows">
        <StripedRows />
      </Card>
      <Card title="Striped  Columns">
        <StripedColumns />
      </Card>

      <Card title="Tables Colors">
        <ColorTable />
      </Card>

      <Card title="Hoverable Rows">
        <HoverableRows />
      </Card>

      <Card title="Bordered Tables">
        <BorderedTables />
      </Card>

      <Card title="Bordered Colors Tables">
        <TablesBorderColors />
      </Card>

      <Card title="Tables Without Borders">
        <TablesWithoutBorders />
      </Card>

      <Card title="Small Table">
        <SmallTable />
      </Card>

      <Card title="Table Head">
        <TableHead />
      </Card>

      <Card title="Table Footer">
        <TableFoot />
      </Card>

      <Card title="Caption Tables">
        <CaptionsTable />
      </Card>

      <Card title="Nested table">
        <NestedTable />
      </Card>

      <Card title="Height table">
        <HeightTable />
      </Card>

      <Card title="Fixed Header">
        <FixedHeader />
      </Card>
    </div>
  );
};

export default SimpleTablePage;
