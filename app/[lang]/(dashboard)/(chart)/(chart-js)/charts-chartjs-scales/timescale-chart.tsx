"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

import { hslToHex, hexToRGB } from "@/lib/utils";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const TimeScaleChart = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const hslDestructive = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive})`;
  const hslSuccess = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`;
  const hslPrimary = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`;

  const hexDestructive = hslToHex(hslDestructive);
  const hexSuccess = hslToHex(hslSuccess);
  const hexPrimary = hslToHex(hslPrimary);

  const labels = [
    "Nov 24",
    "Nov 25",
    "Nov 26",
    "Nov 27",
    "Nov 28",
    "Nov 29",
    "Nov 30",
    "Dec 1",
    "Dec 2",
    "Dec 3",
    "Dec 4",
    "Dec 5",
    "Dec 6",
    "Dec 7",
    "Dec 8",
    "Dec 9",
    "Dec 10",
    "Dec 11",
    "Dec 12",
    "Dec 13",
    "Dec 14",
  ];

  const data: any = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: hexToRGB(hexDestructive, 0.5),
        borderColor: hexToRGB(hexDestructive, 0.5),
        fill: false,
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      },
      {
        label: "My Second dataset",
        backgroundColor: hexToRGB(hexPrimary, 0.5),
        borderColor: hexToRGB(hexPrimary, 0.5),
        fill: false,
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      },
      {
        label: "Dataset with point data",
        backgroundColor: hexToRGB(hexSuccess, 0.5),
        borderColor: hexToRGB(hexSuccess, 0.5),
        fill: false,
        data: [
          {
            x: [100],
            y: labels.map(() => faker.number.int({ min: 0, max: 100 })),
          },
          {
            x: [43],
            y: labels.map(() => faker.number.int({ min: 0, max: 100 })),
          },
          {
            x: [16],
            y: labels.map(() => faker.number.int({ min: 0, max: 100 })),
          },
          {
            x: [5],
            y: labels.map(() => faker.number.int({ min: 0, max: 100 })),
          },
        ],
      },
    ],
  };
  const options: any = {
    responsive: true,
    plugins: {

      legend: {
        labels: {
          color: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
            })`,
        },
        display: true,
        text: "Chart.js Time Scale",
      },
    },

    scales: {
      y: {
        grid: {
          drawTicks: false,
          color: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartGird
            })`,
        },
        ticks: {
          color: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
            })`,
        },
        title: {
          color: mode === "dark" ? "#cbd5e1" : "#475569",
          display: true,
          text: "value",
        },
      },
      x: {
        grid: {
          drawTicks: false,
          color: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartGird
            })`,
        },

        ticks: {
          color: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
            })`,
        },
        time: {
          tooltipFormat: "DD T",
        },
        title: {
          color: mode === "dark" ? "#cbd5e1" : "#475569",
          display: true,
          text: "Date",
        },
      },
    },

    maintainAspectRatio: false,
  };

  return (
    <div>
      <Line options={options} data={data} height={height} />
    </div>
  );
};

export default TimeScaleChart;
