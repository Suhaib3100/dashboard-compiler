"use client"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from '@iconify/react';
const VFormWithIcon = () => {
  return (
    <form>
      <div className="grid grid-cols-2 gap-4">

        <div className="col-span-2  flex flex-col gap-2">
          <Label htmlFor="viFullName3">Full Name</Label>
          <InputGroup merged>
            <InputGroupText>
              <Icon icon="mdi:user" />
            </InputGroupText>
            <Input type="text" placeholder="Your name" id="viFullName3" />
          </InputGroup>
        </div>
        <div className="col-span-2  flex flex-col gap-2">
          <Label htmlFor="viEmail3">Email Address</Label>
          <InputGroup merged>
            <InputGroupText>
              <Icon icon="ic:outline-email" />
            </InputGroupText>
            <Input type="email" placeholder="Your email" id="viEmail3" />
          </InputGroup>
        </div>
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="viPassword3">Password</Label>
          <InputGroup merged>
            <InputGroupText>
              <Icon icon="material-symbols:lock-outline" />
            </InputGroupText>
            <Input type="password" placeholder="Type password" id="viPassword3" />
            <InputGroupText>
              <Icon icon="basil:eye-closed-solid" />
            </InputGroupText>
          </InputGroup>
        </div>
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="viPhone3">Phone Number</Label>
          <InputGroup merged className="flex">
            <InputGroupText>
              <Icon icon="tdesign:call" />
            </InputGroupText>
            <Input type="number" placeholder="Type number" id="viPhone3" />
          </InputGroup>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label htmlFor="state">State</Label>
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
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="viCode3">Zip Code</Label>
          <InputGroup merged >
            <InputGroupText>
              <Icon icon="humbleicons:box" />
            </InputGroupText>
            <Input type="number" placeholder="Type Code" id="viCode3" />
          </InputGroup>
        </div>
        <div className="col-span-2">
          <div className="flex items-center gap-1.5">
            <Checkbox id="term4" size="sm" color="default" />
            <Label
              htmlFor="term4"
              className="text-base text-muted-foreground font-normal"
            >
              Agree to terms and conditions
            </Label>
          </div>
        </div>
        <div className="col-span-2">
          <Button type="submit">Submit Form</Button>
        </div>
      </div>
    </form>
  );
};

export default VFormWithIcon;