"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Map from "./map";
import { countries } from "./data";

const TopCountries = () => {

  return (
    <Card>
      <CardHeader className="border-none mb-0 pt-7">
        <CardTitle>Top Countries</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-6 flex-wrap ">
          {countries.map(item => (
            <div
              key={item.id}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2  rounded-full bg-${item.color}`}></span>
                <span className="text-sm text-default-500 capitalize">{item.name}</span>
              </div>
              <div className="text-base font-semibold text-default-800">{item.rate}%</div>
            </div>
          ))}
        </div>
        <div className="w-full overflow-hidden mt-6">
          <Map />
        </div>
      </CardContent>
    </Card>
  );
};

export default TopCountries;