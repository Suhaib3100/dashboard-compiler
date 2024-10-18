"use client"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button'
const Gutters = () => {
  return (
    <form>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 ">
          <Input type="text" placeholder="Your Name" />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Input type="email" placeholder="Email" />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Input type="password" placeholder="Password" />
        </div>
        <div className="col-span-2 ">
          <Input type="text" placeholder="Address" />
        </div>
        <div className="col-span-2 ">
          <Input type="text" placeholder="Address 2" />
        </div>
        <div className="col-span-2 ">
          <Input type="text" placeholder="City" />
        </div>
        <div className="col-span-2 lg:col-span-1">
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
        <div className="col-span-2 lg:col-span-1">
          <Input type="number" placeholder="Zip Code" />
        </div>
        <div className="col-span-2">
          <div className="flex items-center gap-1.5">
            <Checkbox id="term2" size="sm" color="default" />
            <Label
              htmlFor="term2"
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

export default Gutters;