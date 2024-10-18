import React, { useState } from "react";

import { Rating } from "@/components/ui/rating";
const HoverRating = () => {
  function getRating(rating:number) {
    switch (rating) {
      case 1:
        return "Poor";
      case 2:
        return "Nothing special";
      case 3:
        return "Average";
      case 4:
        return "Very good";
      case 5:
        return "Excellent";
      default:
        return "Average";
    }
  }
  const [rating, setRating] = useState(3);
  const [hoveredRating, setHoveredRating] = useState(2);

  return (
    <div className="flex gap-4">
      <Rating
        className="gap-x-1.5 max-w-[125px]"
        value={rating}
        onChange={setRating}
        onHoverChange={setHoveredRating}
      />
      <div>
        <div>{`${getRating(hoveredRating)}`}</div>
      </div>
    </div>
  );
};

export default HoverRating;
