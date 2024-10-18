"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const LineArea = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig,isRtl } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  const series = [
    {
      name: "TEAM A",
      type: "area",
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
    },
    {
      name: "TEAM B",
      type: "line",
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
    },
  ];

  const options:any = {
    chart: {
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: "smooth",
      width: [0, 4],
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
    ],
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        endingShape: "rounded",
      },
    },
    xaxis: {
      type: "datetime",
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
    },
    yaxis: [
      {
        title: {
          text: "Website Blog",
          style: {
            color: `hsl(${
              theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartLabel
            })`,
          },
        },
        labels: getLabel(
          `hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
          })`
        )
      },
      {
        opposite: true,
        title: {
          text: "Social Media",
          style: {
            color: `hsl(${
              theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartLabel
            })`
          }
        },
        labels: getLabel(
          `hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
          })`
        )
      }
    ],
    legend: {
      labels: {
        colors: `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`
      },
      itemMargin: {
        horizontal: 5,
        vertical: 10,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        offsetX: isRtl ? 5 : -5
      }
    }
  };
  return (
      <Chart
        options={options}
        series={series}
        type="line"
        height={height}
        width={"100%"}
      />
  );
};

export default LineArea;
