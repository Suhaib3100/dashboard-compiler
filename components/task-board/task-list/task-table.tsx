"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState
} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { ChevronDown, Plus, Trash2, X } from "lucide-react";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { faker } from "@faker-js/faker";
import {
  deleteTaskAction,
  updateTaskAction,
  addTaskAction,
} from "@/action/project-action";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { type Task as TaskType } from "@/app/api/tasks/data";
import { type Board as BoardType } from "@/app/api/boards/data";
const members = [
  {
    name: "Nick Jonas",
    value: "userid1",
    image: faker.image.avatarLegacy(),
  },
  {
    name: "Fahim",
    value: "userid2",
    image: faker.image.avatarLegacy(),
  },
  {
    name: "Nayeem",
    value: "userid3",
    image: faker.image.avatarLegacy(),
  },
  {
    name: "Iftekhar",
    value: "userid4",
    image: faker.image.avatarLegacy(),
  },
];
const tabs = [
  {
    label: "Due Date",
    value: "due-date",
  },
  {
    label: "Start Date",
    value: "start-date",
  },
];

const priorityColors: { [key: string]: any } = {
  high: "success",
  medium: "warning",
  low: "destructive",
};

const schema = z.object({
  title: z.string().min(2, { message: "Need Task Title" }),
});

interface TaskTableProps {
  data: TaskType[];
  boards: BoardType[];
  onUpdateTask: (task: TaskType) => void;
  boardID2: string;

}
const TaskTable = ({ data, boards, onUpdateTask, boardID2 }: TaskTableProps) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [dueDate, setDueDate] = React.useState<Date>(new Date());
  const [startDate, setStartDate] = React.useState<Date>(new Date());
  // for delete action state
  const [open, setOpen] = React.useState(false);

  // create task
  const [isPending, startTransition] = React.useTransition();
  const getBoardNameById = (boardId: BoardType["id"]) => {
    const foundBoard = boards.find((board) => board.id === boardId);
    return foundBoard ? foundBoard.name : "Unknown Board";
  };
  const handleMoveTask = (task: TaskType, boardId: BoardType["id"]) => {
    const newData = {
      ...task,
      boardId: boardId,
    };
    updateTaskAction(task.id, newData);
  };

  const onAction = async (dltId: string) => {
    await deleteTaskAction(dltId);
  };

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    data.boardId = boardID2;
    var result;

    startTransition(async () => {
      result = await addTaskAction(data);
      toast.success("Successfully added");
    });

    reset();
  };

  const columns: ColumnDef<TaskType, any>[] = [
    {
      id: "id",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="rtl:mr-4"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="rtl:mr-4"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },

    {
      accessorKey: "title",
      header: "Task",
      cell: ({ row }) => (
        <div
          className="flex items-center gap-2 max-w-[300px] text-ellipsis cursor-pointer"
          onClick={() => onUpdateTask(row?.original)}
        >
          <div className="flex-1 text-sm font-medium text-default-800 capitalize truncate">
            {row.getValue("title")}
          </div>

        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button

                variant="soft"
                className="flex items-center gap-1 text-sm font-medium  h-6 whitespace-nowrap"
              >
                {getBoardNameById(row?.original.boardId)}{" "}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[50px]" align="start">
              {boards?.map((board) => (
                <DropdownMenuItem
                  onSelect={() => handleMoveTask(row.original, board.id)}
                  className="text-[10px] leading-[14px] font-semibold  text-default-600 py-1"
                  key={`key-dropdown-${board.id}`}
                >
                  {board.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },

    {
      accessorKey: "list",
      header: "List",
      cell: ({ row }) => (
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button

                variant="soft"
                className="flex items-center gap-1 text-sm font-medium  h-6 whitespace-nowrap"
              >
                UI/UX Design <ChevronDown className="w-4 h-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <div className="flex justify-between items-center bg-default-50  border-b border-default-300 px-3 py-2 ">
                <div className=" text-sm font-medium text-default-900 ">
                  Task List{" "}
                </div>
                <PopoverClose>
                  <Button

                    size="icon"
                    className="w-6 h-6 bg-default-400 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </PopoverClose>
              </div>
              <Command>
                <div className="p-2">
                  <CommandInput
                    placeholder="Search list..."
                    inputWrapper="border border-default-200 rounded-md"
                    className="h-9"
                  ></CommandInput>
                </div>
                <CommandEmpty>No Item found</CommandEmpty>

              </Command>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="text-sm font-medium text-default-600 px-4 py-1.5 border-b border-default-200 hover:bg-default-50 hover:underline hover:decoration-primary cursor-pointer">
                    Create a list
                  </div>
                </DialogTrigger>
                <DialogContent size="lg" className="px-0">
                  <DialogHeader className="border-b border-default-300">
                    <div className="text-lg font-medium text-default-900 text-center pb-4">
                      Create a list
                    </div>
                  </DialogHeader>

                  <div className="p-4">
                    <Label htmlFor="listname" className="mb-2">
                      List Name
                    </Label>
                    <Input type="text" placeholder="example list.." />
                  </div>
                  <DialogFooter className=" px-4 sm:justify-center">
                    <DialogClose asChild>
                      <Button type="button" variant="outline">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button >Create</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
    {
      accessorKey: "assign",
      header: "Assigns",
      cell: ({ row }: any) => (
        <div>
          {row.getValue("assign")?.length > 0 && (
            <div className="flex items-center gap-3">
              <AvatarGroup

                max={2}

                total={(row.getValue("assign") as any[]).length}
                countClass="w-8 h-8"
              >
                {row.getValue("assign").map((user: any) => (
                  <TooltipProvider key={`marka-${faker.string.uuid()}`}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Avatar className="h-8 w-8 ring-1 ring-background ring-offset-[2px]  ring-offset-background">
                          <AvatarImage src={user.image.src} />
                          <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent color="primary">
                        <p>{user.name}</p>
                        <TooltipArrow className=" fill-primary" />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </AvatarGroup>
              <Popover>
                <PopoverTrigger asChild>
                  <Button

                    size="icon"
                    className="h-8 w-8 bg-default-100 rounded-full hover:bg-default-200"
                  >
                    <Icon
                      icon="heroicons:user-plus"
                      className="w-5 h-5 text-primary"
                    />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <div className="flex justify-between items-center bg-default-50  border-b border-default-300 px-3 py-2">
                    <div className=" text-sm font-medium text-default-900 ">
                      Assign Task To
                    </div>
                    <PopoverClose>
                      <Button

                        size="icon"
                        className="w-6 h-6 bg-default-400 rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </PopoverClose>
                  </div>
                  <Command>
                    <div className="p-2">
                      <CommandInput
                        placeholder="Search By Name..."
                        inputWrapper="border border-default-200 rounded-md"
                        className="h-9"
                      ></CommandInput>
                    </div>
                    <CommandEmpty>No new members.</CommandEmpty>
                    <CommandGroup>
                      {members.map((item) => (
                        <CommandItem
                          key={`assigned-members-${item.value}`}
                          value={item.name}
                          className="gap-2"
                        >
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={item.image} />
                            <AvatarFallback>SN</AvatarFallback>
                          </Avatar>
                          <span className="font-base capitalize text-default-900">
                            {item.name}
                          </span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
      ),
    },
    {
      accessorKey: "date",
      header: "Due Date",
      cell: ({ row }) => (
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button

                className="font-medium text-default-600 bg-transparent hover:bg-transparent whitespace-nowrap"
              >
                {row.getValue("date")} /{row?.original?.time}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" side="bottom">
              <Tabs defaultValue="due-date" className="block">
                <TabsList className="grid w-full grid-cols-2 h-12 py-2">
                  {tabs.map((item) => (
                    <TabsTrigger
                      key={`date-item-${item.value}`}
                      value={item.value}
                    >
                      {item.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsContent value="due-date">
                  <Calendar
                    mode="single"
                    selected={dueDate}

                    onSelect={(date) => setDueDate(date as Date)}
                    className=" w-full"
                  />
                </TabsContent>
                <TabsContent value="start-date">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={(date) => setStartDate(date as Date)}

                    className=" w-full"
                  />
                </TabsContent>
              </Tabs>
              <div className="p-2.5 flex justify-end gap-2">
                <PopoverClose>
                  <Button size="sm" variant="outline">
                    Cancel
                  </Button>
                </PopoverClose>
                <Button size="sm">Select</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
    {
      accessorKey: "priority",
      header: "Priority",
      cell: ({ row }) => (
        <div>
          {row.getValue("priority") as any ? (
            <Badge
              color={priorityColors[row?.getValue("priority") as any] || ""}
              className="capitalize"
            >
              {row.getValue("priority")}
            </Badge>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button

                  variant="soft"
                  className="text-sm font-medium text-primary h-6 bg-transparent hover:bg-transparent hover:text-primary"
                >
                  Add...
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[196px]" align="start">
                <DropdownMenuItem>High</DropdownMenuItem>
                <DropdownMenuItem>Low</DropdownMenuItem>
                <DropdownMenuItem>Medium</DropdownMenuItem>
                <DropdownMenuItem>urgent</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      ),
    },
    {
      accessorKey: "storyPoints",
      header: "Story Point",
      cell: ({ row }) => (
        <div>
          {row.getValue("storyPoints") ? (
            row.getValue("storyPoints")
          ) : (
            <input
              type="text"
              placeholder="Set"
              className="border-b border-default-200 focus:outline-none w-16"
            />
          )}
        </div>
      ),
    },
    {
      accessorKey: "id",
      header: "Actions",
      cell: ({ row }) => {
        return (
          <>
            <DeleteConfirmationDialog
              open={open}
              onClose={() => setOpen(false)}
              onConfirm={() => onAction(row.original.id)}
            />
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="h-7 w-7"
                color="secondary"
                onClick={() => setOpen(true)}
              >
                <Icon icon="heroicons:trash" className=" h-4 w-4  " />
              </Button>
              <Button
                size="icon"
                variant="outline"
                color="secondary"
                className=" h-7 w-7 "
                onClick={() => onUpdateTask(row?.original)}
              >
                <Icon icon="heroicons:pencil" className=" h-4 w-4  " />
              </Button>
            </div>
          </>
        );
      },
    },
  ];
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <>
      <div className="border border-default-300 rounded-bl-xl overflow-x-auto">
        <Table >
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={`list-vie-header-${faker.string.uuid()}`}
                      className="border-r border-default-300 first:border-r-0  whitespace-nowrap rtl:text-right"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={`list-view-row-${faker.string.uuid()}`}
                  data-state={row.getIsSelected() && "selected"}
                  className="border border-default-300 "
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={`list-view-cell-${faker.string.uuid()}`}
                      className="border-r border-default-300 first:border-r-0 py-2.5"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
            <TableRow>
              <TableCell
                className="border-r border-default-300 first:border-r-0 py-2.5"
                colSpan={columns.length / 2}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex items-center">
                    <Plus className="w-4 h-4 text-primary" />
                    <input
                      type="text"
                      {...register("title")}
                      placeholder="  Add a task"

                      className={cn(
                        "text-sm font-medium text-default-900 focus:outline-none pl-2 placeholder:text-primary",
                        {
                          " placeholder:text-destructive  text-destructive ":
                            errors.title,
                        }
                      )}
                    />

                  </div>
                </form>
              </TableCell>
              <TableCell
                className="border-r border-default-300 first:border-r-0 py-2.5"
                colSpan={columns.length / 2}
              ></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default TaskTable;
