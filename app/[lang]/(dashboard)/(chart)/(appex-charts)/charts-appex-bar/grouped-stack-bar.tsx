"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getYAxisConfig } from "@/lib/appex-chart-options";

const GroupedStackBar = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig,isRtl } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Q1 Budget",
      group: "budget",
      data: [44000, 55000, 41000, 67000, 22000],
    },
    {
      name: "Q1 Actual",
      group: "actual",
      data: [48000, 50000, 40000, 65000, 25000],
    },
    {
      name: "Q2 Budget",
      group: "budget",
      data: [13000, 36000, 20000, 8000, 13000],
    },
    {
      name: "Q2 Actual",
      group: "actual",
      data: [20000, 40000, 25000, 10000, 12000],
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
            },
          },
        },
      },
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
      formatter: (val:number) => {
        return val / 1000 + "K";
      },
    },
    stroke: {
      show: false,
      width: 1,
      colors: [
        `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`,
      ]
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
      categories: [
        "Online advertising",
        "Sales Training",
        "Print advertising",
        "Catalogs",
        "Meetings",
      ],
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
          ]
        }
      }
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

export default GroupedStackBar;
