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
  ZAxis,
} from "recharts";
import CustomTooltip from "./custom-tooltip";
interface DataPoint {
  x: number;
  y: number;
  z: number;
}
const data01: DataPoint[] = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];
const data02: DataPoint[] = [
  { x: 200, y: 260, z: 240 },
  { x: 240, y: 290, z: 220 },
  { x: 190, y: 290, z: 250 },
  { x: 198, y: 250, z: 210 },
  { x: 180, y: 280, z: 260 },
  { x: 210, y: 220, z: 230 },
];

const ThreeDimScatter = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  return (
    <ResponsiveContainer width="100%" height={height}>
      <ScatterChart height={height}>
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
        <ZAxis
          type="number"
          dataKey="z"
          range={[60, 400]}
          name="score"
          unit="km"
        />
        <Tooltip content={<CustomTooltip />} />
        <Scatter
          name="A school"
          data={data01}
          shape="star"
          fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info
            })`}
        />
        <Scatter
          name="B school"
          data={data02}
          fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success
            })`}
          shape="triangle"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ThreeDimScatter;
