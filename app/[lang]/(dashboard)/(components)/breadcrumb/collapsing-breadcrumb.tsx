"use client"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const CollapsingBreadcrumb = () => {
  return (
      <Breadcrumbs
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
  );
};

export default CollapsingBreadcrumb;
