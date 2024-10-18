"use client";

import { Tree } from "@/components/ui/tree";
const treeData:any = [
  {
    id: 1,
    label: "Parent 01",
    children: [
      {
        id: 2,
        label: "Child 01",
      },
      { id: 3, label: "Child 02" },
    ],
  },
  {
    id: 4,
    label: "Parent 02",

    children: [
      {
        id: 6,
        label: "Child 01",

        children: [
          {
            id: 6.1,
            label: "Pre-Child 01",
          },
          {
            id: 6.2,
            label: "Pre-Child 02",
            children: [
              { id: 6.3, label: "Pre-Child 01" },
              { id: 6.4, label: "Pre-Child 02" },
              { id: 6.4, label: "Pre-Child 03" },
              { id: 6.4, label: "Pre-Child 04" },
            ],
          },
        ],
      },
      {
        id: 7,
        label: "Child 02",

        children: [
          {
            id: 7.1,
            label: "Pre-Child 01",
          },
          {
            id: 7.2,
            label: "Pre-Child 02",
            children: [
              { id: 7.3, label: "Pre-Child 01" },
              { id: 7.4, label: "Pre-Child 02" },
              { id: 7.4, label: "Pre-Child 03" },
              { id: 7.4, label: "Pre-Child 04" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Parent 03",
  },
];
const defaultExpandedKeys:string[] =  ["4", "7", "7.2"];

const OpenTree = () => {
  return (
    <div>
      <Tree
        data={treeData}
        defaultExpandedKeys={defaultExpandedKeys}
        showLine
      />
    </div>
  );
};

export default OpenTree;
