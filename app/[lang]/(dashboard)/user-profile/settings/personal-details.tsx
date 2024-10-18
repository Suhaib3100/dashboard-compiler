"use client"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import { CalendarDays } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
const PersonalDetails = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <Card className="rounded-t-none pt-6">
      <CardContent>
        <div className="grid grid-cols-12 md:gap-x-12 gap-y-5">
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="firstName" className="mb-2">First Name</Label>
            <Input id="firstName" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="lastName" className="mb-2">Last Name</Label>
            <Input id="lastName" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="phoneNumber" className="mb-2">Phone Number</Label>
            <Input id="phoneNumber" type="number" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="email" className="mb-2">Email Address</Label>
            <Input id="email" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="email" className="mb-2">Joining Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full text-left font-normal border border-default-200 flex justify-between text-default-600 bg-background",
                  )}
                >
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                  <CalendarDays className=" h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="website" className="mb-2">Website</Label>
            <Input id="website" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="website" className="mb-2">Organization</Label>
            <Input id="website" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="designation" className="mb-2">Designation</Label>
            <Input id="designation" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="language" className="mb-2">Language</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="bangla">Bangla</SelectItem>
                <SelectItem value="arabic">Arabic</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="language" className="mb-2">Exprience Years</Label>
            <div className="flex flex-col lg:flex-row items-center">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="2018" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2018">2018</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex-none text-sm font-medium text-default-800 px-3">To</div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="2018" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2018">2018</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Label htmlFor="country" className="mb-2">Country</Label>
            <Input id="country" />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Label htmlFor="city" className="mb-2">City</Label>
            <Input id="city" />
          </div>

          <div className="col-span-12 lg:col-span-4">
            <Label htmlFor="zipCode" className="mb-2">Zip Code</Label>
            <Input id="zipCode" type="number" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="timezone" className="mb-2">Timezone</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dhaka">(GMT +6.00) Dhaka</SelectItem>
                <SelectItem value="rajshahi">(GMT +6.00) Rajshahi</SelectItem>
                <SelectItem value="khulna">(GMT +7.00) Khulna</SelectItem>
                <SelectItem value="barisal">(GMT +7.00) Barisal</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="currency" className="mb-2">Currency</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="jpy">JPY</SelectItem>
                <SelectItem value="gbp">GBP</SelectItem>
                <SelectItem value="aud">AUD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-12 ">
            <Label htmlFor="message" className="mb-2">About</Label>
            <Textarea />
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <Button color="secondary">Cancel</Button>
          <Button>Save</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalDetails;