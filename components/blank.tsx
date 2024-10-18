import React from "react";
import { BlankVector } from "./svg";
import { cn } from "@/lib/utils";

interface BlankProps {
  children: React.ReactNode
  img?: React.ReactNode
  className?: string
}
const Blank = ({ children, img = <BlankVector />, className }: BlankProps) => {
  return (
    <div className={cn("text-center", className)}>
      {img && <div className=" h-[240px] w-[240px] mx-auto">{img}</div>}
      {children}
    </div>
  );
};

export default Blank;
