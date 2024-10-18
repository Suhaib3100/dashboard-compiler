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

const AreaChartFillByValue = ({ height = 300 }) => {
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

  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  return (
    <ResponsiveContainer width={"100%"} height={height}>
      <AreaChart data={data}>
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
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="#334155" stopOpacity={1} />
            <stop offset={off} stopColor="#64748b" stopOpacity={1} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="uv"
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
            })`}
          dot={true}
          strokeWidth={2}
          fill="var(--theme-primary)"
          style={{
            opacity: 0.5,
            "--theme-primary": `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
              })`,
          } as React.CSSProperties}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartFillByValue;
