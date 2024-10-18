"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";

import rd1 from "@/public/images/all-img/rd-1.jpg";
import rd2 from "@/public/images/all-img/rd-2.png";
import rd3 from "@/public/images/all-img/rd-3.png";
import rd4 from "@/public/images/all-img/rd-4.png";
import rd5 from "@/public/images/all-img/rd-5.png";
import rd6 from "@/public/images/all-img/rd-6.png";
import Image from "next/image";

const RadioCards = () => {
  const [selected, setSelected] = useState<string>("rdc_1");
  const handleValueChange = (value: string) => setSelected(value);
  return (
    <div className="max-w-3xl mx-auto">
      <RadioGroup
        defaultValue="rdc_1"
        onValueChange={handleValueChange}
        className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-5"
      >
        <div>
          <Label htmlFor="rdc_1">
            <div
              className={cn(
                " flex flex-col justify-center items-center rounded-md relative border-2 border-default-200",
                {
                  "border-primary ": selected === "rdc_1",
                }
              )}
            >
              <RadioGroupItem
                value="rdc_1"
                id="rdc_1"
                className={cn("absolute top-3 left-3 opacity-0 invisible", {
                  "visible opacity-100": selected === "rdc_1",
                })}
              >
                {" "}
              </RadioGroupItem>

              <div>
                <div className="h-[114px] w-full mb-2">
                  <Image
                    src={rd1}
                    className="w-full h-full object-cover rounded-t-sm"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-default-600">
                    This is a banana. Banana is yellow
                  </h4>
                  <p className="mt-2 text-xs text-default-600">
                    A banana is a curved, yellow fruit with a thick skin and
                    soft sweet flesh.
                  </p>
                </div>
              </div>
            </div>
          </Label>
        </div>

        <div>
          <Label htmlFor="rdc_2">
            <div
              className={cn(
                " flex flex-col justify-center items-center rounded-md relative border-2 border-default-200 ",
                {
                  "border-primary": selected === "rdc_2",
                }
              )}
            >
              <RadioGroupItem
                value="rdc_2"
                id="rdc_2"
                className={cn("absolute top-3 left-3 opacity-0 invisible", {
                  "visible opacity-100": selected === "rdc_2",
                })}
              >
                {" "}
              </RadioGroupItem>

              <div>
                <div className="h-[114px] w-full mb-2">
                  <Image
                    src={rd2}
                    className="w-full h-full object-cover rounded-t-sm"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-default-600">
                    This is a banana. Banana is yellow
                  </h4>
                  <p className="mt-2 text-xs text-default-600">
                    A banana is a curved, yellow fruit with a thick skin and
                    soft sweet flesh.
                  </p>
                </div>
              </div>
            </div>
          </Label>
        </div>

        <div>
          <Label htmlFor="rdc_3">
            <div
              className={cn(
                " flex flex-col justify-center items-center rounded-md relative border-2 border-default-200 ",
                {
                  "border-primary": selected === "rdc_3",
                }
              )}
            >
              <RadioGroupItem
                value="rdc_3"
                id="rdc_3"
                className={cn("absolute top-3 left-3 opacity-0 invisible", {
                  "visible opacity-100": selected === "rdc_3",
                })}
              >
                {" "}
              </RadioGroupItem>

              <div>
                <div className="h-[114px] w-full mb-2">
                  <Image
                    src={rd3}
                    className="w-full h-full object-cover rounded-t-sm"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-default-600">
                    This is a banana. Banana is yellow
                  </h4>
                  <p className="mt-2 text-xs text-default-600">
                    A banana is a curved, yellow fruit with a thick skin and
                    soft sweet flesh.
                  </p>
                </div>
              </div>
            </div>
          </Label>
        </div>
        <div>
          <Label htmlFor="rdc_4">
            <div
              className={cn(
                " flex flex-col justify-center items-center rounded-md relative border-2 border-default-200 ",
                {
                  "border-primary": selected === "rdc_4",
                }
              )}
            >
              <RadioGroupItem
                value="rdc_4"
                id="rdc_4"
                className={cn("absolute top-3 left-3 opacity-0 invisible", {
                  "visible opacity-100": selected === "rdc_4",
                })}
              >
                {" "}
              </RadioGroupItem>

              <div>
                <div className="h-[114px] w-full mb-2">
                  <Image
                    src={rd4}
                    className="w-full h-full object-cover rounded-t-sm"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-default-600">
                    This is a banana. Banana is yellow
                  </h4>
                  <p className="mt-2 text-xs text-default-600">
                    A banana is a curved, yellow fruit with a thick skin and
                    soft sweet flesh.
                  </p>
                </div>
              </div>
            </div>
          </Label>
        </div>
        <div>
          <Label htmlFor="rdc_5">
            <div
              className={cn(
                " flex flex-col justify-center items-center rounded-md relative border-2 border-default-200 ",
                {
                  "border-primary": selected === "rdc_5",
                }
              )}
            >
              <RadioGroupItem
                value="rdc_5"
                id="rdc_5"
                className={cn("absolute top-3 left-3 opacity-0 invisible", {
                  "visible opacity-100": selected === "rdc_5",
                })}
              >
                {" "}
              </RadioGroupItem>

              <div>
                <div className="h-[114px] w-full mb-2">
                  <Image
                    src={rd5}
                    className="w-full h-full object-cover rounded-t-sm"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-default-600">
                    This is a banana. Banana is yellow
                  </h4>
                  <p className="mt-2 text-xs text-default-600">
                    A banana is a curved, yellow fruit with a thick skin and
                    soft sweet flesh.
                  </p>
                </div>
              </div>
            </div>
          </Label>
        </div>
        <div>
          <Label htmlFor="rdc_6">
            <div
              className={cn(
                " flex flex-col justify-center items-center rounded-md relative border-2 border-default-200 ",
                {
                  "border-primary": selected === "rdc_6",
                }
              )}
            >
              <RadioGroupItem
                value="rdc_6"
                id="rdc_6"
                className={cn("absolute top-3 left-3 opacity-0 invisible", {
                  "visible opacity-100": selected === "rdc_6",
                })}
              >
                {" "}
              </RadioGroupItem>

              <div>
                <div className="h-[114px] w-full mb-2">
                  <Image
                    src={rd6}
                    className="w-full h-full object-cover rounded-t-sm"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h4 className="text-sm font-semibold text-default-600">
                    This is a banana. Banana is yellow
                  </h4>
                  <p className="mt-2 text-xs text-default-600">
                    A banana is a curved, yellow fruit with a thick skin and
                    soft sweet flesh.
                  </p>
                </div>
              </div>
            </div>
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default RadioCards;
