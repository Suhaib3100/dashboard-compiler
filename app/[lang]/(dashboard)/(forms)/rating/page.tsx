"use client";
import React from "react";
import Card from "@/components/ui/card-snippet";
import DefaultRating from "./default-rating";
import DisabledRating from "./disabled-rating";
import HalfStarRating from "./half-star-rating";
import ReadOnlyRating from "./read-only-rating";
import ShowFeedbackRating from "./show-feedback-rating";
import ClearableRating from "./clearable-rating";
import HoverRating from "./hover-rating";
import OutlineRating from "./outline-rating";
import SizeRating from "./size-rating";
import ColorRating from "./color-rating";

import RadioGroupRating from "./radio-group-rating";
import IconCustomization from "./icon-customization";
import {
  clearableRating,
  colorRating,
  defaultRating,
  disabledRating,
  halfStarRating,
  hoverRating,
  iconCustomization,
  outlineRating,
  radioGroupRating,
  readOnlyRating,
  showFeedbackRating,
  sizeRating,
} from "./source-code";

const RatingPage = () => {
  return (
    <div className=" grid xl:grid-cols-2 gap-6">
      <Card title="Default Rating" code={defaultRating}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> Rating</code> component to show and
          rating .
        </p>
        <DefaultRating />
      </Card>
      <Card title="Disabled Rating" code={disabledRating}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> isDisabled</code> prop in
          <code className="text-primary"> Rating</code> component to show and
          disabled rating component.
        </p>
        <DisabledRating />
      </Card>
      <Card title="Half Star Rating" code={halfStarRating}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> value</code> prop in
          <code className="text-primary"> Rating</code> component with fraction
          number to show half start rating component.
        </p>
        <HalfStarRating />
      </Card>
      <Card title="Read Only Rating" code={readOnlyRating}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> readOnly</code> prop in
          <code className="text-primary"> Rating</code> component with different
          value number to show but can't be change rating.
        </p>
        <ReadOnlyRating />
      </Card>
      <Card title="Show Feedback Rating" code={showFeedbackRating}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> onChange</code> prop in
          <code className="text-primary"> Rating</code> component with different
          value number to show and change rating with feedback.
        </p>
        <ShowFeedbackRating />
      </Card>
      <Card title="Clearable Rating" code={clearableRating}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> onClick</code> prop in
          <code className="text-primary"> Rating</code> component with reset
          starts function to show and reset rating.
        </p>
        <ClearableRating />
      </Card>
      <Card title="Hover Rating Rating" code={hoverRating}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> onChange</code> and{" "}
          <code className="text-primary"> onHoverChange</code> prop in
          <code className="text-primary"> Rating</code> component with different
          value number to show and change rating on hover and select.
        </p>
        <HoverRating />
      </Card>
      <Card title="Outline Rating" code={outlineRating}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> variant="outline"</code> prop in
          <code className="text-primary"> Rating</code> component will change
          the star from filed to outline.
        </p>
        <OutlineRating />
      </Card>
      <Card title="Size Rating" code={sizeRating}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          By describing deferent width the
          <code className="text-primary"> Rating</code> component size will
          change according to the width.
        </p>
        <SizeRating />
      </Card>
      <Card title="Colors Rating" code={colorRating}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> itemStyles</code> prop in
          <code className="text-primary"> Rating</code> component with value of
          object, that helps to describe the color.
        </p>
        <ColorRating />
      </Card>

      <Card title="Icon Customization" code={iconCustomization}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> itemStyles</code> prop in
          <code className="text-primary"> Rating</code> component with value of
          object, that helps to describe the icon.
        </p>
        <IconCustomization />
      </Card>
      <Card title="Customer Feedback Rating" code={radioGroupRating}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> itemStyles</code> prop in
          <code className="text-primary"> Rating</code> component with value of
          object, that helps to describe the icon color size and filled color.
        </p>
        <RadioGroupRating />
      </Card>
    </div>
  );
};

export default RatingPage;
