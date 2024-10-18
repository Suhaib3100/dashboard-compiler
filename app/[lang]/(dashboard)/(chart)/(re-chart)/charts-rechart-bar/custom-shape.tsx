"use client";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  CartesianGrid,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
} from "recharts";
import { data } from "./data";
import CustomTooltip from "./custom-tooltip";

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props: any) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomShape = ({ height = 300 }) => {
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
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`hsl(${
                theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
              })`}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomShape;
