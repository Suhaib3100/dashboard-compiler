import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const sliderVariants = cva(
  "relative flex w-full touch-none select-none  items-center   data-[disabled]:opacity-50 data-[orientation=vertical]:w-2 data-[orientation=vertical]:h-full  data-[orientation=vertical]:flex-col   ",
  {
    variants: {
      color: {
        primary:
          "  [&_.range-thumb]:border-secondary [&_.range-thumb]:drop-shadow-sm [&_.range-thumb]:bg-primary  focus-visible:[&_.range-thumb]:bg-primary",
        info: "[&_.range]:bg-info [&_.range-thumb]:border-secondary [&_.range-thumb]:drop-shadow-sm [&_.range-thumb]:bg-info  focus-visible:[&_.range-thumb]:bg-info",
        warning:
          "[&_.range]:bg-warning [&_.range-thumb]:border-secondary [&_.range-thumb]:drop-shadow-sm [&_.range-thumb]:bg-warning  focus-visible:[&_.range-thumb]:bg-warning",
        success:
          "[&_.range]:bg-success [&_.range-thumb]:border-secondary [&_.range-thumb]:drop-shadow-sm [&_.range-thumb]:bg-success  focus-visible:[&_.range-thumb]:bg-success",
        destructive:
          "[&_.range]:bg-destructive [&_.range-thumb]:border-secondary [&_.range-thumb]:drop-shadow-sm [&_.range-thumb]:bg-destructive  focus-visible:[&_.range-thumb]:bg-destructive",
        dark: "[&_.range]:bg-default-950 [&_.range-thumb]:border-secondary [&_.range-thumb]:drop-shadow-sm [&_.range-thumb]:bg-default-950  focus-visible:[&_.range-thumb]:bg-default-950",
      },

      radius: {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-lg",
        lg: "rounded-xl",
        xl: "rounded-[20px]",
      },
      size: {
        sm: "h-1",
        md: "h-1.5",
        lg: "h-2",
        xl: "h-3 ",
      },
    },

    defaultVariants: {
      color: "primary",
      size: "lg",
      radius: "md",
    },
  }
);

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
  VariantProps<typeof sliderVariants> {
  color?: "primary" | "info" | "warning" | "success" | "destructive" | 'dark'
  showTooltip?: boolean
  showSteps?: boolean
  marks?: Array<{ value: number; label: string }>
  value?: number[]



}
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      color,
      size,
      radius,
      showTooltip,
      showSteps,
      step = 1,
      marks = [],
      ...props
    },
    ref
  ) => {
    const { max = 100, min = 0 } = props;
    const steps = showSteps ? Math.floor((max - min) / step) + 1 : 0;
    const value = props.value || props.defaultValue;
    // step props

    // tooltip value
    const [mappedValues, setMappedValues] = React.useState(() =>
      props.defaultValue !== undefined
        ? [Math.round(props.defaultValue[0] ?? 0)]
        : [0]
    );

    const getStepProps = (index: number) => {
      const innerValue = index * step + min;
      const maxMappedValue = Math.max(...mappedValues);
      const isInRange = innerValue <= maxMappedValue;

      const range = max - min;
      const percent = ((innerValue - min) / range) * 100;

      return {
        className: cn(
          "h-1.5 w-1.5 absolute rounded-full  bg-default-300/50  data-[in-range=true]:bg-background/70 top-1/2 -translate-x-1/2 -translate-y-1/2",
          {
            "h-1 w-1": size === "sm",
          }
        ),
        "data-in-range": isInRange ? "true" : "false",

        style: {
          [props.orientation === "vertical" ? "bottom" : "left"]: `${percent}%`,
        },
      };
    };
    const getMarksProps = (index: number) => {

      const mark = marks[index];
      const percent = ((mark.value - min) / (max - min)) * 100;
      const isInRange = mark.value <= max;

      return {
        className: cn("absolute    text-default-500 mt-2", {
          " top-full": props.orientation !== "vertical",
          " left-full ml-3 ": props.orientation === "vertical",
        }),
        "data-in-range": isInRange ? "true" : "false",
        style: {
          [props.orientation === "vertical" ? "top" : "left"]: `${percent}%`,
        },
      };
    };

    return (
      <>
        <SliderPrimitive.Root
          ref={ref}
          className={cn(sliderVariants({ color, size, radius }), className)}
          onValueChange={(newValues) => {

            const roundedValue = Math.round(newValues[0]);

            const newMappingValue = [roundedValue];
            setMappedValues(newMappingValue);
          }}
          {...props}
        >
          <SliderPrimitive.Track
            className={cn(
              "relative w-full grow  [&>span]:bg-primary overflow-hidden rounded-full bg-secondary h-full"
            )}
          >
            <SliderPrimitive.Range
              data-state="range"
              className={cn("absolute    range", {
                "w-full": props.orientation === "vertical",
                "h-full": props.orientation !== "vertical"
              })}
            />
            {Number.isFinite(steps) &&
              Array.from({ length: steps }, (_, index) => (
                <div key={index + 1} {...getStepProps(index)} />
              ))}
          </SliderPrimitive.Track>

          {value?.map((nn, index) => {
            return (
              <>
                {showTooltip ? (
                  <TooltipProvider disableHoverableContent>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SliderPrimitive.Thumb
                          key={`thumb-${index}`}
                          className="block h-5 w-5  cursor-pointer rounded-full border-2 range-thumb ring-offset-background transition-colors focus-visible:outline-none   disabled:pointer-events-none disabled:opacity-50 "
                        />
                      </TooltipTrigger>
                      <TooltipContent >
                        {mappedValues[index]}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <SliderPrimitive.Thumb
                    key={`thumb22-${index}`}
                    className="block h-5 w-5 cursor-pointer rounded-full ring-2 ring-background range-thumb  focus-visible:ring-4 ring-offset-background transition-colors focus-visible:outline-none   disabled:pointer-events-none disabled:opacity-50 "
                  />
                )}
              </>
            );
          })}
          {marks?.length > 0 &&
            marks.map((mark, index) => (
              <div key={`marks-${index}`} {...getMarksProps(index)}>
                {mark.label}
              </div>
            ))}
        </SliderPrimitive.Root>
      </>
    );
  }
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
