"use client";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";

const ColorDotTimeline = () => {
  return (
    <div className="max-w-md">
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="destructive" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="info" />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default ColorDotTimeline;
