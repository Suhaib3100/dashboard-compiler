"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  getGridConfig,
  getXAxisConfig,
  getYAxisConfig,
} from "@/lib/appex-chart-options";

const GradiantLineChart = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5],
    },
  ];
  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    forecastDataPoints: {
      count: 3,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: [
          `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
        ],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
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
        type="line"
        height={height}
        width={"100%"}
      />
  );
};

export default GradiantLineChart;
