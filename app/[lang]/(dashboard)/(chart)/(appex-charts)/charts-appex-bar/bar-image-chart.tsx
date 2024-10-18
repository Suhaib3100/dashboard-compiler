"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const BarImageChart = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "coins",
      data: [
        2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7, 8, 8, 10, 9, 9, 12, 12,
        11, 12, 13, 14, 16, 14, 15, 17, 19, 21,
      ],
    },
  ];

  const labels: number[] = Array.from({ length: 39 }, (_, index) => index + 1);

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "100%",
      },
    },
    labels: labels,
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      width: 1,
      colors: [
        `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
        })`,
      ],
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    ],
    tooltip: {
      shared: false,
      theme: mode === "dark" ? "dark" : "light",
      y: {
        formatter: function (val: number) {
          return val + "K";
        },
      },
    },
    grid: {
      position: "back",
    },

    fill: {
      type: "image",
      opacity: 0.87,
      image: {
        src: [
          "https://apexcharts.com/wp-content/uploads/2018/10/bar-chart-image-fill.png",
        ],
        width: 466,
        height: 406,
      },
    },
    yaxis: {
      show: false,
      axisTicks: {
        show: true,
      },
      labels: {
        style: {
          colors: [
            `hsl(${theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
            })`
          ]
        }
      }
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
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
    states: {
      hover: {
        filter: "none",
      }
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
    },
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

export default BarImageChart;
