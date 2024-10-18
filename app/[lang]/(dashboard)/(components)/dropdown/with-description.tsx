"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const WithDescription = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Primary
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:chart-pie"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Text Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a text item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:user"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Number Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a number item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:calendar"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Date Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a date item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Single Form Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a single form item
              </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button color="success">
            Success
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:chart-pie"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Text Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a text item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:user"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Number Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a number item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:calendar"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Date Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a date item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Single Form Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a single form item
              </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button color="warning">
            warning
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:chart-pie"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Text Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a text item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:user"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Number Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a number item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:calendar"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Date Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a date item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Single Form Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a single form item
              </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button color="destructive">
            Danger
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:chart-pie"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Text Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a text item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:user"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Number Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a number item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:calendar"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Date Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a date item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Single Form Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a single form item
              </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button color="info">
            info
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:chart-pie"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Text Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a text item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:user"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Number Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a number item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:calendar"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Date Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a date item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Single Form Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a single form item
              </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default WithDescription;
