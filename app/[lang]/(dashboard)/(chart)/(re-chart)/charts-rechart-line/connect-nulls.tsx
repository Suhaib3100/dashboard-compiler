"use client";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./custom-tooltip";

const ConnectNulls = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const data = [
    { name: "Page A", uv: 4000 },
    { name: "Page B", uv: 3000 },
    { name: "Page C", uv: 2000 },
    { name: "Page D" },
    { name: "Page E", uv: 1890 },
    { name: "Page F", uv: 2390 },
    { name: "Page G", uv: 3490 },
  ];

  return (
    <>
      <ResponsiveContainer height={height}>
        <LineChart height={height} data={data}>
          <CartesianGrid
            stroke={`hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`}
            strokeDasharray="1 1"
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
          <Tooltip />
          <Line
            type="monotone"
            dataKey="uv"
            dot={{
              stroke: `hsl(${
                theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
              })`,
              strokeWidth: 2,
            }}
            stroke={`hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
            })`}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4"></div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart width={500} height={200} data={data}>
          <CartesianGrid
            stroke={`hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`}
            strokeDasharray="1 1"
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

          <Tooltip />
          <Line
            connectNulls
            type="monotone"
            dataKey="uv"
            dot={{
              stroke: `hsl(${
                theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
              })`,
              strokeWidth: 2,
            }}
            stroke={`hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
            })`}
            fill={`hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
            })`}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ConnectNulls;
