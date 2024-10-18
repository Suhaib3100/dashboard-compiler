"use client"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const FormAutoSize = () => {
  return (
    <div className="space-y-4">
      <form>
        <div className="flex flex-wrap  gap-4">
          <div className="w-full lg:w-1/5">
            <Input type="text" placeholder="Full  Name" />
          </div>
          <div className="w-full lg:w-1/5">
            <Input type="email" placeholder="Email" />
          </div>
          <div className="w-full lg:w-1/5">
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
          <div className="flex items-center gap-1">
            <Checkbox id="auto_terms_1" />
            <Label htmlFor="auto_terms_1">Remember me</Label>
          </div>
          <Button type="submit">Submit Form</Button>
        </div>
      </form>
      <form>
        <div className="flex flex-wrap  gap-4">
          <div className="w-full lg:w-1/4">
            <Input type="text" placeholder="Full  Name" />
          </div>
          <div className="w-full lg:w-1/4">
            <Input type="email" placeholder="Email" />
          </div>
          <div className="w-full lg:w-1/4">
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
          <div className="flex items-center gap-1">
            <Checkbox id="auto_terms_2" />
            <Label htmlFor="auto_terms_2">Remember me</Label>
          </div>
          <Button type="submit">Submit Form</Button>
        </div>
      </form>
    </div>

  );
};

export default FormAutoSize;