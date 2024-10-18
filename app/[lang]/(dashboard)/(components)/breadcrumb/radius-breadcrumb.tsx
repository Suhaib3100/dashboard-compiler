"use client"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

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
