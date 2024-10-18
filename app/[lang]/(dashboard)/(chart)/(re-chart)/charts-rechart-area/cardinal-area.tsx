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
import { curveCardinal } from "d3-shape";


const CustomTooltip = ({ active, payload }:any) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="bg-slate-900 text-primary-foreground p-3 rounded-md gap-2">
        <span>{`${payload[0].name}`}</span>
        <span>:</span>
        <span>{`${payload[0].value}%`}</span>
      </div>
    );
  }
  return null;
};



const CardinalAreaChart = ({ height = 300 }) => {
  const { theme: config } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  const cardinal = curveCardinal.tension(0.2);

  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <ResponsiveContainer height={height}>
      <AreaChart width={600} height={300} data={data}>
        <CartesianGrid
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`}
          strokeDasharray="1 1"
          vertical={false}
        />
        <XAxis
          dataKey="name"
          tick={{ fill: mode === "dark" ? "#cbd5e1" : "#64748b", fontSize: 12 }}
          tickLine={false}
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`}
          axisLine={false}
        />
        <YAxis
          tick={{ fill: mode === "dark" ? "#cbd5e1" : "#64748b", fontSize: 12 }}
          tickLine={false}
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`}
          axisLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`}
          dot={true}
          strokeWidth={2}
          fill="var(--theme-warning)"
          style={{
            opacity: 0.5,
            "--theme-warning": `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
          } as React.CSSProperties}
        />
        <Area
          type={cardinal}
          dataKey="uv"
          stackId="1"
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`}
          dot={true}
          strokeWidth={2}
          fill="var(--theme-success)"
          style={{
            opacity: 0.5,
            "--theme-success": `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
          } as React.CSSProperties}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CardinalAreaChart;
