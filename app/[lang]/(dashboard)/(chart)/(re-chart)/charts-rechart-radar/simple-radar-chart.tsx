"use client";
import React from "react";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const ReSimpleRadarChart = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  const data = [
    {
      subject: "Math",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Chinese",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "English",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Geography",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Physics",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "History",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  return (
    <ResponsiveContainer height={height}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
          })`}
          dot={true}
          strokeWidth={2}
          fill="var(--theme-primary)"
          style={{
            opacity: 0.4,
            "--theme-primary": `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
            })`,
          } as React.CSSProperties}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default ReSimpleRadarChart;
