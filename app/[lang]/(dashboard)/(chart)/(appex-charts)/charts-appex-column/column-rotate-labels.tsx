"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  getGridConfig,
  getYAxisConfig,
  getLabel,
} from "@/lib/appex-chart-options";

const ColumnRotateLabels = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Servings",
      data: [44, 55, 41, 67, 76, 43, 60, 50, 70],
    }
  ];

  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    annotations: {
      points: [
        {
          x: "Mangoes",
          seriesIndex: 0,
          label: {
            borderColor: `hsl(${
              theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartGird
            })`,
            offsetY: 0,
            style: {
              color: "#fff",
              background: `hsl(${
                theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
              })`,
            },
            text: "Mangoes are good",
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
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

    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "50%",
      },
    },
    xaxis: {
      categories: [
        "Apples",
        "Oranges",
        "Strawberries",
        "Pineapples",
        "Mangoes",
        "Bananas",
        "Pears",
        "Watermelons",
        "Cherries",
      ],
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
      }
    }
  };
  return (
      <Chart
        options={options}
        series={series}
        type="bar"
        height={height}
        width={"100%"}
      />
  );
};

export default ColumnRotateLabels;
