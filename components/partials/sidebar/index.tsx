"use client";
import React from "react";
import { useSidebar, useThemeStore } from "@/store";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import ModuleSidebar from "./module";
import PopoverSidebar from "./popover";
import ClassicSidebar from "./classic";
import MobileSidebar from "./mobile-sidebar";

const Sidebar = ({ trans }: { trans: string }) => {
  const { sidebarType, collapsed } = useSidebar();
  const { layout } = useThemeStore();

  const isDesktop = useMediaQuery("(min-width: 1280px)");

  let selectedSidebar = null;

  if (!isDesktop && (sidebarType === "popover" || sidebarType === "classic")) {
    selectedSidebar = <MobileSidebar trans={trans} />;
  } else {
    const sidebarComponents: { [key: string]: JSX.Element } = {
      module: <ModuleSidebar trans={trans} />,
      popover: <PopoverSidebar trans={trans} />,
      classic: <ClassicSidebar trans={trans} />,
    };

    selectedSidebar = sidebarComponents[sidebarType] || <ModuleSidebar trans={trans} />;
  }

  return <div>{selectedSidebar}</div>;
};

export default Sidebar;
