"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Icon } from "@iconify/react";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig } from "@/lib/appex-chart-options";

const UsersStat = () => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      data: [400, 60, 448, 50, 540, 580, 690, 800],
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
      width: 0,
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
      show: false,
    },
    bar: {
      columnWidth: "100%",
      barHeight: "100%",
    },

    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
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
    <Card>
      <CardHeader className="border-none pb-0 mb-5 pt-7">
        <div className="flex items-center gap-1">
          <div className="flex-1">
            <div className="text-xl font-semibold text-default-900"> Users </div>
            <span className="text-xs text-default-600 ml-1">In Last 30 Minutes</span>
          </div>
          <div className="flex-none flex items-center gap-1">
            <span className="text-4xl font-semibold text-primary">63</span>
            <span className="text-2xl text-success">
              <Icon icon="heroicons:arrow-trending-up-16-solid" />
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-0">
        <p className="text-xs font-medium text-default-800">User Per Minutes</p>
        <Chart
          options={options}
          series={series}
          type="bar"
          height={250}
          width={"100%"}
        />
      </CardContent>
    </Card>
  );
};

export default UsersStat;

