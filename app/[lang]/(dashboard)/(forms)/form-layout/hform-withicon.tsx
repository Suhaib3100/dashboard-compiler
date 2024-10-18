"use client"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from '@iconify/react';
const hriFormWithIcon = () => {
  return (
    <form>
      <div className="grid grid-cols-2 gap-4">

        <div className="col-span-2  flex flex-col lg:items-center lg:flex-row lg:gap-0 gap-2">
          <Label htmlFor="hriFullName1" className="lg:min-w-[160px]">Full Name</Label>
          <InputGroup merged>
            <InputGroupText>
              <Icon icon="mdi:user" />
            </InputGroupText>
            <Input type="text" placeholder="Your name" id="hriFullName1" />
          </InputGroup>
        </div>
        <div className="col-span-2  flex flex-col lg:items-center lg:flex-row lg:gap-0 gap-2">
          <Label htmlFor="hriEmail1" className="lg:min-w-[160px]">Email Address</Label>
          <InputGroup merged>
            <InputGroupText>
              <Icon icon="ic:outline-email" />
            </InputGroupText>
            <Input type="email" placeholder="Your email" id="hriEmail1" />
          </InputGroup>
        </div>
        <div className="col-span-2  flex flex-col lg:items-center lg:flex-row lg:gap-0 gap-2">
          <Label htmlFor="hriPassword1" className="lg:min-w-[160px]">Password</Label>
          <InputGroup merged>
            <InputGroupText>
              <Icon icon="material-symbols:lock-outline" />
            </InputGroupText>
            <Input type="password" placeholder="Type password" id="hriPassword1" />
            <InputGroupText>
              <Icon icon="basil:eye-closed-solid" />
            </InputGroupText>
          </InputGroup>
        </div>
        <div className="col-span-2  flex flex-col lg:items-center lg:flex-row lg:gap-0 gap-2">
          <Label htmlFor="hriPhone1" className="lg:min-w-[160px]">Phone Number</Label>
          <InputGroup merged className="flex">
            <InputGroupText>
              <Icon icon="tdesign:call" />
            </InputGroupText>
            <Input type="number" placeholder="Type number" id="hriPhone1" />
          </InputGroup>
        </div>

        <div className="col-span-2  flex flex-col lg:items-center lg:flex-row lg:gap-0 gap-2">
          <Label htmlFor="state" className="lg:min-w-[160px]">State</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alberta">Alberta</SelectItem>
              <SelectItem value="british">British Columbia</SelectItem>
              <SelectItem value="manitoba">Manitoba</SelectItem>
              <SelectItem value="brunswick">New Brunswick</SelectItem>
              <SelectItem value="ontario">Ontario</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-2 lg:pl-[160px]">
          <div className="flex lg:items-center gap-1.5">
            <Checkbox id="term6" size="sm" color="default" />
            <Label
              htmlFor="term6"
              className="text-base text-muted-foreground font-normal"
            >
              Agree to terms and conditions
            </Label>
          </div>
        </div>
        <div className="col-span-2 lg:pl-[160px]">
          <Button type="submit">Submit Form</Button>
        </div>
      </div>
    </form>
  );
};

export default hriFormWithIcon;