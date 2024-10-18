"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  TooltipItem,
} from "chart.js";

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
  ArcElement,
  PointElement
);

const customTooltip = (tooltipItems: TooltipItem<'line'>[]) => {
  let sum = 0;

  tooltipItems.forEach(function (tooltipItem) {
    sum += tooltipItem.parsed.y;
  });
  return "Sum: " + sum;
};

const TooltipPointStyle = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  const hslPrimary = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`;
  const hslWarning = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`;
  const hslInfo = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`;
  const data: any = {
    labels: ["January", "February", "March", "April", "May", "Jun", "July"],
    datasets: [
      {
        label: "Traingle",
        data: [20, 50, 60, 70, 20, 30, 20],
        borderColor: hslWarning,
        fill: false,
        pointStyle: "triangle",
        pointRadius: 6,
      },
      {
        label: "Circle",
        data: [40, 70, 80, 90, 40, 50, 40],
        borderColor: hslInfo,
        fill: false,
        pointStyle: "circle",
        pointRadius: 6,
      },
      {
        label: "Star",
        data: [30, 60, 70, 80, 30, 40, 30],
        borderColor: hslPrimary,
        fill: false,
        pointStyle: "star",
        pointRadius: 6,
      },
    ],
  };
  const options: any = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
            })`,
        },
      },
      tooltip: {
        callbacks: {
          footer: customTooltip,
          usePointStyle: true,
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
      <Line options={options} data={data} height={height} />
    </div>
  );
};

export default TooltipPointStyle;
