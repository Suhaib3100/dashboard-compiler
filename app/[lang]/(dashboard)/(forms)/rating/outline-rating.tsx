import { Rating } from "@/components/ui/rating";
const OutlineRating = () => {
  return (
    <Rating
      className="gap-x-1.5 max-w-[125px]"
      value={3}
      variant="outline"
    />
  );
};

export default OutlineRating;
