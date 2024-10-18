"use client";

import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ComposedChartWithAxisLabels = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
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
    <ResponsiveContainer height={height}>
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`}
          strokeDasharray="1 1"
          vertical={false}
        />
        <XAxis
          dataKey="name"
          tick={{ fill: mode === "dark" ? "#cbd5e1" : "#64748b", fontSize: 12 }}
          tickLine={false}
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`}
          axisLine={false}
        />
        <YAxis
          tick={{ fill: mode === "dark" ? "#cbd5e1" : "#64748b", fontSize: 12 }}
          tickLine={false}
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`}
          axisLine={false}
        />
        <Tooltip content={CustomTooltip} />
        <Legend
          formatter={(value, entry) => <span style={{ color: entry.color, marginRight: isRtl ? "5px" : "0px" }}>{value}</span>}
        />
        <Area
          type="monotone"
          dataKey="amt"
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
            })`}
          dot={true}
          strokeWidth={2}
          style={{
            opacity: 0.7,
            "--theme-primary": `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
              })`,
          } as React.CSSProperties}
        />
        <Bar
          dataKey="pv"
          barSize={20}
          fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
            })`}
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="uv"
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
            })`}
          dot={{
            stroke: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
              })`,
            strokeWidth: 2,
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ComposedChartWithAxisLabels;
