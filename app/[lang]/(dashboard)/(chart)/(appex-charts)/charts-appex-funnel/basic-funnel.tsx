"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig } from "@/lib/appex-chart-options";

const BasicFunnel = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Funnel Series",
      data: [1380, 1100, 990, 880, 740, 548, 330, 200],
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
        borderRadius: 0,
        horizontal: true,
        barHeight: "90%",
        isFunnel: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val:number, opt:any) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      },
      dropShadow: {
        enabled: true,
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

    fill: {
      type: "gradient",
      colors: `hsl(${
        theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
      })`,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      categories: [
        "Sourced",
        "Screened",
        "Assessed",
        "HR Interview",
        "Technical",
        "Verify",
        "Offered",
        "Hired",
      ],
    },
    legend: {
      show: false,
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
        type="bar"
        height={height}
        width={"100%"}
      />
  );
};

export default BasicFunnel;
