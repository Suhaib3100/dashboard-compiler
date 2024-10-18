"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  getXAxisConfig,
  getYAxisConfig,
} from "@/lib/appex-chart-options";

const BasicPolar = ({ height = 400 }) => {
  const { theme: config, setTheme: setConfig ,isRtl} = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [14, 23, 21, 17, 15, 10, 12, 17, 21];
  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
    ],
    fill: {
      opacity: 0.5,
    },
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 1,
          strokeColor: `hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
          })`,
        },
        spokes: {
          strokeWidth: 1,
          connectorColors: `hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
          })`,
        },
      },
    },
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
    xaxis: getXAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
    legend: {
      position: "bottom",
      labels: {
        colors: `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 5,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        offsetX: isRtl ? 5 : -5
      }
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
        type="polarArea"
        height={height}
        width={"100%"}
      />
  );
};

export default BasicPolar;
