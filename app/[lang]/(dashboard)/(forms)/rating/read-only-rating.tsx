import { Rating } from "@/components/ui/rating";
const ReadOnlyRating = () => {
  return (
    <Rating
      className="gap-x-1.5 max-w-[125px]"
      value={4}
      readOnly
    />
  );
};

export default ReadOnlyRating;
