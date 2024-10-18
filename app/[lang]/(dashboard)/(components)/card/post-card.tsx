"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import card7 from "@/public/images/card/card7.jpg";
import card8 from "@/public/images/card/card8.jpg";
import card9 from "@/public/images/card/card9.jpg";
import Image from "next/image";

const PostCard = () => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      <Card>
        <CardContent className="p-4">
          <div className="mb-4">
            <p className="mb-1 text-xl text-default-700  font-medium">
              Image In Middle
            </p>
            <p className="text-muted-foreground text-base">
              Subtitle: Lorem ipsum
            </p>
          </div>
          <div className="w-full h-[191px] overflow-hidden  rounded-md mb-4">
            <Image
              className="w-full h-full object-cover"
              src={card7}
              alt="image"
            />
          </div>
          <div className="mb-4">
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet, consec teturars in adipiscing elit.
            </p>
          </div>
          <div className="space-x-6 rtl:space-x-reverse">
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
        <CardContent className="p-4">
          <div className="w-full h-[191px] overflow-hidden  rounded-md mb-4">
            <Image
              className="w-full h-full object-cover"
              src={card8}
              alt="image"
            />
          </div>
          <div className="mb-4">
            <p className="mb-1 text-xl text-default-700  font-medium">
              Image In Top
            </p>
            <p className="text-muted-foreground text-base">
              Subtitle: Lorem ipsum
            </p>
          </div>
          <div className="mb-4">
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet, consec teturars in adipiscing elit.
            </p>
          </div>
          <div className="space-x-6 rtl:space-x-reverse">
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
      <Card className="relative overflow-hidden min-h-[329px]">
        <Image
          className="w-full h-full object-cover absolute top-0 left-0"
          src={card9}
          alt="image"
        />
        <CardContent className="p-4 absolute z-10 h-full w-full ">
          <div className="mb-4 ">
            <p className="mb-1.5 text-xl text-default-700 dark:text-slate-700 font-medium">
              Image In Bottom
            </p>
            <p className="text-muted-foreground text-base">
              Subtitle: Lorem ipsum
            </p>
            <p className="text-muted-foreground text-sm mt-3">
              Lorem ipsum dolor sit amet, consec teturars in adipiscing elit.
            </p>
          </div>

          <div className="flex p-4 justify-start absolute left-0 bottom-0">
            <p className="text-default-600  font-medium font-sm">
              Last updated 3 mins ago
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostCard;
