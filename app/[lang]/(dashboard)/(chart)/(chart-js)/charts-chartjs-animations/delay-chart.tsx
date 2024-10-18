"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

import { hslToHex, hexToRGB } from "@/lib/utils";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const DelayChart = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const hslDestructive = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive})`;
  const hslInfo = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`;
  const hslSuccess = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`;
  const hexDestructive = hslToHex(hslDestructive);
  const hexInfo = hslToHex(hslInfo);
  const hexSuccess = hslToHex(hslSuccess);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data: any = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(hexDestructive, 0.5),
        backgroundColor: hexToRGB(hexDestructive, 0.5),
        borderSkipped: "bottom",
      },
      {
        label: "Dataset 1",
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(hexInfo, 0.5),
        backgroundColor: hexToRGB(hexInfo, 0.5),
        borderSkipped: "bottom",
      },
      {
        label: "Dataset 3",
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(hexSuccess, 0.5),
        backgroundColor: hexToRGB(hexSuccess, 0.5),
        borderSkipped: "bottom",
      },
    ],
  };

  let delayed: boolean = false;
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel})`,
        },
        display: true,
      }
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context: any) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    hover: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        stacked: true,
        grid: {
          drawTicks: false,
          color: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartGird
            })`,
        },
        ticks: {
          color: mode === "dark" ? "#cbd5e1" : "#475569",
          stepSize: 50,
        },
      },
      x: {
        stacked: true,
        title: {
          color: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
            })`,
          display: true,
        },
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
      },
    },

    maintainAspectRatio: false,
  };

  return (
    <div>
      <Bar options={options} data={data} height={height} />
    </div>
  );
};

export default DelayChart;
