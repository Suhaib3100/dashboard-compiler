"use client";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DataItem {
  name: string;
  total_budget: number;
  project_cost: number;
}

const data: DataItem[] = [
  {
    name: "Jan",
    total_budget: 4000,
    project_cost: 2400,
  },
  {
    name: "Feb",
    total_budget: 3000,
    project_cost: 1398,
  },
  {
    name: "Mar",
    total_budget: 2000,
    project_cost: 9800,
  },
  {
    name: "Apr",
    total_budget: 2780,
    project_cost: 3908,
  },
  {
    name: "May",
    total_budget: 1890,
    project_cost: 4800,
  },
  {
    name: "Jun",
    total_budget: 2390,
    project_cost: 3800,
  },
  {
    name: "Jul",
    total_budget: 3490,
    project_cost: 4300,
  },
  {
    name: "Aug",
    total_budget: 3490,
    project_cost: 4300,
  },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: any;
}
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload) {
    return (
      <div className="bg-background z-10 text-default-900 shadow-lg  space-y-2 rounded-md  pb-2">
        <div className="bg-default-50 rounded-t-md border-b border-default-200 py-1.5 px-2">
          {payload[0].payload.name}
        </div>
        {payload.map((item: any, index: number) => (
          <div
            key={`project-budget-bar-tootltip-${index}`}
            className="flex items-center gap-2 font-medium text-default-600 px-2 hover:bg-default-50"
          >
            <span
              className="w-2.5 h-2.5 rounded-full bg-primary"
              style={{ backgroundColor: `${item.color}` }}
            ></span>
            <span>
              {item.name === "total_budget" && "Total Budget"}
              {item.name === "project_cost" && "Project Cost"}:
            </span>
            <span className="font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    );
  }

  return null;
};
const YAxisFormatter = (value: number) => {
  return `${value / 1000}k`;
};

const CustomLegend = (props: any) => {
  const { payload } = props;

  return (
    <ul className="flex justify-center gap-2 mt-2">
      {payload.map((entry: any, index: number) => (
        <li
          key={`rechart-ligend-item-${index}`}
          className="flex items-center gap-1 text-xs font-medium text-default-500"
        >
          <span
            className="h-2 w-2 rounded-[2px]  block"
            style={{ backgroundColor: `${entry.color}` }}
          ></span>

          {entry.value === "total_budget" && "Total Budget"}
          {entry.value === "project_cost" && "Project Cost"}
        </li>
      ))}
    </ul>
  );
};
const ProjectBudgetBar = ({ height = 285 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  return (
    <Card>
      <CardHeader className="border-none mb-4">
        <CardTitle className="mt-4">Project Budget</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ResponsiveContainer width="100%" height={height}>
          <BarChart height={height} data={data}>
            <CartesianGrid
              stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
                })`}
              strokeDasharray="3 3"
              vertical={false}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              content={<CustomLegend />}
            />
            <XAxis
              dataKey="name"
              tick={{
                fill: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
                  })`,
                fontSize: "12px",
              }}
              tickLine={false}
              stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
                })`}
              axisLine={false}
            />
            <YAxis
              tick={{
                fill: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
                  })`,
                fontSize: "12px",
              }}
              tickLine={false}
              axisLine={false}
              stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
                })`}
              tickFormatter={YAxisFormatter}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="total_budget"
              fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success
                })`}
            />
            <Bar
              dataKey="project_cost"
              fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success
                })`}
              fillOpacity={0.3}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ProjectBudgetBar;
