"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const SemiCircleGauge = ({ height = 350 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const series = [76];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 6,
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].secondary
            })`,
          strokeWidth: "97%",
          margin: 5,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
            fontWeight: 700,
            color: `hsl(${theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartLabel
              })`,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    colors: [`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`],
    labels: ["Average Results"],
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

export default SemiCircleGauge;
