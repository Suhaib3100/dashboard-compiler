"use client"
import { useCallback } from 'react'
import { VisLeafletFlowMap } from '@unovis/react'
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { MapFlowDataRecord, MapPointDataRecord, data } from './data'
import { hslToHex } from '@/lib/utils';

const ParticleColorMap = () => {

    const { theme: config, setTheme: setConfig } = useThemeStore();
    const { theme: mode } = useTheme();
    const theme = themes.find((theme) => theme.name === config);

    const mapKey = "7ZOaHj6xeWeeUNIdCjfC";
    const style = `https://api.maptiler.com/maps/topo/style.json?key=${mapKey}`;

    const pointLatitude = useCallback((d: MapPointDataRecord) => d.lat, []);
    const pointLongitude = useCallback((d: MapPointDataRecord) => d.lon, []);
    const pointBottomLabel = useCallback((d: MapPointDataRecord) => d.id, []);

    const sourceLatitude = useCallback((d: MapFlowDataRecord) => d.sourceLat, []);
    const sourceLongitude = useCallback((d: MapFlowDataRecord) => d.sourceLon, []);
    const targetLatitude = useCallback((d: MapFlowDataRecord) => d.targetLat, []);
    const targetLongitude = useCallback((d: MapFlowDataRecord) => d.targetLon, []);
    const flowParticleDensity = useCallback((d: MapFlowDataRecord) => d.particleDensity, []);

    const pointColor = `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`;
    const flowParticleColor = hslToHex(`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`)
    return (
        <div className='w-full h-[350px] overflow-hidden relative'>
            <VisLeafletFlowMap
                data={data}
                style={style}
                fitViewPadding={[20, 20]}
                pointLatitude={pointLatitude}
                pointLongitude={pointLongitude}
                pointBottomLabel={pointBottomLabel}
                sourceLatitude={sourceLatitude}
                sourceLongitude={sourceLongitude}
                targetLatitude={targetLatitude}
                targetLongitude={targetLongitude}
                flowParticleDensity={flowParticleDensity}
                flowParticleRadius={1.0}
                flowParticleColor={flowParticleColor}
                pointColor={pointColor}
                pointRadius={3}
                attribution={[
                    '<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>',
                    '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>',
                ]}
            ></VisLeafletFlowMap>
        </div>
    )
}

export default ParticleColorMap;