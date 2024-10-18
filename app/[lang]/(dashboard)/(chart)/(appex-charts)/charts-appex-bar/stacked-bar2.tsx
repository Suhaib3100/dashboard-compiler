"use client";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getYAxisConfig } from "@/lib/appex-chart-options";

const StackedBar2 = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig,isRtl } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Marine Sprite",
      data: [44, 55, 41, 37, 22, 43, 21],
    },
    {
      name: "Striking Calf",
      data: [53, 32, 33, 52, 13, 43, 32],
    },
    {
      name: "Tank Picture",
      data: [12, 17, 11, 9, 15, 11, 20],
    },
    {
      name: "Bucket Slope",
      data: [9, 7, 5, 8, 6, 9, 4],
    },
    {
      name: "Reborn Kid",
      data: [25, 12, 19, 32, 25, 24, 10],
    },
  ];
  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true,
      stackType: "100%",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: false,
            offsetX: 0,
            style: {
              colors: [
                `hsl(${
                  theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
                })`,
              ],
              fontSize: "13px",
              fontWeight: 800,
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: true,
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
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
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
      categories: [2001, 2002, 2003, 2004, 2005, 2006],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        formatter: function (val:number) {
          return val + "K";
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
      horizontalAlign: "left",
      offsetX: 40,
      labels: {
        colors: `hsl(${
          theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
        })`
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
    },
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

export default StackedBar2;
