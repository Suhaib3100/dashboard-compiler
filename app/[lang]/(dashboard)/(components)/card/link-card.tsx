"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import card4 from "@/public/images/card/card4.jpg"; 
import card5 from "@/public/images/card/card5.jpg"; 
import card6 from "@/public/images/card/card6.jpg"; 
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LinkCard = () => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      <Card>
        <CardContent className="p-0">
          <div className="w-full h-[191px] bg-muted-foreground overflow-hidden rounded-t-md">
            <Image
              className="w-full h-full object-cover"
              src={card4}
              alt="image"
            />
          </div>
          <div className="p-4">
            <p className="mb-2 text-lg text-default-700  font-medium">
              Read More Expand
            </p>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet, consec teturars in adipiscing elit,
              sed do eiusmod temporally also incididun ut sed do eiusmod sed do
              eiusmod temporally also.
            </p>
          </div>
          <div className="p-4">
            <Link
              href="#"
              className="text-primary inline-flex font-medium font-sm items-center"
            >
              Read More
              <Icon icon="heroicons:chevron-down" className=" h-4 w-4 ml-2 " />
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-0">
          <div className="w-full h-[191px] bg-muted-foreground overflow-hidden rounded-t-md">
            <Image
              className="w-full h-full object-cover"
              src={card5}
              alt="image"
            />
          </div>
          <div className="p-4">
            <p className="mb-2 text-lg text-default-700  font-medium">
              Read More Expand
            </p>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet, consec teturars in adipiscing elit,
              sed do eiusmod temporally also incididun ut sed do eiusmod sed do
              eiusmod temporally also.
            </p>
          </div>
          <div className="p-4 border-t border-t-default-200 space-x-6 rtl:space-x-reverse">
            <Link
              href="#"
              className="text-primary inline-flex font-medium font-sm items-center underline"
            >
              Read More
            </Link>
            <Link
              href="#"
              className="text-primary inline-flex font-medium font-sm items-center underline"
            >
              Another Link
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-0">
          <div className="w-full h-[191px] bg-muted-foreground overflow-hidden rounded-t-md">
            <Image
              className="w-full h-full object-cover"
              src={card6}
              alt="image"
            />
          </div>
          <div className="p-4">
            <p className="mb-2 text-lg text-default-700  font-medium">
              Learn More Right
            </p>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet, consec teturars in adipiscing elit,
              sed do eiusmod temporally also incididun ut sed do eiusmod sed do
              eiusmod temporally also.
            </p>
          </div>
          <div className="p-4 flex justify-end">
            <Button>Learn More</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinkCard;
