"use client";
import { Icon } from '@iconify/react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
const ToggleDialog = () => {

  const [activeIndex, setActiveIndex] = useState<number>(1);
  const totalSlide = 2;
  const handleNextSlide = () => {
    setActiveIndex(activeIndex + 1)
  }
  const handlePrevSlide = () => {
    if (activeIndex > 1) {
      setActiveIndex(activeIndex - 1)
    }
    setActiveIndex(1)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Basic Modal</Button>
      </DialogTrigger>
      <DialogContent size="2xl" className="p-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-base font-medium"> Add Your Address</DialogTitle>
        </DialogHeader>
        <div className='max-h-[300px]'>
          <ScrollArea className="h-full px-6">
            {
              activeIndex === 1 &&
              <div className="sm:grid  sm:grid-cols-2 sm:gap-5 space-y-4 sm:space-y-0">
                <div className="flex flex-col gap-2">
                  <Label>First Name</Label>
                  <Input type="text" placeholder="Enter first name" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Last Name</Label>
                  <Input type="text" placeholder="Enter last name" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Country/Region</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Your Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bd">Bangladesh</SelectItem>
                      <SelectItem value="in">India</SelectItem>
                      <SelectItem value="aus">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Street Address</Label>
                  <Input type="text" placeholder="Street address" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Town/City</Label>
                  <Input type="text" placeholder="Your town/city" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>District</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select district" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dh">Dhaka</SelectItem>
                      <SelectItem value="ctg">Chattogram</SelectItem>
                      <SelectItem value="syl">Sylhet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Phone</Label>
                  <Input type="number" placeholder="Your phone number" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Email Address</Label>
                  <Input type="email" placeholder="Enter email address" />
                </div>
              </div>
            }

            {
              activeIndex === 2 &&
              <div className='flex flex-col items-center '>
                <span className='text-7xl text-success'>
                  <Icon icon="material-symbols:check-circle-outline" />
                </span>
                <h3 className='mt-3 text-success  text-2xl font-semibold'>Congratulations</h3>
                <p className='mt-4 text-lg font-semibold text-default-600'>You Updated Your Address</p>

              </div>
            }

          </ScrollArea>
        </div>
        <div className="p-6 pt-4 flex justify-between">
          <Button type="submit" variant="outline" onClick={handlePrevSlide}>Previous</Button>
          {
            activeIndex === totalSlide ?
              <DialogClose asChild><Button type="button" color="warning">Close</Button></DialogClose>
              :
              <Button type="submit" onClick={handleNextSlide}>Next</Button>
          }
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ToggleDialog;
