"use client"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
const DisabledBreadCrumb = () => {
  return (
    <Breadcrumbs disabled>
      <BreadcrumbItem>Dashboard</BreadcrumbItem>
      <BreadcrumbItem> Advanced UI</BreadcrumbItem>
      <BreadcrumbItem>Component</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default DisabledBreadCrumb;
