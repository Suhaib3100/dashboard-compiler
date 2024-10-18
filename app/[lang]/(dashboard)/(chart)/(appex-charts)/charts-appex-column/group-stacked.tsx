"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const GroupStacked = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Q1 Budget",
      group: "budget",
      data: [44000, 55000, 41000, 67000, 22000, 43000],
    },
    {
      name: "Q1 Actual",
      group: "actual",
      data: [48000, 50000, 40000, 65000, 25000, 40000],
    },
    {
      name: "Q2 Budget",
      group: "budget",
      data: [13000, 36000, 20000, 8000, 13000, 27000],
    },
    {
      name: "Q2 Actual",
      group: "actual",
      data: [20000, 40000, 25000, 10000, 12000, 28000],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    dataLabels: {
      formatter: (val: number) => {
        return val / 1000 + "K";
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),

    yaxis: {
      labels: {
        formatter: (val: number) => {
          return val / 1000 + "K";
        },
        style: {
          colors: [
            `hsl(${theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
            })`,
          ],
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },

    xaxis: {
      categories: [
        "Online advertising",
        "Sales Training",
        "Print advertising",
        "Catalogs",
        "Meetings",
        "Public relations",
      ],
      labels: getLabel(
        `hsl(${theme?.cssVars[
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
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    legend: {
      labels: {
        colors: `hsl(${theme?.cssVars[
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

export default GroupStacked;
