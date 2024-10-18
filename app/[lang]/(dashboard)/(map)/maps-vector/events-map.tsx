"use client"

import React, { useState } from "react";
import world from "./worldmap.json";
import { VectorMap } from "@south-paw/react-vector-maps";

const EventVMap = ({ height = 350 }: { height?: number }) => {

    const [hovered, setHovered] = useState<string>('None');
    const [focused, setFocused] = useState<string>('None');
    const [clicked, setClicked] = useState<string>('None');

    const handleMouseEnter = (event: React.MouseEvent<SVGPathElement>) => {
        setHovered(event.currentTarget.getAttribute('name') || 'None');
    };

    const handleMouseLeave = () => {
        setHovered('None');
    };

    const handleFocus = (event: React.FocusEvent<SVGPathElement>) => {
        setFocused(event.currentTarget.getAttribute('name') || 'None');
    };

    const handleBlur = () => {
        setFocused('None');
    };

    const handleClick = (event: React.MouseEvent<SVGPathElement>) => {
        setClicked(event.currentTarget.getAttribute('name') || 'None');
    };

    const layerProps = {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onClick: handleClick,
    };
    return (
        <div>
            <div className={`w-full h-[${height}px]`}>
                <VectorMap  {...world} layerProps={layerProps} className="h-full w-full object-cover dashtail-codeVmapInfo" />
            </div>
            <div className="text-center">
                <p className="text-sm font-medium text-card-foreground">Hovered: {hovered && <strong className="text-primary">{hovered}</strong>}</p>
                <p className="text-sm font-medium text-card-foreground">Focused: {focused && <strong className="text-primary">{focused}</strong>}</p>
                <p className="text-sm font-medium text-card-foreground">Clicked: {clicked && <strong className="text-primary">{clicked}</strong>}</p>
            </div>
        </div>
    )
};

export default EventVMap;