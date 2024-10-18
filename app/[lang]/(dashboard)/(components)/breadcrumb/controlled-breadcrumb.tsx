"use client"
import { useState } from "react";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const ControlledBreadcrumb = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");

  return (
    <>
      <Breadcrumbs underline="active" >
        <BreadcrumbItem
          key="home"
          iscurrent={currentPage === "home"}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </BreadcrumbItem>
        <BreadcrumbItem
          key="dashboard"
          iscurrent={currentPage === "dashboard"}
          onClick={() => setCurrentPage("dashboard")}
        >
          Dashboard
        </BreadcrumbItem>
        <BreadcrumbItem
          key="advanced ui"
          iscurrent={currentPage === "advanced ui"}
          onClick={() => setCurrentPage("advanced ui")}
        >
          Advanced UI
        </BreadcrumbItem>
        <BreadcrumbItem
          key="component"
          iscurrent={currentPage === "component"}
          onClick={() => setCurrentPage("component")}
        >
          Component
        </BreadcrumbItem>
        <BreadcrumbItem
          key="breadcrumb"
          iscurrent={currentPage === "breadcrumb"}
          onClick={() => setCurrentPage("breadcrumb")}
        >
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default ControlledBreadcrumb;
