"use client"
import { useCallback, useMemo, useRef } from 'react'
import { LeafletMap } from '@unovis/ts'
import { VisLeafletMap  } from '@unovis/react'
import { data, totalEvents, mapStyleLight, mapStyleDark } from './data'

import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

interface DataPoint {
    name?: string;
    latitude?: number;
    longitude?: number;
    normal?: number;
    blocked?: any;
    [key: string]: any;
}
const AdvancedLeafletMap = ({ height = 350 }: { height?: number }) => {

    const { theme: config, setTheme: setConfig } = useThemeStore();
    const { theme: mode } = useTheme();
    const theme = themes.find((theme) => theme.name === config);

    const mapRef = useRef<null>(null);

    const pointId = (d: DataPoint) => d.name;
    const pointLatitude = (d: DataPoint) => d.latitude;
    const pointLongitude = (d: DataPoint) => d.longitude;
    const pointBottomLabel = (d: DataPoint) => d.name;
    const pointRadius = (d: DataPoint) => 10 + 4 * Math.sqrt((d.normal + (d.blocked || 0)) / totalEvents);
    const pointLabel = (d: DataPoint) => `${((d.blocked + d.normal) / 1000).toFixed(1)}K`;
    const clusterBottomLabel = (d: DataPoint) => `${d.point_count} sites`;

    const colorMap = {
        normal: { color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})` },
        blocked: { color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})` },
    }

    const events = {
        [LeafletMap.selectors.point]: {
            click: (d: any) => {
                if (!d.properties?.cluster && mapRef.current) {
                    (mapRef.current as any).component.zoomToPointById(d.id, true, 5);
                }
            },
        },
        [LeafletMap.selectors.background]: {
            click: () => {
                if (mapRef.current) {
                    (mapRef.current as any).component.unselectPoint();
                }
            },
        },
    }

    const attribution = [
        '<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>',
        '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>',
    ]

    return (
        <div className={`w-full  overflow-hidden relative h-[${height}px]`}>
            <VisLeafletMap
                ref={mapRef}
                data={data}
                style={mapStyleLight}
                styleDarkTheme={mapStyleDark}
                pointId={useCallback(pointId, [])}
                pointLatitude={useCallback(pointLatitude, [])}
                pointLongitude={useCallback(pointLongitude, [])}
                pointLabel={useCallback(pointLabel, [])}
                pointBottomLabel={useCallback(pointBottomLabel, [])}
                pointRadius={useCallback(pointRadius, [])}
                colorMap={useMemo(() => colorMap, [])}
                clusterRadius={useCallback(pointRadius, [])}
                clusterLabel={useCallback(pointLabel, [])}
                clusterBottomLabel={useCallback(clusterBottomLabel, [])}
                clusteringDistance={85}
                clusterExpandOnClick={true}
                attribution={useMemo(() => attribution, [])}
                events={useMemo(() => events, [])}
            />
        </div>
    )
}

export default AdvancedLeafletMap;