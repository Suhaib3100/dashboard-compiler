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
import { Bubble } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);



const ScriptBubble = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "1st Dataset",
        data: [
          {
            x: 20,
            y: 30,
            r: 15,
          },
          {
            x: 40,
            y: 10,
            r: 10,
          },
        ],
      },
      {
        label: "2nd Dataset",
        data: [
          {
            x: 20,
            y: 60,
            r: 15,
          },
          {
            x: 40,
            y: 60,
            r: 10,
          },
        ],
      },
    ],
  };
  const options: any = {
    aspectRatio: 1,
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
    elements: {
      point: {
        backgroundColor: function (context: any) {
          const index = context.dataIndex;
          const value = context.dataset.data[index];
          return value < 0 ? "red" : index % 2 ? "blue" : "green";
        },
      },
    },
    scales: {
      y: {
        grid: {
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
      <Bubble options={options} data={data} height={height} />
    </div>
  );
};

export default ScriptBubble;
