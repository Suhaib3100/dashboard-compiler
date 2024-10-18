"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { hslToHex, hexToRGB } from "@/lib/utils";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBar = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const hslPrimary = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
    })`;
  const hslSuccess = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success
    })`;
  const hslInfo = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info
    })`;

  const hexPrimary = hslToHex(hslPrimary);
  const hexSuccess = hslToHex(hslSuccess);
  const hexInfo = hslToHex(hslInfo);

  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "data one",
        data: [35, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: hexToRGB(hexPrimary, 0.8),
        borderColor: hexToRGB(hexPrimary, 0.9),

        borderWidth: 2,
        borderRadius: "0",
        borderSkipped: "bottom",
        barThickness: 25,
      },
      {
        label: "data two",
        data: [24, 42, 40, 19, 86, 27, 60],
        fill: false,
        backgroundColor: hexToRGB(hexSuccess, 1),
        borderColor: hexToRGB(hexSuccess, 0.8),

        borderWidth: 2,
        borderRadius: "0",
        borderSkipped: "bottom",
        barThickness: 25,
      },
      {
        label: "data three",
        data: [20, 30, 40, 15, 70, 40, 50],
        fill: false,
        backgroundColor: hexToRGB(hexInfo, 0.8),
        borderColor: hexToRGB(hexInfo, 0.9),

        borderWidth: 2,
        borderRadius: "0",
        borderSkipped: "bottom",
        barThickness: 25,
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
      },
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
          color: `hsl(${theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
            })`,
        },
      },
      x: {
        stacked: true,
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

export default StackedBar;
