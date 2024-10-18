"use client"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button'
const HrFormWithLabel = () => {
  return (
    <form>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[160px]">Full Name</Label>
          <Input type="text" placeholder="Your Name" id="hrFullName2" />
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="hrEmail2" className="lg:min-w-[160px]">Email Address</Label>
          <Input type="email" placeholder="Your Email" id="hrEmail2" />
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="hrPassword2" className="lg:min-w-[160px]">Password</Label>
          <Input type="password" placeholder="Your Password" id="hrPassword2" />
        </div>

        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="hrPhone2" className="lg:min-w-[160px]">Phone Number</Label>
          <Input type="number" placeholder="Your Number" id="hrPhone2" />
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
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
            <Checkbox id="term5" size="sm" color="default" />
            <Label
              htmlFor="term5"
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

export default HrFormWithLabel;