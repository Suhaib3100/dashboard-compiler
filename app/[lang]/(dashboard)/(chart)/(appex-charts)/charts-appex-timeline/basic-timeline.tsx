"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const BasicTimeline = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      data: [
        {
          x: "Code",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-04").getTime(),
          ],
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-04").getTime(),
            new Date("2019-03-08").getTime(),
          ],
        },
        {
          x: "Validation",
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-12").getTime(),
          ],
        },
        {
          x: "Deployment",
          y: [
            new Date("2019-03-12").getTime(),
            new Date("2019-03-18").getTime(),
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
    },

    plotOptions: {
      bar: {
        horizontal: true,
      },
    },

    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    yaxis: {
      labels: getLabel(
        `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`
      ),
    },
    xaxis: {
      type: "datetime",
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
        type="rangeBar"
        height={height}
        width={"100%"}
      />
  );
};

export default BasicTimeline;
