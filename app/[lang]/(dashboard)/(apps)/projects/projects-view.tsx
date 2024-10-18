"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import ProjectsSheet from "./project-sheet";
import { Plus, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProjectGrid from "./project-grid";
import ProjectList from "./project-list";
import { cn } from "@/lib/utils";
import {

  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  VisibilityState,
  ColumnFiltersState,
  SortingState
} from "@tanstack/react-table";
import { columns } from "./project-list/components/columns";
import { DataTableToolbar } from "./project-list/components/data-table-toolbar";
import Blank from "@/components/blank";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));
import { type Project } from "@/app/api/projects/data";
interface ProjectsViewProps {
  projects: Project[];
}
const ProjectsView = ({ projects }: ProjectsViewProps) => {
  const [pageView, setPageView] = React.useState<"grid" | "list">("grid");
  // modal state
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<any | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // table state
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);



  const table = useReactTable({
    data: projects,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const addProjectModal = () => {
    setSelectedProject(null);
    setSelectedProjectId(null);
    setIsOpen(true);
    wait().then(() => (document.body.style.pointerEvents = "auto"));
  };

  const editProjectModal = (project: Project) => {
    if (project) {
      setSelectedProject(project);
      setSelectedProjectId(project.id);
      setIsOpen(true);
    }
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
    setSelectedProjectId(null);

    wait().then(() => (document.body.style.pointerEvents = "auto"));
  };

  if (projects.length < 1) {
    return (
      <Blank className="max-w-[320px] mx-auto flex flex-col items-center justify-center h-full space-y-3">
        <div className=" text-default-900 text-xl font-semibold">
          No Project Here
        </div>
        <div className=" text-sm  text-default-600 ">
          There is no task create. If you create a new task then click this
          button & create new board.
        </div>
        <div></div>
        <Button onClick={addProjectModal}>
          <Plus className="w-4 h-4 text-primary-foreground mr-2" />
          Add Project
        </Button>
      </Blank>
    );
  }
  return (
    <div className="space-y-5">
      <Card>
        <CardContent className="pt-6">
          <div className="flex lg:flex-row flex-col flex-wrap gap-6">
            <div className="flex-1 flex gap-3">
              <Button onClick={addProjectModal} className="whitespace-nowrap">
                <Plus className="w-4 h-4  ltr:mr-2 rtl:ml-2 " />
                Add Project
              </Button>

              <Button
                size="icon"
                variant="outline"
                className={cn("hover:bg-transparent  ", {
                  "hover:border-primary hover:text-primary":
                    pageView === "grid",
                  "hover:border-muted-foreground hover:text-muted-foreground":
                    pageView !== "grid",
                })}
                color={pageView === "grid" ? "primary" : "secondary"}
                onClick={() => setPageView("grid")}
              >
                <LayoutGrid className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className={cn("hover:bg-transparent  ", {
                  "hover:border-primary hover:text-primary":
                    pageView === "list",
                  "hover:border-muted-foreground hover:text-muted-foreground":
                    pageView !== "list",
                })}
                color={pageView === "list" ? "primary" : "secondary"}
                onClick={() => setPageView("list")}
              >
                <List className="h-5 w-5" />
              </Button>
            </div>
            <div className=" flex-none  flex flex-wrap gap-3">
              {pageView === "grid" && <Input placeholder="search..." />}
              {pageView === "list" && <DataTableToolbar table={table} />}
            </div>
          </div>
        </CardContent>
      </Card>
      {pageView === "grid" && (
        <div className="grid  xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">
          {projects?.map((project, i) => (
            <ProjectGrid
              project={project}
              key={`project-grid-${i}`}
              onEdit={editProjectModal}
            />
          ))}
        </div>
      )}
      {pageView === "list" && (
        <ProjectList data={projects} table={table} columns={columns as any} />

      )}

      <ProjectsSheet
        open={isOpen}
        onClose={closeModal}
        project={selectedProject}
        selectedId={selectedProjectId}
      />
    </div>
  );
};

export default ProjectsView;
