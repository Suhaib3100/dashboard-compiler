"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  getGridConfig,
  getYAxisConfig,
} from "@/lib/appex-chart-options";

const NegativeValuesBar = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig,isRtl } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Males",
      data: [
        0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
        4.5, 3.9, 3.5, 3,
      ],
    },
    {
      name: "Females",
      data: [
        -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3,
        -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
      ],
    },
  ];
  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false,
      offsetX: 0,
      style: {
        fontSize: "12px",
        colors: [
          `hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
          })`,
        ],
      },
    },
    stroke: {
      show: false,
      width: 1,
      colors: [
        `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`,
      ],
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
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
    xaxis: {
      categories: [
        "85+",
        "80-84",
        "75-79",
        "70-74",
        "65-69",
        "60-64",
        "55-59",
        "50-54",
        "45-49",
        "40-44",
        "35-39",
        "30-34",
        "25-29",
        "20-24",
        "15-19",
        "10-14",
        "5-9",
        "0-4",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        formatter: function (val:number) {
          return Math.abs(Math.round(val)) + "%";
        },
        style: {
          colors: [
            `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
            })`,
          ],
        },
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },

    legend: {
      position: "top",
      horizontalAlign: "end",
      offsetX: 40,
      labels: {
        colors: `hsl(${
          theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
        })`,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 5,
      },
      markers: {
        width: 12,
        height: 12,
        radius: 2,
        offsetX: isRtl ? 5 : -5
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

export default NegativeValuesBar;
