"use client";

import { useCallback } from "react";
import { Timeline } from "@unovis/ts";
import {
  VisXYContainer,
  VisBulletLegend,
  VisTooltip,
  VisTimeline,
  VisAxis,
} from "@unovis/react";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { productData } from "./data";
import { colorMap, DataRecord2, ProductType } from "./utils"

const labelWidth = 100;
const dateFormatter = Intl.DateTimeFormat().format;
function BasicTimeline({ height = 400 }: { height?: number }): JSX.Element {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const colors = [
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
  ];
  const ProductType = { App: "app", Hardware: "hardware", Service: "service" };
  const colorMap = {
    [ProductType.App]: colors[0],
    [ProductType.Hardware]: colors[1],
    [ProductType.Service]: colors[2],
  };

  const legendItems = Object.keys(ProductType).map((name) => ({ name, color: colorMap[name] }))

  function getTooltipText(_: string, i: number): string {
    const { startDate, endDate, description } = productData[i]
    return `
      <div style="width:${labelWidth}px">
        ${[startDate, endDate].map(dateFormatter).join(' - ')}
        ${description}
      </div>`
  }

  return (
    <VisXYContainer data={productData} height={height}>
      <VisBulletLegend items={legendItems} />
      <VisTimeline
        x={useCallback((d: DataRecord2) => d.startDate, [])}
        length={useCallback((d: DataRecord2) => d.endDate - d.startDate, [])}
        type={useCallback((d: DataRecord2) => d.name, [])}
        color={useCallback((d: DataRecord2) => colorMap[d.type], [])}
        maxLabelWidth={labelWidth}
        showLabels={true}
      />
      <VisTooltip triggers={{
        [Timeline.selectors.label]: getTooltipText,
      }} />
      <VisAxis
        type="x"
        tickFormat={dateFormatter}
        tickTextColor={`hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
          })`}
        labelColor={`hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
          })`}
      />
    </VisXYContainer>
  );
};

export default BasicTimeline;
