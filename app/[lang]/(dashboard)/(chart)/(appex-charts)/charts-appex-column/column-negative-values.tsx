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

const ColumnNegativeValues = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Cash Flow",
      data: [
        1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34,
        3.88, 13.07, 5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4,
        -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4,
      ],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),

    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -100,
              to: -46,
              color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
                })`,
            },
            {
              from: -45,
              to: 0,
              color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info
                })`,
            },
          ],
        },
        columnWidth: "80%",
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2011-01-01",
        "2011-02-01",
        "2011-03-01",
        "2011-04-01",
        "2011-05-01",
        "2011-06-01",
        "2011-07-01",
        "2011-08-01",
        "2011-09-01",
        "2011-10-01",
        "2011-11-01",
        "2011-12-01",
        "2012-01-01",
        "2012-02-01",
        "2012-03-01",
        "2012-04-01",
        "2012-05-01",
        "2012-06-01",
        "2012-07-01",
        "2012-08-01",
        "2012-09-01",
        "2012-10-01",
        "2012-11-01",
        "2012-12-01",
        "2013-01-01",
        "2013-02-01",
        "2013-03-01",
        "2013-04-01",
        "2013-05-01",
        "2013-06-01",
        "2013-07-01",
        "2013-08-01",
        "2013-09-01",
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
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    )
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

export default ColumnNegativeValues;
