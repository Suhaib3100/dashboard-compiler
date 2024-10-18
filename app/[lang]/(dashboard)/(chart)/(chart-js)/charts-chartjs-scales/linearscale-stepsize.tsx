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

const LinearScaleStepSize = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const hslDestructive = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive
    })`;
  const hslPrimary = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
    })`;
  const hexDestructive = hslToHex(hslDestructive);
  const hexPrimary = hslToHex(hslPrimary);

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
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        borderColor: hexToRGB(hexDestructive, 0.5),
        backgroundColor: hexToRGB(hexDestructive, 0.5),
        tension: 0.1,
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        borderColor: hexToRGB(hexPrimary, 0.5),
        backgroundColor: hexToRGB(hexPrimary, 0.5),
        tension: 0.1,
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
        text: "Chart.js Line Chart",
      }
    },
    hover: {
      mode: "index",
      intersec: false,
    },
    scales: {
      y: {
        title: {
          color: mode === "dark" ? "#cbd5e1" : "#475569",
          display: true,
          text: "Value",
        },
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
        min: 0,
        max: 100,
      },
      x: {
        title: {
          color: mode === "dark" ? "#cbd5e1" : "#475569",
          display: true,
          text: "Month",
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
      <Line options={options} data={data} height={height} />
    </div>
  );
};

export default LinearScaleStepSize;
