"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FigmaDesign from "@/public/images/landing-page/figma-design.png"
const FigmaKit = () => {
  return (
    <section className="py-16 2xl:py-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-xl xl:text-3xl xl:leading-[46px] font-semibold text-default-900 mb-3">For Designer</h2>
            <p className=" text-base leading-7 text-default-700">
              Empower Your Design Process with the DashTail Admin Dashboard, Featuring an Exclusive Figma File for Enhanced Customization Options.
            </p>
            <Button asChild className="mt-5 ">
              <Link target="_blank" href="https://www.figma.com/file/QZKqPhR0hA6dJTLq4wcL3y/%5BPreview%5D-DashTail---For-Designer-By-Codeshaper?type=design&node-id=30-26&mode=design&t=xcMhXbWPrClUVPrS-0"> Figma Workplace </Link>
            </Button>
          </div>
          <div>
            <Link target="_blank" href="https://www.figma.com/file/QZKqPhR0hA6dJTLq4wcL3y/%5BPreview%5D-DashTail---For-Designer-By-Codeshaper?type=design&node-id=30-26&mode=design&t=xcMhXbWPrClUVPrS-0">
              <div className="lg:pl-16">
                <Image src={FigmaDesign} alt="dashboard - dashtail figma design" className="w-full h-full object-cover" priority={true} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaKit;

