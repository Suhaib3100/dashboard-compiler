"use client";

import Card from "@/components/ui/card-snippet";
import InputGroupSize from "./input-group-size";
import MergedInputGroup from "./merged-input-group";
import InputGroupsButton from "./input-groups-button";
import BasicInputGroup from "./basic-input-group";
import InputGroupRadius from "./input-group-radius";
import CheckboxRadioGroup from "./checkbox-radio-group";
import MultipleAddons from "./multiple-addons";
import InputButtonWithDropdown from "./input-button-with-dropdown";

const InputGrouPpage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card title="Basic Input Group">
        <div className=" space-y-4">
          <BasicInputGroup />
        </div>
      </Card>

      <Card title="Merged Input Group">
        <div className=" space-y-4">
          <MergedInputGroup />
        </div>
      </Card>
      <Card title="Input Group Radius">
        <div className=" space-y-4">
          <InputGroupRadius />
        </div>
      </Card>
      <Card title="Input Group Size">
        <div className=" space-y-4">
          <InputGroupSize />
        </div>
      </Card>
      <Card title="Checkbox & Radio">
        <div className=" space-y-4">
          <CheckboxRadioGroup />
        </div>
      </Card>
      <Card title="Multiple Addons">
        <div className=" space-y-4">
          <MultipleAddons />
        </div>
      </Card>

      <Card title="Buttons Inputs">
        <div className=" space-y-4">
          <InputGroupsButton />
        </div>
      </Card>
      <Card title="Input Groups With Buttons With Dropdown">
        <div className=" space-y-4">
          <InputButtonWithDropdown />
        </div>
      </Card>
    </div>
  );
};

export default InputGrouPpage;
