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

const BiAxialBar = ({ height = 300 }) => {
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
          yAxisId="left"
          orientation="left"
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
        <YAxis
          yAxisId="right"
          orientation="right"
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
          yAxisId="left"
          dataKey="pv"
          fill={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
          })`}
        />
        <Bar
          yAxisId="right"
          dataKey="uv"
          fill={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].success
          })`}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BiAxialBar;
