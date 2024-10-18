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

const LineDatasets = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const hslPrimary = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
    })`;
  const hslInfo = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info
    })`;
  const hslWarning = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
    })`;
  const hslSuccess = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success
    })`;

  const hexPrimary = hslToHex(hslPrimary);
  const hexInfo = hslToHex(hslInfo);
  const hexWarning = hslToHex(hslWarning);
  const hexSuccess = hslToHex(hslSuccess);

  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        fill: true,
        label: "D0",
        data: [80, 70, 60, 80, 60, 50, 61, 56, 35, 70],
        borderColor: hexToRGB(hexPrimary, 1),
        backgroundColor: hexToRGB(hexPrimary, 0.5),
      },
      {
        label: "D1",
        data: [10, 50, 40, 60, 70, 40, 81, 66, 45, 60],
        borderColor: hexToRGB(hexInfo, 1),
        backgroundColor: hexToRGB(hexInfo, 0.5),
        fill: "-1",
      },
      {
        label: "D2",
        data: [100, 90, 130, 90, 90, 90, 91, 96, 105, 100],
        borderColor: hexToRGB(hexWarning, 1),
        backgroundColor: hexToRGB(hexWarning, 0.5),
        fill: 1,
      },
      {
        label: "D3",
        data: [150, 180, 170, 189, 190, 140, 191, 186, 175, 190],
        borderColor: hexToRGB(hexSuccess, 1),
        backgroundColor: hexToRGB(hexSuccess, 0.5),
        fill: "-1",
      },
    ],
  };
  const options: any = {
    responsive: true,
    plugins: {
      filler: {
        propagate: true,
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
    interaction: {
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

export default LineDatasets;
