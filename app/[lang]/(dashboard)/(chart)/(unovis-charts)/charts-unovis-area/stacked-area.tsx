"use client"
import { useCallback } from 'react';
import { VisXYContainer, VisAxis, VisArea, VisXYLabels } from '@unovis/react';
import { stackedData } from './data';

import { useTheme } from "next-themes";
import { useThemeStore } from "@/store";
import { themes } from "@/config/thems";

import { formats, DataRecord, getLabels } from './utils'
export default function StackedArea() {

    const { theme: config, setTheme: setConfig } = useThemeStore();
    const { theme: mode } = useTheme();
    const theme = themes.find((theme) => theme.name === config);






    const labels = getLabels(stackedData);

    return (
        <>
            <VisXYContainer data={stackedData} height={'50vh'}>
                <VisArea x={useCallback((d: DataRecord) => d.year, [])} y={formats.map((g) => useCallback((d: DataRecord) => d[g], []))} />
                <VisAxis type='x' label='Year' numTicks={10} gridLine={false} domainLine={false} />
                <VisAxis type='y' label='Revenue (USD, billions)' numTicks={10} />
                <VisXYLabels
                    x={useCallback((d: DataRecord) => (labels[d.year] ? d.year : undefined), [])}
                    y={useCallback((d: DataRecord) => labels[d.year]?.value, [])}
                    label={useCallback((d: DataRecord) => labels[d.year]?.label, [])}
                    backgroundColor={useCallback((d: DataRecord) => labels[d.year]?.color ?? 'none', [])}
                    clusterBackgroundColor="none"
                    clusterLabel={() => ''}
                />
            </VisXYContainer>
        </>
    );
}
