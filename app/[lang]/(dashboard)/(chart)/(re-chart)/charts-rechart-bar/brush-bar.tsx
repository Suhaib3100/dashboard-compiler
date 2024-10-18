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
  Legend,
  ReferenceLine,
  Brush,
} from "recharts";

const data = [
  { name: "1", uv: 300, pv: 456 },
  { name: "2", uv: -145, pv: 230 },
  { name: "3", uv: -100, pv: 345 },
  { name: "4", uv: -8, pv: 450 },
  { name: "5", uv: 100, pv: 321 },
  { name: "6", uv: 9, pv: 235 },
  { name: "7", uv: 53, pv: 267 },
  { name: "8", uv: 252, pv: -378 },
  { name: "9", uv: 79, pv: -210 },
  { name: "10", uv: 294, pv: -23 },
  { name: "12", uv: 43, pv: 45 },
  { name: "13", uv: -74, pv: 90 },
  { name: "14", uv: -71, pv: 130 },
  { name: "15", uv: -117, pv: 11 },
  { name: "16", uv: -186, pv: 107 },
  { name: "17", uv: -16, pv: 926 },
  { name: "18", uv: -125, pv: 653 },
  { name: "19", uv: 222, pv: 366 },
  { name: "20", uv: 372, pv: 486 },
  { name: "21", uv: 182, pv: 512 },
  { name: "22", uv: 164, pv: 302 },
  { name: "23", uv: 316, pv: 425 },
  { name: "24", uv: 131, pv: 467 },
  { name: "25", uv: 291, pv: -190 },
  { name: "26", uv: -47, pv: 194 },
  { name: "27", uv: -415, pv: 371 },
  { name: "28", uv: -182, pv: 376 },
  { name: "29", uv: -93, pv: 295 },
  { name: "30", uv: -99, pv: 322 },
  { name: "31", uv: -52, pv: 246 },
  { name: "32", uv: 154, pv: 33 },
  { name: "33", uv: 205, pv: 354 },
  { name: "34", uv: 70, pv: 258 },
  { name: "35", uv: -25, pv: 359 },
  { name: "36", uv: -59, pv: 192 },
  { name: "37", uv: -63, pv: 464 },
  { name: "38", uv: -91, pv: -2 },
  { name: "39", uv: -66, pv: 154 },
  { name: "40", uv: -50, pv: 186 },
];

const BrushBar = ({ height = 300 }) => {
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
            fill: mode === "dark" ? "#cbd5e1" : "#64748b",
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
            fill: mode === "dark" ? "#cbd5e1" : "#64748b",
            fontSize: "12px",
          }}
          tickLine={false}
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
          })`}
        />
        <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: "20px" }} />
        <ReferenceLine
          y={0}
          stroke={`hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartGird
          })`}
        />
        <Brush
          dataKey="name"
          height={30}
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].info
          })`}
        />
        <Bar
          dataKey="pv"
          fill={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
          })`}
        />
        <Bar
          dataKey="uv"
          fill={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].info
          })`}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BrushBar;
