"use client"
import { useState } from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer } from 'recharts';
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
const CustomizedEvent = ({ height = 300 }) => {
    const { theme: config, setTheme: setConfig } = useThemeStore();
    const { theme: mode } = useTheme();
    const theme = themes.find((theme) => theme.name === config);
    const [data, setData] = useState([
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ]);

    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = data[activeIndex];

    const handleClick = (entry: any, index: number) => {
        setActiveIndex(index);
    };

    return (
        <div style={{ width: '100%' }}>
            <p className='text-center text-card-foreground font-base font-medium'>Click each rectangle </p>
            <ResponsiveContainer width="100%" height={height}>
                <BarChart data={data}>
                    <Bar dataKey="uv" onClick={handleClick}>
                        {data.map((entry, index) => (
                            <Cell
                                cursor="pointer"
                                fill={index === activeIndex ? `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`
                                    :
                                    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`}
                                key={`cell-${index}`}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-card-foreground font-base font-medium pt-2">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>
        </div>
    );
};

export default CustomizedEvent;
