"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

// images
import img1 from "@/public/images/all-img/banana.jpg";
import img2 from "@/public/images/all-img/headphone.png";
import img3 from "@/public/images/all-img/baby.jpg";
import img4 from "@/public/images/all-img/busket.jpg";
import img5 from "@/public/images/all-img/mic.jpg";
import img6 from "@/public/images/all-img/orange.jpg";
import img7 from "@/public/images/all-img/orange-2.jpg";

import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar9 from "@/public/images/avatar/avatar-9.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import Image from "next/image";

const Activities = () => {
  return (
    <Card>
      <CardHeader className="border-none px-10 pt-10 mb-0">
        <CardTitle>Activities</CardTitle>
      </CardHeader>
      <CardContent className="px-10">
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
                      src={img1}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <Image
                      src={img2}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <Image
                      src={img3}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <Image
                      src={img4}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <Image
                      src={img5}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <Image
                      src={img6}
                      className="w-full h-full object-cover"
                      alt=""
                    />
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
                  <div className="flex flex-col md:flex-row gap-2 ">
                    <div>
                      <div className="h-14 w-14">
                        <Image
                          src={img7}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-default-600  ">
                        This a Orange
                      </h5>
                      <p className="text-sm text-default-500  mt-1">
                        Orange S.A. formerly France S.A. is a French Multi -
                        national telecommunications corporation.
                      </p>
                    </div>
                  </div>
                  <span className="text-default-400 text-xs md:min-w-[80px] md:max-w-[120px] text-right">
                    5th October
                  </span>
                </div>
                {/* table */}
                <div className="mt-5">
                  <table className="table-auto w-full overflow-y-auto">
                    <thead>
                      <tr>
                        <th className="text-sm font-medium text-default-600  text-center mb-1">
                          Customer
                        </th>
                        <th className="text-sm font-medium text-default-600  text-center mb-1">
                          Price
                        </th>
                        <th className="text-sm font-medium text-default-600  text-center mb-1">
                          Quantity
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-sm text-default-400 text-center">
                          Micheal Jr. Scott
                        </td>
                        <td className="text-sm text-default-400 text-center">
                          $320.00
                        </td>
                        <td className="text-sm text-default-400 text-center">
                          1
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                <div className="flex items-center gap-4">
                  <div className="grow">
                    <div className="flex gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={avatar7.src} alt="" />
                        <AvatarFallback>SN</AvatarFallback>
                      </Avatar>
                      <div>
                        <span className="text-sm text-default-500  block">
                          Permanent Delete
                        </span>
                        <span className="text-xs text-default-500  block">
                          UX/UI Designer
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
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
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      2 notifications
                    </h5>
                  </div>
                  <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                    11th October
                  </div>
                </div>
                <p className="text-sm text-default-500  mt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus quos, voluptates voluptas rem veniam expedita.
                </p>
                <hr className="my-3" />
                {/* comment list */}
                <div className="flex justify-between items-center">
                  <div className="flex flex-col md:flex-row md:items-center  gap-2 rtl:space-x-reverse">
                    <AvatarGroup>
                      <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                        <AvatarImage src={avatar7.src} alt="" />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                        <AvatarImage src={avatar2.src} alt="" />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                        <AvatarImage src={avatar3.src} alt="" />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                        <AvatarImage src={avatar4.src} alt="" />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                        <AvatarImage src={avatar5.src} alt="" />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                        <AvatarImage src={avatar6.src} alt="" />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                        <AvatarImage src={avatar7.src} alt="" />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                        <AvatarImage src={avatar8.src} alt="" />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
                        <AvatarImage src={avatar9.src} alt="" />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                    </AvatarGroup>
                    <p className=" text-xs text-default-600 ">
                      Commented on your post.
                    </p>
                  </div>
                  <div>
                    <Button type="button" size="xs">
                      View
                    </Button>
                  </div>
                </div>
                <hr className="my-3" />
                <div className="flex items-center gap-4">
                  <div className="grow">
                    <div className="flex space-x-2 rtl:space-x-reverse">
                      <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-9 w-9">
                        <AvatarImage src={avatar7.src} alt="" />
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
                  <span className="text-sm font-semibold text-default-700 ">
                    $20
                  </span>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </CardContent>
    </Card>
  );
};

export default Activities;
