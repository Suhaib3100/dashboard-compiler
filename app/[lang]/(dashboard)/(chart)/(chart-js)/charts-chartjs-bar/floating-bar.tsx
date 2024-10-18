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

const FloatingBar = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const hslInfo = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info
    })`;
  const hslWarning = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
    })`;

  const hexInfo = hslToHex(hslInfo);
  const hexWarning = hslToHex(hslWarning);

  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "data one",
        data: [
          [20, 50],
          [10, 80],
          [50, 100],
          [0, 60],
          [25, 50],
          [12, 50],
          [10, 70],
        ],
        fill: false,
        backgroundColor: hexToRGB(hexInfo, 1),
        borderColor: hexToRGB(hexInfo, 1),

        borderWidth: 2,
        borderRadius: "0",
        borderSkipped: "bottom",
        barThickness: 25,
      },
      {
        label: "data two",
        data: [
          [25, 40],
          [20, 60],
          [60, 90],
          [0, 30],
          [15, 40],
          [20, 40],
          [30, 60],
        ],
        fill: false,
        backgroundColor: hexToRGB(hexWarning, 0.9),
        borderColor: hexToRGB(hexWarning, 0.9),

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
      <Bar
        options={options}
        data={data}
        height={height}
      />
    </div>
  );
};

export default FloatingBar;
