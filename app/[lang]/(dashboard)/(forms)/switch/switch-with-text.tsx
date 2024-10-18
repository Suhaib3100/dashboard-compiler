"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const SwitchWithText = () => {
  const [selected, setSelected] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Switch
        className="h-8 w-[104px] bg-default-300 data-[state=checked]:bg-default-900"
        thumbClass="h-8 w-14 text-xs font-medium text-default-600 data-[state=unchecked]:bg-default-50 data-[state=checked]:bg-default-700 data-[state=checked]:text-default-100 ltr:data-[state=unchecked]:-ml-1 rtl:data-[state=unchecked]:ml-2 ltr:data-[state=checked]:translate-x-10 rtl:data-[state=checked]:-translate-x-10"
        thumbIcon={selected ? "Dark" : "Light"}
        onCheckedChange={() => setSelected(!selected)}
      />
      <Switch
        className="h-8 w-[104px] bg-default-300 data-[state=checked]:bg-default-900"
        thumbClass="h-8 w-14 text-xs font-medium text-default-600 data-[state=unchecked]:bg-default-50 data-[state=checked]:bg-default-700 data-[state=checked]:text-default-100 ltr:data-[state=unchecked]:-ml-1 rtl:data-[state=unchecked]:ml-2 ltr:data-[state=checked]:translate-x-10 rtl:data-[state=checked]:-translate-x-10"
        thumbIcon={checked ? "Day" : "Night"}
        onCheckedChange={() => setChecked(!checked)}
        defaultChecked
      />
    </div>
  );
};

export default SwitchWithText;
