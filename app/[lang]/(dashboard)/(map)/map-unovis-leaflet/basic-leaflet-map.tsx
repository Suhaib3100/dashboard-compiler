"use client";
import { useCallback } from "react";
import { VisLeafletMap } from "@unovis/react";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { MapPointDataRecord, mapData } from "./mapData";
import { MAP_KEY } from "../constant";

const BasicLeafletMap = () => {
    const { theme: config, setTheme: setConfig } = useThemeStore();
    const { theme: mode } = useTheme();
    const theme = themes.find((theme) => theme.name === config);

    const style = `https://api.maptiler.com/maps/streets/style.json?key=${MAP_KEY}`;

    const pointLatitude = useCallback((mapData: MapPointDataRecord) => mapData.latitude, []);
    const pointLongitude = useCallback((mapData: MapPointDataRecord) => mapData.longitude, []);
    const pointBottomLabel = useCallback((mapData: MapPointDataRecord) => mapData.id, []);

    const pointColor = `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`;

    return (
        <div className=" w-full h-[350px] overflow-hidden relative">
            <VisLeafletMap
                style={style}
                data={mapData}
                className="h-full"
                pointLatitude={pointLatitude}
                pointLongitude={pointLongitude}
                pointBottomLabel={pointBottomLabel}
                pointColor={pointColor}
                clusterExpandOnClick={false}
                attribution={[
                    '<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>',
                    '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>',
                ]}
            />
        </div>
    );
};

export default BasicLeafletMap;
