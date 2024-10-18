"use client"
import React, { useState } from "react";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const MenuTypeBreadcrumb = () => {
  const [currentPage, setCurrentPage] = useState("breadcrumb");
  return (
    <Breadcrumbs
      className="gap-2"
      separator={null}
      itemClasses="border px-4 py-1  rounded-md data-[state=active]:border-primary data-[state=active]:text-primary-foreground data-[state=active]:bg-primary "
    >
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
  );
};

export default MenuTypeBreadcrumb;
