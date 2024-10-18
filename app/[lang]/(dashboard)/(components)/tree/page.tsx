"use client";

import Card from "@/components/ui/card-snippet";
import DefaultTree from "./default-tree";
import HandleDataTree from "./handle-data-tree";
import CheckboxTree from "./checkbox-tree";
import OpenTree from "./open-tree";
import { checkboxTree, defaultTree, handleDataTree, openTree } from "./source-code";

const TreeViewPage = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
      <Card title="Default Tree" code={defaultTree}>
        <DefaultTree />
      </Card>
      <Card title="Handle data Tree" code={handleDataTree}>
        <HandleDataTree />
      </Card>
      <Card title="Checkbox Tree" code={checkboxTree}>
        <CheckboxTree />
      </Card>
      <Card title="Open Tree" code={openTree}>
        <OpenTree />
      </Card>
    </div>
  );
};

export default TreeViewPage;
