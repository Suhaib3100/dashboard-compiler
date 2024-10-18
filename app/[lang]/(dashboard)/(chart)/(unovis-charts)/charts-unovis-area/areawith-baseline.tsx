"use client";

import { useCallback, useMemo } from "react";
import {
  VisArea,
  VisAxis,
  VisBulletLegend,
  VisXYContainer,
} from "@unovis/react";
import { CurveType } from "@unovis/ts";
import { categories, baselineData } from "./data";
import { useTheme } from "next-themes";
import { useThemeStore } from "@/store";
import { themes } from "@/config/thems";
const BaselineAreaChart = ({ height = 400 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);


  const sums = baselineData.map((d) => d.art.reduce((t, i) => t + i, 0));
  const max = Math.max(...sums);

  const yTicks = Array(Math.round(max / 1000))
    .fill(0)
    .map((_, i) => {
      const dir = i % 2 === 1 ? -(i - 1) : i;
      return max / 2 + dir * 1000;
    });

  const x = useCallback((d: any) => d.year, []);
  const y = useCallback((c: any) => (d: any) => d.art[c.id], []);
  const baseline = useCallback((_: any, i: any) => (max - sums[i]) / 2, []);


  return (
    <div>
      <VisBulletLegend items={categories} />
      <VisXYContainer data={baselineData} height={height}>
        <VisArea
          x={x}
          y={useMemo(() => categories.map(y), [])}
          baseline={baseline}
          curveType={CurveType.Basis}
        />
        <VisAxis
          type="x"
          label="Year"
          tickTextColor={`hsl(${theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
            })`}
        />
        <VisAxis
          type="y"
          label="Number of Works Acquired"
          tickValues={yTicks}
          tickFormat={useCallback((i: any) => `${Math.abs(i - max / 2)}`, [])}
          tickTextColor={`hsl(${theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
            })`}
        />
      </VisXYContainer>
    </div>
  );
};

export default BaselineAreaChart;
