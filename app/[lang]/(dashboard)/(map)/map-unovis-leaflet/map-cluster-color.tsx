"use client";

import { VisLeafletMap } from "@unovis/react";

import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
// Data
import { mapData } from "./mapData";

const MapClusterColor = () => {

    const { theme: config, setTheme: setConfig } = useThemeStore();
    const { theme: mode } = useTheme();
    const theme = themes.find((theme) => theme.name === config);

    const mapKey = "7ZOaHj6xeWeeUNIdCjfC";
    const style = `https://api.maptiler.com/maps/streets/style.json?key=${mapKey}`;
    const pointColor = `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`;
    const pointRadius = 10;

    return (
        <div className=" w-full h-[350px] overflow-hidden relative">
            <VisLeafletMap
                style={style}
                data={mapData}
                className="h-full"
                pointColor={pointColor}
                pointRadius={pointRadius}
                clusterColor={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`}
                clusterRadius={10}
                attribution={[
                    '<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>',
                    '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>',
                ]}
            />
        </div>
    );
};

export default MapClusterColor;
