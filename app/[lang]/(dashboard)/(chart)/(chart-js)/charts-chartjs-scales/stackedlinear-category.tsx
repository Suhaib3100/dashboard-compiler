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

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const StackedLinearCategory = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const hslDestructive = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive })`;
  const hslPrimary = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`;

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
        data: [10, 30, 39, 20, 25, 34, -10],
        borderColor: hexToRGB(hexDestructive, 0.5),
        backgroundColor: hexToRGB(hexDestructive, 0.5),
      },
      {
        label: "Dataset 2",
        data: ["ON", "ON", "OFF", "ON", "OFF", "OFF", "ON"],
        borderColor: hexToRGB(hexPrimary, 0.5),
        backgroundColor: hexToRGB(hexPrimary, 0.5),
        stepped: true,
        yAxisID: "y2",
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
        text: "Stacked scales",
      }
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
        stackWeight: 2,
        type: "linear",
        position: "left",
        stack: "demo",
        border: {
          color: hexToRGB(hexDestructive, 0.5),
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
      },
      y2: {
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
        stackWeight: 1,
        type: "category",
        labels: ["ON", "OFF"],
        offset: true,
        position: "left",
        stack: "demo",
        border: {
          color: hexToRGB(hexPrimary, 0.5),
        }
      }
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Line options={options} data={data} height={height} />
    </div>
  );
};

export default StackedLinearCategory;
