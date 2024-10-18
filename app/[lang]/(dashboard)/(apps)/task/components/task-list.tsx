"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";
const TaskList = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <CardHeader className="p-6 flex-row flex-wrap mb-0">
        <div className="flex-1 flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-default-300 text-default-500"
              >
                Sort <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Asc</DropdownMenuItem>
              <DropdownMenuItem>Desc</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-default-300 text-default-500"
              >
                All Tasks <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Task 1</DropdownMenuItem>
              <DropdownMenuItem>Task 2</DropdownMenuItem>
              <DropdownMenuItem>Task 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
        <div className="flex-none">
          <div className="relative">
            <Search className="w-4 h-4 text-default-400 absolute top-1/2 left-2 -translate-y-1/2" />
            <Input placeholder="Search Projects" className="pl-7" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {children}
      </CardContent>
    </>
  );
};

export default TaskList;
