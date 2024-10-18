"use client";
import { Icon } from '@iconify/react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from 'react';

const LabelPlacement = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const clearInput = () => {
    setInputValue('');
  };

  return (
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
      <div className='border py-2 rounded-md bg-background'>
        <Label className="px-3">Your Name</Label>
        <Input type="text" placeholder="UX/UI Designer" variant="ghost" size="sm" className="text-lg focus:border-0" />
      </div>

      <div className="relative">
        <input type="text" id="floatingLabel1"
          className="block bg-background  px-3 pb-2.5 pt-6 w-full text-sm text-default-900 border border-border rounded-md appearance-none focus:outline-none focus:ring-0  peer" placeholder="" />
        <label htmlFor="floatingLabel1"
          className="absolute text-sm text-default-500  duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] start-2.5
             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3
             rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Username</label>
      </div>

      <div className="relative ">
        <input type="text" id="floatingLabel2"
          className="block  px-3 pb-2.5 pt-6 w-full text-sm text-default-900 border-b  border-border bg-default-100 rounded-md focus:border-primary appearance-none focus:outline-none focus:ring-0  peer" placeholder="" />
        <label htmlFor="floatingLabel2"
          className="absolute text-sm text-default-500  duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] start-2.5 
             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 
             rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Username</label>
      </div>
    </div>
  );
};

export default LabelPlacement;
