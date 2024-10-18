"use client";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/avatar";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { File } from "lucide-react";

import avatar1 from "@/public/images/avatar/avatar-1.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";
import avatar9 from "@/public/images/avatar/avatar-9.jpg";
import avatar10 from "@/public/images/avatar/avatar-10.jpg";

import banana from "@/public/images/all-img/banana.jpg";
import headphone from "@/public/images/all-img/headphone.png";
import baby from "@/public/images/all-img/baby.jpg";
import busket from "@/public/images/all-img/busket.jpg";
import mic from "@/public/images/all-img/mic.jpg";
import orange from "@/public/images/all-img/orange.jpg";
import orange2 from "@/public/images/all-img/orange-2.jpg";
import Image from "next/image";
const AdvancedTimeline = () => {
  return (
    <div className="max-w-[600px]">
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="md:flex gap-4">
              <div className="grow">
                <h5 className="font-medium text-sm text-default-600 ">
                  User Photo Changed
                </h5>
              </div>
              <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                12 minutes ago
              </div>
            </div>
            <p className="text-sm text-default-500  mt-1">
              Jone Doe changed his avatar photo
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="tm-content">
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Video Added
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  1 hour ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1 mb-4">
                Mores Clarke added new video
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="grow text-sm font-medium text-default-600 ">
                  New Application
                </span>
                <div className="grow-0 flex gap-2">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={avatar7.src} alt="" />
                    <AvatarFallback>SN</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={avatar8.src} alt="" />
                    <AvatarFallback>SN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="info" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="tm-content">
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Image Added
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  9 hours ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1 mb-4">
                Mores Clarke added new video
              </p>
              <div className="grid grid-cols-3 gap-3">
                <Image
                  src={banana}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <Image
                  src={headphone}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <Image
                  src={baby}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <Image
                  src={busket}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <Image
                  src={mic}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <Image
                  src={orange}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="tm-content">
              <div className="md:flex gap-4 ">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Designed Completed
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  3rd October
                </div>
              </div>
              <hr className="my-3" />
              <div className="flex">
                <div className="grow">
                  <div className="flex flex-col sm:flex-row items-center  sm:space-x-3  rtl:space-x-reverse">
                    <span className="text-sm text-default-500 ">
                      Robert Nolan completed
                    </span>
                    <span className="text-xl rotate-90 sm:rotate-0">
                      <Icon icon="ph:arrow-right-thin" />
                    </span>
                    <span className="text-sm text-default-500 ">
                      CRM Application
                    </span>
                  </div>
                  <div className="flex space-x-2.5 rtl:space-x-reverse items-center mt-5 md:mt-3">
                    <File className="h-5 w-5 text-default-400" />
                    <span className="text-sm text-default-500 ">
                      designComplated.pdf
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-default-400 md:min-w-[90px] md:max-w-[120px]">
                    6.30 AM
                  </span>
                </div>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="flex">
              <div className="flex-1">
                <div className="h-14 w-14">
                  <Image
                    src={orange2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-none">
                <span className="text-default-400 text-xs md:min-w-[80px] md:max-w-[120px] text-right">
                  5th October
                </span>
              </div>
            </div>
            <div className="mt-3">
              <h5 className="text-sm font-medium text-default-600  ">
                This a Orange
              </h5>
              <p className="text-sm text-default-500  mt-1">
                Orange S.A. formerly France S.A. is a French Multi - national
                telecommunications corporation.
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="destructive" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="md:flex gap-4">
              <div className="grow">
                <h5 className="font-medium text-sm text-default-600 ">
                  Interview Schedule
                </h5>
              </div>
              <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                9th October
              </div>
            </div>
            <p className="text-sm text-default-500  mt-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus quos, voluptates voluptas rem veniam expedita.
            </p>
            <hr className="my-3" />
            <div className="flex flex-col sm:flex-row  sm:items-center gap-4">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={avatar1.src} alt="" />
                    <AvatarFallback>SN</AvatarFallback>
                  </Avatar>
                  <div>
                    <span className="text-sm text-default-500 whitespace-nowrap block">
                      Permanent Delete
                    </span>
                    <span className="text-xs text-default-500  whitespace-nowrap block">
                      UX/UI Designer
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-none flex items-center gap-2">
                <span className="text-xl text-default-400">
                  <Icon icon="tdesign:call" />
                </span>
                <span className="text-xl text-default-400">
                  <Icon icon="ph:envelope" />
                </span>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
          </TimelineSeparator>
          <TimelineContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 font-medium text-sm text-default-600 whitespace-nowrap">
                2 notifications
              </div>
              <div className="flex-none text-default-400 text-xs">
                11th October
              </div>
            </div>
            <p className="text-sm text-default-500  mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus quos, voluptates voluptas rem veniam expedita.
            </p>
            <hr className="my-3" />
            {/* comment list */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex-1 flex flex-col md:flex-row md:items-center  gap-2 rtl:space-x-reverse">
                <AvatarGroup>
                  <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                    <AvatarImage src={avatar1.src} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                    <AvatarImage src={avatar2.src} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                    <AvatarImage src={avatar3.src} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                    <AvatarImage src={avatar4.src} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                    <AvatarImage src={avatar5.src} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                    <AvatarImage src={avatar6.src} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                    <AvatarImage src={avatar7.src} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                    <AvatarImage src={avatar8.src} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                    <AvatarImage src={avatar9.src} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                </AvatarGroup>
                <p className=" text-xs text-default-600 ">
                  Commented on your post.
                </p>
              </div>
              <Button type="button" size="xs" className="flex-none">
                {" "}
                View{" "}
              </Button>
            </div>
            <hr className="my-3" />
            <div className="flex flex-col sm:flex-row  sm:items-center gap-4">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-9 w-9">
                    <AvatarImage src={avatar10.src} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <div>
                    <span className="text-sm text-default-500  block">
                      Prantik repaid you
                    </span>
                    <span className="text-xs text-default-500  block">
                      30 minutes ago
                    </span>
                  </div>
                </div>
              </div>
              <span className="flex-none text-sm font-semibold text-default-700">
                $20
              </span>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default AdvancedTimeline;
