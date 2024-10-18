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

const NullValueAreaChart = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Network",
      data: [
        {
          x: "Dec 23 2017",
          y: null,
        },
        {
          x: "Dec 24 2017",
          y: 44,
        },
        {
          x: "Dec 25 2017",
          y: 31,
        },
        {
          x: "Dec 26 2017",
          y: 38,
        },
        {
          x: "Dec 27 2017",
          y: null,
        },
        {
          x: "Dec 28 2017",
          y: 32,
        },
        {
          x: "Dec 29 2017",
          y: 55,
        },
        {
          x: "Dec 30 2017",
          y: 51,
        },
        {
          x: "Dec 31 2017",
          y: 67,
        },
        {
          x: "Jan 01 2018",
          y: 22,
        },
        {
          x: "Jan 02 2018",
          y: 34,
        },
        {
          x: "Jan 03 2018",
          y: null,
        },
        {
          x: "Jan 04 2018",
          y: null,
        },
        {
          x: "Jan 05 2018",
          y: 11,
        },
        {
          x: "Jan 06 2018",
          y: 4,
        },
        {
          x: "Jan 07 2018",
          y: 15,
        },
        {
          x: "Jan 08 2018",
          y: null,
        },
        {
          x: "Jan 09 2018",
          y: 9,
        },
        {
          x: "Jan 10 2018",
          y: 34,
        },
        {
          x: "Jan 11 2018",
          y: null,
        },
        {
          x: "Jan 12 2018",
          y: null,
        },
        {
          x: "Jan 13 2018",
          y: 13,
        },
        {
          x: "Jan 14 2018",
          y: null,
        },
      ],
    },
  ];

  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),

    fill: {
      type: "pattern",
      colors: [
        `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
        `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
      ],
      pattern: {
        style: ["verticalLines", "horizontalLines"],
        width: 5,
        height: 6,
      },
    },
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
    xaxis: {
      type: "datetime",
      labels: getLabel(
        `hsl(${
          theme?.cssVars[
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
  };
  return (
      <Chart
        options={options}
        series={series}
        type="area"
        height={height}
        width={"100%"}
      />
  );
};

export default NullValueAreaChart;
