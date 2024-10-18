import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";

import banana from "@/public/images/all-img/banana.jpg";
import headphone from "@/public/images/all-img/headphone.png";
import baby from "@/public/images/all-img/baby.jpg";
import busket from "@/public/images/all-img/busket.jpg";
import mic from "@/public/images/all-img/mic.jpg";
import orange from "@/public/images/all-img/orange.jpg";

import Image from "next/image";

const RecentActivity = () => {
  return (
    <Card>
      <CardHeader className="border-none mb-0 p-6">
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Timeline>
          <TimelineItem className="pb-9">
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
          <TimelineItem className="pb-9">
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
          <TimelineItem className="pb-9">
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
                <div className="grid grid-cols-3 gap-3 max-w-[260px]">
                  <div className="w-20 h-12">
                    <Image
                      src={banana}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>

                  <div className="w-20 h-12">
                    <Image
                      src={headphone}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>

                  <div className="w-20 h-12">
                    <Image
                      src={baby}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>

                  <div className="w-20 h-12">
                    <Image
                      src={busket}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>

                  <div className="w-20 h-12">
                    <Image
                      src={mic}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-20 h-12">
                    <Image
                      src={orange}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="pb-9">
            <TimelineSeparator>
              <TimelineDot color="primary" />
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
        </Timeline>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
