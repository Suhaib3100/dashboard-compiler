"use client";

import { Tree } from "@/components/ui/tree";

const treeData: any = [
  {
    id: 1,
    label: "Parent 01",
    children: [
      {
        id: 1.1,
        label: "Child 01",

        children: [
          { id: 1.3, label: "Pre-Child 01" },
          {
            id: 1.4,
            label: "Pre-Child 02",
            children: [
              { id: 1.5, label: "Pre-Child 01" },
              {
                id: 1.6,
                label: "Pre-Child 01",
                children: [
                  { id: 1.5, label: "Pre-Child 01" },
                  { id: 1.6, label: "Pre-Child 02" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 1.2,
        label: "Child 02",
        children: [
          { id: 1.3, label: "Pre-Child 01" },
          {
            id: 1.4,
            label: "Pre-Child 02",
            children: [
              { id: 1.5, label: "Pre-Child 01" },
              {
                id: 1.6,
                label: "Pre-Child 01",
                children: [
                  { id: 1.5, label: "Pre-Child 01" },
                  { id: 1.6, label: "Pre-Child 02" },
                  { id: 1.5, label: "Pre-Child 03" },
                  { id: 1.6, label: "Pre-Child 04" },
                  { id: 1.5, label: "Pre-Child 05" },
                  { id: 1.6, label: "Pre-Child 06" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id:2,
    label: "Parent 02",
    children: [
      {
        id: 2.1,
        label: "Child 01",

        children: [
          { id: 2.3, label: "Pre-Child 01" },
          {
            id: 2.4,
            label: "Pre-Child 02",
            children: [
              { id: 2.5, label: "Pre-Child 01" },
              {
                id: 2.6,
                label: "Pre-Child 01",
                children: [
                  { id: 2.5, label: "Pre-Child 01" },
                  { id: 2.6, label: "Pre-Child 02" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2.2,
        label: "Child 02",
        children: [
          { id: 2.3, label: "Pre-Child 01" },
          {
            id: 2.4,
            label: "Pre-Child 02",
            children: [
              { id: 2.5, label: "Pre-Child 01" },
              {
                id: 2.6,
                label: "Pre-Child 01",
                children: [
                  { id: 2.5, label: "Pre-Child 01" },
                  { id: 2.6, label: "Pre-Child 02" },
                  { id: 2.5, label: "Pre-Child 03" },
                  { id: 2.6, label: "Pre-Child 04" },
                  { id: 2.5, label: "Pre-Child 05" },
                  { id: 2.6, label: "Pre-Child 06" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id:3,
    label: "Parent 03",
    children: [
      {
        id: 3.1,
        label: "Child 01",

        children: [
          { id: 3.3, label: "Pre-Child 01" },
          {
            id: 3.4,
            label: "Pre-Child 02",
            children: [
              { id: 3.5, label: "Pre-Child 01" },
              {
                id: 3.6,
                label: "Pre-Child 01",
                children: [
                  { id: 3.5, label: "Pre-Child 01" },
                  { id: 3.6, label: "Pre-Child 02" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3.2,
        label: "Child 02",
        children: [
          { id: 3.3, label: "Pre-Child 01" },
          {
            id: 3.4,
            label: "Pre-Child 02",
            children: [
              { id: 3.5, label: "Pre-Child 01" },
              {
                id: 3.6,
                label: "Pre-Child 01",
                children: [
                  { id: 3.5, label: "Pre-Child 01" },
                  { id: 3.6, label: "Pre-Child 02" },
                  { id: 3.5, label: "Pre-Child 03" },
                  { id: 3.6, label: "Pre-Child 04" },
                  { id: 3.5, label: "Pre-Child 05" },
                  { id: 3.6, label: "Pre-Child 06" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const DefaultTree = () => {
  return (
    <div>
      <Tree data={treeData} />
    </div>
  );
};

export default DefaultTree;
