"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";

import rd1 from "@/public/images/all-img/rd-1.jpg";
import rd2 from "@/public/images/all-img/rd-2.png";
import rd3 from "@/public/images/all-img/rd-3.png";
import rd4 from "@/public/images/all-img/rd-4.png";
import rd5 from "@/public/images/all-img/rd-5.png";
import rd6 from "@/public/images/all-img/rd-6.png";
import Image from "next/image";

const CheckboxCards = () => {
  const [checked1, setChecked1] = useState<boolean>(true);
  const [checked2, setChecked2] = useState<boolean>(false);
  const [checked3, setChecked3] = useState<boolean>(false);
  const [checked4, setChecked4] = useState<boolean>(false);
  const [checked5, setChecked5] = useState<boolean>(false);
  const [checked6, setChecked6] = useState<boolean>(false);
  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-5">
        <Label htmlFor="cbcard1">
          <div
            className={cn(
              "  flex flex-col justify-center items-center rounded-md relative border-2 border-default-200",
              {
                "border-primary ": checked1,
              }
            )}
          >
            <Checkbox
              value="cbcard1"
              id="cbcard1"
              radius="xl"
              defaultChecked
              onCheckedChange={() => setChecked1(!checked1)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked1,
              })}
            />
            <>
              <div className="h-[114px] w-full mb-2 overflow-hidden rounded-t-sm">
                <Image
                  src={rd1}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-semibold text-default-600">
                  This is a banana. Banana is yellow
                </h4>
                <p className="mt-2 text-xs text-default-600">
                  A banana is a curved, yellow fruit with a thick skin and soft
                  sweet flesh.
                </p>
              </div>
            </>
          </div>
        </Label>
        <Label htmlFor="cbcard2">
          <div
            className={cn(
              " flex flex-col justify-center items-center rounded-md relative border-2 border-default-200",
              {
                "border-primary ": checked2,
              }
            )}
          >
            <Checkbox
              value="cbcard2"
              id="cbcard2"
              radius="xl"
              onCheckedChange={() => setChecked2(!checked2)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked2,
              })}
            />
            <>
              <div className="h-[114px] w-full mb-2 overflow-hidden rounded-t-sm">
                <Image
                  src={rd2}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-semibold text-default-600">
                  This is a banana. Banana is yellow
                </h4>
                <p className="mt-2 text-xs text-default-600">
                  A banana is a curved, yellow fruit with a thick skin and soft
                  sweet flesh.
                </p>
              </div>
            </>
          </div>
        </Label>
        <Label htmlFor="cbcard3">
          <div
            className={cn(
              " flex flex-col justify-center items-center rounded-md relative border-2 border-default-200",
              {
                "border-primary ": checked3,
              }
            )}
          >
            <Checkbox
              value="cbcard3"
              id="cbcard3"
              radius="xl"
              onCheckedChange={() => setChecked3(!checked3)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked3,
              })}
            />
            <>
              <div className="h-[114px] w-full mb-2 overflow-hidden rounded-t-sm">
                <Image
                  src={rd3}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-semibold text-default-600">
                  This is a banana. Banana is yellow
                </h4>
                <p className="mt-2 text-xs text-default-600">
                  A banana is a curved, yellow fruit with a thick skin and soft
                  sweet flesh.
                </p>
              </div>
            </>
          </div>
        </Label>
        <Label htmlFor="cbcard4">
          <div
            className={cn(
              " flex flex-col justify-center items-center rounded-md relative border-2 border-default-200",
              {
                "border-primary ": checked4,
              }
            )}
          >
            <Checkbox
              value="cbcard4"
              id="cbcard4"
              radius="xl"
              onCheckedChange={() => setChecked4(!checked4)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked4,
              })}
            />
            <>
              <div className="h-[114px] w-full mb-2 overflow-hidden rounded-t-sm">
                <Image
                  src={rd4}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-semibold text-default-600">
                  This is a banana. Banana is yellow
                </h4>
                <p className="mt-2 text-xs text-default-600">
                  A banana is a curved, yellow fruit with a thick skin and soft
                  sweet flesh.
                </p>
              </div>
            </>
          </div>
        </Label>
        <Label htmlFor="cbcard5">
          <div
            className={cn(
              " flex flex-col justify-center items-center rounded-md relative border-2 border-default-200",
              {
                "border-primary ": checked5,
              }
            )}
          >
            <Checkbox
              value="cbcard5"
              id="cbcard5"
              radius="xl"
              onCheckedChange={() => setChecked5(!checked5)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked5,
              })}
            />
            <>
              <div className="h-[114px] w-full mb-2 overflow-hidden rounded-t-sm">
                <Image
                  src={rd5}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-semibold text-default-600">
                  This is a banana. Banana is yellow
                </h4>
                <p className="mt-2 text-xs text-default-600">
                  A banana is a curved, yellow fruit with a thick skin and soft
                  sweet flesh.
                </p>
              </div>
            </>
          </div>
        </Label>
        <Label htmlFor="cbcard6">
          <div
            className={cn(
              " flex flex-col justify-center items-center rounded-md relative border-2 border-default-200",
              {
                "border-primary ": checked6,
              }
            )}
          >
            <Checkbox
              value="cbcard6"
              id="cbcard6"
              radius="xl"
              onCheckedChange={() => setChecked6(!checked6)}
              className={cn("absolute top-3 left-3 opacity-0 invisible", {
                "visible opacity-100": checked6,
              })}
            />
            <>
              <div className="h-[114px] w-full mb-2 overflow-hidden rounded-t-sm">
                <Image
                  src={rd6}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-semibold text-default-600">
                  This is a banana. Banana is yellow
                </h4>
                <p className="mt-2 text-xs text-default-600">
                  A banana is a curved, yellow fruit with a thick skin and soft
                  sweet flesh.
                </p>
              </div>
            </>
          </div>
        </Label>
      </div>
    </div>
  );
};

export default CheckboxCards;
