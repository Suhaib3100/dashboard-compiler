import DashboardDropdown from "@/components/dashboard-dropdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import p1 from "@/public/images/all-img/pr-1.png"
import p2 from "@/public/images/all-img/pr-2.png"
import p3 from "@/public/images/all-img/pr-3.png"
import p4 from "@/public/images/all-img/pr-4.png"
import p5 from "@/public/images/all-img/pr-5.png"
import p7 from "@/public/images/all-img/pr-6.png"
import p8 from "@/public/images/all-img/pr-7.png"
import p9 from "@/public/images/all-img/pr-8.png"
import Image from "next/image";
import Link from "next/link";
const products = [
  {
    id: 1,
    title: "Apple iPhone 13",
    sku: "#FBC-101",
    price: "800.675",
    image: p1,
    link: "#"
  },
  {
    id: 2,
    title: "Apple Clock 12",
    sku: "#FXZ-4587",
    price: "300.87",
    image: p2,
    link: "#"
  },
  {
    id: 3,
    title: "Headphone",
    sku: "#FXZ-4568",
    price: "488.879",
    image: p3,
    link: "#"
  },
  {
    id: 4,
    title: "Earbuds Model 1.2",
    sku: "#FXZ-4567",
    price: "500.879",
    image: p4,
    link: "#"
  },
  {
    id: 5,
    title: "Hair cutter",
    sku: "#FXZ-4567",
    price: "100",
    image: p5,
    link: "#"
  },
  {
    id: 6,
    title: "Clock Model 1.2",
    sku: "#FXZ-4567",
    price: "888.879",
    image: p2,
    link: "#"
  },
  {
    id: 7,
    title: "Samsung Headphone",
    sku: "#FXZ-4567",
    price: "700.879",
    image: p7,
    link: "#"
  },
  {
    id: 8,
    title: "Apple Clock",
    sku: "#FXZ-4567",
    price: "608.879",
    image: p8,
    link: "#"
  },
  {
    id: 9,
    title: "VR Model 4.5",
    sku: "#FXZ-4567",
    price: "788.879",
    image: p9,
    link: "#"
  },
  {
    id: 10,
    title: "Samsung Phone",
    sku: "#FXZ-4567",
    price: "688.879",
    image: p1,
    link: "#"
  },
]
const Products = () => {
  return (
    <Card>
      <CardHeader className="border-none flex-row mb-0">
        <div className="flex-1 pt-2">
          <CardTitle>Popular Products</CardTitle>
          <span className="block text-sm text-default-600 mt-2">Total 10.4k sales</span>
        </div>
        <DashboardDropdown />
      </CardHeader>
      <CardContent className="p-0 pb-1">
        <div className="h-[370px]">
          <ScrollArea className="h-full">
            {
              products.map((item, index) => (
                <div
                  key={`popular-product-${index}`}
                  className="px-4 py-1 flex gap-3 items-center mb-1.5 hover:bg-default-50"
                >
                  <div className="w-11 h-11 rounded-md flex-none bg-default-100 dark:bg-default-200">
                    <Image src={item.image} alt="product image" className="w-full h-full object-cover rounded-md" priority={true} />
                  </div>
                  <div className="flex-1">
                    <Link href={item.link} className="text-sm font-medium text-default-800 hover:text-primary">  {item.title}  </Link>
                    <div className="text-xs text-default-400">Item {item.sku}</div>
                  </div>
                  <div className="flex-none text-sm font-medium text-default-700">${item.price}</div>
                </div>
              ))
            }
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
};

export default Products;