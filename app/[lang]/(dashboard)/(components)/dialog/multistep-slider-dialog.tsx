"use client";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import slider1 from "@/public/images/all-img/slider-1.png";
import Image from "next/image";
const MultiStepSliderDialog = () => {

  return (
    <div className="flex flex-wrap  gap-x-5 gap-y-4 ">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Modal</Button>
        </DialogTrigger>
        <DialogContent size="2xl" className="p-10">
          <Swiper
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="w-full h-full multistep-dialog-wrap pb-2"
          >
            <SwiperSlide>
              <div className="h-[300px] md:h-[410px] rounded-md">
                <Image
                  src={slider1}
                  className="w-full h-full object-cover  rounded-md"
                  alt=""
                />
              </div>
              <div className="my-5 pb-5">
                <p className="text-sm text-default-500  text-center">
                  If we’re talking about the world’s most beautiful mountains,
                  you’ve got to begin with Mount Fuji. Aesthetically speaking,
                  it’s one of the most iconic mountains on the planet.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[300px] md:h-[410px] rounded-md">
                <Image
                  src={slider1}
                  className="w-full h-full object-cover rounded-md"
                  alt=""
                />
              </div>
              <div className="my-5 pb-5">
                <p className="text-sm text-default-500  text-center">
                  If we’re talking about the world’s most beautiful mountains,
                  you’ve got to begin with Mount Fuji. Aesthetically speaking,
                  it’s one of the most iconic mountains on the planet.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[300px] md:h-[410px] rounded-md">
                <Image
                  src={slider1}
                  className="w-full h-full object-cover rounded-md"
                  alt=""
                />
              </div>
              <div className="my-5 pb-5">
                <p className="text-sm text-default-500  text-center">
                  If we’re talking about the world’s most beautiful mountains,
                  you’ve got to begin with Mount Fuji. Aesthetically speaking,
                  it’s one of the most iconic mountains on the planet.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="prev text-sm font-medium text-primary flex items-center gap-1 cursor-pointer" >
              <span>
                <Icon icon="line-md:chevron-small-double-left" />
              </span>
              Previous
            </button>
            <button
              type="button"
              className="next text-sm font-medium text-primary flex items-center gap-1"
            >
              Next
              <span>
                <Icon icon="line-md:chevron-small-double-right" />
              </span>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MultiStepSliderDialog;
