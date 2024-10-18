"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  getGridConfig,
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
const ColorRange = ({ height = 300 }) => {
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
    {
      name: "W11",
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W12",
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W13",
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W14",
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W15",
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
  ];
  const options: any = {
    chart: {
      height: 450,
      type: "heatmap",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [
      "#F3B415",
      "#F27036",
      "#663F59",
      "#6A6E94",
      "#4E88B4",
      "#00A7C6",
      "#18D8D8",
      "#A9D794",
    ],
    plotOptions: {
      heatmap: {
        colorScale: {
          inverse: true,
        }
      }
    },
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    xaxis: {
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

export default ColorRange;
