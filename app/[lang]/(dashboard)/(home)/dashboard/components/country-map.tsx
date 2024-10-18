"use client";

import Image from "next/image";
import img1 from "@/public/images/country/usa.png";
import img2 from "@/public/images/country/france.png";
import img3 from "@/public/images/country/india.png";
import img4 from "@/public/images/country/spain.png";
import img5 from "@/public/images/country/bangladesh.png";
import img6 from "@/public/images/country/brazil.png";

import world from "../../../(map)/maps-vector/worldmap.json";
import { VectorMap } from "@south-paw/react-vector-maps";
import Link from "next/link";

const CountryMap = () => {
  const country = [
    { name: "United State", image: img1, user: 32900 },
    { name: "France", image: img2, user: 30456 },
    { name: "India", image: img3, user: 29703 },
    { name: "Spain", image: img4, user: 27533 },
    { name: "Bangladesh", image: img5, user: 27523 },
    { name: "Brazil", image: img6, user: 23289 },
  ];

  return (
    <div className="grid grid-cols-12 sm:gap-6 gap-4">
      <div className="col-span-12 md:col-span-8">
        <div className={`w-[full] h-[329px]`}>
          <VectorMap
            {...world}
            className="h-full w-full object-fill dashtail-codeVmapWhite"
          />
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 mt-9 md:mt-0">
        <div className="flex justify-between items-center border-b pb-2">
          <div className="text-base font-semibold text-default-900">
            Top Countries
          </div>
          <Link
            href="/dashboard"
            className="text-xs font-medium text-primary hover:underline"
          >
            See All
          </Link>
        </div>
        <div className="py-5">
          {country.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center flex-wrap pb-3.5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full overflow-hidden w-9 h-9 inline-block">
                  <Image
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt="spain"
                  />
                </div>
                <span className="inline-block text-default-600 text-sm font-medium">
                  {item.name}
                </span>
              </div>
              <div className="text-sm text-default-600 bg-default-100 dark:bg-default-50 py-1.5 px-1.5 rounded">
                {item.user}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryMap;
