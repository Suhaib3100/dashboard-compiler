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

const ColumnMarker = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);
  const series = [
    {
      name: "Actual",
      data: [
        {
          x: "2011",
          y: 1292,
          goals: [
            {
              name: "Expected",
              value: 1400,
              strokeHeight: 5,
              strokeColor: "#ffa35d",
            },
          ],
        },
        {
          x: "2012",
          y: 4432,
          goals: [
            {
              name: "Expected",
              value: 5400,
              strokeHeight: 5,
              strokeColor: "#ffa35d",
            },
          ],
        },
        {
          x: "2013",
          y: 5423,
          goals: [
            {
              name: "Expected",
              value: 5200,
              strokeHeight: 5,
              strokeColor: "#ffa35d",
            },
          ],
        },
        {
          x: "2014",
          y: 6653,
          goals: [
            {
              name: "Expected",
              value: 6500,
              strokeHeight: 5,
              strokeColor: "#ffa35d",
            },
          ],
        },
        {
          x: "2015",
          y: 8133,
          goals: [
            {
              name: "Expected",
              value: 6600,
              strokeHeight: 13,
              strokeWidth: 0,
              strokeLineCap: "round",
              strokeColor: "#ffa35d",
            },
          ],
        },
        {
          x: "2016",
          y: 7132,
          goals: [
            {
              name: "Expected",
              value: 7500,
              strokeHeight: 5,
              strokeColor: "#ffa35d",
            },
          ],
        },
        {
          x: "2017",
          y: 7332,
          goals: [
            {
              name: "Expected",
              value: 8700,
              strokeHeight: 5,
              strokeColor: "#ffa35d",
            },
          ],
        },
        {
          x: "2018",
          y: 6553,
          goals: [
            {
              name: "Expected",
              value: 7300,
              strokeHeight: 2,
              strokeDashArray: 2,
              strokeColor: "#ffa35d",
            },
          ],
        },
      ],
    },
  ];

  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),

    xaxis: {
      categories: [
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
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
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
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

export default ColumnMarker;
