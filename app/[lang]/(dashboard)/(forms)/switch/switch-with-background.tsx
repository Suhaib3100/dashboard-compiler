"use client";

import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const SwitchWithBackground = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="flex items-center gap-6">
      <Switch
        className="h-10 w-24 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `${
            checked
              ? "url(/images/all-img/switch-bg-2.png)"
              : "url(/images/all-img/switch-bg-1.png)"
          }`,
        }}
        thumbClass="h-9 w-9  ltr:data-[state=unchecked]:ml-1 rtl:data-[state=unchecked]:mr-1 ltr:data-[state=checked]:ml-14 rtl:data-[state=checked]:mr-14 dark:bg-default-900"
        onCheckedChange={() => setChecked(!checked)}
      />
    </div>
  );
};

export default SwitchWithBackground;
