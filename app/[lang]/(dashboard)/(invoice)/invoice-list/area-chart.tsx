"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

interface AreaChartProps {
  series: any;
  color: string;
}
const AreaChart = ({ series, color }: AreaChartProps) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();

  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const themeColors: { [key: string]: string } = {
    primary: "#3B82F6",
    success: "#22C55E",
    warning: "#F97316",
    destructive: "#EF4444"
  };

  let themeColor = themeColors[color] || themeColors.primary;

  const options: any = {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [
      themeColor,
    ],
    tooltip: {
      theme: "light",
    },
    fill: {
      type: "solid",
      opacity: 0.1
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  }
  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height={40}
      width={74}
    />
  );
};

export default AreaChart;
