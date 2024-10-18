import { Button } from "@/components/ui/button";

const RoundedOutline = () => {
  return (
    <>
      <Button className="rounded-full" variant="outline">
        Default
      </Button>
      <Button color="secondary" variant="outline" className="rounded-full">
        Secondary
      </Button>
      <Button color="success" variant="outline" className="rounded-full">
        Success
      </Button>
      <Button color="info" variant="outline" className="rounded-full">
        Info
      </Button>
      <Button color="warning" variant="outline" className="rounded-full">
        Warning
      </Button>
      <Button color="destructive" variant="outline" className="rounded-full">
        Danger
      </Button>
    </>
  );
};

export default RoundedOutline;
