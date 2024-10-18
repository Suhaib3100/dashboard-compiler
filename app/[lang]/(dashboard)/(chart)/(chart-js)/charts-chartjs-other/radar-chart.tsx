"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const RadarChart = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const hslPrimary = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`;
  const hslInfo = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`;
  const hslWarning = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`;

  const data: any = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: hslPrimary,
        borderColor: hslPrimary,
        pointBackgroundColor: hslPrimary,
        pointBorderColor: hslPrimary,
        pointHoverBackgroundColor: hslWarning,
        pointHoverBorderColor: hslPrimary,
      },
      {
        label: "My Second Dataset",
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: hslInfo,
        borderColor: hslInfo,
        pointBackgroundColor: hslInfo,
        pointBorderColor: hslInfo,
        pointHoverBackgroundColor: hslWarning,
        pointHoverBorderColor: hslWarning,
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
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Radar
        options={options}
        data={data}
        height={height}
      />
    </div>
  );
};

export default RadarChart;
