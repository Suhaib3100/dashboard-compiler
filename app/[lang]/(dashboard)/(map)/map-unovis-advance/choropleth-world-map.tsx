"use client"
import { useCallback, useMemo, useState } from 'react'
import { Orientation, Scale, TopoJSONMap } from '@unovis/ts'
import { WorldMapTopoJSON } from '@unovis/ts/maps'
import { VisSingleContainer, VisTopoJSONMap, VisTooltip, VisAxis, VisXYContainer, VisStackedBar } from '@unovis/react'
import { choroplethData } from './data'

import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const yearRange = [1950, 2019]
const ageRange = [50, 85]

interface YearSliderProps {
    current: number;
    range: number[];
    onUpdate: (value: number) => void;
}

const YearSlider = ({ current, range, onUpdate }: YearSliderProps) => {
    return (
        <header className='text-center pb-5'>
            <h2 className='text-card-foreground text-sm font-medium'>Life expectancy by Country, <em>{current}</em></h2>
            <input type="range" value={current} min={range[0]} max={range[1]} className='w-[400px] mt-2'
                onChange={e => onUpdate(Number(e.target.value))} />
        </header>
    );
}

interface GradientLegendProps {
    colors: (value: number) => string;
    range: number[];
    title: string;
}

const GradientLegend = ({ colors, range, title }: GradientLegendProps) => {
    const y = Array(range[1] - range[0]).fill(1);
    const color = useCallback((_: any, i: number) => colors(i + range[0]), []);

    return (
        <div className='flex justify-center'>
            <VisXYContainer data={[{}]} height={70} width={500}>
                <VisStackedBar orientation={Orientation.Horizontal} x={0} y={y} color={color} />
                <VisAxis
                    type="x"
                    label={title}
                    position="top"
                    numTicks={(range[1] - range[0]) / 5}
                />
            </VisXYContainer>
        </div>
    );
}


const ChoroplethWorldMap = ({ height = 550 }: { height?: number }) => {

    const { theme: config, setTheme: setConfig } = useThemeStore();
    const { theme: mode } = useTheme();
    const theme = themes.find((theme) => theme.name === config);

    const palette = [
        `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
        `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`
    ];


    const mapData = useMemo(() => ({ areas: choroplethData }), [])

    const [year, setYear] = useState(2019)
    const colorScale = Scale.scaleSequential(palette).domain(ageRange)

    const yearScale = Scale.scaleLinear()
        .domain(yearRange)
        .rangeRound([0, yearRange[1] - yearRange[0]])

    const getExpectancy = useCallback((d:any) => d.age[yearScale(year)], [year])
    const getAreaColor = useCallback((d:any) => colorScale(getExpectancy(d)), [getExpectancy])

    const tooltipTriggers = {
        [TopoJSONMap.selectors.feature]: (d:any) =>
            `${d.properties.name}: ${d.data ? getExpectancy(d.data) : 'no data'}`
    }

    return (
        <div>
            <div className='mb-2'>
                <YearSlider current={year} range={yearRange} onUpdate={setYear} />
            </div>
            <div className="w-full  overflow-hidden relative flex justify-center">
                <VisSingleContainer data={mapData} height={height} width="100vw" duration={0}>
                    <VisTopoJSONMap topojson={WorldMapTopoJSON} areaColor={getAreaColor} disableZoom />
                    <VisTooltip triggers={tooltipTriggers} />
                </VisSingleContainer>
            </div>
            <div className='text-card-foreground'>
                <GradientLegend
                    title="Life expectancy (years)"
                    colors={colorScale}
                    range={ageRange}
                />
            </div>
        </div>
    )
}

export default ChoroplethWorldMap;