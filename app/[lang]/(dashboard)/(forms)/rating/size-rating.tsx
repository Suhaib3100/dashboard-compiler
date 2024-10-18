import { Rating } from "@/components/ui/rating";
import { useState } from "react";

const SizeRating = () => {
  const [rating, setRating] = useState<number>(3);

  return (
    <>
      <Rating
        className="gap-x-1.5 max-w-[125px]"
        value={rating}
        onChange={setRating}
      />
      <Rating
        className="gap-x-1.5 max-w-[225px]"
        value={rating}
        onChange={setRating}
      />
      <Rating
        className="gap-x-1.5 max-w-[325px]"
        value={rating}
        onChange={setRating}
      />
    </>
  );
};

export default SizeRating;
