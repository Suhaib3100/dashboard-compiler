"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "budget", value: 40, color: "#ff0000" },
  { name: "cost", value: 50, color: "#00ff00" },
];

const RADIAN = Math.PI / 180;
const cx = 175;
const cy = 200;
const iR = 100;
const oR = 160;
const value = 50;

const needle = (value: number, data: any, cx: number, cy: number, iR: number, oR: number, color: string) => {
  let total = 0;
  data.forEach((v: any) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle
      cx={x0}
      cy={y0}
      r={r}
      fill={color}
      stroke="none"
      key="needle-circle"
    />,
    <path
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="none"
      fill={color}
      key="needle-path"
    />,
  ];
};

const ProjectBudget = ({ height = 250 }: { height?: number }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center mb-0 border-none pt-8 pl-6">
        <CardTitle>Project Budget</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <PieChart height={height}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx={cx}
              cy={cy}
              innerRadius={iR}
              outerRadius={oR}
              fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
                })`}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell fill={entry.color} key={`new-budget-key-${index}`} />
              ))}
            </Pie>
            {needle(
              value,
              data,
              cx,
              cy,
              iR,
              oR,
              `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
              })`
            )}
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="justify-center gap-12 pt-0">
        <div>
          <div className="text-sm font-medium text-default-600 mb-1.5">
            Project Budget
          </div>
          <div className="text-lg font-semibold text-default-900">$96,321</div>
        </div>
        <div>
          <div className="text-sm font-medium text-default-600 mb-1.5">
            Estimated Cost
          </div>
          <div className="text-lg font-semibold text-default-900">$42,321</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectBudget;
