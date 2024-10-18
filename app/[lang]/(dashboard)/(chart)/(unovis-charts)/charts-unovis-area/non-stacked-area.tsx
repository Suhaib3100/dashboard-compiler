"use client";

import { useCallback } from "react";
import { CurveType } from "@unovis/ts";
import {
  VisXYContainer,
  VisAxis,
  VisArea,
  VisBulletLegend,
} from "@unovis/react";
import { NumericAccessor, BulletLegend } from "@unovis/ts";
import { countries, Country, data, DataRecord } from "./data";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const NonStackedArea = ({ height = 400 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);


  // Accessor functions
  const x = (_: DataRecord, i: number): number => i
  const accessors = (id: Country): { y: NumericAccessor<DataRecord>; color: string } => ({
    y: (d: DataRecord) => d.cases[id],
    color: countries[id].color as string,
  })
  const xTicks = (i: number): string => `${data[i].month} ${data[i].year}`
  const yTicks = Intl.NumberFormat(navigator.language, { notation: 'compact' }).format



  return (
    <VisXYContainer data={data} height={height}>
      <VisBulletLegend items={Object.values(countries)} />
      <VisArea
        {...accessors(Country.UnitedStates)}
        x={x}
        opacity={0.7}
        curveType={CurveType.Basis}
      />
      <VisArea
        {...accessors(Country.India)}
        x={x}
        opacity={0.7}
        curveType={CurveType.Basis}
      />
      <VisAxis
        type="x"
        tickFormat={xTicks as any}
        tickTextColor={`hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
          })`}
      />
      <VisAxis
        type="y"
        tickFormat={yTicks as any}
        tickTextColor={`hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
          })`}
      />
    </VisXYContainer>
  );
};

export default NonStackedArea;
