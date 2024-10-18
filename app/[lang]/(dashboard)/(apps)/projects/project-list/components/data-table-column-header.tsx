import {
  ChevronDown,
  ChevronUp,
  XCircle,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DataTableColumnHeader({ column, title, className }: {
  column: any,
  title: string,
  className?: string
}) {
  if (!column.getCanSort()) {
    return <div className={cn("uppercase font-semibold text-default-800", className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 group data-[state=open]:bg-accent"
          >
            <span className="uppercase font-semibold text-default-800 group-hover:text-card">{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ChevronDown className="ltr:ml-2 rtl:mr-2 h-4 w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <ChevronUp className="ltr:ml-2 rtl:mr-2 h-4 w-4" />
            ) : (
              <XCircle className="ltr:ml-2 rtl:mr-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ChevronUp className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ChevronDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <Eye className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
