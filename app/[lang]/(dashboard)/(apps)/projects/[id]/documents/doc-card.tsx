"use client";
import { Card, CardContent } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { type Document } from "./page";
const DocCard = ({ item }: { item: Document }) => {
  const { title, text, last_view, time } = item;
  return (
    <Link href="/dashboard">
      <Card className="p-0 border border-default-200 hover:border-primary  rounded-sm">
        <CardContent className="p-0  blur-[0.1px] drop-shadow-sm rounded-sm">
          <div className="text-[10px] text-default-600 h-[270px] p-5  overflow-hidden">
            {text}
          </div>
          <div className="bg-background py-3 rounded-b-sm border-t border-default-300">
            <div className="text-base font-medium text-default-900 mb-1 px-4">
              Dashtail Template
            </div>
            <div className="flex items-center justify-between gap-1 px-4">
              <div className="flex-1 flex items-center gap-1">
                <div>
                  <Icon
                    icon="simple-icons:googledocs"
                    className="text-primary/80 w-4 h-4"
                  />
                </div>
                <div className="text-sm font-medium text-default-600 truncate">
                  Opend <span className="text-default-800">Dec 20,2023</span>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <span className="w-5 h-5 flex justify-center items-center rounded-full hover:bg-default-50">
                    <MoreVertical className="w-4 h-4" />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[140px]"
                  align="end"
                  side="top"
                >
                  <DropdownMenuLabel>Open</DropdownMenuLabel>
                  <DropdownMenuLabel>Remove</DropdownMenuLabel>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DocCard;
