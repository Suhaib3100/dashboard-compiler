"use client";
import React from "react";
import { Tree } from "@/components/ui/tree";
import { File } from "lucide-react";
import { FolderTree } from "@/components/svg";


const treeData: any = [
  {
    id: 1,
    icon: <FolderTree />,
    label: "FolderTree 01",
    children: [
      {
        id: 1.1,
        label: "File Manager 01",
        icon: <FolderTree />,
        children: [
          { id: 1.3, icon: <File className="text-default-400" />, label: "file.png" },
          {
            id: 1.4,
            label: "All Figma File",
            icon: <FolderTree />,
            children: [
              { id: 1.5, icon: <File className="text-default-400" />, label: "Dasgtail.fig" },
              {
                id: 1.6,

                icon: <File className="text-default-400" />,
                label: "Dashcode.fig",
              },
              {
                id: 1.6,

                icon: <File className="text-default-400" />,
                label: "Acculance.fig",
              },
              {
                id: 1.6,

                icon: <File className="text-default-400" />,
                label: "Saas.fig",
              },
            ],
          },
        ],
      },
      {
        id: 1.2,
        label: "File Manager 02",
        icon: <FolderTree />,
        children: [
          { id: 1.3, icon: <File className="text-default-400" />, label: "file.png" },
          {
            id: 1.4,
            label: "All Figma File",
            icon: <FolderTree />,
            children: [
              { id: 1.5, icon: <File className="text-default-400" />, label: "Dasgtail.fig" },
              {
                id: 1.6,

                icon: <File className="text-default-400" />,
                label: "Dashcode.fig",
              },
              {
                id: 1.6,

                icon: <File className="text-default-400" />,
                label: "Acculance.fig",
              },
              {
                id: 1.6,

                icon: <File className="text-default-400" />,
                label: "Saas.fig",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    icon: <FolderTree />,
    label: "FolderTree 02",
    children: [
      {
        id: 2.1,
        label: "File Manager 01",
        icon: <FolderTree />,
        children: [
          { id: 2.3, icon: <File className="text-default-400" />, label: "file.png" },
          {
            id: 2.4,
            label: "All Figma File",
            icon: <FolderTree />,
            children: [
              { id: 2.5, icon: <File className="text-default-400" />, label: "Dasgtail.fig" },
              {
                id: 2.6,

                icon: <File className="text-default-400" />,
                label: "Dashcode.fig",
              },
              {
                id: 2.6,

                icon: <File className="text-default-400" />,
                label: "Acculance.fig",
              },
              {
                id: 2.6,

                icon: <File className="text-default-400" />,
                label: "Saas.fig",
              },
            ],
          },
        ],
      },
      {
        id: 2.2,
        label: "File Manager 02",
        icon: <FolderTree />,
        children: [
          { id: 2.3, icon: <File className="text-default-400" />, label: "file.png" },
          {
            id: 2.4,
            label: "All Figma File",
            icon: <FolderTree />,
            children: [
              { id: 2.5, icon: <File className="text-default-400" />, label: "Dasgtail.fig" },
              {
                id: 2.6,

                icon: <File className="text-default-400" />,
                label: "Dashcode.fig",
              },
              {
                id: 2.6,

                icon: <File className="text-default-400" />,
                label: "Acculance.fig",
              },
              {
                id: 2.6,

                icon: <File className="text-default-400" />,
                label: "Saas.fig",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    icon: <FolderTree />,
    label: "FolderTree 03",
    children: [
      {
        id: 3.1,
        label: "File Manager 01",
        icon: <FolderTree />,
        children: [
          { id: 3.3, icon: <File className="text-default-400" />, label: "file.png" },
          {
            id: 3.4,
            label: "All Figma File",
            icon: <FolderTree />,
            children: [
              { id: 3.5, icon: <File className="text-default-400" />, label: "Dasgtail.fig" },
              {
                id: 3.6,

                icon: <File className="text-default-400" />,
                label: "Dashcode.fig",
              },
              {
                id: 3.6,

                icon: <File className="text-default-400" />,
                label: "Acculance.fig",
              },
              {
                id: 3.6,

                icon: <File className="text-default-400" />,
                label: "Saas.fig",
              },
            ],
          },
        ],
      },
      {
        id: 3.2,
        label: "File Manager 02",
        icon: <FolderTree />,
        children: [
          { id: 3.3, icon: <File className="text-default-400" />, label: "file.png" },
          {
            id: 3.4,
            label: "All Figma File",
            icon: <FolderTree />,
            children: [
              { id: 3.5, icon: <File className="text-default-400" />, label: "Dasgtail.fig" },
              {
                id: 3.6,

                icon: <File className="text-default-400" />,
                label: "Dashcode.fig",
              },
              {
                id: 3.6,

                icon: <File className="text-default-400" />,
                label: "Acculance.fig",
              },
              {
                id: 3.6,

                icon: <File className="text-default-400" />,
                label: "Saas.fig",
              },
            ],
          },
        ],
      },
    ],
  },
];

const handleSelect = (selectedNode: any) => {
  console.log("Selected Node:", selectedNode);
};

const HandleDataTree = () => {
  return (
    <div>
      <Tree
        data={treeData}
        onSelect={handleSelect}
        className="data-[open=true]:bg-primary data-[open=true]:text-primary-foreground"
      />
    </div>
  );
};

export default HandleDataTree;
