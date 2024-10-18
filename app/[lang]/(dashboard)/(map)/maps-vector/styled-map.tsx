"use client"

import world from "./worldmap.json";
import { VectorMap } from "@south-paw/react-vector-maps";

const StyledVMap = ({ height = 350 }:{height?:number}) => {

    return (
        <div className={`w-full h-[${height}px]`} >
            <VectorMap {...world} className="h-full w-full object-cover dashtail-codevmap" />
        </div>
    );
};

export default StyledVMap;
