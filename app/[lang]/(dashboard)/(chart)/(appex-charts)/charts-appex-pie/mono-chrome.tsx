"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const MonoChrome = ({ height = 350 }) => {

    const { theme: config, setTheme: setConfig } = useThemeStore();
    const { theme: mode } = useTheme();
    const theme = themes.find((theme) => theme.name === config);

    const series = [25, 15, 44, 55, 41, 17];
    const options: any = {
        chart: {
            toolbar: {
                show: false,
            }
        },
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        theme: {
            monochrome: {
                enabled: true
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    offset: -5
                }
            }
        },
        dataLabels: {
            formatter(val: number, opts: any) {
                const name = opts.w.globals.labels[opts.seriesIndex]
                return [name, val.toFixed(1) + '%']
            }
        },
        fill: {
            colors: [
                `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`
            ]
        },
        tooltip: {
            theme: mode === "dark" ? "dark" : "light",
        },
        stroke: {
            width: 0
        },
        legend: {
            show: false
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    };
    return (
        <Chart
            options={options}
            series={series}
            type="pie"
            height={height}
            width={"100%"}
        />
    );
};

export default MonoChrome;
