
"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import React from 'react';

interface DataItem {
  name: string;
  value: number;
  color: string;
}

interface ProjectBudgetProps {
  height?: number;
}

const data: DataItem[] = [
  { name: 'budget', value: 40, color: '#ff0000' },
  { name: 'cost', value: 50, color: '#00ff00' },
];

const RADIAN = Math.PI / 180;
const cx = 160;
const cy = 200;
const iR = 90;
const oR = 130;
const value = 50;

interface NeedleProps {
  value: number;
  data: DataItem[];
  cx: number;
  cy: number;
  iR: number;
  oR: number;
  color: string;
}

const needle = ({ value, data, cx, cy, iR, oR, color }: NeedleProps) => {
  let total = 0;
  data.forEach((v) => {
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

  return (
    <>
      <circle key="needle-circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />
      <path key="needle-path" d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="none" fill={color} />
    </>
  );
};

const ProjectBudget: React.FC<ProjectBudgetProps> = ({ height = 200 }) => {
  const { theme: config } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center mb-0 border-none pt-8 pl-6">
        <CardTitle>Project Budget</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="w-[300px] mx-auto">
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
                fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`project-budget-key-${index}`} fill={entry.color} />
                ))}
              </Pie>
              {needle({ value, data, cx, cy, iR, oR, color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})` })}
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="justify-center gap-12 pt-0 mt-11">
        <div>
          <div className="text-sm font-medium text-default-600 mb-1.5">Project Budget</div>
          <div className="text-lg font-semibold text-default-900">$96,321</div>
        </div>
        <div>
          <div className="text-sm font-medium text-default-600 mb-1.5">Estimated Cost</div>
          <div className="text-lg font-semibold text-default-900">$42,321</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectBudget;

