"use client";
import React from "react";
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
  Scatter,
  ResponsiveContainer,
} from "recharts";

const ReScatterAndLineOfBestFit = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const data = [
    { index: 10000, red: 1643, blue: 790 },
    { index: 1666, red: 182, blue: 42 },
    { index: 625, red: 56, blue: 11 },
    { index: 300, redLine: 0 },
    { index: 10000, redLine: 1522 },
    { index: 600, blueLine: 0 },
    { index: 10000, blueLine: 678 },
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
          dataKey="index"
          type="number"
          label={{ value: "Index", position: "insideBottomRight", offset: 0 }}
          tick={{ fill: mode === "dark" ? "#cbd5e1" : "#64748b", fontSize: 12 }}
          tickLine={false}
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`}
          axisLine={false}
        />
        <YAxis
          unit="ms"
          type="number"
          label={{ value: "Time", angle: -90, position: "insideLeft" }}
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
        <Scatter
          name="red"
          dataKey="red"
          data={data}
          fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive
            })`}
        />
        <Scatter
          name="blue"
          dataKey="blue"
          data={data}
          fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
            })`}
        />

        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="blueLine"
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
            })`}
          dot={{
            stroke: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
              })`,
            strokeWidth: 2,
          }}
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="redLine"
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive
            })`}
          dot={{
            stroke: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive
              })`,
            strokeWidth: 2,
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ReScatterAndLineOfBestFit;
