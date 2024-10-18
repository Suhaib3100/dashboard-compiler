export const basicRadio = `"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const BasicRadio = () => {
  return (
    <>
      <RadioGroup
        defaultValue="right"
      >
        <RadioGroupItem value="right" id="r_1" color="default">
          Right
        </RadioGroupItem>
        <RadioGroupItem value="Wrong" id="r_2">
          wrong
        </RadioGroupItem>
      </RadioGroup>
    </>
  );
};
export default BasicRadio;`;
export const disabledRadio = `"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const DisabledRadio = () => {
  return (
    <>
      <RadioGroup
        defaultValue="rb1"
        disabled
      >
        <RadioGroupItem value="rb1" id="rb1">
          Checked
        </RadioGroupItem>
        <RadioGroupItem value="rb2" id="rb2" >
          Unchecked
        </RadioGroupItem>
      </RadioGroup>
    </>
  );
};
export default DisabledRadio;`;
export const sizesRadio = `"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const SizesRadio = () => {
  return (
    <>
      <RadioGroup
        defaultValue="xs"
      >
        <RadioGroupItem value="xs" id="size_1" size="xs">
          Extra Small
        </RadioGroupItem>
        <RadioGroupItem value="sm" id="size_2" size="sm" >
          Small
        </RadioGroupItem>
        <RadioGroupItem value="md" id="size_3" size="md">
          Midium
        </RadioGroupItem>
        <RadioGroupItem value="lg" id="size_4" size="lg">
          Large
        </RadioGroupItem>
        <RadioGroupItem value="xl" id="size_5" size="xl">
          Extra Large
        </RadioGroupItem>
      </RadioGroup>
    </>
  );
};

export default SizesRadio;`;
export const defaultFilled = `"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const DefaultFilled = () => {
  return (
    <>
      <RadioGroup
        defaultValue="df_1"
      >
        <RadioGroupItem value="df_1" id="df_1" >
          Default Active
        </RadioGroupItem>
        <RadioGroupItem value="sm" id="df_2" disabled >
          Default Disabled
        </RadioGroupItem>
      </RadioGroup>
    </>
  );
};
export default DefaultFilled;`;
export const radioRight = `"use client"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const RadioRight = () => {
  return (
    <>
      <RadioGroup
        defaultValue="book"
      >
        <div className="flex items-center gap-2">
          <Label htmlFor="book">Book</Label>
          <RadioGroupItem value="book" id="book"> </RadioGroupItem>
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="pen">Pen</Label>
          <RadioGroupItem value="pen" id="pen" ></RadioGroupItem>
        </div>
      </RadioGroup>
    </>
  );
};
export default RadioRight;`;
export const colorsRadio = `"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const ColorsRadio = () => {
  return (
    <>
      <RadioGroup
        defaultValue="color_2"
      >
        <RadioGroupItem value="color_1" id="color_1" >Default </RadioGroupItem>
        <RadioGroupItem value="color_2" id="color_2" color="primary">Primary </RadioGroupItem>
        <RadioGroupItem value="color_3" id="color_3" color="info">Info </RadioGroupItem>
        <RadioGroupItem value="color_4" id="color_4" color="warning">Warning </RadioGroupItem>
        <RadioGroupItem value="color_5" id="color_5" color="success">Success </RadioGroupItem>
        <RadioGroupItem value="color_6" id="color_6" color="destructive">Destructive </RadioGroupItem>
      </RadioGroup>
    </>
  );
};
export default ColorsRadio;`;
export const controlledRadio = `"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
const ControlledRadio = () => {
  const [selected, setSelected] = useState("apple");
  const handleSelect = value => {
    setSelected(value)
  }
  return (
    <>
      <RadioGroup
        defaultValue={selected}
        onValueChange={handleSelect}
      >
        <RadioGroupItem value="banana" id="banana">Banana </RadioGroupItem>
        <RadioGroupItem value="apple" id="apple">Apple </RadioGroupItem>
        <RadioGroupItem value="orange" id="orange">Orange </RadioGroupItem>
      </RadioGroup>
      <p className="mt-4 text-sm text-default-600">Selected: <span className="capitalize text-default-700">{selected}</span> </p>
    </>
  );
};
export default ControlledRadio;`;
export const defaultRadioGroup = `"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const DefaultRadioGroup = () => {
  return (
    <>
      <RadioGroup
        defaultValue="english"
      >
        <RadioGroupItem value="english" id="english">English </RadioGroupItem>
        <RadioGroupItem value="mathematics" id="mathematics">Mathematics </RadioGroupItem>
        <RadioGroupItem value="bangla" id="bangla">Bangla </RadioGroupItem>
        <RadioGroupItem value="physics" id="physics">Physics </RadioGroupItem>
        <RadioGroupItem value="social-science" id="social-science">Social Science </RadioGroupItem>
      </RadioGroup>
    </>
  );
};
export default DefaultRadioGroup;`;
export const disabledRadioGroup = `"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const DisabledRadioGroup = () => {
  return (
    <>
      <RadioGroup
        defaultValue="earth"
        disabled
      >
        <RadioGroupItem value="mercury" id="mercury">Mercury </RadioGroupItem>
        <RadioGroupItem value="venus" id="venus">Venus </RadioGroupItem>
        <RadioGroupItem value="earth" id="earth">Earth </RadioGroupItem>
        <RadioGroupItem value="mars" id="mars">Mars </RadioGroupItem>
        <RadioGroupItem value="jupiter" id="jupiter">Jupiter</RadioGroupItem>
      </RadioGroup>
    </>
  );
};
export default DisabledRadioGroup;`;
export const horizontalRadioGroup = `"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const HorizontalRadioGroup = () => {
  return (
    <>
      <RadioGroup
        className="flex flex-row gap-6"
        defaultValue="earth"
      >
        <RadioGroupItem value="mercury" id="mercury">Mercury </RadioGroupItem>
        <RadioGroupItem value="venus" id="venus">Venus </RadioGroupItem>
        <RadioGroupItem value="earth" id="earth">Earth </RadioGroupItem>
        <RadioGroupItem value="mars" id="mars">Mars </RadioGroupItem>
        <RadioGroupItem value="jupiter" id="jupiter">Jupiter</RadioGroupItem>
      </RadioGroup>
    </>
  );
};
export default HorizontalRadioGroup;`;
export const labelPlacement = `"use client"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const LabelPlacementRadio = () => {
  return (
    <>
      <RadioGroup
        defaultValue="start"
        className="gap-7"
      >
        <div className="flex  items-center gap-2">
          <Label htmlFor="start">Start</Label>
          <RadioGroupItem value="start" id="start"> </RadioGroupItem>
        </div>
        <div className="flex flex-row-reverse items-center gap-2">
          <Label htmlFor="end">End</Label>
          <RadioGroupItem value="end" id="end" ></RadioGroupItem>
        </div>
        <div className="flex  flex-col items-center gap-2">
          <Label htmlFor="top">Top</Label>
          <RadioGroupItem value="top" id="top" ></RadioGroupItem>
        </div>
        <div className="flex flex-col-reverse items-center gap-2">
          <Label htmlFor="bottom">Bottom</Label>
          <RadioGroupItem value="bottom" id="bottom" ></RadioGroupItem>
        </div>
      </RadioGroup>
    </>
  );
};
export default LabelPlacementRadio;`;
export const customLabel = `"use client"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const CustomLabel = () => {
  return (
    <>
      <RadioGroup
        defaultValue="admin"
      >
        <div className="flex items-center gap-2">
          <Label htmlFor="admin">Admin</Label>
          <RadioGroupItem value="admin" id="admin" > </RadioGroupItem>
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="member">Member</Label>
          <RadioGroupItem value="member" id="member"></RadioGroupItem>
        </div>
      </RadioGroup>
    </>
  );
};
export default CustomLabel;`;
export const iconInRadio = `"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Icon } from "@iconify/react";
const IconInRadio = () => {
  return (
    <>
      <RadioGroup
        defaultValue="icon_1"
      >
        <RadioGroupItem
          value="icon_1"
          icon={<Icon icon="heroicons:heart-solid" />}
          id="icon_1"
          color="destructive"
        >
          Heart
        </RadioGroupItem>
        <RadioGroupItem
          value="icon_2"
          color="info"
          icon={<Icon icon="tabler:message" />}
          id="icon_2"
        >
          Message
        </RadioGroupItem>
        <RadioGroupItem
          value="icon_3"
          color="info"
          id="icon_3"
        >
          Correct
        </RadioGroupItem>
        <RadioGroupItem
          value="icon_4"
          color="warning"
          icon={<Icon icon="heroicons:x-mark" />}
          id="icon_4"
        >
          Incorrect
        </RadioGroupItem>
        <RadioGroupItem
          value="icon_5"
          color="success"
          icon={<Icon icon="mdi:like" />}
          id="icon_5"
        >
          Thumb
        </RadioGroupItem>
      </RadioGroup>
    </>
  );
};

export default IconInRadio;
`;
export const labelSlot = `"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const LabelSlot = () => {
  return (
    <>
      <RadioGroup defaultValue="label_slot_1" className="flex flex-col">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="label_slot_1" id="label_slot_1" color="success"></RadioGroupItem>
          <Label
            htmlFor="label_slot_1"
            className="text-base text-muted-foreground font-normal"
          >
            I agree with your
            <span className="text-success ml-1">Privacy Policy</span>
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="label_slot_2" id="label_slot_2" color="info"></RadioGroupItem>
          <Label
            htmlFor="label_slot_2"
            className="text-base text-muted-foreground font-normal"
          >
            I agree with your
            <span className="text-info ml-1">Terms & Condition</span>
          </Label>
        </div>
      </RadioGroup>
    </>
  );
};

export default LabelSlot;
`;
export const customImplementation = `"use client"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
const CustomImplementation = () => {
  const [selected, setSelected] = useState("cr_1");
  const handleValueChange = value => {
    setSelected(value)
  }
  return (
    <div>
      <RadioGroup
        defaultValue="cr_1"
        onValueChange={handleValueChange}
      >
        <Label
          className={cn("flex justify-between items-center w-full border border-default-400 p-4 rounded-md",
            {
              "border-success": selected === "cr_1"
            }
          )} htmlFor="cr_1"
        >
          <div>
            <h4 className="font-medium text-default-800 mb-1">Subject 1: Mathmatics</h4>
            <span className="text-sm text-default-600">90 out of 100</span>
          </div>
          <RadioGroupItem value="cr_1" id="cr_1" color="success"></RadioGroupItem>
        </Label>
        <Label
          className={cn("flex  justify-between items-center w-full border border-default-400 p-4 rounded-md",
            {
              "border-success": selected === "cr_2"
            }
          )}
          htmlFor="cr_2">
          <div>
            <h4 className="font-medium text-default-800 mb-1">Subject 1: Physics</h4>
            <span className="text-sm text-default-600">82 out of 100</span>
          </div>
          <RadioGroupItem value="cr_2" id="cr_2" color="success"></RadioGroupItem>
        </Label>
        <Label className={cn("flex  justify-between items-center w-full border border-default-400 p-4 rounded-md",
          {
            "border-success": selected === "cr_3"
          }
        )}
          htmlFor="cr_3">
          <div>
            <h4 className="font-medium text-default-800 mb-1">Subject 1: Mathmatics</h4>
            <span className="text-sm text-default-600">90 out of 100</span>
          </div>
          <RadioGroupItem value="cr_3" id="cr_3" color="success"></RadioGroupItem>
        </Label>

      </RadioGroup>
    </div>
  );
};

export default CustomImplementation;`;
export const accessibleRadio = `"use client"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
const AccessibleRadio = () => {
  const [selected, setSelected] = useState("acr_1");
  const handleValueChange = value => {
    setSelected(value)
  }
  return (
    <div>
      <RadioGroup
        defaultValue="acr_1"
        onValueChange={handleValueChange}
      >

        <Label
          className={cn("flex items-center gap-1 bg-default-100 px-2 py-1.5 rounded-md cursor-pointer",
            { "bg-primary/10": selected === "acr_1" }
          )}
          htmlFor="acr_1"
        >
          <RadioGroupItem value="acr_1" id="acr_1" color="primary"></RadioGroupItem>
          <span className="text-default-600">Travelling</span>
        </Label>
        <Label
          className={cn("flex items-center gap-1 bg-default-100 px-2 py-1.5 rounded-md cursor-pointer",
            { "bg-info/10": selected === "acr_2" }
          )}
          htmlFor="acr_2"
        >
          <RadioGroupItem value="acr_2" id="acr_2" color="info"></RadioGroupItem>
          <span className="text-default-600">Working</span>
        </Label>
        <Label
          className={cn("flex items-center gap-1 bg-default-100 px-2 py-1.5 rounded-md cursor-pointer",
            { "bg-success/10": selected === "acr_3" }
          )}
          htmlFor="acr_3"
        >
          <RadioGroupItem value="acr_3" id="acr_3" color="success"></RadioGroupItem>
          <span className="text-default-600">Walking</span>
        </Label>
        <Label
          className={cn("flex items-center gap-1 bg-default-100 px-2 py-1.5 rounded-md cursor-pointer",
            { "bg-destructive/10": selected === "acr_4" }
          )}
          htmlFor="acr_4"
        >
          <RadioGroupItem value="acr_4" id="acr_4" color="destructive"></RadioGroupItem>
          <span className="text-default-600">Gaming</span>
        </Label>
        <Label
          className={cn("flex items-center gap-1 bg-default-100 px-2 py-1.5 rounded-md cursor-pointer",
            { "bg-warning/10": selected === "acr_5" }
          )}
          htmlFor="acr_5"
        >
          <RadioGroupItem value="acr_5" id="acr_5" color="warning"></RadioGroupItem>
          <span className="text-default-600">Eating</span>
        </Label>
      </RadioGroup >
    </div >
  );
};

export default AccessibleRadio;`;
export const radioWithBackground = `"use client"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
const RadioWithBackground = () => {
  const [selected, setSelected] = useState("rwb_1");
  const handleValueChange = value => {
    setSelected(value)
  }
  return (
    <div>
      <RadioGroup
        defaultValue="rwb_1"
        onValueChange={handleValueChange}
      >

        <Label
          htmlFor="rwb_1"
          className={cn("flex justify-between items-center gap-1 bg-default-100 px-3 py-2.5 w-full rounded-md cursor-pointer",
            { "bg-primary": selected === "rwb_1" }
          )}

        >
          <span className={cn("font-base text-default-800", { "text-primary-foreground": selected === "rwb_1" })}>I'm Number one.</span>
          <RadioGroupItem value="rwb_1" id="rwb_1" className="data-[state=checked]:text-primary-foreground data-[state=checked]:border-white"></RadioGroupItem>

        </Label>
        <Label
          htmlFor="rwb_2"
          className={cn("flex justify-between items-center gap-1 bg-default-100 px-3 py-2.5 w-full rounded-md cursor-pointer",
            { "bg-primary": selected === "rwb_2" }
          )}
        >
          <span className={cn("font-base text-default-800", { "text-primary-foreground": selected === "rwb_2" })}>I'm Number two.</span>
          <RadioGroupItem value="rwb_2" id="rwb_2" className="data-[state=checked]:text-primary-foreground data-[state=checked]:border-white"></RadioGroupItem>

        </Label>

      </RadioGroup >
    </div >
  );
};

export default RadioWithBackground;`;
export const customStyledRadio = `"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
const customStyledRadio = () => {
  const [selected, setSelected] = useState("csr_1");
  const handleValueChange = value => {
    setSelected(value)
  }
  return (
    <div>
      <RadioGroup
        defaultValue="csr_1"
        onValueChange={handleValueChange}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <Label
          className={cn("flex justify-between items-center w-full  p-4 rounded-md border border-none",
            {
              "border-solid border-success": selected === "csr_1"
            }
          )} htmlFor="csr_1"
        >
          <div className="flex items-center gap-3 ">
            <RadioGroupItem value="csr_1" id="csr_1" color="success"></RadioGroupItem>
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

                "bg-success": selected === "csr_1"

              })}></span>
              {
                selected === "csr_1" ? <span className="text-xs text-success">Active Now</span> : <span className="text-xs text-default-600">Inactive</span>
            }
          </button>
        </Label>
        <Label
          className={cn("flex justify-between items-center w-full  p-4 rounded-md border border-none",
            {
              "border-solid border-success": selected === "csr_2"
            }
          )} htmlFor="csr_2"
        >
          <div className="flex items-center gap-3 ">
            <RadioGroupItem value="csr_2" id="csr_2" color="success"></RadioGroupItem>
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
            <button type="button" className="bg-default-200 h-6 px-2 flex items-center gap-1 rounded-md">
              <span className={cn("h-1.5 w-1.5 rounded-full bg-default-400", {

                "bg-success": selected === "csr_2"

              })}></span>
              {
                selected === "csr_2" ? <span className="text-xs text-success">Active Now</span> : <span className="text-xs text-default-600">Inactive</span>
            }
          </button>
        </Label>
      </RadioGroup>
    </div >
  );
};

export default CustomStyledRadio;`;
export const radioTylesGrouped = `"use client"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import book1 from "@/public/images/all-img/book-1.png"
import book2 from "@/public/images/all-img/book-2.png"
import book3 from "@/public/images/all-img/book-3.png"
import book4 from "@/public/images/all-img/book-4.png"
import book5 from "@/public/images/all-img/book-5.png"
import book6 from "@/public/images/all-img/book-5.png"

const RadioTylesGrouped = () => {
  const [selected, setSelected] = useState("rtg_1");
  const handleValueChange = value => setSelected(value)
  return (
    <div>
      <h3 className="text-xl font-medium text-default-800 mb-5">Choose your favorite subject</h3>
      <RadioGroup
        defaultValue="rtg_1"
        onValueChange={handleValueChange}
      >

        <Label htmlFor="rtg_1">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": selected === "rtg_1"
          })}>
            <RadioGroupItem value="rtg_1" id="rtg_1" className={cn("absolute top-3 left-3 opacity-0 invisible", {
              "visible opacity-100": selected === "rtg_1"
            })}> </RadioGroupItem>
            <div className="h-16 w-16">
              <Image src={book1} alt="image" className="h-full w-full object-cover" />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">English</span>
          </div>
        </Label>
        <Label htmlFor="rtg_2">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": selected === "rtg_2"
          })}>
            <RadioGroupItem value="rtg_2" id="rtg_2" className={cn("absolute top-3 left-3 opacity-0 invisible", {
              "visible opacity-100": selected === "rtg_2"
            })}> </RadioGroupItem>
            <div className="h-16 w-16">
              <Image src={book2} alt="image" className="h-full w-full object-cover" />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Mathematics</span>
          </div>
        </Label>
        <Label htmlFor="rtg_3">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": selected === "rtg_3"
          })}>
            <RadioGroupItem value="rtg_3" id="rtg_3" className={cn("absolute top-3 left-3 opacity-0 invisible", {
              "visible opacity-100": selected === "rtg_3"
            })}> </RadioGroupItem>
            <div className="h-16 w-16">
              <Image src={book3} alt="image" className="h-full w-full object-cover" />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Physics</span>
          </div>
        </Label>
        <Label htmlFor="rtg_4">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": selected === "rtg_4"
          })}>
            <RadioGroupItem value="rtg_4" id="rtg_4" className={cn("absolute top-3 left-3 opacity-0 invisible", {
              "visible opacity-100": selected === "rtg_4"
            })}> </RadioGroupItem>
            <div className="h-16 w-16">
              <Image src={book4} alt="image" className="h-full w-full object-cover" />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Biology</span>
          </div>
        </Label>
        <Label htmlFor="rtg_5">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": selected === "rtg_5"
          })}>
            <RadioGroupItem value="rtg_5" id="rtg_5" className={cn("absolute top-3 left-3 opacity-0 invisible", {
              "visible opacity-100": selected === "rtg_5"
            })}> </RadioGroupItem>
            <div className="h-16 w-16">
              <Image src={book5} alt="image" className="h-full w-full object-cover" />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Social Science</span>
          </div>
        </Label>
        <Label htmlFor="rtg_6">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": selected === "rtg_6"
          })}>
            <RadioGroupItem value="rtg_6" id="rtg_6" className={cn("absolute top-3 left-3 opacity-0 invisible", {
              "visible opacity-100": selected === "rtg_6"
            })}> </RadioGroupItem>
            <div className="h-16 w-16">
              <Image src={book6} alt="image" className="h-full w-full object-cover" />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Computer Tech</span>
          </div>
        </Label>


      </RadioGroup>
    </div>
  );
};

export default RadioTylesGrouped;`;
export const radioCards = `"use client"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";

import rd1 from "@/public/images/all-img/rd-1.jpg";
import rd2 from "@/public/images/all-img/rd-2.png";
import rd3 from "@/public/images/all-img/rd-3.png";
import rd4 from "@/public/images/all-img/rd-4.png";
import rd5 from "@/public/images/all-img/rd-5.png";
import rd6 from "@/public/images/all-img/rd-6.png";
import Image from "next/image";

const RadioCards = () => {
  const [selected, setSelected] = useState("rdc_1");
  const handleValueChange = value => setSelected(value)
  return (
    <div className="max-w-3xl mx-auto">
      <RadioGroup
        defaultValue="rdc_1"
        onValueChange={handleValueChange}
        className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-5"
      >

        <div>
          <Label htmlFor="rdc_1">
            <div className={cn("bg-default-100 flex flex-col justify-center items-center rounded-md relative border-2 border-transparent", {
              "border-primary ": selected === "rdc_1"
            })}>
              <RadioGroupItem value="rdc_1" id="rdc_1" className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": selected === "rdc_1"
              })}> </RadioGroupItem>

              <div>
                <div className="h-[114px] w-full mb-2">
                  <Image src={rd1} className="w-full h-full object-cover rounded-t-sm" alt="" />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-default-500">This is a banana. Banana is yellow</h4>
                  <p className="mt-2 text-xs text-default-500">A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.</p>
                </div>
              </div>
            </div>
          </Label>
        </div>

        <div>
          <Label htmlFor="rdc_2">
            <div className={cn("bg-default-100 flex flex-col justify-center items-center rounded-md relative border-2 border-transparent ", {
              "border-primary": selected === "rdc_2"
            })}>
              <RadioGroupItem value="rdc_2" id="rdc_2" className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": selected === "rdc_2"
              })}> </RadioGroupItem>

              <div>
                <div className="h-[114px] w-full mb-2">
                  <Image src={rd2} className="w-full h-full object-cover rounded-t-sm" alt="" />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-default-500">This is a banana. Banana is yellow</h4>
                  <p className="mt-2 text-xs text-default-500">A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.</p>
                </div>
              </div>
            </div>
          </Label>
        </div>

        <div>
          <Label htmlFor="rdc_3">
            <div className={cn("bg-default-100 flex flex-col justify-center items-center rounded-md relative border-2 border-transparent ", {
              "border-primary": selected === "rdc_3"
            })}>
              <RadioGroupItem value="rdc_3" id="rdc_3" className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": selected === "rdc_3"
              })}> </RadioGroupItem>

              <div>
                <div className="h-[114px] w-full mb-2">
                  <Image src={rd3} className="w-full h-full object-cover rounded-t-sm" alt="" />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-default-500">This is a banana. Banana is yellow</h4>
                  <p className="mt-2 text-xs text-default-500">A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.</p>
                </div>
              </div>
            </div>
          </Label>
        </div>
        <div>
          <Label htmlFor="rdc_4">
            <div className={cn("bg-default-100 flex flex-col justify-center items-center rounded-md relative border-2 border-transparent ", {
              "border-primary": selected === "rdc_4"
            })}>
              <RadioGroupItem value="rdc_4" id="rdc_4" className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": selected === "rdc_4"
              })}> </RadioGroupItem>

              <div>
                <div className="h-[114px] w-full mb-2">
                  <Image src={rd4} className="w-full h-full object-cover rounded-t-sm" alt="" />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-default-500">This is a banana. Banana is yellow</h4>
                  <p className="mt-2 text-xs text-default-500">A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.</p>
                </div>
              </div>
            </div>
          </Label>
        </div>
        <div>
          <Label htmlFor="rdc_5">
            <div className={cn("bg-default-100 flex flex-col justify-center items-center rounded-md relative border-2 border-transparent ", {
              "border-primary": selected === "rdc_5"
            })}>
              <RadioGroupItem value="rdc_5" id="rdc_5" className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": selected === "rdc_5"
              })}> </RadioGroupItem>

              <div>
                <div className="h-[114px] w-full mb-2">
                  <Image src={rd5} className="w-full h-full object-cover rounded-t-sm" alt="" />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-default-500">This is a banana. Banana is yellow</h4>
                  <p className="mt-2 text-xs text-default-500">A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.</p>
                </div>
              </div>
            </div>
          </Label>
        </div>
        <div>
          <Label htmlFor="rdc_6">
            <div className={cn("bg-default-100 flex flex-col justify-center items-center rounded-md relative border-2 border-transparent ", {
              "border-primary": selected === "rdc_6"
            })}>
              <RadioGroupItem value="rdc_6" id="rdc_6" className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": selected === "rdc_6"
              })}> </RadioGroupItem>

              <div>
                <div className="h-[114px] w-full mb-2">
                  <Image src={rd6} className="w-full h-full object-cover rounded-t-sm" alt="" />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-default-500">This is a banana. Banana is yellow</h4>
                  <p className="mt-2 text-xs text-default-500">A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.</p>
                </div>
              </div>
            </div>
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default RadioCards;`;
