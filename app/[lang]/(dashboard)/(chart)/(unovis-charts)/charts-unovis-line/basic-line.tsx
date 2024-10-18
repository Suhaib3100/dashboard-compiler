"use client";

import { useCallback } from "react";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { VisXYContainer, VisLine, VisAxis } from "@unovis/react";
import { DataRecord } from "./utils"

const BasicLine = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  const data: DataRecord[] = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ];
  return (
    <div>
      <VisXYContainer height={height}>
        <VisLine
          data={data}
          lineWidth={2}
          color={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
            })`}
          x={useCallback((d: DataRecord) => d.x, [])}
          y={useCallback((d: DataRecord) => d.y, [])}
        />
        <VisAxis
          type="x"
          tickTextColor={`hsl(${theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
            })`}
          gridLine={false}
          tickLine={undefined}
        />
        <VisAxis
          type="y"
          tickTextColor={`hsl(${theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
            })`}
        />
      </VisXYContainer>
    </div>
  );
};

export default BasicLine;
