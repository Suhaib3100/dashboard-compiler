"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const CustomStyle = () => {
  return (
    <div className="flex items-center justify-between">
      <Label htmlFor="custom_style_1">
        <h3 className="text-base font-medium text-default-600 mb-1">
          Enable for early access
        </h3>
        <p className="text-xs text-default-500">
          Get access my account before my account empty
        </p>
      </Label>
      <Switch id="custom_style_1" />
    </div>
  );
};

export default CustomStyle;
