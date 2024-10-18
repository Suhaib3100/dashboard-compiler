"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  getGridConfig,
  getLabel
} from "@/lib/appex-chart-options";

const PatternedBar = ({ height = 350 }) => {
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
  ];

  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true,
      dropShadow: {
        enabled: true,
        blur: 1,
        opacity: 0.25,
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      width: 1,
      colors: [
        `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`,
      ],
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
    ],
    tooltip: {
      shared: false,
      theme: mode === "dark" ? "dark" : "light",
      y: {
        formatter: function (val:number) {
          return val + "K";
        },
      },
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    fill: {
      type: "pattern",
      opacity: 1,
      pattern: {
        style: ["circles", "slantedLines", "verticalLines", "horizontalLines"],
      },
    },
    yaxis: {
      axisTicks: {
        show: true,
      },
      labels: getLabel(
        `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`
      ),
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
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
    states: {
      hover: {
        filter: "none",
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    legend: {
      position: "right",
      offsetY: 40,
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

export default PatternedBar;
