"use client";
import React, { useMemo, useState } from "react";
import { Watermark } from "@/components/ui/watermark";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
type Config = {
  text: string;
  textColor: string;
  opacity: number;
  gutter: number;
  rotate: number;
  textSize: number;
};

const DemoApp = () => {
  const [config, setConfig] = useState<Config>({
    text: "DashTail",
    textColor: "#FF0000",
    opacity: 0.2,
    gutter: 40,
    rotate: -45,
    textSize: 24,
  });
  const { text, textColor, gutter, rotate, opacity, textSize } = config;
  const watermarkProps = useMemo(
    () => ({
      text,
      textColor,
      gutter,
      opacity,
      rotate,
      textSize,
    }),
    [config]
  );

  return (
    <div className=" grid grid-cols-12 gap-4 md:divide-x-2 rtl:md:divide-x-reverse">
      <div className="col-span-12 md:col-span-8 order-2 md:order-none">
        <Watermark {...watermarkProps}>
          <div className="space-y-2">
            <div className="text-sm hidden md:block md:text-lg text-foreground">
              The light-speed iteration of the digital world makes products more
              complex. However, human consciousness and attention resources are
              limited. Facing this design contradiction, the pursuit of natural
              interaction will be the consistent direction of Ant Design.
            </div>
            <div className="text-sm hidden md:block md:text-lg text-foreground">
              Natural user cognition: According to cognitive psychology, about
              80% of external information is obtained through visual channels.
              The most important visual elements in the interface design,
              including layout, colors, illustrations, icons, etc., should fully
              absorb the laws of nature, thereby reducing the user&apos;s
              cognitive cost and bringing authentic and smooth feelings. In some
              scenarios, opportunely adding other sensory channels such as
              hearing, touch can create a richer and more natural product
              experience.
            </div>
            <div className="text-sm md:text-lg text-foreground">
              Natural user behavior: In the interaction with the system, the
              designer should fully understand the relationship between users,
              system roles, and task objectives, and also contextually organize
              system functions and services. At the same time, a series of
              methods such as behavior analysis, artificial intelligence and
              sensors could be applied to assist users to make effective
              decisions and reduce extra operations of users, to save
              users&apos; mental and physical resources and make human-computer
              interaction more natural.
            </div>
          </div>
          <img
            className="  relative w-full mt-3"
            src="/images/watermark/watermarkimage.jpg"
            alt="matha"
          />
        </Watermark>
      </div>
      <form className="col-span-12 md:col-span-4 space-y-6 md:ps-4 order-1 md:order-none">
        <div>
          <Label className="mb-3" htmlFor="Message">
            Watermark
          </Label>
          <Input
            placeholder="Add watermark here"
            value={text}
            onChange={(evt) =>
              setConfig({
                ...config,
                text: evt.target.value,
              })
            }
          />
        </div>
        <div>
          <Label className="mb-3" htmlFor="Message">
            Gap
          </Label>
          <Slider
            defaultValue={[gutter]}
            max={150}
            step={1}
            onValueChange={(value: number[]) =>
              setConfig({
                ...config,
                gutter: parseInt(value[0].toString(), 10),
              })
            }
          />
        </div>
        <div>
          <Label className="mb-3" htmlFor="Message">
            Rotation
          </Label>
          <Slider
            defaultValue={[rotate]}
            max={360}
            step={1}
            onValueChange={(value: number[]) =>
              setConfig({
                ...config,
                rotate: parseInt(value[0].toString(), 10),
              })
            }
          />
        </div>
        <div>
          <Label className="mb-3" htmlFor="Message">
            Opacity
          </Label>

          <Slider
            defaultValue={[opacity]}
            min={0}
            max={1}
            step={0.1}
            onValueChange={(value: number[]) =>
              setConfig({
                ...config,
                opacity: parseFloat(value[0].toString()),
              })
            }
          />
        </div>

        <div>
          <Label className="mb-3" htmlFor="Message">
            Text Size
          </Label>
          <Slider
            defaultValue={[textSize]}
            max={64}
            step={4}
            onValueChange={(value) =>
              setConfig({
                ...config,
                textSize: parseInt(value[0].toString(), 10),
              })
            }
          />
        </div>
        <div>
          <Label className="mb-3" htmlFor="Message">Select Color</Label>
          <Input
            value={textColor}
            className="w-12 h-12 p-0 rounded-sm cursor-pointer"
            type="color"
            onChange={(evt) =>
              setConfig({
                ...config,
                textColor: evt.target.value,
              })
            }
          />
        </div>
      </form>
    </div>
  );
};
export default DemoApp;
