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

const BasicLine = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
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
        <Tooltip content={CustomTooltip} />
        <Line
          type="monotone"
          dataKey="uv"
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
          })`}
          dot={{
            stroke: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
            })`,
            strokeWidth: 1,
          }}
        />
        <Line
          type="monotone"
          dataKey="pv"
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].info
          })`}
          dot={{
            stroke: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].info
            })`,
            strokeWidth: 1,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BasicLine;
