"use client"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import book1 from "@/public/images/all-img/book-1.png"
import book2 from "@/public/images/all-img/book-2.png"
import book3 from "@/public/images/all-img/book-3.png"
import book4 from "@/public/images/all-img/book-4.png"
import book5 from "@/public/images/all-img/book-5.png"
import book6 from "@/public/images/all-img/book-5.png"

const RadioTylesGrouped = () => {
  const [selected, setSelected] = useState<string>("rtg_1");
  const handleValueChange = (value: string) => setSelected(value)
  return (
    <div>
      <h3 className="text-xl font-medium text-default-800 mb-5">Choose your favorite subject</h3>
      <RadioGroup
        defaultValue="rtg_1"
        onValueChange={handleValueChange}
      >

        <Label htmlFor="rtg_1">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 dark:bg-default-200 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": selected === "rtg_1"
          })}>
            <RadioGroupItem value="rtg_1" id="rtg_1" className={cn("absolute top-3 left-3 opacity-0 invisible", {
              "visible opacity-100": selected === "rtg_1"
            })}> </RadioGroupItem>
            <div className="h-16 w-16">
              <Image src={book1} alt="image" className="h-full w-full object-cover dark:invert" priority={true} />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">English</span>
          </div>
        </Label>
        <Label htmlFor="rtg_2">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 dark:bg-default-200 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": selected === "rtg_2"
          })}>
            <RadioGroupItem value="rtg_2" id="rtg_2" className={cn("absolute top-3 left-3 opacity-0 invisible", {
              "visible opacity-100": selected === "rtg_2"
            })}> </RadioGroupItem>
            <div className="h-16 w-16">
              <Image src={book2} alt="image" className="h-full w-full object-cover dark:invert" priority={true} />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Mathematics</span>
          </div>
        </Label>
        <Label htmlFor="rtg_3">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 dark:bg-default-200 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": selected === "rtg_3"
          })}>
            <RadioGroupItem value="rtg_3" id="rtg_3" className={cn("absolute top-3 left-3 opacity-0 invisible", {
              "visible opacity-100": selected === "rtg_3"
            })}> </RadioGroupItem>
            <div className="h-16 w-16">
              <Image src={book3} alt="image" className="h-full w-full object-cover dark:invert" priority={true} />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Physics</span>
          </div>
        </Label>
        <Label htmlFor="rtg_4">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 dark:bg-default-200 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": selected === "rtg_4"
          })}>
            <RadioGroupItem value="rtg_4" id="rtg_4" className={cn("absolute top-3 left-3 opacity-0 invisible", {
              "visible opacity-100": selected === "rtg_4"
            })}> </RadioGroupItem>
            <div className="h-16 w-16">
              <Image src={book4} alt="image" className="h-full w-full object-cover dark:invert" priority={true} />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Biology</span>
          </div>
        </Label>
        <Label htmlFor="rtg_5">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 dark:bg-default-200 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": selected === "rtg_5"
          })}>
            <RadioGroupItem value="rtg_5" id="rtg_5" className={cn("absolute top-3 left-3 opacity-0 invisible", {
              "visible opacity-100": selected === "rtg_5"
            })}> </RadioGroupItem>
            <div className="h-16 w-16">
              <Image src={book5} alt="image" className="h-full w-full object-cover dark:invert" priority={true} />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Social Science</span>
          </div>
        </Label>
        <Label htmlFor="rtg_6">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 dark:bg-default-200 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": selected === "rtg_6"
          })}>
            <RadioGroupItem value="rtg_6" id="rtg_6" className={cn("absolute top-3 left-3 opacity-0 invisible", {
              "visible opacity-100": selected === "rtg_6"
            })}> </RadioGroupItem>
            <div className="h-16 w-16">
              <Image src={book6} alt="image" className="h-full w-full object-cover dark:invert" priority={true} />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Computer Tech</span>
          </div>
        </Label>
      </RadioGroup>
    </div>
  );
};

export default RadioTylesGrouped;