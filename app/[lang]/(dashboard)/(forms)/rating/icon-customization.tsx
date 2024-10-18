import { Rating } from "@smastrom/react-rating";
import { useState } from "react";

const IconCustomization = () => {
  const [rating, setRating] = useState<number>(3);

  const StarDrawing = (
    <path
      d="M17.5 6.875C17.5 4.80417 15.7508 3.125 13.5933 3.125C11.9808 3.125 10.5958 4.06333 10 5.4025C9.40417 4.06333 8.01917 3.125 6.40583 3.125C4.25 3.125 2.5 4.80417 2.5 6.875C2.5 12.8917 10 16.875 10 16.875C10 16.875 17.5 12.8917 17.5 6.875Z"
    />
  );

  const myStyles = {
    itemShapes: StarDrawing,
    activeFillColor: "#EF4444",
    inactiveFillColor: "#CBD5E1",
    width: "20px",
    height: "20px",
  };
  return (
    <Rating
      style={{ maxWidth: 125 }}
      className="space-x-1.5"
      value={rating}
      onChange={setRating}
      itemStyles={myStyles}
    />
  );
};

export default IconCustomization;
