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

const InterpolationModes = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const hslPrimary = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
    })`;
  const hslSuccess = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success
    })`;
  const hslDestructive = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive
    })`;

  const hexPrimary = hslToHex(hslPrimary);
  const hexDestructive = hslToHex(hslDestructive);
  const hexSuccess = hslToHex(hslSuccess);

  const DATA_COUNT = 12;
  const labels = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
  }

  const data: any = {
    labels: labels,
    datasets: [
      {
        label: "Cubic interpolation (monotone)",
        data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
        borderColor: hexToRGB(hexDestructive, 0.5),
        tension: 0.4,
      },
      {
        label: "Cubic interpolation",
        data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
        borderColor: hexToRGB(hexPrimary, 0.5),
        tension: 0.4,
      },
      {
        label: "Linear interpolation (default)",
        data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
        borderColor: hexToRGB(hexSuccess, 0.5),
      },
    ],
  };
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: mode === "dark" ? "#cbd5e1" : "#475569",
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
      <Line
        options={options}
        data={data}
        height={height}
      />
    </div>
  );
};

export default InterpolationModes;
