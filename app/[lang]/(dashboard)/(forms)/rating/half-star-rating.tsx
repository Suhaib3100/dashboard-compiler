import { Rating } from "@/components/ui/rating";
const HalfStarRating = () => {
  return (
    <Rating
      className="gap-x-1.5 max-w-[125px]"
      value={2.5}
      readOnly
    />
  );
};

export default HalfStarRating;
