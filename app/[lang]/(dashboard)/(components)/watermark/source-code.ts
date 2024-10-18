export const basicWatermark = `"use client";
import Card from "@/components/ui/card-snippet";
import { Watermark } from "@/components/ui/watermark";
import DemoApp from "./demo-app";

const BasicWatermark = () => {
  return (
    <React.Fragment>
      <Watermark multiline text="DashTail">
        <div className=" bg-primary text-lg text-primary-foreground rounded-lg shadow-lg  h-[500px] p-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum et
          neque esse labore nemo repellendus assumenda. Amet voluptatibus
          pariatur voluptates hic debitis et, illum officiis fuga, aliquid
          blanditiis maxime itaque deleniti repellendus at rerum sequi unde.
          Consequatur accusantium id odio.
        </div>
      </Watermark>
    </React.Fragment>
  );
};

export default BasicWatermark;
`;
export const multiLineWatermark = `"use client";

import { Watermark } from "@/components/ui/watermark";
import DemoApp from "./demo-app";

const MultiLineWatermark = () => {
  return (
    <React.Fragment>
       <Watermark gutter={60} multiline text={'Dash\nTail'}>
          <div className="bg-muted-foreground text-lg text-border  rounded-lg shadow-lg  h-[500px] p-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum et
            neque esse labore nemo repellendus assumenda. Amet voluptatibus
            pariatur voluptates hic debitis et, illum officiis fuga, aliquid
            blanditiis maxime itaque deleniti repellendus at rerum sequi unde.
            Consequatur accusantium id odio.
          </div>
        </Watermark>
    </React.Fragment>
  );
};

export default MultiLineWatermark;
`;
export const imageWaterMark = `"use client";

import { Watermark } from "@/components/ui/watermark";
import DemoApp from "./demo-app";

const ImageWaterMark = () => {
  return (
    <React.Fragment>
      <Watermark image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original">
          <div className=" text-muted-foreground text-lg bg-background h-[500px] rounded-lg shadow-[0px_0px_5px_1px_rgba(0,0,0,0.3)] p-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum et
            neque esse labore nemo repellendus assumenda. Amet voluptatibus
            pariatur voluptates hic debitis et, illum officiis fuga, aliquid
            blanditiis maxime itaque deleniti repellendus at rerum sequi unde.
            Consequatur accusantium id odio.
          </div>
        </Watermark>
    </React.Fragment>
    
  );
};

export default ImageWaterMark;
`;
export const multiFunctionalWatermark = `"use client";
import React, { useMemo, useState } from "react";
import { Watermark } from "@/components/ui/watermark";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const MultiFunctionalWatermark = () => {

  return (
    <div className=" grid grid-cols-12 gap-4">
      <div className=" col-span-8">
        <Watermark {...watermarkProps}>
          <div className="space-y-2">
            <div className="text-lg text-foreground">
              The light-speed iteration of the digital world makes products more
              complex. However, human consciousness and attention resources are
              limited. Facing this design contradiction, the pursuit of natural
              interaction will be the consistent direction of Ant Design.
            </div>
            <div className="text-lg text-foreground">
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
            <div className="text-lg text-foreground">
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
            alt="image"
          />
        </Watermark>
      </div>
      <form className=" col-span-4 space-y-6">
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
            onValueChange={(value) =>
              setConfig({
                ...config,
                gutter: parseInt(value),
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
            onValueChange={(value) =>
              setConfig({
                ...config,
                rotate: parseInt(value),
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
            min="0"
            max="1"
            step="0.1"
            onValueChange={(value) =>
              setConfig({
                ...config,
                opacity: value,
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
            max="64"
            step="4"
            onValueChange={(value) =>
              setConfig({
                ...config,
                textSize: parseInt(value),
              })
            }
          />
        </div>

        <div>
          <Label className="mb-3" htmlFor="Message">
            Select Color
          </Label>

          <Input
            value={textColor}
            className='w-12 h-12 p-0 rounded-sm cursor-pointer'
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
export default MultiFunctionalWatermark;
`;
