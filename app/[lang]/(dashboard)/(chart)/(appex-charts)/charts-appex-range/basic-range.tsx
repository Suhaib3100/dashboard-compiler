"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getXAxisConfig } from "@/lib/appex-chart-options";

const BasicRange = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "New York Temperature",
      data: [
        {
          x: "Jan",
          y: [-2, 4],
        },
        {
          x: "Feb",
          y: [-1, 6],
        },
        {
          x: "Mar",
          y: [3, 10],
        },
        {
          x: "Apr",
          y: [8, 16],
        },
        {
          x: "May",
          y: [13, 22],
        },
        {
          x: "Jun",
          y: [18, 26],
        },
        {
          x: "Jul",
          y: [21, 29],
        },
        {
          x: "Aug",
          y: [21, 28],
        },
        {
          x: "Sep",
          y: [17, 24],
        },
        {
          x: "Oct",
          y: [11, 18],
        },
        {
          x: "Nov",
          y: [6, 12],
        },
        {
          x: "Dec",
          y: [1, 7],
        },
      ],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      type: "rangeArea",
    },
    stroke: {
      curve: "straight",
    },
    markers: {
      hover: {
        sizeOffset: 5,
      },
    },
    dataLabels: {
      enabled: false,
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
      labels: {
        formatter: (val: number) => {
          return val + "°C";
        },
        style: {
          colors: [
            `hsl(${theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
            })`
          ]
        }
      }
    },
    xaxis: getXAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),

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
      type="rangeArea"
      height={height}
      width={"100%"}
    />
  );
};

export default BasicRange;
