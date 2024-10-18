"use client"
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
      <Breadcrumbs variant="default">
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
    </>
  );
};

export default StyleBreadcrumb;
