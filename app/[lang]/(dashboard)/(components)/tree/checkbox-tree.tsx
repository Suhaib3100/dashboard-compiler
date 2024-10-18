"use client";
import React from "react";
import { Tree } from "@/components/ui/tree";

const treeData: any = [
  {
    id: 1,
    label: "Bangla Book",
    children: [
      {
        id: 1.1,
        label: "Bangla First Paper 01",

        children: [
          { id: 1.3, label: "Book Cover" },
          {
            id: 1.4,
            label: "All Chapter",

            children: [
              { id: 1.5, label: "Chapter 01" },
              {
                id: 1.6,


                label: "Chapter 02",
              },
              {
                id: 1.6,
                label: "Chapter 03",
              },
              {
                id: 1.6,


                label: "Chapter 04",
              },
            ],
          },
        ],
      },
      {
        id: 1.2,
        label: "Bangla Second Paper 02",
        children: [
          { id: 1.3, label: "Book Cover" },
          {
            id: 1.4,
            label: "All Chapter",

            children: [
              { id: 1.5, label: "Chapter 01" },
              {
                id: 1.6,
                label: "Chapter 02",
              },
              {
                id: 1.6,
                label: "Chapter 03",
              },
              {
                id: 1.6,
                label: "Chapter 04",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,

    label: "English Book",
    children: [
      {
        id: 2.1,
        label: "English First Paper",

        children: [
          { id: 2.3, label: "Book Cover" },
          {
            id: 2.4,
            label: "All Chapter",

            children: [
              { id: 2.5, label: "Chapter 01" },
              {
                id: 2.6,


                label: "Chapter 02",
              },
              {
                id: 2.6,


                label: "Chapter 03",
              },
              {
                id: 2.6,


                label: "Chapter 04",
              },
            ],
          },
        ],
      },
      {
        id: 2.2,
        label: "English Second Paper",

        children: [
          { id: 2.3, label: "Book Cover" },
          {
            id: 2.4,
            label: "All Chapter",

            children: [
              { id: 2.5, label: "Chapter 01" },
              {
                id: 2.6,


                label: "Chapter 02",
              },
              {
                id: 2.6,


                label: "Chapter 03",
              },
              {
                id: 2.6,


                label: "Chapter 04",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,

    label: "Mathematics Book",
    children: [
      {
        id: 3.1,
        label: "Mathematics First Paper",

        children: [
          { id: 3.3, label: "Book Cover" },
          {
            id: 3.4,
            label: "All Chapter",

            children: [
              { id: 3.5, label: "Chapter 01" },
              {
                id: 3.6,


                label: "Chapter 02",
              },
              {
                id: 3.6,


                label: "Chapter 03",
              },
              {
                id: 3.6,


                label: "Chapter 04",
              },
            ],
          },
        ],
      },
      {
        id: 3.2,
        label: "Mathematics Second Paper",

        children: [
          { id: 3.3, label: "Book Cover" },
          {
            id: 3.4,
            label: "All Chapter",

            children: [
              { id: 3.5, label: "Chapter 01" },
              {
                id: 3.6,


                label: "Chapter 02",
              },
              {
                id: 3.6,


                label: "Chapter 03",
              },
              {
                id: 3.6,


                label: "Chapter 04",
              },
            ],
          },
        ],
      },
    ],
  },
];
const handleCheck = (checkedKeys: any) => {
  console.log(" on check Keys:", checkedKeys);
};

const CheckboxTree = () => {
  return (
    <div>
      <Tree checkable data={treeData} onCheck={handleCheck} />
    </div>
  );
};

export default CheckboxTree;
