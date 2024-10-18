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
  Filler,
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
  PointElement,
  Filler
);

const LineStyling = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const hslInfo = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info
    })`;
  const hslSuccess = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success
    })`;
  const hslDestructive = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive
    })`;

  const hexInfo = hslToHex(hslInfo);
  const hexDestructive = hslToHex(hslDestructive);
  const hexSuccess = hslToHex(hslSuccess);

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
        label: "Unfilled",
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(hexSuccess, 0.5),
        tension: 0.4,
        fill: false,
      },
      {
        label: "Dashed",
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(hexInfo, 0.5),
        borderDash: [5, 5],
        fill: false,
      },
      {
        label: "Filled",
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(hexDestructive, 0.5),
        backgroundColor: hexToRGB(hexDestructive, 0.5),
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
          color: mode === "dark" ? "#cbd5e1" : "#475569",
        }
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
      },
      x: {
        grid: {
          drawTicks: false,
          color: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartGird
            })`
        },

        ticks: {
          color: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
            })`
        }
      }
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

export default LineStyling;
