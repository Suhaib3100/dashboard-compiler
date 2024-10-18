"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const DateTime = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);
  interface DataRange {
    min: number;
    max: number;
  }
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
      name: "TEAM 1",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: "TEAM 2",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: "TEAM 3",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        30,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: "TEAM 4",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        10,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: "TEAM 5",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        30,
        {
          min: 10,
          max: 60,
        }
      ),
    },
  ];
  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
        type: "xy",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),

    fill: {
      opacity: 1,
    },

    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: getLabel(
        `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
        })`
      ),
    },

    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: getLabel(
        `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
        })`
      ),
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
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };
  return (
      <Chart
        options={options}
        series={series}
        type="scatter"
        height={height}
        width={"100%"}
      />
  );
};

export default DateTime;
