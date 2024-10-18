export const basicTimeline = `"use client";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";
const BasicTimeline = () => {
  return (
    <div>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>

    </div>
  );
};

export default BasicTimeline;
`;
export const leftTimeline = `"use client";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";

const LeftTimeline = () => {
  return (
    <div className="max-w-md">
      <Timeline position="left">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default LeftTimeline;
`;
export const alternativeTimeline = `"use client";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";

const AlternativeTimeline = () => {
  return (
    <div className="max-w-md">
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default AlternativeTimeline;
`;
export const alternativeReverseTimeline = `"use client";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";

const AlternativeReverseTimeline = () => {
  return (
    <div className="max-w-md">
      <Timeline position="alternate-reverse">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default AlternativeReverseTimeline;
`;
export const colorDotTimeline = `"use client";
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
`;
export const lineSpaceWithoutTextTimeline = `"use client";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";

const LineSpaceWithoutTextTimeline = () => {
  return (
    <div className="max-w-md">
      <Timeline gap>
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

export default LineSpaceWithoutTextTimeline;
`;
export const outlineWithoutTextTimeline = `import {
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
`;
export const timelineWithIcon = `"use client";
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
    <div>
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
`;
export const lineSpaceTimeline = `import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";
const LineSpaceTimeline = () => {
  return (
    <div>
      <p className="text-sm text-default-500  mb-4">
        The <span className="text-primary">default</span> Keyboard Key is used
        to change the background color of the alert.
      </p>
      <div className="max-w-[600px]">

        <Timeline gap>
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
                Jone Doer changed his avatar photo
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
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
              <p className="text-sm text-default-500  mt-1">
                Mores Clarke added new video
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="info" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Designed Completed
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  5 hour ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1">
                Robert Nolan completed the design of the CRM application
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
            </TimelineSeparator>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Weekly Report
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  a day ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1">
                The weekly report was uploaded
              </p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default LineSpaceTimeline;
`;
export const outlinedTimeline = `import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";
const OutlinedTimeline = () => {
  return (
    <div>
      <p className="text-sm text-default-500  mb-4">
        The <span className="text-primary">default</span> Keyboard Key is used
        to change the background color of the alert.
      </p>
      <div className="max-w-[600px]">
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outline" />
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
                Jone Doer changed his avatar photo
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outline" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
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
              <p className="text-sm text-default-500  mt-1">
                Mores Clarke added new video
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="info" variant="outline" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Designed Completed
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  5 hour ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1">
                Robert Nolan completed the design of the CRM application
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" variant="outline" />
            </TimelineSeparator>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Weekly Report
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  a day ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1">
                The weekly report was uploaded
              </p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

      </div>
    </div>
  );
};

export default OutlinedTimeline;
`;
export const timelineWithPing = `import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";
const TimelineWithPing = () => {
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
                Jone Doer changed his avatar photo
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="ping" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
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
              <p className="text-sm text-default-500  mt-1">
                Mores Clarke added new video
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="info"  />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Designed Completed
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  5 hour ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1">
                Robert Nolan completed the design of the CRM application
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
            </TimelineSeparator>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Weekly Report
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  a day ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1">
                The weekly report was uploaded
              </p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
    </div>
  );
};

export default TimelineWithPing;
`;
export const pingAndLineSpace = `"use client";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";
const PingAndLineSpace = () => {
  return (
    <div>
      <p className="text-sm text-default-500  mb-4">
        The <span className="text-primary">default</span> Keyboard Key is used
        to change the background color of the alert.
      </p>
      <div className="max-w-[600px]">
        <Timeline gap>
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
                Jone Doer changed his avatar photo
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
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
              <p className="text-sm text-default-500  mt-1">
                Mores Clarke added new video
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="info" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Designed Completed
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  5 hour ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1">
                Robert Nolan completed the design of the CRM application
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
            </TimelineSeparator>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Weekly Report
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  a day ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1">
                The weekly report was uploaded
              </p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <ul className="tm-wrapper tm-line-space">
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
              <div className="tm-content">
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
                  Jone Doer changed his avatar photo
                </p>
              </div>
            </div>
          </li>
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot tm-dot-primary tm-dot-ping tm-dot-ping-primary"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
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
                <p className="text-sm text-default-500  mt-1">
                  Mores Clarke added new video
                </p>
              </div>
            </div>
          </li>
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot tm-dot-info"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
              <div className="tm-content">
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      Designed Completed
                    </h5>
                  </div>
                  <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                    5 hour ago
                  </div>
                </div>
                <p className="text-sm text-default-500  mt-1">
                  Robert Nolan completed the design of the CRM application
                </p>
              </div>
            </div>
          </li>
          <li className="relative">
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot tm-dot-warning"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
              <div className="tm-content">
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      Weekly Report
                    </h5>
                  </div>
                  <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                    a day ago
                  </div>
                </div>
                <p className="text-sm text-default-500  mt-1">
                  The weekly report was uploaded
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PingAndLineSpace;
`;
export const advancedTimeline = `"use client";
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
    <>
      <p className="text-sm text-default-500  mb-4">
        The <span className="text-primary">default</span> Keyboard Key is used
        to change the background color of the alert.
      </p>
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
                <div className="flex flex-col md:flex-row gap-2 ">
                  <div>
                    <div className="h-14 w-14">
                      <Image
                        src={orange2}
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
                      <AvatarImage src={avatar1.src} alt="" />
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
                <span className="text-sm font-semibold text-default-700 ">
                  $20
                </span>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
};

export default AdvancedTimeline;
`;
export const timelineWithCard = `"use client";
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

const TimelineWithCard = () => {
  return (
    <div>
      <p className="text-sm text-default-500  mb-4">
        The <span className="text-primary">default</span> Keyboard Key is used
        to change the background color of the alert.
      </p>
      <div className="sm:max-w-4xl">
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
                      <AvatarImage src={avatar1.src} alt="" />
                      <AvatarFallback>SN</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={avatar2.src} alt="" />
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
                    <div className="flex space-x-3 rtl:space-x-reverse items-center mt-5 md:mt-3">
                      <File className="w-4 h-4 text-default-400" />
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
                <div className="flex flex-col md:flex-row gap-2 ">
                  <div>
                    <div className="h-14 w-14">
                      <Image
                        src={orange2}
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
                      <AvatarImage src={avatar1.src} alt="" />
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
                <span className="text-sm font-semibold text-default-700 ">
                  $20
                </span>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <ul className="tm-wrapper tm-with-card  ">
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper ">
              {/* card */}
              <div className="tm-content tm-card-bg-default">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      User Photo Changed
                    </h5>
                  </div>
                  <div className="text-default-400 text-sm md:min-w-[90px] md:max-w-[120px] md:text-right">
                    12 minutes ago
                  </div>
                </div>
                <p className="text-sm text-default-500  mt-1">
                  Jone Doer changed his avatar photo
                </p>
              </div>
            </div>
          </li>
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot tm-dot-primary"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper ">
              {/* card */}
              <div className="tm-content tm-card-bg-primary">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      Video Added
                    </h5>
                  </div>
                  <div className="text-default-400 text-sm md:min-w-[90px] md:max-w-[120px] md:text-right">
                    1 hour ago
                  </div>
                </div>
                <p className="text-sm text-default-500  mt-1">
                  Mores Clarke added new video
                </p>
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                  <span className="grow text-sm font-medium text-default-600 ">
                    New Application
                  </span>
                  <div className="grow-0 flex gap-2">
                    <div className="h-5 w-5">
                      <Image
                        src={avatar1}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-5 w-5">
                      <Image
                        src={avatar2}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot tm-dot-info"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
              {/* card */}
              <div className="tm-content tm-card-bg-info">
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      Designed Completed
                    </h5>
                  </div>
                  <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                    3rd October
                  </div>
                </div>
                <hr className="mt-1 mb-3 border-info/30" />
                <div className="mt-4 flex">
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
                      <File className="w-4 h-4 text-default-400" />
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
            </div>
          </li>
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot tm-dot-destructive"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
              {/* card */}
              <div className="tm-content tm-card-bg-destructive">
                <div className="flex">
                  <div className="flex flex-col md:flex-row gap-2 ">
                    <div>
                      <div className="h-14 w-14">
                        <Image
                          src={orange2}
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
              </div>
            </div>
          </li>
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot tm-dot-warning"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
              {/* card */}
              <div className="tm-content tm-card-bg-warning">
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
                    <div className="flex space-x-2 rtl:space-x-reverse">
                      <div className="h-8 w-8">
                        <Image
                          src={avatar5}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
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
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-xl text-default-400">
                      <Icon icon="tdesign:call" />
                    </span>
                    <span className="text-xl text-default-400">
                      <Icon icon="ph:envelope" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot tm-dot-success"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
              {/* card */}
              <div className="tm-content tm-card-bg-success">
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
                    {/* avatars */}
                    <div className=" flex flex-wrap -space-x-1">
                      <div className="w-5 h-5 hover:z-20">
                        <Image
                          src={avatar1}
                          className="h-full w-full rounded-full ring ring-default-50 dark:ring-default-800 hover:dark:ring-default-200"
                          alt=""
                        />
                      </div>
                      <div className="w-5 h-5 hover:z-20">
                        <Image
                          src={avatar2}
                          className="h-full w-full rounded-full ring ring-default-50  dark:ring-default-800 hover:dark:ring-default-200 "
                          alt=""
                        />
                      </div>
                      <div className="w-5 h-5 hover:z-20">
                        <Image
                          src={avatar3}
                          className="h-full w-full rounded-full ring ring-default-50  dark:ring-default-800 hover:dark:ring-default-200"
                          alt=""
                        />
                      </div>
                      <div className="w-5 h-5 hover:z-20">
                        <Image
                          src={avatar4}
                          className="h-full w-full rounded-full ring ring-default-50  dark:ring-default-800 hover:dark:ring-default-200"
                          alt=""
                        />
                      </div>
                      <div className="w-5 h-5 hover:z-20">
                        <Image
                          src={avatar5}
                          className="h-full w-full rounded-full ring ring-default-50  dark:ring-default-800 hover:dark:ring-default-200"
                          alt=""
                        />
                      </div>
                      <div className="w-5 h-5 hover:z-20">
                        <Image
                          src={avatar6}
                          className="h-full w-full rounded-full ring ring-default-50  dark:ring-default-800 hover:dark:ring-default-200"
                          alt=""
                        />
                      </div>
                    </div>
                    <p className=" text-xs text-default-600 ">
                      Commented on your post.
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="justify-self-end bg-primary text-sm h-5 px-2 text-primary-foreground capitalize rounded-[2px]"
                    >
                      view
                    </button>
                  </div>
                </div>
                <hr className="my-3" />
                <div className="flex items-center gap-4">
                  <div className="grow">
                    <div className="flex space-x-2 rtl:space-x-reverse">
                      <div className="h-8 w-8">
                        <Image
                          src={avatar4}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
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
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TimelineWithCard;`;
export const centerTimeline = `import { Timeline, TimelineItem, TimelineContent, TimelineDot, TimelineConnector, TimelineSeparator } from "@/components/ui/timeline";
const CenterTimeline = () => {
  return (
    <div>
      <p className="text-sm text-default-500  mb-4">
        The <span className="text-primary">default</span> Keyboard Key is used
        to change the background color of the alert.
      </p>
      <div className="max-w-[960px]">

        <Timeline position="alternate">
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
                Jone Doer changed his avatar photo
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
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
              <p className="text-sm text-default-500  mt-1">
                Mores Clarke added new video
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="info" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Designed Completed
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  5 hour ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1">
                Robert Nolan completed the design of the CRM application
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
            </TimelineSeparator>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Weekly Report
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  a day ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1">
                The weekly report was uploaded
              </p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <hr />
        <ul className="tm-wrapper tm-alternate">
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
              <div className="tm-content">
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
                <p className="text-sm text-default-500 dark:text-default-400 mt-1">
                  Jone Doer changed his avatar photo
                </p>
              </div>
            </div>
          </li>
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot tm-dot-primary"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
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
                <p className="text-sm text-default-500 dark:text-default-400 mt-1">
                  Mores Clarke added new video
                </p>
              </div>
            </div>
          </li>
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot tm-dot-info"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
              <div className="tm-content">
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      Designed Completed
                    </h5>
                  </div>
                  <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                    5 hour ago
                  </div>
                </div>
                <p className="text-sm text-default-500 dark:text-default-400 mt-1">
                  Robert Nolan completed the design of the CRM application
                </p>
              </div>
            </div>
          </li>
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot tm-dot-warning"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
              <div className="tm-content">
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      Weekly Report
                    </h5>
                  </div>
                  <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                    a day ago
                  </div>
                </div>
                <p className="text-sm text-default-500 dark:text-default-400 mt-1">
                  The weekly report was uploaded
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CenterTimeline;
`;
