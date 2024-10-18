"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const MultiRange = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Bob",
      data: [
        {
          x: "Design",
          y: [
            new Date("2019-03-05").getTime(),
            new Date("2019-03-08").getTime(),
          ],
        },
        {
          x: "Code",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-05").getTime(),
          ],
        },
        {
          x: "Code",
          y: [
            new Date("2019-03-05").getTime(),
            new Date("2019-03-07").getTime(),
          ],
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-03").getTime(),
            new Date("2019-03-09").getTime(),
          ],
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-11").getTime(),
          ],
        },
        {
          x: "Validation",
          y: [
            new Date("2019-03-11").getTime(),
            new Date("2019-03-16").getTime(),
          ],
        },
        {
          x: "Design",
          y: [
            new Date("2019-03-01").getTime(),
            new Date("2019-03-03").getTime(),
          ],
        },
      ],
    },
    {
      name: "Joe",
      data: [
        {
          x: "Design",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-05").getTime(),
          ],
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-06").getTime(),
            new Date("2019-03-16").getTime(),
          ],
          goals: [
            {
              name: "Break",
              value: new Date("2019-03-10").getTime(),
              strokeColor: "#CD2F2A",
            },
          ],
        },
        {
          x: "Code",
          y: [
            new Date("2019-03-03").getTime(),
            new Date("2019-03-07").getTime(),
          ],
        },
        {
          x: "Deployment",
          y: [
            new Date("2019-03-20").getTime(),
            new Date("2019-03-22").getTime(),
          ],
        },
        {
          x: "Design",
          y: [
            new Date("2019-03-10").getTime(),
            new Date("2019-03-16").getTime(),
          ],
        },
      ],
    },
    {
      name: "Dan",
      data: [
        {
          x: "Code",
          y: [
            new Date("2019-03-10").getTime(),
            new Date("2019-03-17").getTime(),
          ],
        },
        {
          x: "Validation",
          y: [
            new Date("2019-03-05").getTime(),
            new Date("2019-03-09").getTime(),
          ],
          goals: [
            {
              name: "Break",
              value: new Date("2019-03-07").getTime(),
              strokeColor: "#CD2F2A",
            },
          ],
        },
      ],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
      },
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    yaxis: {
      labels: getLabel(
        `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
        })`
      ),
    },
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
    legend: {
      position: "top",
      horizontalAlign: "left",
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
      type="rangeBar"
      height={height}
      width={"100%"}
    />
  );
};

export default MultiRange;
