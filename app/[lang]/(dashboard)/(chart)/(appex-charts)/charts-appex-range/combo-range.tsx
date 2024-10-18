"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const ComboRange = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      type: "rangeArea",
      name: "Team B Range",

      data: [
        {
          x: "Jan",
          y: [1100, 1900],
        },
        {
          x: "Feb",
          y: [1200, 1800],
        },
        {
          x: "Mar",
          y: [900, 2900],
        },
        {
          x: "Apr",
          y: [1400, 2700],
        },
        {
          x: "May",
          y: [2600, 3900],
        },
        {
          x: "Jun",
          y: [500, 1700],
        },
        {
          x: "Jul",
          y: [1900, 2300],
        },
        {
          x: "Aug",
          y: [1000, 1500],
        },
      ],
    },

    {
      type: "rangeArea",
      name: "Team A Range",
      data: [
        {
          x: "Jan",
          y: [3100, 3400],
        },
        {
          x: "Feb",
          y: [4200, 5200],
        },
        {
          x: "Mar",
          y: [3900, 4900],
        },
        {
          x: "Apr",
          y: [3400, 3900],
        },
        {
          x: "May",
          y: [5100, 5900],
        },
        {
          x: "Jun",
          y: [5400, 6700],
        },
        {
          x: "Jul",
          y: [4300, 4600],
        },
        {
          x: "Aug",
          y: [2100, 2900],
        }
      ]
    },
    {
      type: "line",
      name: "Team B Median",
      data: [
        {
          x: "Jan",
          y: 1500,
        },
        {
          x: "Feb",
          y: 1700,
        },
        {
          x: "Mar",
          y: 1900,
        },
        {
          x: "Apr",
          y: 2200,
        },
        {
          x: "May",
          y: 3000,
        },
        {
          x: "Jun",
          y: 1000,
        },
        {
          x: "Jul",
          y: 2100,
        },
        {
          x: "Aug",
          y: 1200,
        },
        {
          x: "Sep",
          y: 1800,
        },
        {
          x: "Oct",
          y: 2000,
        },
      ]
    },
    {
      type: "line",
      name: "Team A Median",
      data: [
        {
          x: "Jan",
          y: 3300,
        },
        {
          x: "Feb",
          y: 4900,
        },
        {
          x: "Mar",
          y: 4300,
        },
        {
          x: "Apr",
          y: 3700,
        },
        {
          x: "May",
          y: 5500,
        },
        {
          x: "Jun",
          y: 5900,
        },
        {
          x: "Jul",
          y: 4500,
        },
        {
          x: "Aug",
          y: 2400,
        },
        {
          x: "Sep",
          y: 2100,
        },
        {
          x: "Oct",
          y: 1500,
        },
      ]
    }
  ];

  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
      animations: {
        speed: 500,
      },
    },
    forecastDataPoints: {
      count: 2,
    },
    legend: {
      show: true,
      customLegendItems: ["Team B", "Team A"],
      inverseOrder: true,
      labels: {
        colors: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
          })`,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 12,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        offsetX: isRtl ? 5 : -5
      }
    },
    stroke: {
      curve: "straight",
      width: [0, 0, 2, 2],
    },

    dataLabels: {
      enabled: false,
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),

    yaxis: {
      labels: {
        style: {
          colors: [
            `hsl(${theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
            })`,
          ]
        }
      }
    },
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
        type="rangeArea"
        height={height}
        width={"100%"}
      />
  );
};

export default ComboRange;
