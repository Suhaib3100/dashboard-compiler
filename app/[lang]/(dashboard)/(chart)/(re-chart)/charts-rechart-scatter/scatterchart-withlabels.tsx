"use client";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  ScatterChart,
  Scatter,
  LabelList,
} from "recharts";
import CustomTooltip from "./custom-tooltip";
interface DataPoint {
  x: number;
  y: number;
  z: number;
}
const data: DataPoint[] = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const ScatterChartWithLabels = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  return (
    <ResponsiveContainer width="100%" height={height}>
      <ScatterChart height={height} data={data}>
        <CartesianGrid
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`}
          strokeDasharray="3 3"
          vertical={false}
        />
        <XAxis
          type="number"
          dataKey="x"
          name="stature"
          unit="cm"
          tick={{
            fill: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
              })`,
            fontSize: "12px",
          }}
          tickLine={false}
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`}
          axisLine={false}
        />
        <YAxis
          type="number"
          dataKey="y"
          name="weight"
          unit="kg"
          tick={{
            fill: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
              })`,
            fontSize: "12px",
          }}
          tickLine={false}
          stroke={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Scatter
          name="A school"
          data={data}
          fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info
            })`}
        >
          <LabelList dataKey="x" />
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterChartWithLabels;
