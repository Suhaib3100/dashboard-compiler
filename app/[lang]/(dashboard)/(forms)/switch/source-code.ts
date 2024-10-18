export const defaultSwitch = `"use client";
import { Switch } from "@/components/ui/switch";
const DefaultSwitch = () => {
  return (
    <div>
      <Switch defaultChecked />
    </div>
  );
};
export default DefaultSwitch;
`;
export const switchWithLabel = `"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
const SwitchWithLabel = () => {
  return (
    <div className="flex items-center space-x-2.5">
      <Switch id="terms15" />
      <Label
        htmlFor="terms"
        className="text-base text-muted-foreground  font-normal"
      >
        Auto update on
      </Label>
    </div>
  );
};
export default SwitchWithLabel;
`;
export const switchSize = `"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
const SwitchSize = () => {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex items-center space-x-2.5">
        <Switch size="sm" id="s1" />
        <Label
          htmlFor="s1"
          className="text-sm text-muted-foreground  font-normal"
        >
          Small
        </Label>
      </div>
      <div className="flex items-center space-x-2.5">
        <Switch size="md" id="s2" />
        <Label
          htmlFor="s2"
          className="text-base text-muted-foreground  font-normal"
        >
          Default
        </Label>
      </div>
      <div className="flex items-center space-x-2.5">
        <Switch size="lg" id="s3" />
        <Label
          htmlFor="s3"
          className="text-base text-muted-foreground  font-normal"
        >
          Large
        </Label>
      </div>
    </div>
  );
};
export default SwitchSize;
`;
export const disabledSwitch = `"use client";
import { Switch } from "@/components/ui/switch";
const DisabledSwitch = () => {
  return (
    <>
      <Switch disabled />
    </>
  );
};
export default DisabledSwitch;
`;
export const switchWithIcon = `"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Bell, Sun, Moon, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const SwitchWithIcon = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="flex gap-6 items-center">
      <Switch
        color="destructive"
        size="lg"
        startContent={<Bell className=" text-default " />}
        endContent={<Bell className=" text-default " />}
        defaultChecked
      />
      <Switch
        color="info"
        size="lg"
        startContent={<Heart className=" text-default " />}
        endContent={<Heart className=" text-default " />}
        defaultChecked
      />
      <Switch
        size="lg"
        color="dark"
        thumbClass={cn("h-6 w-6  data-[state=unchecked]:ml-0 ", {
          "bg-foreground text-background": selected,
          "bg-default": !selected,
        })}
        onCheckedChange={() => setSelected(!selected)}
        thumbIcon={
          selected ? (
            <Moon className=" stroke-background w-4 h-4" />
          ) : (
            <Sun className=" stroke-foreground w-4 h-4 " />
          )
        }
      />

      <Switch
        color="dark"
        size="lg"
        startContent={<Moon className="stroke-background w-4 h-4" />}
        endContent={<Moon className=" stroke-foreground w-4 h-4 " />}
        defaultChecked
      />
    </div>
  );
};

export default SwitchWithIcon;
`;
export const switchWithThumbIcon = `"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { BellRing, Sun, Moon, ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";

const SwitchWithThumbIcon = () => {
  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);
  return (
    <div className="flex gap-6">
      <Switch
        color="secondary"
        className="h-4 w-11 "
        thumbClass="h-6 w-6  data-[state=unchecked]:ml-0 bg-info"
        thumbIcon={<BellRing className=" stroke-background w-3 h-3" />}
      />
      <Switch
        className="h-4 w-11 "
        color="dark"
        thumbClass={cn("h-6 w-6  data-[state=unchecked]:ml-0 ", {
          "bg-foreground text-background": selected,
          "bg-foreground": !selected,
        })}
        onCheckedChange={() => setSelected(!selected)}
        thumbIcon={
          selected ? (
            <Moon className=" text-dark stroke-dark w-3 h-3 " />
          ) : (
            <Sun className=" stroke-background w-3 h-3" />
          )
        }
      />
      <Switch
        className="h-4 w-11 "
        thumbClass={cn("h-6 w-6  data-[state=unchecked]:ml-0 ", {
          "bg-background": selected1,
          "bg-foreground": !selected1,
        })}
        onCheckedChange={() => setSelected1(!selected1)}
        thumbIcon={
          selected1 ? (
            <ThumbsUp className="text-primary stroke-primary w-3 h-3 " />
          ) : (
            <ThumbsDown className=" stroke-background w-3 h-3" />
          )
        }
      />
    </div>
  );
};

export default SwitchWithThumbIcon;
`;
export const colorsSwitch = `"use client";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
const ColorsSwitch = () => {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex items-center gap-2">
        <Switch color="primary" id="switch_primary" defaultChecked />
        <Label htmlFor="switch_primary">Primary</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch color="info" id="switch_info" defaultChecked />
        <Label htmlFor="switch_info">Info</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch color="warning" id="switch_warning" defaultChecked />
        <Label htmlFor="switch_warning">Warning</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch color="success" id="switch_success" defaultChecked />
        <Label htmlFor="switch_success">Success</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch color="destructive" id="switch_destructive" defaultChecked />
        <Label htmlFor="switch_destructive">Destructive</Label>
      </div>
    </div>
  );
};
export default ColorsSwitch;
`;
export const thumbSize = `"use client";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
const ThumbSize = () => {
  return (
    <div className="flex items-center gap-6 flex-wrap">
      <div className="flex items-center gap-2">
        <Switch thumbClass="h-2 w-2  data-[state=unchecked]:ml-2 data-[state=checked]:ml-6" id="thumbsize_1" defaultChecked />
        <Label htmlFor="thumbsize_1">Size One</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch thumbClass="h-3 w-3  data-[state=unchecked]:ml-1 data-[state=checked]:ml-[22px] " id="thumbsize_2" defaultChecked />
        <Label htmlFor="thumbsize_2">Size Two</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch thumbClass="h-[14px] w-[14px]  data-[state=unchecked]:ml-1 data-[state=checked]:ml-5 " id="thumbsize_3" defaultChecked />
        <Label htmlFor="thumbsize_3">Size Three</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch thumbClass="h-4 w-4  data-[state=unchecked]:ml-1 data-[state=checked]:ml-5 " id="thumbsize_4" defaultChecked />
        <Label htmlFor="thumbsize_4">Size Four</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch thumbClass="h-[18px] w-[18px]  data-[state=unchecked]:ml-[2px] data-[state=checked]:ml-[18px] " id="thumbsize_5" defaultChecked />
        <Label htmlFor="thumbsize_5">Size Five</Label>
      </div>
    </div>
  );
};
export default ThumbSize;
`;
export const controlledSwitch = `"use client";
import  { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
const ControlledSwtich = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckedChange = value => {
    setChecked(value)
  }
  return (
    <div>
      <div className="flex items-center gap-2">
        <Switch
          onCheckedChange={handleCheckedChange}
          id="controlled_Switch"
        />
        <Label htmlFor="controlled_Switch">Designing</Label>
      </div>
      <p className="mt-3 text-default-600 text-sm">Value: {checked ? "Checked" : "Unchecked"}</p>
    </div>
  );
};
export default ControlledSwtich;
`;
export const switchWithBadge = `"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SwitchWithBadge = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex gap-2 items-center">
        <Switch
          startContent="On"
          endContent="Off"
          defaultChecked
          id="switch_badge_1"
        />
        <Label htmlFor="switch_badge_1">Enabled</Label>
      </div>
      <div className="flex gap-2 items-center">
        <Switch disabled startContent="off" endContent="Off" id="switch_badge_2" />
        <Label htmlFor="switch_badge_2">Disabled</Label>
      </div>
    </div>
  );
};

export default SwitchWithBadge;
`;
export const switchLabelPlacement = `"use client";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
const SwitchLabelPlacement = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-row-reverse gap-2 items-center ">
        <Switch id="switch_label_1" />
        <Label htmlFor="switch_label_1" >Start</Label>
      </div>
      <div className="flex items-center  gap-2 ">
        <Switch id="switch_label_2" />
        <Label htmlFor="switch_label_2" >End</Label>
      </div>
      <div className="flex flex-col-reverse justify-center items-center  gap-2">
        <Switch id="switch_label_3" />
        <Label htmlFor="switch_label_3" >Top</Label>
      </div>
      <div className="flex flex-col justify-center items-center  gap-2">
        <Switch id="switch_label_4" />
        <Label htmlFor="switch_label_4" >Bottom</Label>
      </div>
    </div>
  );
};
export default SwitchLabelPlacement;
`;
export const customStyle = `"use client";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
const CustomStyle = () => {
  return (
    <div className="flex items-center justify-between">
      <Label htmlFor="custom_style_1" >
        <h3 className="text-base font-medium text-default-600 mb-1">Enable for early access</h3>
        <p className="text-xs text-default-500">Get access my account before my account empty</p>
      </Label>
      <Switch id="custom_style_1" />
    </div>
  );
};
export default CustomStyle;
`;
export const customizedSwitch = `"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Bell, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const CustomizedSwitch = () => {
  const [selected, setSelected] = useState(false);
  const [checked, setChecked] = useState(false);
  const enabledChecked = () => setChecked(true);
  const disabledChecked = () => setChecked(false);
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Switch
        className="h-4 w-11 "
        color="dark"
        thumbClass={cn("h-6 w-6  data-[state=unchecked]:ml-0 ", {
          "bg-background text-foreground": selected,
          "bg-background": !selected,
        })}
        onCheckedChange={() => setSelected(!selected)}
        thumbIcon={
          selected ? (
            <Moon className=" stroke-background  w-3 h-3 " />
          ) : (
            <Sun className=" text-dark stroke-dark w-3 h-3" />
          )
        }
      />

      <div className="flex items-center gap-1">
        <Switch id="custom_switch_label" color="success" />
        <Label htmlFor="custom_switch_label">Switch Label</Label>
      </div>
      <Switch color="info" size="md" startContent="On" endContent="Off" />
      <Switch
        color="info"
        size="lg"
        startContent={<Bell />}
        endContent={<Bell />}
      />
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="text-base text-default-600"
          onClick={disabledChecked}
        >
          off
        </button>
        <Switch defaultChecked={checked} />
        <button
          type="button"
          className="text-base text-default-600"
          onClick={enabledChecked}
        >
          on
        </button>
      </div>
    </div>
  );
};

export default CustomizedSwitch;
`;
export const switchShadow = `"use client";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
const SwitchShadow = () => {
  return (
    <div className="flex items-center gap-7">
      <div className="flex items-center gap-4">
        <Switch
          className="h-5 w-11 shadow-sm data-[state=unchecked]:bg-background data-[state=checked]:bg-background"
          color="default"
          thumbClass="h-4 w-4  data-[state=unchecked]:ml-[3px] data-[state=checked]:ml-6 data-[state=unchecked]:bg-default-400 data-[state=checked]:bg-default-600"
          id="enabled"
          defaultChecked
        />
        <Label htmlFor="enabled">Enabled</Label>
      </div>
      <div className="flex items-center gap-4">
        <Switch
          className="h-5 w-11 shadow-md data-[state=unchecked]:bg-background data-[state=checked]:bg-background"
          color="default"
          thumbClass="h-4 w-4  data-[state=unchecked]:ml-[3px] data-[state=checked]:ml-6 data-[state=unchecked]:bg-primary/50 data-[state=checked]:bg-primary"
          id="disabled"
        />
        <Label htmlFor="disabled">Disabled</Label>
      </div>
    </div>
  );
};
export default SwitchShadow;
`;
export const switchLineStyle = `"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SwitchLineStyle = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Switch
          className="h-1 w-11 flex items-center"
          thumbClass="h-5 w-5 data-[state=checked]:ml-6 data-[state=unchecked]:ml-0"
          defaultChecked
          id="line_1"
        />
        <Label htmlFor="line_1">Enabled</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
        disabled
          className="h-1 w-11 flex items-center"
          thumbClass="h-5 w-5 data-[state=checked]:ml-6 data-[state=unchecked]:ml-0"
          id="line_2"
        />
        <Label htmlFor="line_2">Disabled</Label>
      </div>
    </div>
  );
};

export default SwitchLineStyle;
`;
export const switchWithBackground = `"use client";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
const SwitchWithBackground = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center gap-6">
      <Switch
        className="h-10 w-24 bg-cover bg-no-repeat"
        style={{ backgroundImage: \`$\{checked ? "url(/images/all-img/switch-bg-2.png)" : "url(/images/all-img/switch-bg-1.png)"}\` }}
        thumbClass="h-9 w-9  data-[state=unchecked]:ml-1 data-[state=checked]:ml-14"
        onCheckedChange={() => setChecked(!checked)}
      />
    </div>
  );
};
export default SwitchWithBackground;
`;
export const switchWithText = `"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const SwitchWithText = () => {
  const [selected, setSelected] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center gap-6">
      <Switch
        className="h-8 w-[104px] bg-default-300 data-[state=checked]:bg-default-900"
        thumbClass="h-8 w-14 text-xs font-medium text-default-600 data-[state=unchecked]:bg-default-50 data-[state=checked]:bg-default-700 data-[state=checked]:text-default-100 data-[state=unchecked]:-ml-1 data-[state=checked]:ml-12"
        thumbIcon={selected ? "Dark" : "Light"}
        onCheckedChange={() => setSelected(!selected)}
      />
      <Switch
        className="h-8 w-[104px] bg-default-300 data-[state=checked]:bg-default-900"
        thumbClass="h-8 w-14 text-xs font-medium text-default-600 data-[state=unchecked]:bg-default-50 data-[state=checked]:bg-default-700 data-[state=checked]:text-default-100 data-[state=unchecked]:-ml-1 data-[state=checked]:ml-12"
        thumbIcon={checked ? "Day" : "Night"}
        onCheckedChange={() => setChecked(!checked)}
        defaultChecked
      />
    </div>
  );
};

export default SwitchWithText;
`;
