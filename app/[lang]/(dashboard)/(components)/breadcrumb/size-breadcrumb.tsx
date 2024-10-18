"use client"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
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
