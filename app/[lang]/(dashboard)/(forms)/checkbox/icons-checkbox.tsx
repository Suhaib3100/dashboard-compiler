"use client";
import { Check, Heart, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const IconsCheckbox = () => {
  return (
    <div className="space-y-5">
      <div className="flex gap-4 items-center ">
        <Checkbox defaultChecked id="custom_icon" icon={<Check />}>
          Right
        </Checkbox>
        <Checkbox id="custom_icon_4" color="destructive" icon={<X />}>
          Wrong
        </Checkbox>
      </div>
      <div className="space-y-5">
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Outline Icon
        </p>
        <div className="flex gap-4 items-center ">
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
      </div>
      <div className="color-icon">
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Outline Icon
        </p>
        <div className="flex gap-4 items-center ">
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
      </div>
      <div className="space-y-5">
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Disabled Icon
        </p>
        <div className="flex gap-4 items-center">
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
    </div>
  );
};

export default IconsCheckbox;
