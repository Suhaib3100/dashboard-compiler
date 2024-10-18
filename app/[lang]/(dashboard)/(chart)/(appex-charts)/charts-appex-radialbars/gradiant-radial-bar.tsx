"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const GradiantRadialBar = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [75];

  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      lineCap: "round",
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "transparent",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].success
            })`,
            fontSize: "20px",
          },
          value: {
            formatter: function (val: string) {
              return parseInt(val);
            },
            color: `hsl(${
              theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartLabel
            })`,
            fontSize: "36px",
            show: true,
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: [
          `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
        ],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    ],
    labels: ["Cricket"],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },

    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };
  return (
      <Chart
        options={options}
        series={series}
        type="radialBar"
        height={height}
        width={"100%"}
      />
  );
};

export default GradiantRadialBar;
