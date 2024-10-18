"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  getLabel,
  getYAxisConfig,
} from "@/lib/appex-chart-options";
interface YRange {
  min: number;
  max: number;
}

interface DataPoint {
  x: string;
  y: number;
}
function generateData(count: number, yrange: YRange): DataPoint[] {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }
  return series;
}
const MultipleColorsHeatMap = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "W1",
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W2",
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W3",
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W4",
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W5",
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W6",
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W7",
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W8",
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W9",
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W10",
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
  ];
  const options: any = {
    chart: {
      type: "heatmap",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    tooltip: {
      fillSeriesColor: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
        })`,
    },
    plotOptions: {
      heatmap: {
        radius: 4,
        colorScale: {
          ranges: [
            {
              from: -30,
              to: 5,
              color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
                })`,
              name: "low",
            },
            {
              from: 6,
              to: 20,
              color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info
                })`,
              name: "medium",
            },
            {
              from: 21,
              to: 45,
              color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success
                })`,
              name: "high",
            },
          ],
        },
      },
    },
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),

    xaxis: {
      type: "category",
      categories: [
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "01:00",
        "01:30",
        "02:00",
        "02:30",
        "03:00",
        "03:30",
        "04:00",
        "04:30",
        "05:00",
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
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    }
  };

  return (
    <Chart
      options={options}
      series={series}
      type="heatmap"
      height={height}
      width={"100%"}
    />
  );
};

export default MultipleColorsHeatMap;
