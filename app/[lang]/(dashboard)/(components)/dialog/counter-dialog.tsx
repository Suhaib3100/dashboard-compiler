"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const CounterDialog = () => {
  const [count, setCount] = useState<number>(19);
  const handleDecrement = () => {
    setCount((prevcount) => prevcount - 1);
  };
  const handleIncrement = () => {
    setCount((prevcount) => prevcount + 1);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Counter Dialog</Button>
      </DialogTrigger>
      <DialogContent size="md" className="p-0">
        <DialogHeader>
          <div className="flex items-center gap-3 p-5">
            <div className="h-12 w-12 rounded-sm border border-border grid place-content-center">
              <Icon
                icon="heroicons:square-3-stack-3d"
                className="w-5 h-5 text-default-500"
              />
            </div>
            <div>
              <div className="text-base font-semibold text-default-700  mb-1">
                Booking Seat
              </div>
              <p className="text-xs text-default-500 ">
                Select how many seat you need
              </p>
            </div>
          </div>
        </DialogHeader>
        <hr />
        <div>
          <div className="border border-border flex max-w-[300px] rounded-sm mx-auto mb-8 mt-4">
            <button
              type="button"
              className="text-xl w-[72px] h-[50px] flex justify-center items-center border-r border-border"
              onClick={handleDecrement}
            >
              <Icon icon="ic:round-minus" />
            </button>
            <span className="grow shrink text-center flex justify-center items-center text-lg font-semibold text-default-950">
              {count}
            </span>
            <button
              type="button"
              className="text-xl w-[72px] h-[50px] flex justify-center items-center border-l border-border"
              onClick={handleIncrement}
            >
              <Icon icon="ic:round-plus" />
            </button>
          </div>
          <hr />
          <ul className="p-5 space-y-2">
            <li className="flex justify-between">
              <span className="text-sm font-semibold text-default-700">
                Price Per Seat
              </span>{" "}
              <span className="text-sm font-semibold text-default-700">
                $100
              </span>{" "}
            </li>
            <li className="flex justify-between">
              <span className="text-sm font-semibold text-default-700">
                Total
              </span>{" "}
              <span className="text-sm font-semibold text-default-700">
                $1900
              </span>{" "}
            </li>
          </ul>
        </div>
        <DialogFooter className=" p-5">
          <DialogClose asChild>
            <Button variant="outline" color="warning">
              Cancel
            </Button>
          </DialogClose>
          <Button>Purchase Seat</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CounterDialog;
