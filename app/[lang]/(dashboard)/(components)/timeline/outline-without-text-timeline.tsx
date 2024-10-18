import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";

const OutlineWithoutTextTimeline = () => {
  return (
    <div >
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outline" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outline" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="destructive" variant="outline" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" variant="outline" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="info" variant="outline" />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default OutlineWithoutTextTimeline;
