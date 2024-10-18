"use client"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
const CustomSeparator = () => {
  return (
    <Breadcrumbs separator="/">
      <Breadcrumbs>
        <BreadcrumbItem >Button</BreadcrumbItem>
        <BreadcrumbItem >Breadcrumbs</BreadcrumbItem>
        <BreadcrumbItem >Card</BreadcrumbItem>
        <BreadcrumbItem >Checkbox</BreadcrumbItem>
        <BreadcrumbItem >Code</BreadcrumbItem>
      </Breadcrumbs>
    </Breadcrumbs>
  );
};

export default CustomSeparator;
