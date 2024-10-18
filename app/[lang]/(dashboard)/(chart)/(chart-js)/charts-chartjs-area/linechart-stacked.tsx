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

const LineChartStacked = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const hslPrimary = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`;
  const hslInfo = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`;
  const hslSuccess = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`;
  const hslWarning = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`;

  const hexPrimary = hslToHex(hslPrimary);
  const hexInfo = hslToHex(hslInfo);
  const hexSuccess = hslToHex(hslSuccess);
  const hexWarning = hslToHex(hslWarning);

  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [20, 50, 60, 40, 60, 80, 90],
        borderColor: hslPrimary,
        backgroundColor: hexToRGB(hexPrimary, 0.5),
        fill: true,
      },
      {
        label: "Dataset 2",
        data: [30, 60, 70, 80, 90, 60, 60],
        borderColor: hslWarning,
        backgroundColor: hexToRGB(hexInfo, 0.5),
        fill: true,
      },
      {
        label: "Dataset 3",
        data: [110, 70, 40, 190, 20, 10, 100],
        borderColor: hexWarning,
        backgroundColor: hexToRGB(hexWarning, 0.5),
        fill: true,
      },
      {
        label: "Dataset 4",
        data: [130, 160, 170, 180, 190, 160, 160],
        borderColor: hslSuccess,
        backgroundColor: hexToRGB(hexSuccess, 0.5),
        fill: true,
      },
    ],
  };
  const options: any = {
    responsive: true,
    plugins: {
      filler: {
        propagate: false,
      },
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
        stacked: true,
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
      <Line
        options={options}
        data={data}
        height={height}
      />
    </div>
  );
};

export default LineChartStacked;
