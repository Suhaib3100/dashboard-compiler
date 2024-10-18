"use client";
import React, { useState } from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const MultipleYAxis = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const [options, setOptions] = useState<any>({
    chart: {
      toolbar: {
        show: false,
      },
      type: 'line',
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [1, 1, 4]
    },
    title: {
      text: 'XYZ - Stock Analysis (2009 - 2016)',
      align: 'center',
      offsetX: 0,
      style: {
        color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      }
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
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
    yaxis: [
      {
        min: 0,
        seriesName: 'Income',
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
        },
        labels: {
          style: {
            colors: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
          }
        },
        title: {
          text: "Income (thousand crores)",
          style: {
            color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
          }
        },
      },
      {
        min: 0,
        seriesName: 'Cashflow',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`
        },
        labels: {
          style: {
            colors: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
          }
        },
        title: {
          text: "Operating Cashflow (thousand crores)",
          style: {
            color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
          }
        }
      },
      {
        seriesName: 'Revenue',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`
        },
        labels: {
          style: {
            colors: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
          },
        },
        title: {
          text: "Revenue (thousand crores)",
          style: {
            color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
          }
        }
      },
    ],
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    legend: {
      horizontalAlign: 'center',
      labels: {
        colors: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
          })`,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        offsetX: isRtl ? 5 : -5
      }
    }
  });

  const [series, setSeries] = useState([{
    name: 'Income',
    type: 'column',
    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
  }, {
    name: 'Cashflow',
    type: 'column',
    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
  }, {
    name: 'Revenue',
    type: 'line',
    data: [20, 29, 37, 36, 44, 45, 50, 58]
  }]);

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

export default MultipleYAxis;


