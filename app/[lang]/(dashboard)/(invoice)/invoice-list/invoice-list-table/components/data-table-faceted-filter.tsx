import * as React from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Column } from "@tanstack/react-table";

interface FilterOption {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface DataTableFacetedFilterProps<TData> {
  column: Column<TData, unknown>;
  title: string;
  options: FilterOption[];
}

export function DataTableFacetedFilter<TData>({ column, title, options }: DataTableFacetedFilterProps<TData>) {

  return (
    <Button
      variant="outline"
      className="border-default-300 text-default-600"
    >
      <Plus className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
      {title}
    </Button>

  );
}


