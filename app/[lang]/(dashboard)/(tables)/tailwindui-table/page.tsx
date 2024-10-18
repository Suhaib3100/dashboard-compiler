"use client";

import Card from "@/components/ui/card-snippet";
import SimpleTable from "./simple-table";
import { Button } from "@/components/ui/button";
import UserTable from "./user-table";
import UserTableStatus from "./user-table-status";
import CollapsibleTable from "./collapsible-table";
import VerticalLine from "./vertical-line";
import WithCheckbox from "./with-checkbox";
import RowEditingDialog from "./row-editing-dialog";
import CheckboxWithAction from "./checkbox-with-action";
import SelectionOperation from "./selection-operation";
import ColumnSticky from "./column-sticky";
const TailwindUiTable = () => {
  return (
    <div className=" space-y-6">
      <Card title="Simple">
        <div className="flex flex-wrap items-center gap-4 mb-1">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-default-700 mb-2">User</h3>
          </div>
          <div className="flex-none">
            <Button type="button">Add User</Button>
          </div>
        </div>
        <SimpleTable />
      </Card>
      <Card title="User table in Card">
        <UserTable />
      </Card>
      <Card title="With avatars content">
        <UserTableStatus />
      </Card>
      <Card title="Collapsible Table">
        <div className="flex flex-wrap items-center gap-4 mb-1">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-default-700 mb-2">User</h3>
          </div>
          <div className="flex-none">
            <Button type="button">Add User</Button>
          </div>
        </div>
        <CollapsibleTable />
      </Card>

      <Card title="with vertical lines">
        <VerticalLine />
      </Card>

      <Card title="With Checkbox">
        <WithCheckbox />
      </Card>

      <Card title="Checkbox and Action">
        <CheckboxWithAction />
      </Card>

      <Card title="Selection and operation">
        <SelectionOperation />
      </Card>
      <Card title="Row Editing Dialog">
        <RowEditingDialog />
      </Card>
      <Card title="Sticky Column">
        <ColumnSticky />
      </Card>
    </div>
  );
};

export default TailwindUiTable;
