"use client"
import { useState } from "react";
import { Rating } from "@/components/ui/rating";
import { Button } from "@/components/ui/button";

const ClearableRating = () => {
  const [rating, setRating] = useState<number>(3);

  return (
    <div className="flex gap-4 flex-wrap flex-col">
      <Rating

        className="gap-1.5 max-w-[125px]"
        value={rating}
        onChange={setRating}
      />
      <div>
        <Button
          color="destructive"
          size="sm"
          type="button"
          onClick={() => setRating(0)}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ClearableRating;
