"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const ScatterImage = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig,isRtl } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Messenger",
      data: [
        [16.4, 5.4],
        [21.7, 4],
        [25.4, 3],
        [19, 2],
        [10.9, 1],
        [13.6, 3.2],
        [10.9, 7],
        [10.9, 8.2],
        [16.4, 4],
        [13.6, 4.3],
        [13.6, 12],
        [29.9, 3],
        [10.9, 5.2],
        [16.4, 6.5],
        [10.9, 8],
        [24.5, 7.1],
        [10.9, 7],
        [8.1, 4.7],
        [19, 10],
        [27.1, 10],
        [24.5, 8],
        [27.1, 3],
        [29.9, 11.5],
        [27.1, 0.8],
        [22.1, 2],
      ],
    },
    {
      name: "Instagram",
      data: [
        [6.4, 5.4],
        [11.7, 4],
        [15.4, 3],
        [9, 2],
        [10.9, 11],
        [20.9, 7],
        [12.9, 8.2],
        [6.4, 14],
        [11.6, 12],
      ],
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

 
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    fill: {
      type: "image",
      opacity: 1,
      image: {
        src: ["images/chart/messenger.png", "images/chart/insta.png"],
        width: 40,
        height: 40,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: getLabel(
        `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`
      ),
      tickAmount: 7,
    },

    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      min: 0,
      max: 40,
      labels: getLabel(
        `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`
      ),
      tickAmount: 10,
    },
    markers: {
      size: 20,
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
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

export default ScatterImage;
