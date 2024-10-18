"use client";
import { Card, CardContent } from "@/components/ui/card";
import card1 from "@/public/images/card/card1.jpg";
import card2 from "@/public/images/card/card2.jpg";
import card3 from "@/public/images/card/card3.jpg";
import avatar1 from "@/public/images/avatar/avatar-7.jpg";

import Image from "next/image";
import Link from "next/link";
const DefaultCard = () => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      <Card>
        <CardContent className="p-0">
          <div className="w-full h-[191px] bg-muted-foreground overflow-hidden rounded-t-md">
            <Image
              className="w-full h-full object-cover"
              src={card1}
              alt="image"
            />
          </div>
          <div className="p-4">
            <p className="mb-2 text-lg text-default-700  font-medium">
              Default Card
            </p>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet, consec teturars in adipiscing elit,
              sed do eiusmod temporally also incididun ut sed do eiusmod sed do
              eiusmod temporally also.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-0">
          <div className="w-full h-[191px] bg-muted-foreground overflow-hidden rounded-t-md">
            <Image
              className="w-full h-full object-cover"
              src={card2}
              alt="image"
            />
          </div>
          <div className="p-4">
            <div className="w-14 h-14 rounded-full p-[2px] bg-background overflow-hidden -mt-10 relative z-20 mb-2">
              <Image
                src={avatar1}
                className="w-full h-full object-cover rounded-full"
                alt="profile image"
              />
            </div>
            <p className="mb-1 text-base text-default-700  font-medium">
              Angelina Joshep
            </p>
            <p className="mb-2 text-xs text-muted-foreground">UX/UI Designer</p>
            <p className="text-muted-foreground text-sm line-clamp-4">
              Lorem ipsum dolor sit amet, consec teturars in adipiscing elit,
              sed do eiusmod temporally also incididun ut sed do eiusmod sed do
              eiusmod temporally also.sed do eiusmod temporally also incididun
              ut sed do eiusmod sed do eiusmod temporally also.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-0">
          <div className="w-full h-[191px] bg-muted-foreground overflow-hidden rounded-t-md">
            <Image
              className="w-full h-full object-cover"
              src={card3}
              alt="image"
            />
          </div>

          <div className="p-4 ">
            <p className="mb-2 text-lg text-default-700  font-medium"> Read More Card</p>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet, consec teturars in adipiscing elit,
              sed do eiusmod temporally also incididun ut sed do eiusmod sed do
              eiusmod temporally also...
              <Link href="#" className="text-primary font-medium"> Read More</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DefaultCard;
