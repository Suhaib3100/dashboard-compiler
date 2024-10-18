"use client"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { Box, ChevronDown, ClipboardList, Home,Layers } from "lucide-react";
const StartIconBreadcrumb = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>
          <Home className="h-4 w-4" />
        </BreadcrumbItem>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>List</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
      
      <Breadcrumbs>
        <BreadcrumbItem startContent={<Home className="h-4 w-4" />}>
          Dashboard
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<Layers className="h-4 w-4" />}>
          Advanced UI
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<Box className="h-4 w-4" />}>
          Component
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<ClipboardList className="h-4 w-4" />}>
          List
        </BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>

      <Breadcrumbs>
        <BreadcrumbItem startContent={<Home className="h-4 w-4" />}>
          Dashboard
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<Layers className="h-4 w-4" />}>
          Advanced UI
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<Box className="h-4 w-4" />}>
          Component
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<ClipboardList className="h-4 w-4" />}>
          List
        </BreadcrumbItem>
        <BreadcrumbItem endContent={<ChevronDown className="h-4 w-4" />}>
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumbs>

      <Breadcrumbs>
        <BreadcrumbItem endContent={<Home className="h-4 w-4" />}>
          Dashboard
        </BreadcrumbItem>
        <BreadcrumbItem endContent={<Layers className="h-4 w-4" />}>
          Advanced UI
        </BreadcrumbItem>
        <BreadcrumbItem endContent={<Box className="h-4 w-4" />}>
          Component
        </BreadcrumbItem>
        <BreadcrumbItem endContent={<ClipboardList className="h-4 w-4" />}>
          List
        </BreadcrumbItem>
        <BreadcrumbItem endContent={<Home className="h-4 w-4" />}>
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default StartIconBreadcrumb;
