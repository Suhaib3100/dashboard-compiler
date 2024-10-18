"use client"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
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
