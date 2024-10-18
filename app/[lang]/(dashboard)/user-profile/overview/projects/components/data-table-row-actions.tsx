"use client";

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { Row } from '@tanstack/react-table';
import { Star } from "lucide-react";
export function DataTableRowActions<TData>({ row }: { row: Row<TData> }) {

  return (
    <div className="flex justify-center items-center gap-2.5">
      <Star
        className={cn("h-[18px] w-[18px]  text-default-400", {
          "text-yellow-400 fill-yellow-400": (row.original as any).isFavourite,
        })}
      />
      <Button
        size="icon"
        variant="outline"
        color="secondary"
        className=" h-7 w-7 hover:border-default-500 hover:text-default-900"
      >
        <Icon icon="heroicons:pencil" className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        variant="outline"
        className=" h-7 w-7 hover:border-default-500 hover:text-default-900"
        color="secondary"
      >
        <Icon icon="heroicons:trash" className="h-4 w-4" />
      </Button>

    </div>
  );
}
