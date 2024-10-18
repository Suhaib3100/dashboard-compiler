export const defaultTree = `"use client";
import React from "react";
import { Tree } from "@/components/ui/tree";
import { PersonStanding, User2 } from "lucide-react";

const treeData = [
  {
    id: 1,
    label: "Parent 1",
    icon: <User2 />,
    children: [
      {
        id: 2,
        label: "Child 1",
        icon: <User2 />,
        children: [
          { id: 2.1, label: "Child 1.1", icon: <PersonStanding /> },
          { id: 2.2, label: "Child 2.2", icon: <PersonStanding /> },
        ],
      },
      { id: 3, label: "Child 2", icon: <PersonStanding /> },
    ],
  },
  {
    id: 4,
    label: "Parent 2",
    icon: <User2 />,
    children: [
      {
        id: 6,
        label: "Child 1",
        icon: <User2 />,
        children: [
          {
            id: 6.1,
            label: "Child 1.1",
            icon: <User2 />,
            children: [
              { id: 6.3, label: "Child 1.1.1", icon: <PersonStanding /> },
              { id: 6.4, label: "Child 1.1.2", icon: <PersonStanding /> },
            ],
          },
          { id: 6.2, label: "Child 1.2", icon: <PersonStanding /> },
        ],
      },
      { id: 7, label: "Child 2", icon: <User2 /> },
    ],
  },
  { id: 5, label: "Parent 3", icon: <User2 /> },
];

const DefaultTree = () => {
  return (
    <div>
      <Tree data={treeData} />
    </div>
  );
};

export default DefaultTree;`;
export const handleDataTree = `"use client";
import React from "react";
import { Tree } from "@/components/ui/tree";
import { File, Folder, Home } from "lucide-react";

const treeData = [
  {
    id: 1,
    label: "Folder 1",
    icon: <Folder />,
    children: [
      {
        id: 2,
        label: "Folder 1",
        icon: <Folder />,

        children: [
          { id: 2.1, label: "File 2", icon: <File /> },
          { id: 2.2, label: "File 3", icon: <File /> },
        ],
      },
      { id: 3, label: "File 1", icon: <File /> },
    ],
  },
  {
    id: 4,
    label: "Folder 2",
    icon: <Folder />,
    children: [{ id: 5, label: "File 4", icon: <File /> }],
  },
];

const handleSelect = (selectedNode) => {
  console.log("Selected Node:", selectedNode);
};

const HandleDataTree = () => {
  return (
    <div>
      <div className="max-w-[180px]">
        <Tree
          data={treeData}
          onSelect={handleSelect}
          className="data-[open=true]:bg-primary data-[open=true]:text-primary-foreground"
        />
      </div>
    </div>
  );
};

export default HandleDataTree;
`;
export const checkboxTree = `"use client";
import React from "react";
import { Tree } from "@/components/ui/tree";
import { PersonStanding, User2 } from "lucide-react";

const treeData = [
  {
    id: 1,
    label: "Parent 1",
    icon: <User2 />,
    children: [
      {
        id: 2,
        label: "Parent 2",
        icon: <User2 />,
        children: [
          { id: 2.1, label: "Child 1", icon: <PersonStanding /> },
          { id: 2.2, label: "Child 2", icon: <PersonStanding /> },
        ],
      },
      { id: 3, label: "Child 3", icon: <PersonStanding /> },
    ],
  },
  {
    id: 4,
    label: "Parent 3",
    icon: <User2 />,
    children: [
      {
        id: 6,
        label: "Parent 4",
        icon: <User2 />,
        children: [
          {
            id: 6.1,
            label: "Parent 5",
            icon: <User2 />,
            children: [
              { id: 6.3, label: "Child 4", icon: <PersonStanding /> },
              { id: 6.4, label: "Child 5", icon: <PersonStanding /> },
            ],
          },
          { id: 6.2, label: "Child 6", icon: <PersonStanding /> },
        ],
      },
      { id: 7, label: "Child 7", icon: <PersonStanding /> },
    ],
  },
];
const handleCheck = (checkedKeys) => {
  console.log("ami on check Keys:", checkedKeys);
};

const CheckboxTree = () => {
  return (
    <div>
      <Tree checkable data={treeData} onCheck={handleCheck} />
    </div>
  );
};

export default CheckboxTree;
`;
export const openTree = `"use client";
import React from "react";
import { Tree } from "@/components/ui/tree";
import { Folder, File } from "lucide-react";
const treeData = [
  {
    id: 1,
    label: "Application",
    icon: <Folder />,
    children: [
      {
        id: 2,
        label: "Calender",
        icon: <Folder />,
        children: [
          { id: 2.1, label: "Date", icon: <File /> },
          { id: 2.2, label: "Time", icon: <File /> },
        ],
      },
      { id: 3, label: "Place", icon: <File /> },
    ],
  },
  {
    id: 4,
    label: "Document",
    icon: <Folder />,
    children: [
      {
        id: 6,
        label: "OS",
        icon: <Folder />,
        children: [
          {
            id: 6.1,
            label: "MIU",
            icon: <Folder />,
            children: [
              { id: 6.3, label: "index.js", icon: <File /> },
              { id: 6.4, label: "tree-view.js", icon: <File /> },
            ],
          },
          { id: 6.2, label: "Webstorm", icon: <File /> },
        ],
      },
      { id: 7, label: "Computer", icon: <File /> },
    ],
  },
];
const defaultExpandedKeys = [1, 4];

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
`;
