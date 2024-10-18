"use client";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertOctagon,
  AlertCircle,
  Apple,
  ArchiveRestore,
  ArchiveX,
  Archive,
  AreaChart,
  ArrowUpLeft,
  ArrowUpNarrowWide,
  ArrowUpSquare,
  ArrowUpToLine,
  ArrowUpWideNarrow,
  ArrowUp,
  Asterisk,
  Ban,
  Banana,
  Banknote,
  BarChart2,
  BarChart3,
  BarChart4,
  BarChartBig,
  BatteryFull,
  Battery,
  Bean,
  BedDouble,
  BedSingle,
  Beef,
  BellPlus,
  BellRing,
  Bell,
  BellOff,
  Bird,
  CheckCheck,
  Check,
  ChevronDown,
  ChevronsDown,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Angry,
  Annoyed,
  AppWindow,
  ArchiveIcon,
  ArrowDownCircle,
  ArrowDownFromLine,
  ArrowDownRight,
  ArrowDownSquare,
  ArrowDownUp,
  ArrowLeftRight,
  AtSign,
  Atom,
  BadgeAlert,
  BadgePercent,
  Book,
  Bookmark,
  Box,
  File,
  Filter,
  GripHorizontal,
} from "lucide-react";

const icons = [
  {
    name: "Apple",
    icon: Apple,
  },
  {
    name: "AlertOctagon",
    icon: AlertOctagon,
  },
  {
    name: "AlertCircle",
    icon: AlertCircle,
  },
  {
    name: "ArchiveRestore",
    icon: ArchiveRestore,
  },
  {
    name: "ArchiveX",
    icon: ArchiveX,
  },
  {
    name: "Archive",
    icon: Archive,
  },
  {
    name: "AreaChart",
    icon: AreaChart,
  },
  {
    name: "AreaChart",
    icon: AreaChart,
  },
  {
    name: "ArrowUpLeft",
    icon: ArrowUpLeft,
  },
  {
    name: "ArrowUpNarrowWide",
    icon: ArrowUpNarrowWide,
  },
  {
    name: "ArrowUpSquare",
    icon: ArrowUpSquare,
  },
  {
    name: "ArrowUpToLine",
    icon: ArrowUpToLine,
  },
  {
    name: "ArrowUpWideNarrow",
    icon: ArrowUpWideNarrow,
  },
  {
    name: "ArrowUp",
    icon: ArrowUp,
  },
  {
    name: "Asterisk",
    icon: Asterisk,
  },
  {
    name: "Asterisk",
    icon: Asterisk,
  },
  {
    name: "Ban",
    icon: Ban,
  },
  {
    name: "Banana",
    icon: Banana,
  },
  {
    name: "Banknote",
    icon: Banknote,
  },
  {
    name: "BarChart2",
    icon: BarChart2,
  },
  {
    name: "BarChart3",
    icon: BarChart3,
  },
  {
    name: "BarChart4",
    icon: BarChart4,
  },
  {
    name: "BarChartBig",
    icon: BarChartBig,
  },
  {
    name: "BatteryFull",
    icon: BatteryFull,
  },
  {
    name: "Battery",
    icon: Battery,
  },
  {
    name: "Bean",
    icon: Bean,
  },
  {
    name: "BedDouble",
    icon: BedDouble,
  },
  {
    name: "BedSingle",
    icon: BedSingle,
  },
  {
    name: "Beef",
    icon: Beef,
  },
  {
    name: "BellOff",
    icon: BellOff,
  },
  {
    name: "BellPlus",
    icon: BellPlus,
  },
  {
    name: "BellRing",
    icon: BellRing,
  },
  {
    name: "Bell",
    icon: Bell,
  },
  {
    name: "Bird",
    icon: Bird,
  },
  {
    name: "Bird",
    icon: CheckCheck,
  },
  {
    name: "Check",
    icon: Check,
  },
  {
    name: "Check",
    icon: ChevronDown,
  },
  {
    name: "ChevronsDown",
    icon: ChevronsDown,
  },
  {
    name: "AlignJustify",
    icon: AlignJustify,
  },
  {
    name: "AlignLeft",
    icon: AlignLeft,
  },
  {
    name: "AlignRight",
    icon: AlignRight,
  },
  {
    name: "Angry",
    icon: Angry,
  },
  {
    name: "Annoyed",
    icon: Annoyed,
  },
  {
    name: "AppWindow",
    icon: AppWindow,
  },
  {
    name: "ArchiveIcon",
    icon: ArchiveIcon,
  },
  {
    name: "ArrowDownCircle",
    icon: ArrowDownCircle,
  },
  {
    name: "ArrowDownFromLine",
    icon: ArrowDownFromLine,
  },
  {
    name: "ArrowDownFromLine",
    icon: ArrowDownFromLine,
  },
  {
    name: "ArrowDownRight",
    icon: ArrowDownRight,
  },
  {
    name: "ArrowDownSquare",
    icon: ArrowDownSquare,
  },
  {
    name: "ArrowDownUp",
    icon: ArrowDownUp,
  },
  {
    name: "ArrowLeftRight",
    icon: ArrowLeftRight,
  },
  {
    name: "AtSign",
    icon: AtSign,
  },
  {
    name: "Atom",
    icon: Atom,
  },
  {
    name: "BadgeAlert",
    icon: BadgeAlert,
  },
  {
    name: "BadgePercent",
    icon: BadgePercent,
  },
  {
    name: "Book",
    icon: Book,
  },
  {
    name: "Bookmark",
    icon: Bookmark,
  },
  {
    name: "Box",
    icon: Box,
  },
  {
    name: "Box",
    icon: File,
  },
  {
    name: "Filter",
    icon: Filter,
  },
  {
    name: "Grip",
    icon: GripHorizontal,
  },
];

const IconPage = () => {
  return (
    <div>
      <div className="flex  flex-wrap gap-5">
        {icons?.map((item, i) => (
          <TooltipProvider key={`lucide-icon-${i}`}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-default-200 text-default-600 hover:bg-background hover:text-primary"
                >
                  {item.icon && (
                    <item.icon className=" h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
                <TooltipArrow className=" fill-primary" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Button asChild>
          <Link
            href="https://lucide.dev/icons/"
            target="_blank"
            className="text-sm font-medium text-default-900"
          >
            View All lucide Icons
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default IconPage;
