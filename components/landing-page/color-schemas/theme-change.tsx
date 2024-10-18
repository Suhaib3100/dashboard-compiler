import { useThemeStore } from "@/store";
import { cn } from "@/lib/utils";
import React from "react";
import { themes } from "@/config/thems";
import { useTheme } from "next-themes";
import { Check } from "lucide-react";

import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ThemeChange = () => {
  const { theme, setTheme } = useThemeStore();
  const { resolvedTheme: mode } = useTheme();
  const newTheme = themes.find((t) => t.name === theme);

  const handleThemeChange = (event: any) => {
    setTheme(event.target.value);
  };

  return (
    <div
      style={{
        "--theme-primary": `hsl(${newTheme?.cssVars[mode === "dark" ? "dark" : "light"].primary
          })`,
      } as React.CSSProperties}

    >

      <div className=" flex flex-wrap gap-7 2xl:gap-9 mt-6 justify-center">
        {[
          "zinc",
          "slate",
          "stone",
          "gray",
          "neutral",
          "red",
          "rose",
          "orange",
          "blue",
          "yellow",
          "violet",
        ].map((value) => {
          const themeObj = themes.find((theme) => theme.name === value);
          const isActive = theme === value; // Compare theme.name with value
          return (
            <TooltipProvider key={value}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <label>
                    <input
                      type="radio"
                      className="hidden"
                      value={value}
                      checked={theme === value} // Compare theme with value
                      onChange={handleThemeChange}
                    />
                    <div
                      className="flex h-10 w-10 2xl:h-14 2xl:w-14 items-center justify-center  text-xs"
                      style={{
                        "--theme-primary": `hsl(${themeObj?.activeColor[
                          mode === "dark" ? "dark" : "light"
                        ]
                          })`,
                      } as React.CSSProperties}
                    >

                      <div
                        className={cn(
                          "flex h-full w-full items-center justify-center  border-2 border-transparent rounded bg-[--theme-primary]",
                          {
                            "border-[--theme-primary]": isActive
                          }
                        )}
                      >
                        {isActive && (
                          <Check className="h-8 w-8 text-primary-foreground" />
                        )}
                      </div>

                    </div>
                  </label>
                </TooltipTrigger>
                <TooltipContent
                  align="center"
                  className="rounded-[0.5rem] bg-zinc-900 text-zinc-50  capitalize"
                >
                  {value}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeChange;
