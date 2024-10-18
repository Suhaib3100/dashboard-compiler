"use client";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { ResponsiveContainer, BarChart, Bar, LabelList, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { data } from "./data";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
const WorkloadChart = ({ height = 295 }: { height?: number }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const renderCustomizedLabel = (props: any) => {
    const { x, y, width, height, value } = props;
    const radius = 10;

    return (
      <g>
        <text
          x={x + width / 2}
          y={y - radius}
          textAnchor="middle"
          fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
            })`}
        >
          {value}%
        </text>
      </g>
    );
  };

  return (
    <Card>
      <CardHeader className="border-none p-6 pt-7 pb-0 mb-0">
        <CardTitle>Workload</CardTitle>
      </CardHeader>
      <CardContent className="mb-0 pb-1 px-0">
        <ResponsiveContainer height={height}>
          <BarChart height={height} data={data}>
            <Bar
              dataKey="progress"
              fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
                })`}
              radius={[10, 10, 0, 0]}
              barSize={60}
            >
              <LabelList dataKey="progress" content={renderCustomizedLabel} />
            </Bar>
            <XAxis
              height={1}
              tickLine={false}
              stroke={`hsl(${theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartGird
                })`}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className=" items-center mt-0 px-0">
        {data.map((item, i) => (
          <div
            className="flex-1 flex flex-col items-center px-1"
            key={`overflow-map-key-${i}`}
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={item.avatar.src} />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <div className="text-xs font-medium text-default-600 mt-2">
              {item.name}
            </div>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};

export default WorkloadChart;
