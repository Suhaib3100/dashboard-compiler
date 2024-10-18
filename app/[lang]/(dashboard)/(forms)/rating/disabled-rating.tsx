import { Rating } from "@/components/ui/rating";
const DisabledRating = () => {
  return (
    <Rating
      className="space-x-1.5 max-w-[125px]"
      value={3}
      isDisabled
    />
  );
};

export default DisabledRating;
