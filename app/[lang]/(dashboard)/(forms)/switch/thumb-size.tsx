"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const ThumbSize = () => {
  return (
    <div className="flex items-center gap-6 flex-wrap">
      <div className="flex items-center gap-2">
        <Switch
          thumbClass="h-2 w-2  ltr:data-[state=unchecked]:ml-2 ltr:data-[state=checked]:ml-6 rtl:data-[state=unchecked]:mr-2 rtl:data-[state=checked]:mr-6"
          id="thumbsize_1"
          defaultChecked
        />
        <Label htmlFor="thumbsize_1">Size One</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          thumbClass="h-3 w-3  ltr:data-[state=unchecked]:ml-1 rtl:data-[state=unchecked]:mr-1 ltr:data-[state=checked]:ml-[22px] rtl:data-[state=checked]:mr-[22px]"
          id="thumbsize_2"
          defaultChecked
        />
        <Label htmlFor="thumbsize_2">Size Two</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          thumbClass="h-[14px] w-[14px]  ltr:data-[state=unchecked]:ml-1 rtl:data-[state=unchecked]:mr-1 ltr:data-[state=checked]:ml-5 rtl:data-[state=checked]:mr-5 "
          id="thumbsize_3"
          defaultChecked
        />
        <Label htmlFor="thumbsize_3">Size Three</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          thumbClass="h-4 w-4  ltr:data-[state=unchecked]:ml-1 rtl:data-[state=unchecked]:mr-1 ltr:data-[state=checked]:ml-5 rtl:data-[state=checked]:mr-5 "
          id="thumbsize_4"
          defaultChecked
        />
        <Label htmlFor="thumbsize_4">Size Four</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          thumbClass="h-[18px] w-[18px]  ltr:data-[state=unchecked]:ml-0.5 rtl:data-[state=unchecked]:mr-0.5 ltr:data-[state=checked]:ml-[18px] rtl:data-[state=checked]:mr-[18px] "
          id="thumbsize_5"
          defaultChecked
        />
        <Label htmlFor="thumbsize_5">Size Five</Label>
      </div>
    </div>
  );
};

export default ThumbSize;
