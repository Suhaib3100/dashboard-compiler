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
function generateData(count:number, yrange:YRange): DataPoint[]  {
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

const BasicHeatMap = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Metric1",
      data: generateData(14, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric2",
      data: generateData(14, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric3",
      data: generateData(14, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric4",
      data: generateData(14, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric5",
      data: generateData(14, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric6",
      data: generateData(14, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric7",
      data: generateData(14, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric8",
      data: generateData(14, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric9",
      data: generateData(14, {
        min: 0,
        max: 90,
      }),
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
      width: 0,
    },
    tooltip: {
      enabled: true,
    },
    colors: ["#008FFB"],
    plotOptions: {
      heatmap: {
        radius: 4,
      },
    },
    xaxis: {
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
    },
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    legend: {
      show: false,
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

export default BasicHeatMap;
