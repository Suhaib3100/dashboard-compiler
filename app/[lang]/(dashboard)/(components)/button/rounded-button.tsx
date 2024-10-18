import { Button } from "@/components/ui/button";

const RoundedButton = () => {
  return (
    <>
      <Button className="rounded-full">Default</Button>
      <Button color="secondary" className="rounded-full">
        Secondary
      </Button>
      <Button color="success" className="rounded-full">
        Success
      </Button>
      <Button color="info" className="rounded-full">
        Info
      </Button>
      <Button color="warning" className="rounded-full">
        Warning
      </Button>
      <Button color="destructive" className="rounded-full">
        Danger
      </Button>
    </>
  );
};

export default RoundedButton;
