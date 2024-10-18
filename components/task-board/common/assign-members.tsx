"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CustomPopover, Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { faker } from "@faker-js/faker";
import { Icon } from "@iconify/react";
import { UserPlus, X } from "lucide-react";
import { useState } from "react";
const members = [
  {
    name: "Nick Jonas",
    value: "userid1",
    image: faker.image.avatarLegacy()
  },
  {
    name: "Fahim",
    value: "userid2",
    image: faker.image.avatarLegacy()
  },
  {
    name: "Nayeem",
    value: "userid3",
    image: faker.image.avatarLegacy()
  },
  {
    name: "Iftekhar",
    value: "userid4",
    image: faker.image.avatarLegacy()
  },
]
const AssignMembers = ({ icon }: { icon?: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const togglePopover = () => setOpen(!open);



  return (
    <CustomPopover
      trigger={
        <button
          className="h-5 w-5 rounded-full bg-default-100 grid place-content-center"
          onClick={togglePopover}
        >
          {
            icon ? icon :
              <UserPlus className="w-3 h-3 text-primary" />
          }
        </button>
      }
      open={open}
      onClose={() => setOpen(false)}
    >
      <div className="flex justify-between items-center bg-default-50  border-b border-default-300 px-3 py-2">
        <div className=" text-sm font-medium text-default-900 ">Assign Task To</div>
        <Button
          type="button"
          size="icon"
          className="w-6 h-6 bg-default-400 rounded-full"
          onClick={togglePopover}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
      <div className="p-2">
        <Command>
          <CommandInput
            placeholder="Search By Name..."
            inputWrapper="border border-default-200 rounded-md"
            className="h-9"
          ></CommandInput>
          <CommandEmpty>No new members.</CommandEmpty>
          <CommandGroup>
            {
              members.map(item => (
                <CommandItem
                  key={`assigned-members-${item.value}`}
                  value={item.name}
                  className="gap-2"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={item.image} />
                    <AvatarFallback>SN</AvatarFallback>
                  </Avatar>
                  <span className="font-base capitalize text-default-900">
                    {item.name}
                  </span>
                </CommandItem>
              ))
            }
          </CommandGroup>
        </Command>
      </div>
    </CustomPopover>
  );
};

export default AssignMembers;