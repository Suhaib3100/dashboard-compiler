import Card from "@/components/ui/card-snippet";
import BasicTimeline from "./basic-timeline";
import LineSpaceTimeline from "./line-space-timeline";
import OutlinedTimeline from "./outlined-timeline";
import TimelineWithPing from "./timeline-with-ping";
import PingAndLineSpace from "./ping-line-space";
import AdvancedTimeline from "./advanced-timeline";
import TimelineWithCard from "./timeline-with-card";
import LeftTimeline from "./left-timeline";
import AlternativeTimeline from "./alternative-timeline";
import AlternativeReverseTimeline from "./alternative-reverse-timeline";
import ColorDotTimeline from "./color-dot-timeline";

import TimelineWithIcon from "./timeline-with-icon";
import {
  advancedTimeline,
  alternativeReverseTimeline,
  alternativeTimeline,
  basicTimeline,
  colorDotTimeline,
  leftTimeline,
  lineSpaceTimeline,
  outlinedTimeline,
  pingAndLineSpace,
  timelineWithCard,
  timelineWithIcon,
  timelineWithPing,
} from "./source-code";


const TimelinePage = () => {
  return (
    <div className="space-y-5">
      <Card title="Basic Timeline" code={basicTimeline}>
        <p className="text-sm text-default-500  mb-4">
          No <span className="text-primary">props</span> are required to display basic timeline.
        </p>
        <div>
          <BasicTimeline />
        </div>
      </Card>
      <Card title="Left Timeline" code={leftTimeline}>
        <p className="text-sm text-default-500  mb-4">
          Use <span className="text-primary">position="left"</span> props on timeline component to display left align timeline.
        </p>
        <div className="w-full flex justify-center items-center">
          <LeftTimeline />
        </div>
      </Card>
      <Card title="Alternative Timeline" code={alternativeTimeline}>
        <p className="text-sm text-default-500  mb-4">
          Use <span className="text-primary">position="alternative"</span> props on timeline component to display alternative timeline.
        </p>
          <AlternativeTimeline />
      </Card>
      <Card title="Alternative Reverse Timeline" code={alternativeReverseTimeline} >
        <p className="text-sm text-default-500  mb-4">
          Use <span className="text-primary"> position="alternate-reverse"</span> props on timeline component to display alternate-reverse timeline.
        </p>
        <AlternativeReverseTimeline />
      </Card>
      <Card title="Color Dot Timeline" code={colorDotTimeline}>
        <p className="text-sm text-default-500  mb-4">
          Adjust dot color in the <span className="text-primary">TimelineDot component</span> by using the <span className="text-primary">color</span> prop with options including
          <span className="text-primary"> primary, success, info, warning, and destructive.</span>
        </p>
        <div className="w-full flex justify-center items-center">
          <ColorDotTimeline />
        </div>
      </Card>

      <Card title="Timeline With Icon" code={timelineWithIcon}>
        <p className="text-sm text-default-500  mb-4">
          Utilize the "ghost" variant <span className="text-primary">"ghost" variant</span> on the TimelineDot component to place an icon on the timeline.
        </p>
        <TimelineWithIcon />
      </Card>

      <Card title="With Line Space" code={lineSpaceTimeline}>
        <LineSpaceTimeline />
      </Card>
      <Card title="Outlined Point" code={outlinedTimeline}>
        <OutlinedTimeline />
      </Card>
      <Card title="Timeline With Ping" code={timelineWithPing}>
        <TimelineWithPing />
      </Card>
      <Card title="Ping & Line Space" code={pingAndLineSpace}>
        <PingAndLineSpace />
      </Card>
      <Card title="Advanced Timeline" code={advancedTimeline}>
        <AdvancedTimeline />
      </Card>
      <Card title="Advanced Timeline With Card" code={timelineWithCard}>
        <TimelineWithCard />
      </Card>

    </div>
  );
};

export default TimelinePage;
