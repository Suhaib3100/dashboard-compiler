import { Button } from "@/components/ui/button";

const DisabledButton = () => {
  return (
    <>
      <Button disabled>Default</Button>
      <Button color="secondary" disabled>
        Secondary
      </Button>
      <Button color="success" disabled>
        Success
      </Button>
      <Button color="info" disabled>
        Info
      </Button>
      <Button color="warning" disabled>
        Warning
      </Button>
      <Button color="destructive" disabled>
        Danger
      </Button>
    </>
  );
};

export default DisabledButton;
