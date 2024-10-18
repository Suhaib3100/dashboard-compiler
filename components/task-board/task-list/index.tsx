"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronDown,
  Plus,
  Trash2,
  Minus,
} from "lucide-react";
import { deleteBoardAction } from "@/action/project-action";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { type Board as BoardType } from "@/app/api/boards/data";
interface TaskListProps {
  board: BoardType;
  onEdit: (board: BoardType) => void;
  length: number
  children?: React.ReactNode;
  onAction?: (id: BoardType["id"]) => void;

}
const TaskList = ({ board, children, onEdit, length }: TaskListProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [show, setShow] = React.useState<boolean>(true);
  async function onAction(id: string) {
    await deleteBoardAction(id);
  }
  const { name, status, id } = board;
  return (
    <>
      <DeleteConfirmationDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => onAction(board.id)}
      />
      <div
        className={cn("border-l-2   rounded-l-xl mt-8", {
          "border-l-primary": status === "primary",
          "border-l-warning": status === "warning",
          "border-l-success": status === "success",
        })}
      >
        <div
          className={cn(
            "p-4   max-w-[306px] border     flex items-center gap-2 cursor-pointer",
            {
              "rounded-t-xl border-b-0 ": show,
              " rounded-xl": !show,
            }
          )}
          onClick={() => setShow(!show)}
        >
          <span className={cn("text-default-700 transition-transform duration-300", {
            "-rotate-90": !show
          })}>
            <ChevronDown className="w-4 h-4 " />
          </span>

          <span className="font-semibold text-default-800 capitalize flex-1">
            {name} {length}
          </span>
          <button type="button">
            {show ? (
              <Plus className="w-4 h-4 " />
            ) : (
              <Minus className="w-4 h-4" />
            )}
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Icon
                icon="heroicons:ellipsis-horizontal-16-solid"
                className="w-4 h-4 cursor-pointer"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="end">
              <DropdownMenuItem onSelect={() => onEdit(board)}>
                <Icon
                  icon="heroicons:pencil-square"
                  className="w-3.5 h-3.5 mr-1 text-default-700"
                />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setOpen(true)}>
                <Trash2 className="w-3.5 h-3.5 mr-1 text-default-600" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Collapsible open={show} onOpenChange={setShow}>
          <CollapsibleContent className="CollapsibleContent">
            {children}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </>
  );
};

export default TaskList;
