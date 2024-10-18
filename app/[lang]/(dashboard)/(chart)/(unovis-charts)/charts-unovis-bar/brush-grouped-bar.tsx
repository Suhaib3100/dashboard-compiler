"use client";

import { useCallback, useMemo, useState } from "react";
import {
  VisXYContainer,
  VisAxis,
  VisBrush,
  VisGroupedBar,
  VisBulletLegend,
} from "@unovis/react";
import { brushChartData, groups } from "./data";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const legendItems = groups.map((g) => ({ ...g, inactive: false }));

function BrushGroupedBar(): JSX.Element {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const [domain, setDomain] = useState<any>([1980, 1990]);
  const [duration, setDuration] = useState<any>(undefined);
  const [items, setItems] = useState<any>(legendItems);

  const x = useCallback((d: any) => d.year, []);

  const y = useMemo(
    () => items.map((i: any) => (d: any) => i.inactive ? null : d[i.key]),
    [items]
  );

  const updateDomain = useCallback((selection: any, _: any, userDriven: any) => {
    if (userDriven) {
      setDuration(0);
      setDomain(selection);
    }
  }, []);

  const updateItems = useCallback(
    (item: any, i: number) => {
      const newItems = [...items];
      newItems[i] = { ...item, inactive: !item.inactive };
      setDuration(undefined);
      setItems(newItems);
    },
    [items]
  );

  const brushChartMargin = useMemo(() => ({ left: 60 }), []);
  return (
    <>
      <VisBulletLegend items={items} onLegendItemClick={updateItems} />
      <VisXYContainer
        duration={duration}
        data={brushChartData}
        height={"50vh"}
        xDomain={domain}
        scaleByDomain={true}
      >
        <VisGroupedBar
          x={x}
          y={y}
          groupPadding={0.2}
          roundedCorners
          barMinHeight={0}
        />
        <VisAxis
          type="x"
          label="Year"
          numTicks={Math.min(15, domain[1] - domain[0])}
          gridLine={false}
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
          label="Cereal Production (metric tons, millions)"
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
      <VisXYContainer
        data={brushChartData}
        height={75}
        margin={brushChartMargin}
      >
        <VisGroupedBar x={x} y={y} />
        <VisBrush selection={domain} onBrush={updateDomain} draggable={true} />
        <VisAxis
          type="x"
          numTicks={15}
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

export default BrushGroupedBar;
