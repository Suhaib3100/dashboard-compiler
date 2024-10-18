"use client";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const ReSynchronizedAreaChart = ({ height = 300 }) => {
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

  const CustomTooltip = ({ active, payload }:any) => {
    if (active && payload) {
      return (
        <div className="bg-slate-900 text-primary-foreground p-3 rounded-md space-x-2 rtl:space-x-reverse ">
          <span>{`${payload[0].name}`}</span>
          <span>:</span>
          <span>{`${payload[0].value}%`}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <ResponsiveContainer height={height}>
        <AreaChart width={600} height={150} data={data} syncId="anyId">
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
              fill: mode === "dark" ? "#cbd5e1" : "#64748b",
              fontSize: 12,
            }}
            tickLine={false}
            stroke={`hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`}
            axisLine={false}
          />
          <YAxis
            tick={{
              fill: mode === "dark" ? "#cbd5e1" : "#64748b",
              fontSize: 12,
            }}
            tickLine={false}
            stroke={`hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`}
            axisLine={false}
          />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke={`hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
            })`}
            dot={true}
            strokeWidth={2}
            fill="var(--theme-primary)"
            style={{
              opacity: 0.5,
              "--theme-primary": `hsl(${
                theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
              })`,
            } as React.CSSProperties}
          />
        </AreaChart>
      </ResponsiveContainer>
      <ResponsiveContainer height={height}>
        <AreaChart width={600} height={150} data={data} syncId="anyId">
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
              fill: mode === "dark" ? "#cbd5e1" : "#64748b",
              fontSize: 12,
            }}
            tickLine={false}
            stroke={`hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`}
            axisLine={false}
          />
          <YAxis
            tick={{
              fill: mode === "dark" ? "#cbd5e1" : "#64748b",
              fontSize: 12,
            }}
            tickLine={false}
            stroke={`hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`}
            axisLine={false}
          />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke={`hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].success
            })`}
            dot={true}
            strokeWidth={2}
            fill="var(--theme-success)"
            style={{
              opacity: 0.5,
              "--theme-success": `hsl(${
                theme?.cssVars[mode === "dark" ? "dark" : "light"].success
              })`,
            }as React.CSSProperties}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReSynchronizedAreaChart;
