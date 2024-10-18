"use client";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";

import CustomTooltip from "./custom-tooltip";
interface DataPoint {
  x: number;
  y: number;
}
const data01: DataPoint[] = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 },
];
const data02: DataPoint[] = [
  { x: 30, y: 20 },
  { x: 50, y: 180 },
  { x: 75, y: 240 },
  { x: 100, y: 100 },
  { x: 120, y: 190 },
];

const JointLineScatter = ({ height = 400 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  return (
    <ResponsiveContainer width="100%" height={height}>
      <ScatterChart height={height}>
        <CartesianGrid
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`}
          strokeDasharray="3 3"
          vertical={false}
        />
        <XAxis
          type="number"
          dataKey="x"
          name="stature"
          unit="cm"
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
          type="number"
          dataKey="y"
          name="weight"
          unit="kg"
          tick={{
            fill: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
              })`,
            fontSize: "12px",
          }}
          tickLine={false}
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`}
        />
        <ZAxis type="number" range={[100]} />
        <Tooltip content={<CustomTooltip />} />

        <Scatter
          name="A school"
          data={data01}
          line
          shape="cross"
          fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info
            })`}
        />
        <Scatter
          name="B school"
          data={data02}
          line
          shape="diamond"
          fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default JointLineScatter;
