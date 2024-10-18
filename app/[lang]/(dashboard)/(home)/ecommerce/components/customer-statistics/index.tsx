
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatsChart from "./stats-chart";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const CustomerStatistics = () => {
  return (
    <Card className="py-2.5">
      <CardHeader className="flex-row items-center justify-between gap-4 border-none pb-0 ">
        <CardTitle>Customer Statistics</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              className="group h-6 w-6 bg-transparent hover:bg-transparent  text-default-800 border border-default-200"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[196px]"
            align="end"
            side="bottom"
            avoidCollisions
          >
            <DropdownMenuLabel>Man</DropdownMenuLabel>
            <DropdownMenuItem>Women</DropdownMenuItem>
            <DropdownMenuItem>Others</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="px-0 pb-8">
        <StatsChart />
      </CardContent>
    </Card>
  );
};

export default CustomerStatistics;