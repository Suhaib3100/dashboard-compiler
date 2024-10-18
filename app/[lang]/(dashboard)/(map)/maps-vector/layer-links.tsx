"use client"

import React from "react";
import world from "./worldmap.json";
import { VectorMap } from "@south-paw/react-vector-maps";

const LayerLinks = ({ height = 350 }: { height?: number }) => {
    const onClick = (event: React.MouseEvent<SVGPathElement>) => {
        const name = event.currentTarget.getAttribute('name');
        if (name) {
            window.open(`https://www.google.com/search?q=${name}%20nz`);
        }
    };

    return (
        <div className={`w-full h-[${height}px]`}>
            <VectorMap {...world} layerProps={{ onClick }} className="h-full w-full object-cover dashtail-codeVmapSuccess" />
        </div>
    );
};

export default LayerLinks;
