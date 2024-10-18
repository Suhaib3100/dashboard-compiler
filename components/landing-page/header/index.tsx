"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { SiteLogo } from "@/components/svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeButton from "@/components/partials/header/theme-button";
import NavMenu from "./nav-menu";
import { Icon } from "@iconify/react";
import { menus } from "./../data";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
const Header = () => {

  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = React.useState<boolean>(false);
  const [show, setShow] = React.useState<boolean>(false);
  if (!isDesktop) {
    return (
      <>
        <div className={scroll ? "bg-card/50 dark:bg-card/70 backdrop-blur-lg z-50 shadow-sm fixed top-0 left-0 w-full py-3" : "fixed top-0 left-0 w-full py-3"}>
          <nav className="container flex justify-between relative z-50">
            <Link href="/" className="flex items-center gap-1">
              <SiteLogo className="h-8 w-8  text-primary" />
              <span className="text-primary-500 font-medium text-xl">
                DashTail
              </span>
            </Link>

            <div className="flex items-center gap-6">
              <ThemeButton />
              <Button asChild size="sm">
                <Link href="https://1.envato.market/dashtail-regular" target="__blank" className="text-sm font-semibold">
                  <Icon
                    icon="heroicons:shopping-cart"
                    className="w-4 h-4 mr-1.5"
                  />
                  Buy Now
                </Link>
              </Button>
              <button type="button">
                <Menu
                  className=" h-6 w-6 cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
              </button>
            </div>
            {open && (
              <div className="absolute top-full bg-background rounded-md p-4 w-full shadow-md">
                <ul className=" space-y-1.5">
                  {menus?.map((item, i) => (
                    item.child ?
                      <div className="space-y-1.5">

                        <div
                          className=" flex items-center justify-between pr-4   cursor-pointer group"
                          onClick={() => setShow(!show)}
                        >
                          <span className="text-base font-medium text-default-600">
                            {item.title}
                          </span>
                          <ChevronDown
                            className={cn("relative top-[1px] ml-1 h-4 w-4 transition duration-200", {
                              "rotate-180": show
                            })}
                          />
                        </div>
                        <ul className="space-y-1.5">
                          {item.child.map((childItem, index) => (
                            <li
                              className={cn(" block text-base font-medium text-default-600 hover:text-primary", {
                                "hidden": !show
                              })}
                              key={`child-item-${index}`}
                            >
                              <a href={childItem.href}
                                target="_blank"
                              >
                                {childItem.title}
                              </a>
                            </li>
                          ))
                          }
                        </ul>
                      </div>
                      :
                      <li key={`main-item-${i}`} className=" block text-base font-medium text-default-600 hover:text-primary">
                        <a href={item.href} onClick={() => setOpen(false)}>
                          {item.title}
                        </a>
                      </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>
        </div>
      </>
    );
  }
  return (
    <div className={scroll ? "bg-card/50 backdrop-blur-lg shadow-xl z-30 dark:bg-card/70 fixed top-0 left-0 w-full py-3" : " z-30 fixed top-0 left-0 w-full py-3"}>
      <nav className="container flex justify-between">
        <Link target="_blank" href="/dashboard" className="flex items-center gap-1">
          <SiteLogo className="h-8 w-8  text-primary" />
          <span className="text-primary-500 font-medium text-xl">DashTail</span>
        </Link>
        <NavMenu />
        <div className="flex items-center gap-6">
          <ThemeButton />
          <Button asChild size="sm">
            <Link href="https://1.envato.market/dashtail-regular" target="__blank" className="text-sm font-semibold">
              <Icon icon="heroicons:shopping-cart" className="w-4 h-4 me-1.5" />
              Buy Now
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
