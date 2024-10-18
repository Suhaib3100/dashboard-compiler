"use client";
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
