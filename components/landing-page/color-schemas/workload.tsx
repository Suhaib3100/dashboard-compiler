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
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

import avatar1 from "@/public/images/avatar/avatar-7.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";

const data = [
  {
    name: "Mark Dsuza",
    progress: 85,
    avatar: avatar1,
  },
  {
    name: "Mark Dsuza",
    progress: 80,
    avatar: avatar2,
  },
  {
    name: "Mark Dsuza",
    progress: 70,
    avatar: avatar3,
  },
  {
    name: "Mark Dsuza",
    progress: 58,
    avatar: avatar4,
  },
  {
    name: "Mark Dsuza",
    progress: 49,
    avatar: avatar5,
  },

];

const Workload = ({ height = 245 }: { height?: number }) => {
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
              stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
                })`}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="items-center mt-0 px-0">
        {data.map((item, index) => (
          <div
            key={`workload-${index}`}
            className="flex-1 flex flex-col items-center px-1"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={item.avatar.src} />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <div className="text-xs font-medium text-default-600 mt-2 hidden sm:block">
              {item.name}
            </div>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};

export default Workload;
