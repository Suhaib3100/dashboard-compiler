"use client";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";
import { Icon } from "@iconify/react";

const TimelineWithIcon = () => {
  return (
    <div className="max-w-md mx-auto">
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="ghost">
              <Icon icon="openmoji:hamburger" className=" w-12 h-12" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="ghost">
              <Icon icon="openmoji:hamburger" className=" w-12 h-12" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="ghost">
              <Icon icon="openmoji:hamburger" className=" w-12 h-12" />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimelineWithIcon;
