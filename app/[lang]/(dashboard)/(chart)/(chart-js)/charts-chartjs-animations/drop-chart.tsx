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

const DropChart = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const hslDestructive = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive})`;
  const hslInfo = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`;

  const hexDestructive = hslToHex(hslDestructive);
  const hexInfo = hslToHex(hslInfo);

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
        label: "Dataset 1",
        animations: {
          y: {
            duration: 2000,
            delay: 500,
          },
        },
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(hexDestructive, 0.5),
        backgroundColor: hexToRGB(hexDestructive, 0.5),
        fill: true,
        tension: 0.5,
      },
      {
        label: "Dataset 1",
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(hexInfo, 0.5),
        backgroundColor: hexToRGB(hexInfo, 0.5),
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
        display: true,
      }
    },
    animation: {
      y: {
        easing: "easeInOutElastic",
        from: (ctx: any) => {
          if (ctx.type === "data") {
            if (ctx.mode === "default" && !ctx.dropped) {
              ctx.dropped = true;
              return 0;
            }
          }
        },
      },
    },
    hover: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
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
      x: {
        stacked: true,
        title: {
          color: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
            })`,
          display: true,
        },
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
        }
      }
    },
    maintainAspectRatio: false,
  };
  return (
    <div>
      <Line options={options} data={data} height={height} />
    </div>
  );
};

export default DropChart;
