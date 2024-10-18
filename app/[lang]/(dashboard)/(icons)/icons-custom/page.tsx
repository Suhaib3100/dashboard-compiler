"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Application,
  Authentication,
  BarLeft,
  BarTop,
  Book,
  Calendar,
  Cart,
  Chart,
  ClipBoard,
  ClipBoard2,
  Components,
  DashBoard,
  Envelope,
  Files,
  Flag,
  Google,
  Graph,
  Grid,
  Icons,
  List,
  ListFill,
  Map,
  Map2,
  Medical,
  MenuBar,
  Messages,
  Monitor,
  Moon,
  Note2,
  Note3,
  Pages,
  Pointer,
  PretentionChartLine2,
  Settings,
  Stacks2,
  Sun,
  User,
  Phone,
  Location,
  Calender,
  CalenderCheck,
  UserPlus,
  Mail,
  UserSign,
  Web,
  Mail2
} from "@/components/svg";

const icons = [
  {
    name: "DashBoard",
    icon: DashBoard,
  },
  {
    name: "Application",
    icon: Application,
  },
  {
    name: "Authentication",
    icon: Authentication,
  },
  {
    name: "Components",
    icon: Components,
  },
  {
    name: "Grid",
    icon: Grid,
  },
  {
    name: "Stacks2",
    icon: Stacks2,
  },
  {
    name: "Pages",
    icon: Pages,
  },
  {
    name: "Chart",
    icon: Chart,
  },
  {
    name: "Map",
    icon: Map,
  },
  {
    name: "Settings",
    icon: Settings,
  },
  {
    name: "Files",
    icon: Files,
  },
  {
    name: "Graph",
    icon: Graph,
  },
  {
    name: "Cart",
    icon: Cart,
  },
  {
    name: "ClipBoard",
    icon: ClipBoard,
  },
  {
    name: "Envelope",
    icon: Envelope,
  },
  {
    name: "Messages",
    icon: Messages,
  },
  {
    name: "Monitor",
    icon: Monitor,
  },
  {
    name: "List",
    icon: List,
  },
  {
    name: "ListFill",
    icon: ListFill,
  },
  {
    name: "Calendar",
    icon: Calendar,
  },
  {
    name: "Flag",
    icon: Flag,
  },
  {
    name: "Book",
    icon: Book,
  },
  {
    name: "Medical",
    icon: Medical,
  },
  {
    name: "ClipBoard2",
    icon: ClipBoard2,
  },
  {
    name: "Note2",
    icon: Note2,
  },
  {
    name: "Note3",
    icon: Note3,
  },
  {
    name: "BarLeft",
    icon: BarLeft,
  },
  {
    name: "BarTop",
    icon: BarTop,
  },
  {
    name: "PretentionChartLine2",
    icon: PretentionChartLine2,
  },
  {
    name: "Google",
    icon: Google,
  },
  {
    name: "Pointer",
    icon: Pointer,
  },
  {
    name: "Map2",
    icon: Map2,
  },
  {
    name: "MenuBar",
    icon: MenuBar,
  },
  {
    name: "Map2",
    icon: Icons,
  },
  {
    name: "Sun",
    icon: Sun,
  },
  {
    name: "Moon",
    icon: Moon,
  },
  {
    name: "User",
    icon: User,
  },
  {
    name: "Phone",
    icon: Phone,
  },
  {
    name: "Location",
    icon: Location,
  },
  {
    name: "Calender",
    icon: Calender,
  },
  {
    name: "CalenderCheck",
    icon: CalenderCheck,
  },
  {
    name: "UserPlus",
    icon: UserPlus,
  },
  {
    name: "Mail",
    icon: Mail,
  },
  {
    name: "UserSign",
    icon: UserSign,
  },
  {
    name: "Web",
    icon: Web,
  },
  {
    name: "Mail2",
    icon: Mail2,
  },
];

const IconPage = () => {
  return (
    <div>
      <div className="flex  flex-wrap gap-5">
        {icons?.map((item, i) => (
          <TooltipProvider key={`custom-icon-${i}`}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-default-200 hover:bg-background hover:text-primary"
                >
                  {item.icon && <item.icon className="w-6 h-6" />}
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
    </div>
  );
};

export default IconPage;
