"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getLabel, getGridConfig, getYAxisConfig } from "@/lib/appex-chart-options";
interface DataRange {
  min: number;
  max: number;
}
const SynchronizedChart = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  function generateDayWiseTimeSeries(baseval: number, count: number, yrange: DataRange) {
    var i = 0;
    var series: [number, number][] = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  const series = [
    {
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      id: "fb",
      group: "social",

      height: 160,
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    ],
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    xaxis: {
      type: "datetime",
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
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
  };
  const seriesLine2 = [
    {
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
        min: 10,
        max: 30,
      }),
    },
  ];

  const optionsLine2: any = {
    chart: {
      toolbar: {
        show: false,
      },
      id: "tw",
      group: "social",

      height: 160,
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive})`,
    ],
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    xaxis: {
      type: "datetime",
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
    yaxis: {
      labels: getLabel(
        `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
        })`
      ),
    },
  };

  const seriesArea = [
    {
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ];
  const optionsArea: any = {
    chart: {
      toolbar: {
        show: false,
      },
      id: "yt",
      group: "social",
    },
    stroke: {
      curve: "straight",
      width: 3,
    },

    markers: {
      size: 4,
      hover: {
        size: 6,
      },
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    colors: [`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`],
    xaxis: {
      type: "datetime",
      labels: getLabel(
        `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
        })`
      ),
    },
    yaxis: {
      tickAmount: 2,
      labels: getLabel(
        `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
        })`
      ),
    },
  };

  return (
    <div id="wrapper">
      <div id="chart-line">
        <Chart
          options={options}
          series={series}
          type="line"
          height={160}
          width={"100%"}
        />
      </div>
      <div id="chart-line2">
        <Chart
          options={optionsLine2}
          series={seriesLine2}
          type="line"
          height={160}
          width={"100%"}
        />
      </div>
      <div id="chart-area">
        <Chart
          options={optionsArea}
          series={seriesArea}
          type="area"
          height={160}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default SynchronizedChart;
