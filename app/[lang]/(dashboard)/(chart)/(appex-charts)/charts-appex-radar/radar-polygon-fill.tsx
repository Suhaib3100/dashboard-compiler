"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  getLabel,
  getYAxisConfig,
} from "@/lib/appex-chart-options";

const RadarPolygonFill = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Series 1",
      data: [20, 100, 40, 30, 50, 80, 33],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    colors: [`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`],
    fill: {
      type: "solid",
      colors: ["#1A73E8"],
    },
    markers: {
      size: 4,
      colors: ["#000"],
      strokeColor: "#FF4560",
      strokeWidth: 2,
    },
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    plotOptions: {
      radar: {
        size: undefined,
        offsetX: 0,
        offsetY: 0,
        polygons: {
          strokeColors: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`,
          strokeWidth: 0.5,
          connectorColors: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
            })`,
        }
      }
    },
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      labels: getLabel(
        `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
        })`
      ),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    legend: {
      show: true,
      labels: {
        colors: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
          })`,
      },
    },
  };
  return (
    <Chart
      options={options}
      series={series}
      type="radar"
      height={height}
      width={"100%"}
    />
  );
};

export default RadarPolygonFill;
