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
import { hslToHex, hexToRGB, RGBToHex } from "@/lib/utils";
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

const GridConfigure = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const hslPrimary = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
    })`;
  const hslWarning = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
    })`;
  const hslBorder = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
    })`;

  const hexPrimary = hslToHex(hslPrimary);
  const hexWarning = hslToHex(hslWarning);
  const hexBorder = hslToHex(hslBorder);

  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [35, 59, 80, 81, 56, 55, 40],
        borderColor: hexToRGB(hexPrimary, 0.5),
        tension: 0.1,
      },
      {
        label: "Dataset 2",
        data: [24, 42, 40, 19, 86, 27, 90],
        borderColor: hexToRGB(hexWarning, 0.5),
        tension: 0.1,
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
        border: {
          display: false,
        },
        grid: {
          color: function (context: any) {
            if (context.tick.value > 50) {
              return hexToRGB(hexPrimary, 0.5);
            } else if (context.tick.value < 51) {
              return hexToRGB(hexWarning, 0.5);
            }

            return hexBorder;
          },
        },
        ticks: {
          color: `hsl(${theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartLabel
            })`,
        },
      },
      x: {
        border: {
          display: true,
        },
        grid: {
          color: `hsl(${theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartGird
            })`,
          display: true,
          drawOnChartArea: true,
          drawTicks: true,
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

export default GridConfigure;
