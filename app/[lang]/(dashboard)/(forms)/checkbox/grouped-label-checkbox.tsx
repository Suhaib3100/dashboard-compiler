"use client"
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

import book1 from "@/public/images/all-img/book-1.png"
import book2 from "@/public/images/all-img/book-2.png"
import book3 from "@/public/images/all-img/book-3.png"
import book4 from "@/public/images/all-img/book-4.png"
import book5 from "@/public/images/all-img/book-5.png"

const GroupedLabelCheckbox = () => {
  const [checked1, setChecked1] = useState<boolean>(true);
  const [checked3, setChecked3] = useState<boolean>(false);
  const [checked4, setChecked4] = useState<boolean>(false);
  const [checked5, setChecked5] = useState<boolean>(false);
  const [checked6, setChecked6] = useState<boolean>(false);
  return (
    <div>
      <h3 className="text-xl font-medium text-default-800 mb-5">Choose your favorite subject</h3>
      <div className="flex flex-wrap gap-6">
        <Label htmlFor="cbg_1">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 dark:bg-default-200 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": checked1
          })}>
            <Checkbox
              value="cbg_1"
              id="cbg_1"
              radius="xl"
              onCheckedChange={() => setChecked1(!checked1)}
              defaultChecked
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked1
              })} />
            <div className="h-16 w-16">
              <Image src={book1} alt="image" className="h-full w-full object-cover dark:invert" priority={true} />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">English</span>
          </div>
        </Label>

        <Label
          htmlFor="cbg_3">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 dark:bg-default-200 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": checked3
          })}>
            <Checkbox
              id="cbg_3"
              radius="xl"
              onCheckedChange={() => setChecked3(!checked3)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked3
              })} />
            <div className="h-16 w-16">
              <Image src={book2} alt="image" className="h-full w-full object-cover dark:invert" priority={true} />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Physics</span>
          </div>
        </Label>
        <Label
          htmlFor="chbg_4">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 dark:bg-default-200 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": checked4
          })}>
            <Checkbox
              id="chbg_4"
              radius="xl"
              onCheckedChange={() => setChecked4(!checked4)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked4
              })} />
            <div className="h-16 w-16">
              <Image src={book3} alt="image" className="h-full w-full object-cover dark:invert" priority={true} />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Biology</span>
          </div>
        </Label>
        <Label
          htmlFor="chbg_5">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 dark:bg-default-200 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": checked5
          })}>
            <Checkbox
              id="chbg_5"
              radius="xl"
              onCheckedChange={() => setChecked5(!checked5)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked5
              })} />
            <div className="h-16 w-16">
              <Image src={book4} alt="image" className="h-full w-full object-cover dark:invert" priority={true} />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Social Science</span>
          </div>
        </Label>
        <Label
          htmlFor="chbg_6">
          <div className={cn("min-w-[156px] min-h-[145px] bg-default-100 dark:bg-default-200 flex flex-col justify-center items-center rounded-md relative border border-none", {
            "border-solid border-primary": checked6
          })}>
            <Checkbox
              id="chbg_6"
              radius="xl"
              onCheckedChange={() => setChecked6(!checked6)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked6
              })} />
            <div className="h-16 w-16">
              <Image src={book5} alt="image" className="h-full w-full object-cover dark:invert" priority={true} />
            </div>
            <span className="text-base font-medium text-default-800 capitalize mt-1.5 inline-block">Computer Tech</span>
          </div>
        </Label>

      </div>

    </div>
  );
};

export default GroupedLabelCheckbox;