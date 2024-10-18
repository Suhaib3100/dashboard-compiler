"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const CustomAngle = ({ height = 350 }) => {
    const { theme: config, setTheme: setConfig } = useThemeStore();
    const { theme: mode } = useTheme();
    const theme = themes.find((theme) => theme.name === config);

    const series = [76, 67, 61, 90];

    const options: any = {
        chart: {
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: "smooth",
            width: 6,
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: false,
                    }
                }
            }
        },
        colors: [
            `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
            `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
            `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
            `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
        ],
        labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
        legend: {
            show: true,
            floating: true,
            fontSize: '16px',
            position: 'left',
            offsetX: 160,
            offsetY: 15,
            labels: {
                useSeriesColors: true,
            },
            markers: {
                size: 0
            },
            formatter: function (seriesName: string[], opts: any) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
                vertical: 3
            }
        },
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

export default CustomAngle;
