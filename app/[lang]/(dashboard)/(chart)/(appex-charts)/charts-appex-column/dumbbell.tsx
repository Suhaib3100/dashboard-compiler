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

const DumbbellChart = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      data: [
        {
          x: "2008",
          y: [2800, 4500],
        },
        {
          x: "2009",
          y: [3200, 4100],
        },
        {
          x: "2010",
          y: [2950, 7800],
        },
        {
          x: "2011",
          y: [3000, 4600],
        },
        {
          x: "2012",
          y: [3500, 4100],
        },
        {
          x: "2013",
          y: [4500, 6500],
        },
        {
          x: "2014",
          y: [4100, 5600],
        },
      ],
    },
  ];

  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 3,
        dumbbellColors: [
          [
            `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
            })`,
            `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].success
            })`,
          ],
        ],
      },
    },
    colors: [`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),

    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: [
          `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].muted})`,
        ],
        inverseColors: true,
        stops: [0, 100],
      },
    },
    xaxis: {
      categories: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
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
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
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
        type="rangeBar"
        height={height}
        width={"100%"}
      />
  );
};

export default DumbbellChart;
