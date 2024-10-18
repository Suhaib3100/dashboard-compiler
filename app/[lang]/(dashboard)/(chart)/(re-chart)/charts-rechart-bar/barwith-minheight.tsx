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
  LabelList,
} from "recharts";
import { data } from "./data";
import CustomTooltip from "./custom-tooltip";

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split(" ")[1]}
      </text>
    </g>
  );
};

const BarWithMinHeight = ({ height = 300 }) => {
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
          dataKey="pv"
          fill={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
          })`}
          minPointSize={5}
        >
          <LabelList dataKey="name" content={renderCustomizedLabel} />
        </Bar>
        <Bar
          dataKey="uv"
          fill={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].info
          })`}
          minPointSize={10}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarWithMinHeight;
