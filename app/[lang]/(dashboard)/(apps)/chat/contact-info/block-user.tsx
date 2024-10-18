"use client"
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Icon } from "@iconify/react";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Ban } from "lucide-react";
const BlockUser = () => {
  const [selected, setSelected] = useState<string>("cr_1");
  const handleValueChange = (value: string) => {
    setSelected(value)
  }
  return (

    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="w-full justify-start gap-3  bg-transparent hover:bg-default-50 px-1.5 group"
        >
          <span className="w-5 h-5 rounded-full bg-default-200 group-hover:bg-default-300 flex justify-center items-center">
            <Ban className="w-3 h-3 text-default-500" />
          </span>
          <span className="text-xs text-default-600">Block</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader className="px-5 pt-7 mb-0">
          <DialogTitle
            className="text-center">
            Block Nilee M. Chy
          </DialogTitle>
        </DialogHeader>
        <div className="text-sm text-default-500  space-y-4 mt-4 px-4">
          <div>
            <RadioGroup
              defaultValue="block_1"
              onValueChange={handleValueChange}
            >
              <Label
                className="flex gap-2.5 items-center w-full rounded-md p-2 hover:bg-default-50 group"
                htmlFor="block_1"
              >
                <div className="h-10 w-10 rounded-full bg-default-100 flex justify-center items-center group-hover:bg-default-200">
                  <Icon icon="ant-design:message-outlined" className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h2 className="text-sm font-bold text-default-900 mb-1">Message and Calls</h2>
                  <ul className="space-y-[2px]">
                    <li className="text-xs text-default-500">Nilee M. Chy Cann't  message and call you.</li>
                    <li className="text-xs text-default-500">He can see your profile.</li>
                  </ul>
                </div>
                <RadioGroupItem
                  value="block_1"
                  id="block_1"
                  color="primary"
                ></RadioGroupItem>
              </Label>
              <Label
                className="flex gap-2.5 items-center w-full rounded-md p-2 hover:bg-default-50 group"
                htmlFor="block_2"
              >
                <div className="h-10 w-10 rounded-full bg-default-100 flex justify-center items-center group-hover:bg-default-200">
                  <Icon icon="codicon:account" className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h2 className="text-sm font-bold text-default-900 mb-1">Block From Account</h2>
                  <ul className="space-y-[2px]">
                    <li className="text-xs text-default-500">Nilee M. Chy Cann't  message and call you.</li>
                    <li className="text-xs text-default-500">He cann't see your profile.</li>
                  </ul>
                </div>
                <RadioGroupItem
                  value="block_2"
                  id="block_2"
                  color="primary"
                ></RadioGroupItem>
              </Label>
            </RadioGroup>
          </div>
        </div>
        <DialogFooter className="p-5 pb-7 sm:justify-center">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              color="destructive"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
          >Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BlockUser;