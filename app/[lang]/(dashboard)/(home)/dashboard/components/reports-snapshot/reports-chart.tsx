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

interface ReportsChartProps {
  series: ApexAxisChartSeries;
  chartColor: string;
  height?: number;
}

const ReportsChart = ({ series, chartColor, height = 300 }: ReportsChartProps) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

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
      curve: "smooth",
      width: 4,
    },
    colors: [chartColor],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    fill: {
      type: "gradient",
      colors: chartColor,
      gradient: {
        shadeIntensity: 0.1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [50, 100, 0],
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
      type="area"
      height={height}
      width={"100%"}
    />
  )
}

export default ReportsChart;
