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

const MultiAxisLineChart = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const hslPrimary = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
    })`;

  const hslDestructive = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive
    })`;

  const hexPrimary = hslToHex(hslPrimary);
  const hexDestructive = hslToHex(hslDestructive);

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
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.number.int({ min: -1000, max: 1000 })
        ),
        borderColor: hexToRGB(hexDestructive, 0.5),
        backgroundColor: hexToRGB(hexDestructive, 0.5),
        yAxisID: "y",
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.number.int({ min: -1000, max: 1000 })
        ),
        borderColor: hexToRGB(hexPrimary, 0.5),
        backgroundColor: hexToRGB(hexPrimary, 0.5),
        yAxisID: "y1",
      },
    ],
  };
  const options: any = {
    responsive: true,
    data: data,
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
      y1: {
        grid: {
          drawTicks: false,
          drawOnChartArea: false,
        },
        position: "right",
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

export default MultiAxisLineChart;
