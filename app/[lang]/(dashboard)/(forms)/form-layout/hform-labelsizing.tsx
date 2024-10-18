"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from '@iconify/react';
const HrFormLabelSizing = () => {
  return (
    <form>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col lg:items-center lg:flex-row lg:gap-0 gap-2">
          <Label htmlFor="hriFullName" className="text-xs lg:min-w-[160px]">Full Name</Label>
          <InputGroup merged >
            <InputGroupText>
              <Icon icon="mdi:user" />
            </InputGroupText>
            <Input type="text" placeholder="Your name" id="hriFullName" />
          </InputGroup>
        </div>
        <div className="col-span-2  flex flex-col lg:items-center lg:flex-row lg:gap-0 gap-2">
          <Label htmlFor="hriEmail" className="text-sm lg:min-w-[160px]">Email Address</Label>
          <InputGroup merged>
            <InputGroupText>
              <Icon icon="ic:outline-email" />
            </InputGroupText>
            <Input type="email" placeholder="Your email" id="hriEmail" />
          </InputGroup>
        </div>
        <div className="col-span-2  flex flex-col lg:items-center lg:flex-row lg:gap-0 gap-2">
          <Label htmlFor="hriPassword" className="text-base lg:min-w-[160px]">Password</Label>
          <InputGroup merged>
            <InputGroupText>
              <Icon icon="material-symbols:lock-outline" />
            </InputGroupText>
            <Input type="password" placeholder="Type password" id="hriPassword" />
            <InputGroupText>
              <Icon icon="basil:eye-closed-solid" />
            </InputGroupText>
          </InputGroup>
        </div>
      </div>
    </form>
  );
};

export default HrFormLabelSizing;