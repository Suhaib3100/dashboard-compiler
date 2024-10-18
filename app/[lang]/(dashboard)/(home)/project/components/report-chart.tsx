"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

import { getGridConfig } from "@/lib/appex-chart-options";
const ReportChart = ({ height = 360 }) => {
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Completed Task",
      data: [45, 52, 38, 24, 33, 40],
    },
    {
      name: "Inprogress",
      data: [35, 41, 62, 42, 13, 35],
    },
    {
      name: "Overdue",
      data: [87, 57, 74, 99, 75, 50],
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
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2],
      curve: "straight",
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    markers: {
      size: 4,
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          fontSize: "12px",
          fontFamily: "inter",
          colors: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
            })`,
        },
      },
    },
    yaxis: {
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          fontSize: "12px",
          fontFamily: "inter",
          colors: [
            `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
            })`,
          ],
        },
      },
    },
    legend: {
      labels: {
        colors: `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
          })`,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 8,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        offsetX: isRtl ? 5 : -5
      }
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

export default ReportChart;
