export const defaultCarousel = `"use client";
import * as React from "react";
import Card from "@/components/ui/card-snippet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import slider1 from "@/public/images/all-img/slider-1.png";
import Image from "next/image";


const CarouselPage = () => {
  return (

      <Card title="Default">
        <Carousel className="w-full max-w-3xl	 mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem className=" w-full" key={index}>
                <div className="p-1">
                  <div className="flex aspect-square items-center justify-center   h-[300px]  w-full">
                    <Image
                      className="w-full h-full object-cover rounded-lg"
                      src={slider1}
                      alt="image"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Card>

  );
};

export default CarouselPage;
`;
export const sizeCarousel = `"use client";
import * as React from "react";
import Card from "@/components/ui/card-snippet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { faker } from "@faker-js/faker";


const CarouselPage = () => {
  return (
<Card title="Size">
        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="flex aspect-square items-center justify-center  ">
                    <Image
                      className="w-full h-full object-cover rounded-lg"
                      src={slider1}
                      alt="image"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Card>
  );
};

export default CarouselPage;
`;
export const oriantationCarousel = `"use client";
import * as React from "react";
import Card from "@/components/ui/card-snippet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { faker } from "@faker-js/faker";


const CarouselPage = () => {
  return (
      <Card title="Orientation">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-3xl mx-auto my-12"
        >
          <CarouselContent className="-mt-1 h-[400px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <div className="flex items-center justify-center h-[200px]">
                    <Image
                      className="w-full h-full object-cover rounded-lg"
                      src={slider1}
                      alt="image"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Card>
  );
};

export default CarouselPage;
`;
export const autoPlayCarousel = `"use client";
import * as React from "react";
import Card from "@/components/ui/card-snippet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { faker } from "@faker-js/faker";


const CarouselPage = () => {
  return (
      <Card title="Plugins auto play">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-3xl mx-auto my-12"
        >
          <CarouselContent className="-mt-1 h-[400px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <div className="flex items-center justify-center h-[200px]">
                    <Image
                      className="w-full h-full object-cover rounded-lg"
                      src={slider1}
                      alt="image"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Card>
  );
};

export default CarouselPage;
`;
export const loopCarousel = `"use client";
import * as React from "react";
import Card from "@/components/ui/card-snippet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { faker } from "@faker-js/faker";


const CarouselPage = () => {
  return (


      <Card title="Loop">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="flex aspect-square items-center justify-center  ">
                    <Image
                      className="w-full h-full object-cover rounded-lg"
                      src={slider1}
                      alt="image"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Card>

      
  );
};

export default CarouselPage;
`;
export const righttoleftCarousel = `"use client";
import * as React from "react";
import Card from "@/components/ui/card-snippet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { faker } from "@faker-js/faker";


const CarouselPage = () => {
  return (
   
      <Card title="Right to Left">
        <Carousel
          opts={{
            align: "start",
            direction: "rtl",
            containScroll: "trimSnaps",
          }}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="flex aspect-square items-center justify-center  ">
                    <Image
                      className="w-full h-full object-cover rounded-lg"
                      src={slider1}
                      alt="image"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Card>
      
  );
};

export default CarouselPage;
`;
export const centerAlignmentCarousel = `"use client";
import * as React from "react";
import Card from "@/components/ui/card-snippet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { faker } from "@faker-js/faker";


const CarouselPage = () => {
  return (
    <Card title="Center Alignment">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          containScroll: "trimSnaps",
        }}
        className="w-full max-w-3xl mx-auto"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-2/4">
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center  h-[250px] relative">
                 <Image
                      className="w-full h-full object-cover rounded-lg embla__slide__img embla__parallax__img"
                      src={slider1}
                      alt="image"
                    />
                  <span className="absolute top-2 bg-default-400 w-10 h-10 p-2 left-2 rounded-full text-primary-foreground flex items-center justify-center  ">
                    {index + 1}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Card>
  );
};

export default CarouselPage;
`;
