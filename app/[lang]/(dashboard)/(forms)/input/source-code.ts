export const basicInput = `"use client";
import { Input } from "@/components/ui/input";
const BasicInputText = () => {
  return (
    <>
      <Input type="text" placeholder="Username" />
    </>
  );
};
export default BasicInputText;
`;
export const disabledTextInput = `"use client";
import { Input } from "@/components/ui/input";
const DisabledTextInput = () => {
  return (
    <>
      <Input type="text" placeholder="Username" id="userName" disabled />
    </>
  );
};
export default DisabledTextInput;
`;
export const labelInput = `"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const LabelInput = () => {
  return (
    <>
      <Label className="mb-3" htmlFor="inputId">Username </Label>
      <Input type="text" placeholder="Enter Your Name" id="inputId" />
    </>
  );
};
export default LabelInput;
`;
export const labelInputRequired = `"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const LabelInputRequired = () => {
  return (
    <>
      <Label className="mb-3" htmlFor="username">Name <span className="text-warning">*</span></Label>
      <Input type="text" placeholder="Enter Your Name" id="username" required />
    </>
  );
};
export default LabelInputRequired;
`;
export const readonlyInput = `"use client";
import { Input } from "@/components/ui/input";
const ReadOnlyInput = () => {
  return (
    <>
      <Input type="text" placeholder="You can read only me" readOnly />
    </>
  );
};
export default ReadOnlyInput;
`;
export const inputWithButton = `"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const InputWithButton = () => {
  return (
    <>
      <div className="flex gap-4">
        <Input type="text" placeholder="Enter Your Name" id="input" />
        <Button type="submit">Subscribe</Button>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Checkbox id="terms" />
        <Label htmlFor="terms">I agree with your policy</Label>
      </div>
    </>
  );
};
export default InputWithButton;
`;
export const inputWithDescription = `"use client";
import { Input } from "@/components/ui/input";
const InputWithDescription = () => {
  return (
    <div>
      <Input type="text" placeholder="username" />
      <p className="text-sm text-default-400 mt-2">We'll never share your email with anyone else.</p>
    </div>
  );
};
export default InputWithDescription;
`;
export const inputWithErrorMessage = `"use client";
import { Input } from "@/components/ui/input";
const InputWithErrorMessage = () => {
  return (
    <div>
      <Input type="text" placeholder="Username" color="destructive" />
      <p className="text-sm text-destructive mt-2">We'll never share your email with anyone else.</p>
    </div>
  );
};
export default InputWithErrorMessage;
`;
export const inputControlled = `"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
const InputControlled = () => {
  const [value, setValue] = useState("UserName");
  const handleValue = (event) => setValue(event.target.value);
  return (
    <div>
      <Input type="text" placeholder="UserName" onChange={handleValue} />
      <p className="text-sm text-default-400 mt-2">Input value: {value} </p>
    </div>
  );
};
export default InputControlled;
`;
export const inputCustomStyles = `"use client";
import { Input } from "@/components/ui/input";
import { Icon } from '@iconify/react';
const InputCustomStyle = () => {
  return (
    <div>
      <div className="relative">
        <span className="text-sm absolute top-1/2 -translate-y-1/2 z-10 left-3 text-default-400"><Icon icon="akar-icons:search" /></span>
        <Input type="text" placeholder="Type to search" className="pl-9" />
      </div>
    </div>
  );
};
export default InputCustomStyle;
`;
export const inputWithIcon = `"use client";
import { Input } from "@/components/ui/input";
import { Icon } from '@iconify/react';
const InputWithIcon = () => {
  return (
    <div>
      <p className="text-sm text-default-400 dark:text-default-600  mb-4">
        You can use an icon by placing it within the <code>&lt;span&gt;</code> tag.
      </p>
      <div className="relative">
        <span className="text-lg absolute top-1/2 -translate-y-1/2 z-10 left-3 text-default-400"><Icon icon="mdi:user-outline" /></span>
        <Input type="text" placeholder="Type to search" className="pl-9" />
      </div>
    </div>
  );
};
export default InputWithIcon;
`;
export const inputWithHelperText = `"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
const InputWithHelperText = () => {
  return (
    <div>
      <Input type="text" placeholder="Username" />
      <p className="text-xs text-default-500 mt-2">We’ll never share your details. Read our <Link className="text-primary" href="">Privacy Policy</Link> </p>
    </div>
  );
};
export default InputWithHelperText;
`;
export const startAndEndContent = `"use client";
import { Input } from "@/components/ui/input";
import { Icon } from '@iconify/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const StartAndEndContent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-6">
        <Input type="text" placeholder="Username" />
        <div className="relative">
          <span className="text-lg absolute top-1/2 -translate-y-1/2 z-10 right-3 text-default-400"><Icon icon="mdi:user-outline" /></span>
          <Input type="text" placeholder="Username" className="pr-9" />
        </div>
        <div className="relative">
          <span className="text-lg absolute top-1/2 -translate-y-1/2 z-10 left-3 text-default-400"><Icon icon="mdi:user-outline" /></span>
          <Input type="text" placeholder="Username" className="pl-9" />
        </div>
        <div className="relative">
          <span className="text-lg absolute top-1/2 -translate-y-1/2 z-10 left-3 text-default-400"><Icon icon="mdi:currency-usd" /></span>
          <Input type="text" placeholder="Price" className="pl-9 pr-9" />
          <div className="absolute right-0 top-0 w-20">
            <Select>
              <SelectTrigger className="border-0 focus:outline-none focus:ring-0 rounded-none bg-transparent ring-offset-0 focus:ring-offset-0">
                <SelectValue placeholder="USD" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="euro">EUR</SelectItem>
                <SelectItem value="jpy">JPY</SelectItem>
                <SelectItem value="gbp">GBP</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StartAndEndContent;
`;
export const inputSizes = `"use client";
import { Input } from "@/components/ui/input";
const InputSize = () => {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
        <Input type="text" placeholder="Username" size="sm" />
        <Input type="text" placeholder="Username" size="md" />
        <Input type="text" placeholder="Username" size="lg" />
        <Input type="text" placeholder="Username" size="xl" />
      </div>
  );
};
export default InputSize;
`;
export const inputColors = `"use client";
import { Input } from "@/components/ui/input";
const InputColors = () => {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
        <Input type="text" placeholder="Default" color="default" />
        <Input type="text" placeholder="Primary" color="primary" />
        <Input type="text" placeholder="Info" color="info" />
        <Input type="text" placeholder="Warning" color="warning" />
        <Input type="text" placeholder="Success" color="success" />
        <Input type="text" placeholder="Destructive" color="destructive" />
        <Input type="text" placeholder="Default" variant="flat" />
        <Input type="text" placeholder="Primary" variant="flat" color="primary" />
        <Input type="text" placeholder="Info" variant="flat" color="info" />
        <Input type="text" placeholder="Warning" variant="flat" color="warning" />
        <Input type="text" placeholder="Success" variant="flat" color="success" />
        <Input type="text" placeholder="Destructive" variant="flat" color="destructive" />
      </div>
  );
};
export default InputColors;
`;
export const inputRadius = `"use client";
import { Input } from "@/components/ui/input";
const InputRadius = () => {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
        <Input type="text" placeholder="Default" />
        <Input type="text" placeholder="Default" radius="sm" />
        <Input type="text" placeholder="Default" radius="md" />
        <Input type="text" placeholder="Default" radius="lg" />
        <Input type="text" placeholder="Default" radius="xl" />
      </div>
  );
};

export default InputRadius;
`;
export const labelPlacement = `"use client";
import { Icon } from '@iconify/react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from 'react';
const LabelPlacement = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const clearInput = () => {
    setInputValue('');
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-9 gap-y-5">
        <div>
          <Label className="mb-3">Name</Label>
          <Input type="text" placeholder="Enter your name" />
        </div>
        <div>
          <Label className="mb-3">Name</Label>
          <div className="relative">
            <span className="text-2xl text-default-400 absolute top-1/2 -translate-y-1/2 right-4 z-10" onClick={clearInput}><Icon icon="system-uicons:close" /></span>
            <Input type="text" placeholder="Enter your name" value={inputValue} onChange={handleInputChange} />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Label>Name</Label>
          <Input type="text" placeholder="Enter your name" />
        </div>
        <div className='border py-2 rounded-md'>
          <Label className="px-3">Your Name</Label>
          <Input type="text" placeholder="UX/UI Designer" variant="ghost" size="sm" className="text-lg" />
        </div>
        <div className="relative ">
          <input type="text" id="floatingLabel1"
            className="block  px-3 pb-2.5 pt-6 w-full text-sm text-default-900 border border-border rounded-md appearance-none focus:outline-none focus:ring-0  peer" placeholder="" />
          <label htmlFor="floatingLabel1"
            className="absolute text-sm text-default-500  duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] start-2.5 
             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 
             rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Username</label>
        </div>
        <div className="relative ">
          <input type="text" id="floatingLabel2"
            className="block  px-3 pb-2.5 pt-6 w-full text-sm text-default-900 border-b  border-border bg-default-100 rounded-t-lg focus:border-primary appearance-none focus:outline-none focus:ring-0  peer" placeholder="" />
          <label htmlFor="floatingLabel2"
            className="absolute text-sm text-default-500  duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] start-2.5 
             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 
             rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Username</label>
        </div>
        <div className=" py-4">
          <div className='relative'>
            <input type="text" id="floatingLabel3"
              className="block  px-3 py-2.5  w-full text-sm text-default-900 border  appearance-none focus:outline-none focus:ring-0  peer" placeholder="" />
            <label htmlFor="floatingLabel3"
              className="absolute text-sm font-medium text-default-500  duration-300 transform  scale-75 top-2.5 z-10 origin-[0] start-2.5 
             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:-top-3 
             rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Username</label>
          </div>
        </div>
        <div className="py-4">
          <div className='relative'>
            <input type="text" id="floatingLabel4"
              className="block  px-3 h-12  rounded-md w-full text-sm text-default-900 border  appearance-none focus:outline-none focus:ring-0  peer" placeholder="" />
            <label htmlFor="floatingLabel4"
              className="absolute top-1/2 -translate-y-1/2 left-5 text-sm font-medium text-default-500  duration-300 peer-focus:-top-2
              peer-focus:bg-background peer-focus:inline-block peer-focus:px-2 peer-focus:text-xs peer-focus:left-2
              peer-focus:-translate-y-0 ">Username</label>
          </div>
        </div>
      </div>
    </>
  );
};
export default LabelPlacement;
`;
export const inputVariant = `"use client";
import { Input } from "@/components/ui/input";
const InputVariant = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Input type="text" placeholder="Default" />
      <Input type="text" placeholder="Bordered" variant="bordered" />
      <Input
        type="text"
        placeholder="Underline"
        variant="underline"
        radius="none"
      />
      <Input
        type="text"
        placeholder="Faded - background and borderline"
        variant="faded"
      />
      <Input type="text" placeholder="shadow input" shadow="lg" />
      <Input
        type="text"
        placeholder="background"
        variant="flat"
        color="primary"
      />
      <Input type="text" placeholder="Ghost" variant="ghost" />
      <Input
        type="text"
        placeholder="background with shadow"
        shadow="lg"
        variant="flat"
        color="primary"
      />
      <Input
        type="text"
        placeholder="flat underline"
        variant="flat-underline"
        color="primary"
        radius="none"
      />
      <Input
        type="text"
        placeholder="flat underline"
        variant="flat-underline"
        color="primary"
        radius="none"
      />
    </div>
  );
};
export default InputVariant;
`;
