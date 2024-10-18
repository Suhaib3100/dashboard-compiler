"use client";

import { useCallback } from "react";
import {
  VisXYContainer,
  VisGroupedBar,
  VisAxis,
  VisBulletLegend,
} from "@unovis/react";
import { BulletLegend } from "@unovis/ts";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { data } from "./data";
import { EducationDatum } from "./utils";

const BasicGroupedBar = ({ height = 400 }: { height?: number }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const colors = {
    republican: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
      })`,
    democrat: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
    other: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
    libertarian: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success
      })`,
  };
  const legendItems = Object.entries(colors).map(([n, c]) => ({
    name: n.toUpperCase(),
    color: c,
  }));
  return (
    <>
      <VisBulletLegend items={legendItems} />
      <VisXYContainer height={height} data={data}>
        <VisGroupedBar
          x={useCallback((d: any) => d.year, [])}
          y={[
            useCallback((d: any) => d.republican, []),
            useCallback((d: any) => d.democrat, []),
            useCallback((d: any) => d.other, []),
            useCallback((d: any) => d.libertarian, []),
          ]}
          color={useCallback((_: any, i: any) => legendItems[i].color, [])}
        />
        <VisAxis
          type="x"
          label="Election Year"
          numTicks={data.length}
          tickTextColor={`hsl(${theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
            })`}
          labelColor={`hsl(${theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
            })`}
        />
        <VisAxis
          type="y"
          tickFormat={useCallback((value: any) => (value / 10 ** 6).toFixed(1), [])}
          label="Number of Votes (millions)"
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

export default BasicGroupedBar;
