"use client"
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';



const BasicRadialBar = ({ height = 450 }) => {
    const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
    const { theme: mode } = useTheme();
    const theme = themes.find((theme) => theme.name === config);
    const data = [
        {
            name: '18-24',
            uv: 31.47,
            pv: 2400,
            fill: '#8884d8',
        },
        {
            name: '25-29',
            uv: 26.69,
            pv: 4567,
            fill: '#83a6ed',
        },
        {
            name: '30-34',
            uv: 15.69,
            pv: 1398,
            fill: '#8dd1e1',
        },
        {
            name: '35-39',
            uv: 8.22,
            pv: 9800,
            fill: '#82ca9d',
        },
        {
            name: '40-49',
            uv: 8.63,
            pv: 3908,
            fill: '#a4de6c',
        },
        {
            name: '50+',
            uv: 2.63,
            pv: 4800,
            fill: '#d0ed57',
        },
        {
            name: '30',
            uv: 6.67,
            pv: 4800,
            fill: '#ffc658',
        },
    ];

    const style = {
        top: '50%',
        right: isRtl ? "" : "0",
        left: isRtl ? "0" : "",
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };


    return (
        <ResponsiveContainer width="100%" height={height}>
            <RadialBarChart height={height} cx="50%" cy="50%" innerRadius="10%" outerRadius="100%" barSize={10} data={data}>
                <RadialBar
                    background
                    dataKey="uv"
                />
                <Legend
                    iconSize={10}
                    layout="vertical"
                    verticalAlign="middle"
                    wrapperStyle={style}
                    formatter={(value, entry) => <span style={{ color: entry.color, marginRight: isRtl ? "5px" : "0px" }}>{value}</span>}
                />
            </RadialBarChart>

        </ResponsiveContainer>
    );
};

export default BasicRadialBar;