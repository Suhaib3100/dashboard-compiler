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

const BasicBar = ({ height = 350 }: { height?: number }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const hslPrimary = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
    })`;
  const hslSuccess = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success
    })`;

  const hexPrimary = hslToHex(hslPrimary);
  const hexSuccess = hslToHex(hslSuccess);

  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "data one",
        data: [35, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: hexToRGB(hexPrimary, 0.5),
        borderColor: hexToRGB(hexPrimary, 0.5),
        borderWidth: 2,
        borderRadius: "15",
        borderSkipped: "bottom",
        barThickness: 25,
      },
      {
        label: " data two",
        data: [24, 42, 40, 19, 86, 27, 90],
        fill: false,
        backgroundColor: hexToRGB(hexSuccess, 0.8),
        borderColor: hexToRGB(hexSuccess, 0.8),

        borderWidth: 2,
        borderRadius: "15",
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
          color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
            })`,
        },
      },
    },

    scales: {
      y: {
        grid: {
          drawTicks: false,
          color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`,
        },
        ticks: {
          color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`,
        },
      },
      x: {
        grid: {
          drawTicks: false,
          color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`,
        },

        ticks: {
          color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`,
        }
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

export default BasicBar;
