"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { hslToHex, hexToRGB } from "@/lib/utils";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DoughnutChart = ({ height = 350 }) => {
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
    labels: ["Primary", "Info", "Warning", "Success"],
    datasets: [
      {
        label: "Dataset 1",
        data: [50, 60, 30, 70, 80, 90, 100, 40],
        backgroundColor: [
          hexToRGB(hexPrimary, 0.5),
          hexToRGB(hexInfo, 0.5),
          hexToRGB(hexWarning, 0.5),
          hexToRGB(hexSuccess, 0.5),
        ],
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
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Doughnut options={options} data={data} height={height} />
    </div>
  );
};

export default DoughnutChart;
