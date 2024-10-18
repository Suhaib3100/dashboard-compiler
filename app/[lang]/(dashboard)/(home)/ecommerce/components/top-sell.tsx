
"use client"
import img1 from "@/public/images/home/img-1.png"
import img2 from "@/public/images/home/img-2.png"
import img3 from "@/public/images/home/img-3.png"
import img4 from "@/public/images/home/img-4.png"
import img5 from "@/public/images/home/img-5.png"
import img6 from "@/public/images/home/img-6.png"
import Image, { StaticImageData } from "next/image"
import { Fragment } from "react"

type DataItem = {
  id: number;
  name: string;
  price: string;
  totalsales: string;
  image: StaticImageData;
};

const data: DataItem[] = [
  {
    id: 1,
    name: "Apple red watch",
    price: "369.36",
    totalsales: "936",
    image: img1
  },
  {
    id: 2,
    name: "Apple red watch",
    price: "369.36",
    totalsales: "936",
    image: img2
  },
  {
    id: 3,
    name: "Apple red watch",
    price: "369.36",
    totalsales: "936",
    image: img3
  },
  {
    id: 4,
    name: "Apple red watch",
    price: "369.36",
    totalsales: "936",
    image: img4
  },
  {
    id: 5,
    name: "Apple red watch",
    price: "369.36",
    totalsales: "936",
    image: img5
  },
  {
    id: 6,
    name: "Apple red watch",
    price: "369.36",
    totalsales: "936",
    image: img6
  },
  {
    id: 7,
    name: "Apple red watch",
    price: "369.36",
    totalsales: "936",
    image: img6
  },
  {
    id: 8,
    name: "Apple red watch",
    price: "369.36",
    totalsales: "936",
    image: img4
  },
  {
    id: 9,
    name: "Apple red watch",
    price: "369.36",
    totalsales: "936",
    image: img5
  },
  {
    id: 10,
    name: "Apple red watch",
    price: "369.36",
    totalsales: "936",
    image: img6
  },
  {
    id: 11,
    name: "Apple red watch",
    price: "369.36",
    totalsales: "936",
    image: img6
  }
]
const TopSell = () => {
  return (
    <Fragment>
      {
        data.map((item, index) => (
          <li
            className="flex justify-between items-center gap-2 border-b border-default-300 py-3 px-6 hover:bg-default-50"
            key={`top-sell-${index}`}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md">
                <Image
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-default-700"> {item.name}</span>
                <span className="text-xs font-medium text-default-600">${item.price}</span>
              </div>
            </div>
            <span className="text-xs text-default-600">{item.totalsales} sales</span>
          </li>
        ))
      }

    </Fragment>
  );
};

export default TopSell;
