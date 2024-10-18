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

interface Context {
  parsed: {
    y: number;
  };
}
interface UtilsType {
  transparentize: (color: string, opacity: number) => string;
}

const Utils: UtilsType = {
  transparentize: (color, opacity) => {
    return color;
  },
};

const colorize = (opaque: boolean) => {
  return (ctx: Context) => {
    const v = ctx.parsed.y;
    const c =
      v < -50 ? "#D60000" : v < 0 ? "#F46300" : v < 50 ? "#0358B6" : "#44DE28";
    return opaque ? c : Utils.transparentize(c, 1 - Math.abs(v / 150));
  };
};

const ScriptBar = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "data one",
        data: [35, -59, 80, -81, 56, -55, 40],
        fill: false,
        borderWidth: 2,
        borderRadius: "0",
        borderSkipped: "bottom",
        barThickness: 50,
      },
    ],
  };
  const options: any = {
    responsive: true,
    plugins: {
      legend: false,
    },
    elements: {
      bar: {
        backgroundColor: colorize(true),
        borderColor: colorize(true),
        borderWidth: 4,
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
      <Bar options={options} data={data} height={height} />
    </div>
  );
};

export default ScriptBar;
