"use client"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
const TaskBreadCrumbs = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>Applications</BreadcrumbItem>
      <BreadcrumbItem>Todo</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default TaskBreadCrumbs;