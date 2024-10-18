"use client";
import React from "react";
import Card from "@/components/ui/card-snippet";
import DefaultTooltip from "./default-tooltip";
import ColorTooltip from "./color-tooltip";
import ArrowTooltip from "./arrow-tooltip";
import PlacementTooltip from "./placement-tooltip";
import OffsetTooltip from "./offset-tooltip";
import VariousTooltip from "./various-tooltip";
import ControlTooltip from "./control-tooltip";
import WithDelay from "./with-delay";
import {
  arrowTooltip,
  colorTooltip,
  controlTooltip,
  defaultTooltip,
  offsetTooltip,
  placementTooltip,
  variousTooltip,
  withDelay,
} from "./source-code";

const TooltipPage = () => {
  // for control

  return (
    <div className="space-y-5">
      <Card title="Default Tooltip" code={defaultTooltip}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">TooltipProvider </code>
          component wraps <code className="text-primary">Tooltip </code>{" "}
          component wraps
          <code className="text-primary"> TooltipTrigger</code>
          <code className="text-primary"> TooltipContent </code> to make a
          tooltip.
        </p>
        <DefaultTooltip />
      </Card>
      <Card title="Arrow Tooltip" code={arrowTooltip}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The
          <code className="text-primary"> TooltipContent </code> component wraps{" "}
          <code className="text-primary">TooltipArrow</code> component added
          arrow to the tooltip.
        </p>
        <ArrowTooltip />
      </Card>
      <Card title="Color Tooltip" code={colorTooltip}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Color Tooltip component add color in
          <code className="text-primary"> TooltipContent </code> by using
          <code className="text-primary"> variant </code> props in
          TooltipContent component and using different color value.
        </p>
        <ColorTooltip />
      </Card>
      <Card title="Placement Tooltip" code={placementTooltip}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Color Tooltip component add color in
          <code className="text-primary"> TooltipContent </code> by using
          <code className="text-primary"> side </code> props in TooltipContent
          component and using different side value to show tooltip in different
          place.
        </p>
        <PlacementTooltip />
      </Card>
      <Card title="Offset Tooltip" code={offsetTooltip}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Offset Tooltip component add offset to
          <code className="text-primary"> TooltipContent </code> by using
          <code className="text-primary"> sideOffset </code> props in
          TooltipContent component and using different value to show tooltip
          with offset in different version.
        </p>
        <OffsetTooltip />
      </Card>
      <Card title="Various Elements" code={variousTooltip}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The
          <code className="text-primary"> TooltipContent </code> component wraps{" "}
          different component like button avatar Icon button to show tooltip in
          different perspective.
        </p>
        <VariousTooltip />
      </Card>
      <Card title="Control Tooltip" code={controlTooltip}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Control Tooltip component add option to
          <code className="text-primary"> Tooltip</code> component by using
          <code className="text-primary"> open </code> props in Tooltip to
          demonstrate true and false value to the component and show action.
        </p>
        <ControlTooltip />
      </Card>
      <Card title="Delay Tooltip" code={withDelay}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Delay Tooltip content add option to
          <code className="text-primary"> TooltipProvider</code> component by
          using
          <code className="text-primary"> delayDuration </code> props in
          TooltipProvider to demonstrate time delay to open tooltip with some
          time delay.
        </p>
        <WithDelay />
      </Card>
    </div>
  );
};

export default TooltipPage;
