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

const HorizontalBoxPlot = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      data: [
        {
          x: "Category A",
          y: [54, 66, 69, 75, 88],
        },
        {
          x: "Category B",
          y: [43, 65, 69, 76, 81],
        },
        {
          x: "Category C",
          y: [31, 39, 45, 51, 59],
        },
        {
          x: "Category D",
          y: [39, 46, 55, 65, 71],
        },
        {
          x: "Category E",
          y: [29, 31, 35, 39, 44],
        },
        {
          x: "Category F",
          y: [41, 49, 58, 61, 67],
        },
        {
          x: "Category G",
          y: [54, 59, 66, 71, 88],
        },
      ],
    },
  ];

  const options:any = {
    chart: {
      type: "boxPlot",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
      },
      boxPlot: {
        colors: {
          upper: `hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].info
          })`,
          lower: `hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
          })`,
        },
      },
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
    ],
    stroke: {
      colors: [
        `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      ],
    },
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    xaxis: {
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
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
  };

  return (
      <Chart
        options={options}
        series={series}
        type="boxPlot"
        height={height}
        width={"100%"}
      />
  );
};

export default HorizontalBoxPlot;
