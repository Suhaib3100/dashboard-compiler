"use client";

import { VisLeafletMap } from "@unovis/react";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { mapData } from "./mapData";
import { MAP_KEY } from "../constant";

const MapPointsShape = () => {

    const { theme: config, setTheme: setConfig } = useThemeStore();
    const { theme: mode } = useTheme();
    const theme = themes.find((theme) => theme.name === config);

    const style = `https://api.maptiler.com/maps/streets/style.json?key=${MAP_KEY}`;
    const pointColor = `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`;

    return (
        <div className=" w-full h-[350px] overflow-hidden relative">
            <VisLeafletMap
                style={style}
                className="h-full"
                data={mapData}
                pointColor={pointColor}
                attribution={[
                    '<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>',
                    '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>',
                ]}
            />
        </div>
    );
};

export default MapPointsShape;
