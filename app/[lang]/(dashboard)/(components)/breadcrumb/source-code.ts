export const defaultBreadCrumb = `import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const DefaultBreadCrumb = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default DefaultBreadCrumb;
`;
export const disabledBreadCrumb = `import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
const DisabledBreadCrumb = () => {
  return (
    <>
      <Breadcrumbs disabled>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default DisabledBreadCrumb;
`;
export const sizeBreadcrumb = `import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
const SizeBreadcrumb = () => {
  return (
    <>
      <Breadcrumbs size="sm">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs size="md">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs size="lg">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default SizeBreadcrumb;
`;
export const colorBreadcrumb = `import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const ColorBreadcrumb = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs variant="primary">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs variant="success">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs variant="destructive">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs variant="warning">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs variant="info">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default ColorBreadcrumb;
`;
export const styleBreadcrumb = `import React from "react";

import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
const StyleBreadcrumb = () => {
  return (
    <>
      <Breadcrumbs variant="solid">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>List</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs variant="bordered">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>List</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs variant="light">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>List</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default StyleBreadcrumb;
`;
export const underlinesBreadcrumb = `import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const UnderlinesBreadcrumb = () => {
  const underlines = ["none", "hover", "always", "active", "focus"];
  const descriptions = {
    none: "No underline",
    hover: "Underline on hover",
    always: "Always underline",
    active: "Underline on active",
    focus: "Underline on focus",
  };
  return (
    <div className="flex flex-col flex-wrap gap-4">
      {underlines.map((u) => (
        <div key={u}>
          <p className="mb-1  text-base  font-normal  text-foreground/80 ">
            {descriptions[u]} ({u})
          </p>
          <Breadcrumbs underline={u}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Dashboard</BreadcrumbItem>
            <BreadcrumbItem> Advanced UI</BreadcrumbItem>
            <BreadcrumbItem>Component</BreadcrumbItem>
            <BreadcrumbItem>List</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      ))}
    </div>
  );
};

export default UnderlinesBreadcrumb;
`;
export const radiusBreadcrumb = `import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

export default function RadiusBreadcrumb() {
  const radius = [
    "rounded-full",
    "rounded-lg",
    "rounded-md",
    "rounded-sm",
    "rounded-none",
  ];

  return (
    <div className="flex flex-col flex-wrap gap-4">
      {radius.map((r) => (
        <Breadcrumbs key={r} className={r} variant="solid">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Dashboard</BreadcrumbItem>
          <BreadcrumbItem> Advanced UI</BreadcrumbItem>
          <BreadcrumbItem>Component</BreadcrumbItem>
          <BreadcrumbItem>List</BreadcrumbItem>
          <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumbs>
      ))}
    </div>
  );
}
`;
export const routingBreadcrumb = `import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
const RoutingBreadcrumb = () => {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem href="/button">Button</BreadcrumbItem>
        <BreadcrumbItem href="/breadcrumbs">Breadcrumbs</BreadcrumbItem>
        <BreadcrumbItem href="/card">Card</BreadcrumbItem>
        <BreadcrumbItem href="/checkbox">Checkbox</BreadcrumbItem>
        <BreadcrumbItem href="code">Code</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
};

export default RoutingBreadcrumb;
`;
export const startIconBreadcrumb = `import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { Box, ChevronDown, ClipboardList, Home,Layers } from "lucide-react";
const StartIconBreadcrumb = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>
          <Home className="h-4 w-4" />
        </BreadcrumbItem>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>List</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      
      <Breadcrumbs>
        <BreadcrumbItem startContent={<Home className="h-4 w-4" />}>
          Dashboard
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<Layers className="h-4 w-4" />}>
          Advanced UI
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<Box className="h-4 w-4" />}>
          Component
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<ClipboardList className="h-4 w-4" />}>
          List
        </BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>

      <Breadcrumbs>
        <BreadcrumbItem startContent={<Home className="h-4 w-4" />}>
          Dashboard
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<Layers className="h-4 w-4" />}>
          Advanced UI
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<Box className="h-4 w-4" />}>
          Component
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<ClipboardList className="h-4 w-4" />}>
          List
        </BreadcrumbItem>
        <BreadcrumbItem endContent={<ChevronDown className="h-4 w-4" />}>
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumbs>

      <Breadcrumbs>
        <BreadcrumbItem endContent={<Home className="h-4 w-4" />}>
          Dashboard
        </BreadcrumbItem>
        <BreadcrumbItem endContent={<Layers className="h-4 w-4" />}>
          Advanced UI
        </BreadcrumbItem>
        <BreadcrumbItem endContent={<Box className="h-4 w-4" />}>
          Component
        </BreadcrumbItem>
        <BreadcrumbItem endContent={<ClipboardList className="h-4 w-4" />}>
          List
        </BreadcrumbItem>
        <BreadcrumbItem endContent={<Home className="h-4 w-4" />}>
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default StartIconBreadcrumb;
`;
export const customSeparator = `import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
const CustomSeparator = () => {
  return (
    <>
      <Breadcrumbs separator="/">
        <Breadcrumbs>
          <BreadcrumbItem >Button</BreadcrumbItem>
          <BreadcrumbItem >Breadcrumbs</BreadcrumbItem>
          <BreadcrumbItem >Card</BreadcrumbItem>
          <BreadcrumbItem >Checkbox</BreadcrumbItem>
          <BreadcrumbItem >Code</BreadcrumbItem>
        </Breadcrumbs>
      </Breadcrumbs>
    </>
  );
};

export default CustomSeparator;
`;
export const collapsingBreadcrumb = `import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const CollapsingBreadcrumb = () => {
  return (
    <>
      <Breadcrumbs
        variant="yourVariant"
        modifier="yourModifier"
        maxItems={3}
        itemsBeforeCollapse={1}
        itemsAfterCollapse={2}
      >
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>List</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default CollapsingBreadcrumb;
`;
export const customizeCollapsingBreadcrumb = `import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
const CustomizeCollapsingBreadcrumb = () => {
  return (
    <>
      <Breadcrumbs
        variant="yourVariant"
        modifier="yourModifier"
        maxItems={3}
        itemsBeforeCollapse={1}
        itemsAfterCollapse={2}
        renderEllipsis={
          <DropdownMenu>
           <DropdownMenuTrigger asChild>
              <span className=" cursor-pointer bg-muted px-2 rounded-full inline-flex items-center">
                <Icon
                  icon="heroicons:ellipsis-horizontal"
                  className=" h-5 w-5  "
                />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="start">
              <BreadcrumbItem>Dashboard</BreadcrumbItem>
              <br />
              <BreadcrumbItem> Advanced UI</BreadcrumbItem>
              <br />
              <BreadcrumbItem>Component</BreadcrumbItem>
            </DropdownMenuContent>
          </DropdownMenu>
        }
      >
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>List</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default CustomizeCollapsingBreadcrumb;
`;
export const controlledBreadcrumb = `import React, { useState } from "react";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const ControlledBreadcrumb = () => {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <>
      <Breadcrumbs underline="active" onAction={(key) => setCurrentPage(key)}>
        <BreadcrumbItem
          key="home"
          iscurrent={currentPage === "home"}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </BreadcrumbItem>
        <BreadcrumbItem
          key="dashboard"
          iscurrent={currentPage === "dashboard"}
          onClick={() => setCurrentPage("dashboard")}
        >
          Dashboard
        </BreadcrumbItem>
        <BreadcrumbItem
          key="advanced ui"
          iscurrent={currentPage === "advanced ui"}
          onClick={() => setCurrentPage("advanced ui")}
        >
          Advanced UI
        </BreadcrumbItem>
        <BreadcrumbItem
          key="component"
          iscurrent={currentPage === "component"}
          onClick={() => setCurrentPage("component")}
        >
          Component
        </BreadcrumbItem>
        <BreadcrumbItem
          key="breadcrumb"
          iscurrent={currentPage === "breadcrumb"}
          onClick={() => setCurrentPage("breadcrumb")}
        >
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default ControlledBreadcrumb;
`;
export const menuTypeBreadcrumb = `import React, { useState } from "react";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const MenuTypeBreadcrumb = () => {
  const [currentPage, setCurrentPage] = useState("breadcrumb");
  return (
    <>
      <Breadcrumbs
        className="gap-2"
        separator={null}
        modifier="menu"
        onAction={(key) => setCurrentPage(key)}
        itemClasses="border px-4 py-1  rounded-md data-[state=active]:border-foreground data-[state=active]:text-background data-[state=active]:bg-foreground "
      >
        <BreadcrumbItem
          key="home"
          iscurrent={currentPage === "home"}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </BreadcrumbItem>
        <BreadcrumbItem
          key="dashboard"
          iscurrent={currentPage === "dashboard"}
          onClick={() => setCurrentPage("dashboard")}
        >
          Dashboard
        </BreadcrumbItem>
        <BreadcrumbItem
          key="advanced ui"
          iscurrent={currentPage === "advanced ui"}
          onClick={() => setCurrentPage("advanced ui")}
        >
          Advanced UI
        </BreadcrumbItem>
        <BreadcrumbItem
          key="component"
          iscurrent={currentPage === "component"}
          onClick={() => setCurrentPage("component")}
        >
          Component
        </BreadcrumbItem>
        <BreadcrumbItem
          key="breadcrumb"
          iscurrent={currentPage === "breadcrumb"}
          onClick={() => setCurrentPage("breadcrumb")}
        >
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default MenuTypeBreadcrumb;
`;
