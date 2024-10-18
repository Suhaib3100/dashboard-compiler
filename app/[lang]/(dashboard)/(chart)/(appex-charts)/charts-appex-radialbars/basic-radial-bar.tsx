"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const BasicRadialBar = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [80];

  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 8,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "80%",
        },
        dataLabels: {
          value: {
            fontSize: "18px",
            fontWeight: 700,
            color: `hsl(${
              theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartLabel
            })`,
          },
        },
      },
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    ],
    labels: ["Cricket"],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
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
        type="radialBar"
        height={height}
        width={"100%"}
      />
  );
};

export default BasicRadialBar;
