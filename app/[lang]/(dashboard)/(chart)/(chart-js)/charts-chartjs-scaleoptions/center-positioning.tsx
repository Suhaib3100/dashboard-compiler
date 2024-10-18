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

import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Scatter } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const CenterPositioningScale = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const hslPrimary = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`;
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
        label: "Dataset 1",
        data: [
          {
            x: -10,
            y: 0,
          },
          {
            x: 0,
            y: 10,
          },
          {
            x: 10,
            y: 5,
          },
          {
            x: 0.5,
            y: 5.5,
          },
          {
            x: -20,
            y: 10,
          },
          {
            x: 40,
            y: 10,
          },
          {
            x: 20,
            y: 25,
          },
          {
            x: 2.5,
            y: 3.5,
          },
        ],
        backgroundColor: hslPrimary,
      },
      {
        label: "Dataset 2",
        data: [
          {
            x: 10,
            y: 20,
          },
          {
            x: 10,
            y: 10,
          },
          {
            x: 10,
            y: 5,
          },
          {
            x: 2.5,
            y: 4.5,
          },
          {
            x: -10,
            y: 20,
          },
          {
            x: 40,
            y: 10,
          },
          {
            x: 20,
            y: 35,
          },
        ],
        backgroundColor: hslWarning,
      },
    ],
    scales: {
      y: {
        min: -100,
        max: 100,
        grid: {
          drawMode: false,
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
        min: -100,
        max: 100,
        grid: {
          drawMode: false,
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
      <Scatter
        options={options}
        data={data}
        height={height}
      />
    </div>
  );
};

export default CenterPositioningScale;
