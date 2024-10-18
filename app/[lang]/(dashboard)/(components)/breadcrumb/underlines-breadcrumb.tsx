"use client"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const UnderlinesBreadcrumb = () => {
  const underlines = ["none", "hover", "always", "active", "focus"];
  const descriptions:any = {
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
          <p className="mb-2  text-base  font-medium  text-default-800 ">
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
