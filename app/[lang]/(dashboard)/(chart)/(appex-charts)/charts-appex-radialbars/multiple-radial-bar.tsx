"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const MultipleRadialBar = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [44, 55, 67, 83];

  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 6,
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
            fontWeight: 700,
            color: `hsl(${
              theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartLabel
            })`,
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w: any) {
              return 249;
            },
          },
        },
      },
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
    ],
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
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

export default MultipleRadialBar;
