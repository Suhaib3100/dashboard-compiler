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

const LineWithAnnonotations = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      data: [7800.0, 8100.0, 8400.0, 9000.0, 9300.0, 9600.0],
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
    stroke: {
      curve: "straight",
      width: 4,
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
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: getLabel(
        `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`
      ),
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    legend: {
      labels: {
        colors: `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`,
      },
    },
    annotations: {
      yaxis: [
        {
          y: 8200,
          borderColor: `hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartGird
          })`,
          label: {
            borderColor: `hsl(${
              theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartGird
            })`,
            style: {
              color: "#fff",
              background: `hsl(${
                theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
              })`,
            },
            text: "Support",
          },
        },
        {
          y: 8600,
          y2: 9000,
          borderColor: `hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartGird
          })`,
          fillColor: `hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
          })`,
          label: {
            borderColor: `hsl(${
              theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartGird
            })`,
            style: {
              fontSize: "10px",
              color: `hsl(${
                theme?.cssVars[mode === "dark" ? "dark" : "light"].success
              })`,
              background: `hsl(${
                theme?.cssVars[mode === "dark" ? "dark" : "light"].secondary
              })`,
            },
            text: "Y-axis range",
          },
        },
      ],
      xaxis: [
        {
          x: new Date("23 Nov 2017").getTime(),
          strokeDashArray: 0,
          borderColor: `hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartGird
          })`,
          label: {
            borderColor: `hsl(${
              theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartGird
            })`,
            style: {
              color: `hsl(${
                theme?.cssVars[mode === "dark" ? "dark" : "light"].success
              })`,
              background: `hsl(${
                theme?.cssVars[
                  mode === "dark" || mode === "system" ? "dark" : "light"
                ].chartGird
              })`,
            },
            text: "Anno Test",
          },
        },
        {
          x: new Date("26 Nov 2017").getTime(),
          x2: new Date("28 Nov 2017").getTime(),
          fillColor: `hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartGird
          })`,
          opacity: 0.4,
          label: {
            borderColor: `hsl(${
              theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartGird
            })`,
            style: {
              fontSize: "10px",
              color: `hsl(${
                theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
              })`,
              background: `hsl(${
                theme?.cssVars[
                  mode === "dark" || mode === "system" ? "dark" : "light"
                ].chartGird
              })`,
            },
            offsetY: -10,
            text: "X-axis range",
          },
        },
      ],
      points: [
        {
          x: new Date("01 Dec 2017").getTime(),
          y: 8607.55,
          marker: {
            size: 8,
            fillColor: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].info
            })`,
            strokeColor: "red",
            radius: 2,
            cssClass: "apexcharts-custom-class",
          },
          label: {
            borderColor: `hsl(${
              theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartGird
            })`,
            offsetY: 0,
            style: {
              color: `hsl(${
                theme?.cssVars[mode === "dark" ? "dark" : "light"].info
              })`,
              background: `hsl(${
                theme?.cssVars[mode === "dark" ? "dark" : "light"].success
              })`,
            },

            text: "Point Annotation",
          },
        },
        {
          x: new Date("08 Dec 2017").getTime(),
          y: 9340.85,
          marker: {
            size: 0,
          },
        },
      ],
    },
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

export default LineWithAnnonotations;
