import { useState } from "react";
import { Rating } from "@/components/ui/rating";

const ColorRating = () => {
  const [rating, setRating] = useState<number>(3);

  const customStyles = {
    activeFillColor: [
      "#e7040f",
      "#ff6300",
      "#ffde37",
      "#61bb00",
      "#19a974",
      "#06B6D4",
    ],
    inactiveFillColor: "#CBD5E1",
  };

  const myStyles = {
    activeFillColor: "red",
    inactiveFillColor: "green",
  };
  const floatValues1 = [2, 1.44, 2.31];
  const floatValues2 = [3.48, 4.52, 5];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="space-y-5" style={{ maxWidth: 120 }}>
        {floatValues1.map((value) => (
          <Rating
            key={value}
            value={value}
            itemStyles={customStyles}
            readOnly
          />
        ))}
      </div>
      <div className="space-y-5" style={{ maxWidth: 120 }}>
        {floatValues2.map((value) => (
          <Rating
            key={value}
            value={value}
            itemStyles={customStyles}
            readOnly
          />
        ))}
      </div>
      <Rating
        className="sm:mt-5 max-w-[120px]"
        value={rating}
        itemStyles={myStyles}
        onChange={setRating}
      />
    </div>
  );
};

export default ColorRating;
