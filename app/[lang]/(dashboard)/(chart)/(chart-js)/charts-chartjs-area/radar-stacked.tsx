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
  RadialLinearScale,
} from "chart.js";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Radar } from "react-chartjs-2";
import { hexToRGB, hslToHex } from "@/lib/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale
);

const RadarStacked = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const hslPrimary = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
    })`;
  const hslInfo = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info
    })`;
  const hslSuccess = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success
    })`;
  const hslWarning = `hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
    })`;

  const hexPrimary = hslToHex(hslPrimary);
  const hexInfo = hslToHex(hslInfo);
  const hexWarning = hslToHex(hslWarning);
  const hexSuccess = hslToHex(hslSuccess);

  const data: any = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [20, 50, 60, 40, 60, 80, 90, 100],
        borderColor: hslPrimary,
        backgroundColor: hexToRGB(hexPrimary, 0.5),
        fill: true,
      },
      {
        label: "Dataset 2",
        data: [30, 60, 70, 80, 90, 60, 60, 80],
        borderColor: hslWarning,
        backgroundColor: hexToRGB(hexWarning, 0.5),
        fill: true,
      },
      {
        label: "Dataset 3",
        data: [110, 70, 40, 190, 20, 10, 100, 70],
        borderColor: hslInfo,
        backgroundColor: hexToRGB(hexInfo, 0.5),
        fill: true,
      },
      {
        label: "Dataset 4",
        data: [130, 160, 170, 180, 190, 160, 160, 60],
        borderColor: hslSuccess,
        backgroundColor: hexToRGB(hexSuccess, 0.5),
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
      <Radar options={options} data={data} height={height} />
    </div>
  );
};

export default RadarStacked;
