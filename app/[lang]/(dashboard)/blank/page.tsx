"use client"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
const BlankPage = () => {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Utility</BreadcrumbItem>
        <BreadcrumbItem className="text-primary">Blank Page</BreadcrumbItem>
      </Breadcrumbs>
      <div className="mt-5 text-2xl font-medium text-default-900">Blank Page</div>
    </div>
  );
};

export default BlankPage;