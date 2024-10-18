"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getLabel, getYAxisConfig } from "@/lib/appex-chart-options";

const BasicRadar = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
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

    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    ],
    fill: {
      type: "gradient",
      colors: `hsl(${
        theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
      })`,
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.2,
        opacityTo: 0.1,
        stops: [50, 100, 0],
      },
    },
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
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
    plotOptions: {
      radar: {
        size: undefined,
        offsetX: 0,
        offsetY: 0,
        polygons: {
          strokeColors: `hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
          })`,
          strokeWidth: 0.5,
          connectorColors: `hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
          })`,
        },
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
        type="radar"
        height={height}
        width={"100%"}
      />
  );
};

export default BasicRadar;
