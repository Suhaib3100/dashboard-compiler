"use client";
import {
  VisAxis,
  VisBulletLegend,
  VisStackedBar,
  VisTooltip,
  VisXYContainer,
} from "@unovis/react";
import { Direction, FitMode, Orientation, StackedBar } from "@unovis/ts";
import { educationsData } from "./data";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";


function StackedBarChart(): JSX.Element {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  const isSmallScreen = window?.innerWidth < 768;
  const labels = {
    bachelors: "Bachelor's or equivalent",
    masters: "Master's or equivalent",
    doctoral: "Doctoral or equivalent",
  };
  const chartLabels = Object.entries(labels).map(function ([k, v], i) {
    return {
      key: k,
      legend: v,
      tooltip: function (d: any) {
        return [
          v.split(" ")[0],
          `<span style="color: var(--vis-color${i}); font-weight: 800">${d[k]}%</span>`,
        ].join(": ");
      },
    };
  });

  function tooltipTemplate(d: any) {
    const title = `<div style="color: #666; text-align: center">${d.country}</div>`;
    const total = `Total: <b>${d.total}%</b> of population with a college degree</br>`;
    const stats = chartLabels
      .map(function (l) {
        return l.tooltip(d);
      })
      .join(" | ");
    return `<div style="font-size: 12px">${title}${total}${stats}</div>`;
  }

  return (
    <>
      <VisBulletLegend items={chartLabels.map((d) => ({ name: d.legend }))} />
      <VisXYContainer
        height={isSmallScreen ? 300 : 400}
        yDirection={Direction.South}
      >
        <VisStackedBar
          data={educationsData}
          x={(d, i) => i}
          y={chartLabels.map((label: any) => (d: any) => d[label.key])}
          orientation={Orientation.Horizontal}
        />
        <VisTooltip
          triggers={{
            [StackedBar.selectors.bar]: tooltipTemplate,
          }}
        />
        <VisAxis
          type="x"
          label="% of population aged 25 or above"
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
          tickTextWidth={isSmallScreen ? 75 : undefined}
          tickTextFitMode={FitMode.Trim}
          type="y"
          tickFormat={(_, i) => educationsData[i].country}
          label={isSmallScreen ? undefined : "Country"}
          numTicks={educationsData.length}
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

export default StackedBarChart;
