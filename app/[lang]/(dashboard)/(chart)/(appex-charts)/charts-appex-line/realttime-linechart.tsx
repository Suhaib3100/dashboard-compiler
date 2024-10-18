"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getXAxisConfig } from "@/lib/appex-chart-options";

const RealTimeLineChart = ({ height = 300 }) => {
  const [chartData, setChartData] = useState({
    series: [{ data: [10, 41, 35, 51, 49, 62, 69, 91, 100] }],
  });

  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"]
        .chartGird
      })`
    ),
    yaxis: getXAxisConfig(`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"]
        .chartLabel
      })`),
    xaxis: getXAxisConfig(`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"]
        .chartLabel
      })`),
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

  return (
    <>
      <Chart
        options={options}
        series={chartData.series}
        type="line"
        height={height}
        width={"100%"}
      />
    </>
  );
};

export default RealTimeLineChart;
