export const defaultCheckbox = `"use client";
import { Checkbox } from "@/components/ui/checkbox";
const DefaultCheckbox = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      <Checkbox defaultChecked id="default_1">
        Right
      </Checkbox>
      <Checkbox id="default_2">
        Wrong
      </Checkbox>
    </div>
  );
};

export default DefaultCheckbox;
`;
export const disabledCheckbox = `"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const DisabledCheckbox = () => {

  return (
    <div className="flex gap-6">
      <div className="flex items-center space-x-2.5">
        <Checkbox defaultChecked id="rd-1" disabled>
          Left
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox id="rd-2" disabled>
          Right
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="rd_ex" />
        <label
          htmlFor="rd_ex"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </div>
  );
};

export default DisabledCheckbox;
`;
export const sizeCheckbox = `"use client";

import { Checkbox } from "@/components/ui/checkbox";

const SizeCheckbox = () => {
  return (
    <div className="flex gap-6">
      <Checkbox defaultChecked size="xs" id="ck-xs">
        Extra-Small
      </Checkbox>
      <Checkbox size="sm" id="ck-sm" defaultChecked>
        Small
      </Checkbox>
      <Checkbox size="md" id="ck-md" defaultChecked>
        Default
      </Checkbox>
      <Checkbox size="lg" id="ck-lg" defaultChecked>
        Large
      </Checkbox>
      <Checkbox size="xl" id="ck-xl" defaultChecked>
        Extra-Large
      </Checkbox>
    </div>
  );
};

export default SizeCheckbox;
`;
export const filledCheckbox = `"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const FilledCheckbox = () => {
  return (
    <div>
      <div className="flex gap-6">
        <div className="flex items-center space-x-2.5">
          <Checkbox defaultChecked variant="filled" id="fill_1">
            Right
          </Checkbox>
        </div>
        <div className="flex items-center space-x-2.5">
          <Checkbox variant="filled" id="fill_2" />
          <Label
            htmlFor="fill_2"
            className="text-base text-muted-foreground font-normal"
          >
            Wrong
          </Label>
        </div>
      </div>
    </div>
  );
};

export default FilledCheckbox;
`;
export const circleCheckbox = `"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const CircleCheckbox = () => {
  return (
    <div className="flex gap-6">
      <div className="flex items-center space-x-2.5">
        <Checkbox defaultChecked radius="xl" color="success" id="circle_11">
          Right
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox radius="xl" color="success" id="circle_12" />
        <Label
          htmlFor="circle_12"
          className="text-base text-muted-foreground font-normal"
        >
          Wrong
        </Label>
      </div>
    </div>
  );
};

export default CircleCheckbox;
`;
export const outlineCheckbox = `"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const OutlineCheckbox = () => {
  return (
    <div className="flex gap-6">
      <div className="flex items-center space-x-2.5">
        <Checkbox variant="outline" defaultChecked id="outline_1">
          Right
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox variant="outline" id="outline_2" />
        <Label
          htmlFor="outline_2"
          className="text-base text-muted-foreground font-normal"
        >
          Wrong
        </Label>
      </div>
    </div>
  );
};

export default OutlineCheckbox;
`;
export const outlineFilledCheckbox = `"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const OutlineFilledCheckbox = () => {
  return (
    <div className="flex gap-6">
      <div className="flex items-center space-x-2.5">
        <Checkbox defaultChecked variant="filled-outline" id="filled_outline_15">
          Right
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox variant="filled-outline" id="filled_outline_16" />
        <Label
          htmlFor="filled_outline_16"
          className="text-base text-muted-foreground font-normal"
        >
          Wrong
        </Label>
      </div>
    </div>
  );
};

export default OutlineFilledCheckbox;
`;
export const outlineCircleCheckbox = `"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const OutlineCircleCheckbox = () => {
  return (
    <div className="flex gap-6">
      <div className="flex items-center space-x-2.5">
        <Checkbox
          defaultChecked
          radius="xl"
          variant="outline"
          id="outline_circle_17"
        >
          Right
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox radius="xl" variant="outline" id="outline_circle_18" />
        <Label
          htmlFor="outline_circle_18"
          className="text-base text-muted-foreground font-normal"
        >
          Wrong
        </Label>
      </div>
    </div>
  );
};

export default OutlineCircleCheckbox;
`;
export const checkboxRight = `"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const CheckboxRight = () => {
  return (
    <div className="flex gap-6">
      <div className="flex items-center space-x-2.5">
        <Label
          htmlFor="right_label_19"
          className="text-base text-muted-foreground font-normal"
        >
          Right
        </Label>
        <Checkbox defaultChecked id="right_label_19" />
      </div>
      <div className="flex items-center space-x-2.5">
        <Label
          htmlFor="right_label_20"
          className="text-base text-muted-foreground font-normal"
        >
          Wrong
        </Label>
        <Checkbox id="right_label_20" />
      </div>
    </div>
  );
};

export default CheckboxRight;
`;
export const colorsCheckbox = `"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ColorsCheckbox = () => {
  return (
    <div className="flex gap-6">
      <div className="flex items-center space-x-2.5">
        <Checkbox defaultChecked color="default" id="color_4">
          Primary
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox defaultChecked color="destructive" id="color_5">
          Danger
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox defaultChecked color="warning" id="color_6">
          Warning
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox defaultChecked color="success" id="color_7">
          Success
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox defaultChecked color="info" id="color_8">
          Info
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox defaultChecked color="dark" id="color_9" />
        <Label
          htmlFor="color_9"
          className="text-lg text-muted-foreground font-normal"
        >
          Black
        </Label>
      </div>
    </div>
  );
};

export default ColorsCheckbox;
`;
export const colorOutlineCheckbox = `"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ColorOutlineCheckbox = () => {
  return (
    <div className="flex gap-6">
      <div className="flex items-center space-x-2.5">
        <Checkbox
          defaultChecked
          variant="outline"
          color="default"
          id="color_outline_21"
        >
          Primary
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox defaultChecked  variant="outline" color="destructive" id="color_outline_25">
          Danger
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox defaultChecked  variant="outline" color="warning" id="color_outline_26">
          Warning
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox defaultChecked  variant="outline" color="success" id="color_outline_27">
          Success
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox defaultChecked  variant="outline" color="info" id="color_outline_28" />
        <Label
          htmlFor="color_outline_28"
          className="text-base text-muted-foreground font-normal"
        >
          info
        </Label>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox defaultChecked  variant="outline" color="dark" id="color_outline_29">
          Black
        </Checkbox>
      </div>
    </div>
  );
};

export default ColorOutlineCheckbox;
`;
export const radiusCheckbox = `"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const RadiusCheckbox = () => {
  return (
    <div className="flex gap-6">
      <div className="flex items-center space-x-2.5">
        <Checkbox defaultChecked radius="none" id="circle_34">
          None
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox radius="sm" id="circle_35">
          Small
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox radius="base" id="circle_36">
          Default
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox radius="lg" id="circle_38">
          Large
        </Checkbox>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox radius="xl" id="circle_48" />
        <Label
          htmlFor="circle_48"
          className="text-lg text-muted-foreground font-normal"
        >
          Full
        </Label>
      </div>
    </div>
  );
};

export default RadiusCheckbox;
`;
export const iconsCheckbox = `"use client";
import React from "react";
import { Check, Heart, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const IconsCheckbox = () => {
  return (
    <div className=" space-y-5">
      {" "}
      <div className="flex space-x-4 items-center ">
        <Checkbox defaultChecked id="custom_icon" icon={<Check />}>
          Right
        </Checkbox>
        <Checkbox id="custom_icon_4" icon={<X />}>
          Wrong
        </Checkbox>
      </div>
      <div className="flex space-x-4 items-center ">
        <Checkbox
          id="custom_icon_3"
          color="default"
          defaultChecked
          variant="outline"
          size="xs"
          icon={<Heart />}
        />
        <Checkbox
          defaultChecked
          id="custom_icon_9"
          color="success"
          variant="outline"
          size="sm"
          icon={<Heart />}
        />
        <Checkbox
          defaultChecked
          id="custom_icon_10"
          color="info"
          variant="outline"
          size="md"
          icon={<Heart />}
        />
        <Checkbox
          defaultChecked
          id="custom_icon_11"
          color="dark"
          variant="outline"
          size="lg"
          icon={<Heart />}
        />
        <Checkbox
          defaultChecked
          id="custom_icon_12"
          color="destructive"
          variant="outline"
          size="xl"
          icon={<Heart />}
        />
      </div>
      <div className="flex space-x-4 items-center ">
        <Checkbox
          id="custom_icon_13"
          color="default"
          defaultChecked
          icon={<Heart />}
          size="xs"
        />
        <Checkbox
          defaultChecked
          id="custom_icon_14"
          color="success"
          icon={<Heart />}
          size="sm"
        />
        <Checkbox
          defaultChecked
          id="custom_icon_15"
          color="info"
          icon={<Heart />}
          size="md"
        />
        <Checkbox
          defaultChecked
          id="custom_icon_16"
          color="dark"
          icon={<Heart />}
          size="lg"
        />
        <Checkbox
          defaultChecked
          id="custom_icon_17"
          color="destructive"
          icon={<Heart />}
          size="xl"
        />
      </div>
      <div className="flex space-x-2.5 items-center">
        <Checkbox
          id="custom_icon_8"
          defaultChecked
          disabled
          color="success"
          icon={<Check />}
        >
          Right
        </Checkbox>
        <Checkbox
          id="custom_icon_8"
          defaultChecked
          disabled
          color="destructive"
          icon={<X />}
        >
          Wrong
        </Checkbox>
      </div>
    </div>
  );
};

export default IconsCheckbox;
`;
export const optionArrayCheckbox = `"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const OptionArrayCheckbox = () => {
  const [selected, setSelected] = React.useState([]);
  const options = [
    {
      value: "orange",
      label: "Orange",
    },
    {
      value: "apple",
      label: "Apple",
    },
    {
      value: "banana",
      label: "Banana",
    },
  ];
  return (
    <div className="space-y-5">
      <div className="flex items-center space-x-2.5">
        {options.map((option, i) => (
          <Checkbox
            key={i}
            value={selected.includes(option.value)}
            onCheckedChange={() => {
              if (selected.includes(option.value)) {
                setSelected(selected.filter((item) => item !== option.value));
              } else {
                setSelected([...selected, option.value]);
              }
            }}
            id={i}
          >
            {option.label}
          </Checkbox>
        ))}
      </div>

      {selected.length > 0 && (
        <div className="text-muted-foreground ">
          Selected: [{selected.join(", ")}]
        </div>
      )}
    </div>
  );
};

export default OptionArrayCheckbox;
`;
export const controlledCheckbox = `"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const ControlledCheckbox = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <div>
      <div className="space-y-5">
        <div className="flex items-center space-x-2.5">
          <Checkbox
            onCheckedChange={() => setIsSelected(!isSelected)}
            id="option_38"
          >
            Large
          </Checkbox>
        </div>
        <p className="text-default-500">
          Selected: {isSelected ? "true" : "false"}
        </p>
      </div>
    </div>
  );
};

export default ControlledCheckbox;
`;
export const lineThroughCheckbox = `"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const LineThroughCheckbox = () => {
  return (
    <div className="flex items-center space-x-2.5">
      <Checkbox id="line_through_5" defaultChecked lineThrough>
        line through
      </Checkbox>
      <Checkbox id="line_through_6" lineThrough>
        line through
      </Checkbox>
    </div>
  );
};

export default LineThroughCheckbox;
`;
export const labelSlotCheckbox = `"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const LabelSlotCheckbox = () => {
  return (
    <div>
      <div className="flex items-center space-x-2.5">
        <Checkbox id="label_slot_11"  color="success"/>
        <Label
          htmlFor="label_slot_11"
          className="text-base text-muted-foreground font-normal"
        >
          I agree with your{" "}
          <span className="text-success">Privacy Policy</span>
        </Label>
      </div>
    </div>
  );
};

export default LabelSlotCheckbox;
`;
export const horizontalCheckbox = `"use client";
import { Checkbox } from "@/components/ui/checkbox";
const HorizontalCheckbox = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      <Checkbox defaultChecked id="hr_1">
        Bangla
      </Checkbox>
      <Checkbox id="hr_2">
        English
      </Checkbox>
      <Checkbox id="hr_3">
        Mathmatics
      </Checkbox>
      <Checkbox id="hr_4">
        Physics
      </Checkbox>
      <Checkbox id="hr_5">
        Chemistry
      </Checkbox>
      <Checkbox id="hr_6">
        Biology
      </Checkbox>
    </div>
  );
};

export default HorizontalCheckbox;
`;
export const verticalCheckbox = `"use client";
import { Checkbox } from "@/components/ui/checkbox";
const VerticalCheckbox = () => {
  return (
    <div className="flex flex-col gap-6 flex-wrap">
      <Checkbox defaultChecked id="vr_1">
        Bangla
      </Checkbox>
      <Checkbox id="vr_2">
        English
      </Checkbox>
      <Checkbox id="vr_3">
        Mathmatics
      </Checkbox>
      <Checkbox id="vr_4">
        Physics
      </Checkbox>
      <Checkbox id="vr_5">
        Chemistry
      </Checkbox>
      <Checkbox id="vr_6">
        Biology
      </Checkbox>
    </div>
  );
};

export default VerticalCheckbox;
`;
export const customImplementation = `"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";


const CustomImplementation = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected1, setIsSelected1] = useState(false);
  return (
    <>
      <div
        className={cn(
          " rounded-lg border p-4  w-full transition-all duration-200",
          {
            "border-success": isSelected,
          }
        )}
      >
        <Checkbox
          id="custom_11"
          className="space-x-3"
          color="success"
          onCheckedChange={() => setIsSelected(!isSelected)}
        >
          <div className="flex  items-center gap-5 ">
            <div className="flex flex-1 gap-5 items-center">
              <Avatar>
                <AvatarImage src={faker.image.avatarLegacy()} alt="" />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <div className=" space-y-1">
                <h4 className=" font-medium text-default-800">
                  Jeneefer Acnoladge
                </h4>
                <div className=" text-sm text-default-600 font-normal">
                  UX/UI Designer
                </div>
              </div>
            </div>
            <div className="flex-none">
              <Badge color={isSelected ? "success" : "secondary"} variant={isSelected ? "soft" : "default"}>
                <span
                  className={cn("h-2 w-2 rounded-md mr-2 ", {
                    "bg-default-400": !isSelected,
                    "bg-success": isSelected,
                  })}
                ></span>
                {
                  isSelected ? "Active Now" : "Inactive"
                }
              </Badge>
            </div>
          </div>
        </Checkbox>
      </div>
      <div
        className={cn(
          " rounded-lg border p-4  w-full transition-all duration-200",
          {
            "border-success": isSelected1,
          }
        )}
      >
        <Checkbox
          id="custom_12"
          className="space-x-3"
          color="success"
          onCheckedChange={() => setIsSelected1(!isSelected1)}
        >
          <div className="flex  items-center gap-5 ">
            <div className="flex flex-1 gap-5 items-center">
              <Avatar>
                <AvatarImage src={faker.image.avatarLegacy()} alt="" />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <div className=" space-y-1">
                <h4 className=" font-medium text-default-800">
                  Jeneefer Acnoladge
                </h4>
                <div className=" text-sm text-default-600 font-normal">
                  UX/UI Designer
                </div>
              </div>
            </div>
            <div className="flex-none">
              <Badge color={isSelected1 ? "success" : "secondary"} variant={isSelected1 ? "soft" : "default"}>
                <span
                  className={cn("h-2 w-2 rounded-md mr-2 ", {
                    "bg-default-400": !isSelected1,
                    "bg-success": isSelected1,
                  })}
                ></span>
                {
                  isSelected1 ? "Active Now" : "Inactive"
                }
              </Badge>
            </div>
          </div>
        </Checkbox>
      </div>
    </>
  );
};

export default CustomImplementation;
`;
export const accessibleCheckbox = `"use client"
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const AccessibleCheckbox = () => {
  const [isSelectedCb1, setIsSelectedCb1] = useState(true);
  const [isSelectedCb2, setIsSelectedCb2] = useState(false);
  const [isSelectedCb3, setIsSelectedCb3] = useState(false);
  const [isSelectedCb4, setIsSelectedCb4] = useState(false);
  return (
    <div className="flex items-center flex-wrap gap-6">
      <div className={cn("bg-default-100  h-8 px-2 rounded-md inline-flex flex-col justify-center", {
        "bg-primary/10": isSelectedCb1
      })}>
        <Checkbox
          id="accb1"
          color="success"
          onCheckedChange={() => setIsSelectedCb1(!isSelectedCb1)}
          defaultChecked
        >
          <span className={cn("text-default-600", { "text-primary": isSelectedCb1 })}>Travelling</span>
        </Checkbox>
      </div>

      <div className={cn("bg-default-100  h-8 px-2 rounded-md inline-flex flex-col justify-center", {
        "bg-info/10": isSelectedCb2
      })}>
        <Checkbox
          id="accb2"
          color="info"
          onCheckedChange={() => setIsSelectedCb2(!isSelectedCb2)}

        >
          <span className={cn("text-default-600", { "text-info": isSelectedCb2 })}>Working</span>
        </Checkbox>
      </div>
      <div className={cn("bg-default-100  h-8 px-2 rounded-md inline-flex flex-col justify-center", {
        "bg-success/10": isSelectedCb3
      })}>
        <Checkbox
          id="accb3"
          color="success"
          onCheckedChange={() => setIsSelectedCb3(!isSelectedCb3)}

        >
          <span className={cn("text-default-600", { "text-success": isSelectedCb3 })}>Walking</span>
        </Checkbox>
      </div>
      <div className={cn("bg-default-100  h-8 px-2 rounded-md inline-flex flex-col justify-center", {
        "bg-destructive/10": isSelectedCb4
      })}>
        <Checkbox
          id="accb4"
          color="destructive"
          onCheckedChange={() => setIsSelectedCb4(!isSelectedCb4)}
          icon={<X />}
        >
          <span className={cn("text-default-600", { "text-destructive": isSelectedCb4 })}>Gaming</span>
        </Checkbox>
      </div>
    </div >
  );
};

export default AccessibleCheckbox;`;
export const checkboxWithBackground = `"use client"
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
const CheckboxWithBackground = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  return (
    <div className="space-y-5">

      <Label htmlFor="cbbg1" className={cn("bg-default-100  h-10 px-2 rounded-md w-full flex justify-between items-center", {
        "bg-primary": checked1
      })}>
        <span className={cn("text-default-600", { "text-primary-foreground": checked1 })}>I'm number one.</span>

        <Checkbox id="cbbg1" color="success" defaultChecked onCheckedChange={() => setChecked1(!checked1)}
        />
      </Label>
      <Label htmlFor="cbbg2" className={cn("bg-default-100  h-10 px-2 rounded-md w-full flex justify-between items-center", {
        "bg-primary": checked2
      })}>
        <span className={cn("text-default-600", { "text-primary-foreground": checked2 })}>I'm number two.</span>

        <Checkbox id="cbbg2" color="success" onCheckedChange={() => setChecked2(!checked2)}
        />
      </Label>


    </div >
  );
};

export default CheckboxWithBackground;`;
export const labelPlacement = `"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const LabelPlacement = () => {
  return (
    <div className="flex gap-8  flex-wrap">
      <div className="flex items-center gap-3">
        <Label htmlFor="lp_1" >Start</Label>
        <Checkbox id="lp_1" />
      </div>
      <div className="flex flex-row-reverse items-center gap-3">
        <Label htmlFor="lp_2" >End</Label>
        <Checkbox id="lp_2" />
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <Label htmlFor="lp_3" >Top</Label>
        <Checkbox id="lp_3" />
      </div>
      <div className="flex  flex-col-reverse justify-center items-center gap-3">
        <Label htmlFor="lp_4" >Bottom</Label>
        <Checkbox id="lp_4" />
      </div>
    </div>
  );
};

export default LabelPlacement;
`;
export const customStyledCheckbox = `"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
const CustomStyledCheckbox = () => {
  const [checked1, setchecked1] = useState(false);
  const [checked2, setchecked2] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-6">

      <Label
        className={cn("flex justify-between items-center w-full   p-4 rounded-md border border-transparent",
          {
            "border-success": checked1
          }
        )} htmlFor="csc_1"
      >
        <div className="flex items-center gap-3 ">
          <Checkbox value="csc_1" id="csc_1" color="success" onCheckedChange={() => setchecked1(!checked1)} />
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={faker.image.avatarLegacy()} alt="" />
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium text-base text-default-800">Jeneefer Acnoladge</h4>
              <p className="text-sm font-semibold text-default-600">UX/UI Designer</p>
            </div>
          </div>
        </div>
        <button type="button" className="bg-default-200 h-6 px-2 flex items-center gap-1 rounded-md ">
          <span className={cn("h-1.5 w-1.5 rounded-full bg-default-400", {

            "bg-success": checked1

          })}></span>
          {
            checked1 ? <span className="text-xs text-success">Active Now</span> : <span className="text-xs text-default-600">Inactive</span>
          }
        </button>
      </Label>

      <Label
        className={cn("flex justify-between items-center w-full   p-4 rounded-md border border-transparent",
          {
            "border-success": checked2
          }
        )} htmlFor="csc_2"
      >
        <div className="flex items-center gap-3 ">
          <Checkbox value="csc_2" id="csc_2" color="success" onCheckedChange={() => setchecked2(!checked2)} />
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={faker.image.avatarLegacy()} alt="" />
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium text-base text-default-800">Jeneefer Acnoladge</h4>
              <p className="text-sm font-semibold text-default-600">UX/UI Designer</p>
            </div>
          </div>
        </div>
        <button type="button" className="bg-default-200 h-6 px-2 flex items-center gap-1 rounded-md ">
          <span className={cn("h-1.5 w-1.5 rounded-full bg-default-400", {

            "bg-success": checked2

          })}></span>
          {
            checked2 ? <span className="text-xs text-success">Active Now</span> : <span className="text-xs text-default-600">Inactive</span>
          }
        </button>
      </Label>

    </div >
  );
};

export default CustomStyledCheckbox;
`;
export const groupedLabelCheckbox = `"use client"
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

import book1 from "@/public/images/all-img/book-1.png"
import book2 from "@/public/images/all-img/book-2.png"
import book3 from "@/public/images/all-img/book-3.png"
import book4 from "@/public/images/all-img/book-4.png"
import book5 from "@/public/images/all-img/book-5.png"

const GroupedLabelCheckbox = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  return (
    <div>
      <h3 className="text-xl font-medium text-default-800 mb-5">Choose your favorite subject</h3>
      <div className="flex flex-wrap gap-6">
        <Label htmlFor="cbg_1">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": checked1
          })}>
            <Checkbox
              value="cbg_1"
              id="cbg_1"
              radius="xl"
              variant="outline"
              onCheckedChange={() => setChecked1(!checked1)}
              defaultChecked
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked1
              })} />
            <div className="h-16 w-16">
              <Image src={book1} alt="image" className="h-full w-full object-cover" />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">English</span>
          </div>
        </Label>

        <Label
          htmlFor="cbg_3">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": checked3
          })}>
            <Checkbox
              id="cbg_3"
              radius="xl"
              variant="outline"
              onCheckedChange={() => setChecked3(!checked3)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked3
              })} />
            <div className="h-16 w-16">
              <Image src={book2} alt="image" className="h-full w-full object-cover" />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Physics</span>
          </div>
        </Label>
        <Label
          htmlFor="chbg_4">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": checked4
          })}>
            <Checkbox
              id="chbg_4"
              radius="xl"
              variant="outline"
              onCheckedChange={() => setChecked4(!checked4)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked4
              })} />
            <div className="h-16 w-16">
              <Image src={book3} alt="image" className="h-full w-full object-cover" />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Biology</span>
          </div>
        </Label>
        <Label
          htmlFor="chbg_5">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": checked5
          })}>
            <Checkbox
              id="chbg_5"
              radius="xl"
              variant="outline"
              onCheckedChange={() => setChecked5(!checked5)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked5
              })} />
            <div className="h-16 w-16">
              <Image src={book4} alt="image" className="h-full w-full object-cover" />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Social Science</span>
          </div>
        </Label>
        <Label
          htmlFor="chbg_6">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": checked6
          })}>
            <Checkbox
              id="chbg_6"
              radius="xl"
              variant="outline"
              onCheckedChange={() => setChecked6(!checked6)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked6
              })} />
            <div className="h-16 w-16">
              <Image src={book5} alt="image" className="h-full w-full object-cover" />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Computer Tech</span>
          </div>
        </Label>

      </div>

    </div>
  );
};

export default GroupedLabelCheckbox;`;
export const checkboxCards = `"use client"
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";

import rd1 from "@/public/images/all-img/rd-1.jpg"
import rd2 from "@/public/images/all-img/rd-2.png"
import rd3 from "@/public/images/all-img/rd-3.png"
import rd4 from "@/public/images/all-img/rd-4.png"
import rd5 from "@/public/images/all-img/rd-5.png"
import rd6 from "@/public/images/all-img/rd-6.png"
import Image from "next/image";

const CheckboxCards = () => {
  const [checked1, setchecked1] = useState(true);
  const [checked2, setchecked2] = useState(false);
  const [checked3, setchecked3] = useState(false);
  const [checked4, setchecked4] = useState(false);
  const [checked5, setchecked5] = useState(false);
  const [checked6, setchecked6] = useState(false);
  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-5">
        <Label htmlFor="cbcard1">
          <div
            className={cn(
              "bg-default-100 flex flex-col justify-center items-center rounded-md relative border-2 border-transparent",
              {
                "border-primary ": checked1,
              }
            )}
          >
            <Checkbox
              value="cbcard1"
              id="cbcard1"
              radius="xl"
              variant="outline"
              defaultChecked
              onCheckedChange={() => setchecked1(!checked1)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked1,
              })}
            />
            <div>
              <div className="h-[114px] w-full mb-2">
                <Image
                  src={rd1}
                  className="w-full h-full object-cover rounded-t-sm"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-semibold text-default-500">
                  This is a banana. Banana is yellow
                </h4>
                <p className="mt-2 text-xs text-default-500">
                  A banana is a curved, yellow fruit with a thick skin and soft
                  sweet flesh.
                </p>
              </div>
            </div>
          </div>
        </Label>
        <Label htmlFor="cbcard2">
          <div
            className={cn(
              "bg-default-100 flex flex-col justify-center items-center rounded-md relative border-2 border-transparent",
              {
                "border-primary ": checked2,
              }
            )}
          >
            <Checkbox
              value="cbcard2"
              id="cbcard2"
              radius="xl"
              variant="outline"
              onCheckedChange={() => setchecked2(!checked2)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked2,
              })}
            />
            <div>
              <div className="h-[114px] w-full mb-2">
                <Image
                  src={rd2}
                  className="w-full h-full object-cover rounded-t-sm"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-semibold text-default-500">
                  This is a banana. Banana is yellow
                </h4>
                <p className="mt-2 text-xs text-default-500">
                  A banana is a curved, yellow fruit with a thick skin and soft
                  sweet flesh.
                </p>
              </div>
            </div>
          </div>
        </Label>
        <Label htmlFor="cbcard3">
          <div
            className={cn(
              "bg-default-100 flex flex-col justify-center items-center rounded-md relative border-2 border-transparent",
              {
                "border-primary ": checked3,
              }
            )}
          >
            <Checkbox
              value="cbcard3"
              id="cbcard3"
              radius="xl"
              variant="outline"
              onCheckedChange={() => setchecked3(!checked3)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked3,
              })}
            />
            <div>
              <div className="h-[114px] w-full mb-2">
                <Image
                  src={rd3}
                  className="w-full h-full object-cover rounded-t-sm"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-semibold text-default-500">
                  This is a banana. Banana is yellow
                </h4>
                <p className="mt-2 text-xs text-default-500">
                  A banana is a curved, yellow fruit with a thick skin and soft
                  sweet flesh.
                </p>
              </div>
            </div>
          </div>
        </Label>
        <Label htmlFor="cbcard4">
          <div
            className={cn(
              "bg-default-100 flex flex-col justify-center items-center rounded-md relative border-2 border-transparent",
              {
                "border-primary ": checked4,
              }
            )}
          >
            <Checkbox
              value="cbcard4"
              id="cbcard4"
              radius="xl"
              variant="outline"
              onCheckedChange={() => setchecked4(!checked4)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked4,
              })}
            />
            <div>
              <div className="h-[114px] w-full mb-2">
                <Image
                  src={rd4}
                  className="w-full h-full object-cover rounded-t-sm"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-semibold text-default-500">
                  This is a banana. Banana is yellow
                </h4>
                <p className="mt-2 text-xs text-default-500">
                  A banana is a curved, yellow fruit with a thick skin and soft
                  sweet flesh.
                </p>
              </div>
            </div>
          </div>
        </Label>
        <Label htmlFor="cbcard5">
          <div
            className={cn(
              "bg-default-100 flex flex-col justify-center items-center rounded-md relative border-2 border-transparent",
              {
                "border-primary ": checked5,
              }
            )}
          >
            <Checkbox
              value="cbcard5"
              id="cbcard5"
              radius="xl"
              variant="outline"
              onCheckedChange={() => setchecked5(!checked5)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked5,
              })}
            />
            <div>
              <div className="h-[114px] w-full mb-2">
                <Image
                  src={rd5}
                  className="w-full h-full object-cover rounded-t-sm"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-semibold text-default-500">
                  This is a banana. Banana is yellow
                </h4>
                <p className="mt-2 text-xs text-default-500">
                  A banana is a curved, yellow fruit with a thick skin and soft
                  sweet flesh.
                </p>
              </div>
            </div>
          </div>
        </Label>
        <Label htmlFor="cbcard6">
          <div
            className={cn(
              "bg-default-100 flex flex-col justify-center items-center rounded-md relative border-2 border-transparent",
              {
                "border-primary ": checked6,
              }
            )}
          >
            <Checkbox
              value="cbcard6"
              id="cbcard6"
              radius="xl"
              variant="outline"
              onCheckedChange={() => setchecked6(!checked6)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked6,
              })}
            />
            <div>
              <div className="h-[114px] w-full mb-2">
                <Image
                  src={rd6}
                  className="w-full h-full object-cover rounded-t-sm"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-semibold text-default-500">
                  This is a banana. Banana is yellow
                </h4>
                <p className="mt-2 text-xs text-default-500">
                  A banana is a curved, yellow fruit with a thick skin and soft
                  sweet flesh.
                </p>
              </div>
            </div>
          </div>
        </Label>
      </div>
    </div>
  );
};

export default CheckboxCards;`;
export const bulkSelectCheckbox = `"use client";
import { Checkbox } from "@/components/ui/checkbox";
const BulkSelectCheckbox = () => {
  return (
    <div>
      <div className="mb-4">
        <Checkbox defaultChecked id="bulk_1">
          Select All
        </Checkbox>
      </div>
      <div className="flex gap-6 flex-wrap">
        <Checkbox defaultChecked id="bulk_2">
          Bangla
        </Checkbox>
        <Checkbox defaultChecked id="bulk_3">
          English
        </Checkbox>
        <Checkbox defaultChecked id="bulk_4">
          Mathmatics
        </Checkbox>
        <Checkbox defaultChecked id="bulk_5">
          Physics
        </Checkbox>
        <Checkbox defaultChecked id="bulk_6">
          Chemistry
        </Checkbox>
        <Checkbox defaultChecked id="bulk_7">
          Biology
        </Checkbox>
      </div>
    </div>
  );
};

export default BulkSelectCheckbox;
`;
