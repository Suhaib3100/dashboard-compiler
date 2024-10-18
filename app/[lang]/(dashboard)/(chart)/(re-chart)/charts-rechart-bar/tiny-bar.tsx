"use client"
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { ResponsiveContainer, BarChart, Bar } from 'recharts';
import { data } from "./data";

const TinyBar = ({ height = 300 }) => {
    const { theme: config, setTheme: setConfig } = useThemeStore();
    const { theme: mode } = useTheme();
    const theme = themes.find((theme) => theme.name === config);
    return (
        <ResponsiveContainer height={height}>
            <BarChart height={height} data={data} >
                <Bar
                    dataKey="uv"
                    fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`}
                />

            </BarChart>
        </ResponsiveContainer>
    );
};

export default TinyBar;