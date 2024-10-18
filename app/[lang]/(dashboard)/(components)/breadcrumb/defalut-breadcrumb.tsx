"use client"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const DefaultBreadCrumb = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>Dashboard</BreadcrumbItem>
      <BreadcrumbItem> Advanced UI</BreadcrumbItem>
      <BreadcrumbItem>Component</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumbs>
  )
}

export default DefaultBreadCrumb;
