"use client";
import { Input } from "@/components/ui/input";

const ColumnSizing = () => {
  return (
    <form>
      <div className="hidden lg:block">
        <div className="grid grid-cols-12 gap-x-[30px] gap-y-4 ">
          <div className="col-span-12 ">
            <Input type="text" placeholder="Full Name" />
          </div>

          <div className="col-span-12 lg:col-span-6">
            <Input type="email" placeholder="Email Address" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Input type="password" placeholder="Password" />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Input type="number" placeholder="Phone number" />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Input type="text" placeholder="City" />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Input type="text" placeholder="State" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Input type="text" placeholder="Counter" />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <Input type="number" placeholder="Zip Code" />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <Input type="text" placeholder="Optional" />
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="flex flex-col gap-4">
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email Address" />
          <Input type="password" placeholder="Password" />
          <Input type="number" placeholder="Phone number" />
          <Input type="text" placeholder="City" />
          <Input type="text" placeholder="State" />
          <Input type="text" placeholder="Counter" />
          <Input type="number" placeholder="Zip Code" />
          <Input type="text" placeholder="Optional" />
        </div>
      </div>
    </form>
  );
};

export default ColumnSizing;
