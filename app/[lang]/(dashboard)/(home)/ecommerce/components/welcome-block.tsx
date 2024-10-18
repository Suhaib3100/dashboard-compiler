"use client"

import { Card, CardContent } from "@/components/ui/card";
import welcome from "@/public/images/home/welcome.png"
import shape2 from "@/public/images/home/shape-1.png"
import shape1 from "@/public/images/home/shape-2.png"
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
const WelcomeBlock = () => {
  const { theme } = useTheme();
  return (
    <Card className="p-0 overflow-hidden">
      <CardContent className="p-0 relative">
        <Image
          src={shape1}
          alt="shape image"
          className={cn("h-20 w-20 absolute -top-2 -right-4", {
            "invert sepia": theme === "dark"
          })}
          priority={true}
        />
        <Image
          src={shape2}
          alt="shape image"
          className={cn("w-[140px] h-16 absolute bottom-0 left-1/2 -translate-x-1/2", {
            "invert sepia": theme === "dark"
          })}
          priority={true}
        />
        <div className="grid grid-cols-12 gap-6 px-6 py-2 items-center relative">
          <div className="col-span-12 lg:col-span-8">
            <div className="text-3xl font-semibold text-default-900"> Welcome Back <span className="text-primary">Prantik!</span> </div>
            <div className="text-3xl font-semibold text-default-900">Check Dashboard</div>
            <div className="mt-4 text-base text-default-600">You have earned 54% more than last month
              which is great thing.</div>
          </div>
          <div className="col-span-12 lg:col-span-4 flex justify-center items-center ">
            <div className="h-[225px]">
              <Image src={welcome} alt="" className="max-w-full h-full" priority={true} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeBlock;