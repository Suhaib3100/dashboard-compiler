"use client"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const ColorBreadcrumb = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs color="primary">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs color="success">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs color="destructive">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs color="warning">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs color="info">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default ColorBreadcrumb;
