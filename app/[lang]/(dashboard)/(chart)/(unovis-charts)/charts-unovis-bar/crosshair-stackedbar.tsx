"use client";

import { useCallback } from "react";
import { Position } from "@unovis/ts";
import {
  VisXYContainer,
  VisStackedBar,
  VisAxis,
  VisTooltip,
} from "@unovis/react";
import { musicData } from "./data";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { DataRecord, FormatConfig, labels } from "./utils"

function CrosshairStackedBar({ height = 400 }: { height?: number }): JSX.Element {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);


  const getIcon = useCallback((f: FormatConfig): JSX.Element => (<>
    <span className={`bi bi-${f.icon}`} style={{ color: f.color, margin: '0 4px' }}></span>
    {f.label}
  </>), [])



  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
      />
      {labels.map((l) => (
        <span key={l.label} style={{ marginRight: "10px" }}>
          {getIcon(l)}
        </span>
      ))}
      <VisXYContainer data={musicData} height={height}>
        <VisStackedBar
          x={useCallback((d: DataRecord) => d.year, [])}
          y={labels.map((l: FormatConfig) => useCallback((d: DataRecord) => d[l.format], []))}
        />
        <VisTooltip
          verticalShift={height}
          horizontalPlacement={Position.Center}
        />
        <VisAxis
          type="x"
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
    </>
  );
};
export default CrosshairStackedBar;
