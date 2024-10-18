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
} from "recharts";
import { data } from "./data";
import CustomTooltip from "./custom-tooltip";

const MixBar = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart height={height} data={data}>
        <CartesianGrid
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
          })`}
          strokeDasharray="3 3"
          vertical={false}
        />

        <XAxis
          dataKey="name"
          tick={{
            fill: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
            })`,
            fontSize: "12px",
          }}
          tickLine={false}
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
          })`}
          axisLine={false}
        />
        <YAxis
          tick={{
            fill: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
            })`,
            fontSize: "12px",
          }}
          tickLine={false}
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
          })`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="pv"
          stackId="a"
          fill={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
          })`}
        />
        <Bar
          dataKey="uv"
          stackId="a"
          fill={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].info
          })`}
        />
        <Bar
          dataKey="amt"
          fill={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].success
          })`}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MixBar;
