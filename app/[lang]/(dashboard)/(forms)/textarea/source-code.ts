export const basicTextarea = `"use client";
import { Textarea } from "@/components/ui/textarea";

const BasicTextarea = () => {
  return (
    <>
      <Textarea placeholder="Type Here.." rows="3" />
    </>
  );
};

export default BasicTextarea;
`;
export const disabledTextarea = `"use client";
import { Textarea } from "@/components/ui/textarea";

const DisabledTextarea = () => {
  return (
    <>
      <Textarea placeholder="This textarea is disabled" rows="3" disabled />
    </>
  );
};

export default DisabledTextarea;
`;
export const readonlyTextarea = `"use client";
import { Textarea } from "@/components/ui/textarea";

const ReadonlyTextarea = () => {
  return (
    <>
      <Textarea rows="3" readOnly >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quos, necessitatibus est quis minima illum. Ullam expedita quo explicabo sapiente.
      </Textarea>
    </>
  );
};

export default ReadonlyTextarea;
`;
export const labelTextarea = `"use client";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const LabelTextarea = () => {
  return (
    <>
      <Label className="mb-2" for="message">Username</Label>
      <Textarea placeholder="message..." id="message" rows="3" />
    </>
  );
};

export default LabelTextarea;
`;
export const requiredTextarea = `"use client";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const RequiredTextarea = () => {
  return (
    <>
      <Label className="mb-2" for="description">Description <span className="text-destructive">*</span> </Label>
      <Textarea placeholder="Description..." id="description" rows="3" required />
    </>
  );
};

export default RequiredTextarea;`;
export const textareaWithDescription = `"use client";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const TextareaWithDescription = () => {
  return (
    <div>
      <div>
        <Label className="mb-2" for="post">Post</Label>
        <Textarea placeholder="what's on your mind..." id="post" rows="3" />
      </div>
      <p className="text-sm mt-3">Write anything what's on your mind</p>
    </div>
  )
};

export default TextareaWithDescription;
`;
export const controlledTextarea = `"use client";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ControlledTextarea = () => {
  const [value, setValue] = useState("");
  const handleChange = event => {
    setValue(event.target.value)
  }
  return (
    <div>
      <div>
        <Label className="mb-2" for="controlled_desc">Description</Label>
        <Textarea
          placeholder="what's on your mind..."
          id="controlled_desc"
          rows="3"
          onChange={handleChange}
        />
      </div>
      <p className="text-sm mt-3">Textarea Value: {value} </p>
    </div>
  )
};

export default ControlledTextarea;
`;
export const displayedRows = `"use client";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const DisplayedRows = () => {
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <Label htmlFor="rows-3">3 Rows</Label>
        <Textarea placeholder="Type Here..." id="rows-3" rows="2" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="rows-5">5 Rows</Label>
        <Textarea placeholder="Type Here..." id="rows-5" rows="5" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="rows-10">10 Rows</Label>
        <Textarea placeholder="Type Here..." id="rows-10" rows="10" />
      </div>
    </div>
  );
};

export default DisplayedRows;
`;
export const colorsTextarea = `"use client";
import { Textarea } from "@/components/ui/textarea";

const ColorsTextarea = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Textarea placeholder="Type Here.." color="primary" />
      <Textarea placeholder="Type Here.." color="primary" variant="flat" />
      <Textarea placeholder="Type Here.." color="info" />
      <Textarea placeholder="Type Here.." color="info" variant="flat" />
      <Textarea placeholder="Type Here.." color="warning" />
      <Textarea placeholder="Type Here.." color="warning" variant="flat" />
      <Textarea placeholder="Type Here.." color="success" />
      <Textarea placeholder="Type Here.." color="success" variant="flat" />
      <Textarea placeholder="Type Here.." color="destructive" />
      <Textarea placeholder="Type Here.." color="destructive" variant="flat" />
    </div>
  );
};

export default ColorsTextarea;
`;
export const variantTextarea = `"use client";
import { Textarea } from "@/components/ui/textarea";

const VariantTextarea = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Textarea placeholder="Type Here.." variant="bordered" />
      <Textarea placeholder="Type Here.." variant="underline" radius="none" />
      <Textarea placeholder="Type Here.." variant="faded" />
      <Textarea placeholder="Type Here.." variant="flat" />
      <Textarea placeholder="Type Here.." variant="flat-underline" />
      <Textarea placeholder="Type Here.." variant="ghost" />
    </div>
  );
};

export default VariantTextarea;
`;
export const radiusTextarea = `"use client";
import { Textarea } from "@/components/ui/textarea";

const RadiusTextarea = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Textarea placeholder="Type Here.." radius="none" />
      <Textarea placeholder="Type Here.." radius="sm" />
      <Textarea placeholder="Type Here.." radius="md" />
      <Textarea placeholder="Type Here.." radius="lg" />
    </div>
  );
};

export default RadiusTextarea;
`;
