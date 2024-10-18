"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  getGridConfig,
  getYAxisConfig,
  getLabel,
} from "@/lib/appex-chart-options";

const MissingDataLineChart = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Peter",
      data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
    },
    {
      name: "Johnny",
      data: [
        10,
        15,
        null,
        12,
        null,
        10,
        12,
        15,
        null,
        null,
        12,
        null,
        14,
        null,
        null,
        null,
      ],
    },
    {
      name: "David",
      data: [
        null,
        null,
        null,
        null,
        3,
        4,
        1,
        3,
        4,
        6,
        7,
        9,
        5,
        null,
        null,
        null,
      ],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 5, 4],
      curve: "straight",
    },
    zoom: {
      enabled: false,
    },
    animations: {
      enabled: false,
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),

    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),

    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: getLabel(
        `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
        })`
      ),
    },

    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    legend: {
      labels: {
        colors: `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
          })`,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 5,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        offsetX: isRtl ? 5 : -5
      },
    },
  };
  return (
      <Chart
        options={options}
        series={series}
        type="line"
        height={height}
        width={"100%"}
      />
  );
};

export default MissingDataLineChart;
