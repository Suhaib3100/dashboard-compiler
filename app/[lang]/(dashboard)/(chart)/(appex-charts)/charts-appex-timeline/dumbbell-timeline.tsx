"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const DumbbellTimelineChart = ({ height = 400 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      data: [
        {
          x: "Operations",
          y: [2800, 4500],
        },
        {
          x: "Customer Success",
          y: [3200, 4100],
        },
        {
          x: "Engineering",
          y: [2950, 7800],
        },
        {
          x: "Marketing",
          y: [3000, 4600],
        },
        {
          x: "Product",
          y: [3500, 4100],
        },
        {
          x: "Data Science",
          y: [4500, 6500],
        },
        {
          x: "Sales",
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
    },

    plotOptions: {
      bar: {
        horizontal: true,
        isDumbbell: true,
        dumbbellColors: [
          [
            `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
            })`,
            `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
          ],
        ],
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: [
          `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
        ],
        inverseColors: false,
        stops: [0, 100],
      },
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    yaxis: {
      labels: getLabel(
        `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`
      ),
    },
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
        type="rangeBar"
        height={height}
        width={"100%"}
      />
  );
};

export default DumbbellTimelineChart;
