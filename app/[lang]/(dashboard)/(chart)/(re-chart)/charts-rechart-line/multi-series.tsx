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

const MultiSeriesChart = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Series 1",
      data: [
        { category: "A", value: Math.random() },
        { category: "B", value: Math.random() },
        { category: "C", value: Math.random() },
      ],
    },
    {
      name: "Series 2",
      data: [
        { category: "B", value: Math.random() },
        { category: "C", value: Math.random() },
        { category: "D", value: Math.random() },
      ],
    },
    {
      name: "Series 3",
      data: [
        { category: "C", value: Math.random() },
        { category: "D", value: Math.random() },
        { category: "E", value: Math.random() },
      ],
    },
  ];

  return (
    <ResponsiveContainer height={height}>
      <LineChart height={height}>
        <CartesianGrid
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
          })`}
          strokeDasharray="1 1"
          vertical={false}
        />

        <XAxis
          dataKey="category"
          type="category"
          allowDuplicatedCategory={false}
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
          dataKey="value"
        />
        <Tooltip />

        {series.map((s) => (
          <Line
            dataKey="value"
            data={s.data}
            name={s.name}
            key={s.name}
            dot={{
              stroke: `hsl(${
                theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
              })`,
              strokeWidth: 2,
            }}
            stroke={`hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
            })`}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MultiSeriesChart;
