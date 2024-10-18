import { Button } from "@/components/ui/button";

const SoftButton = () => {
  return (
    <>
      <Button variant="soft">Primary</Button>
      <Button color="secondary" variant="soft">
        Secondary
      </Button>
      <Button color="success" variant="soft">
        Success
      </Button>
      <Button color="info" variant="soft">
        Info
      </Button>
      <Button color="warning" variant="soft">
        Warning
      </Button>
      <Button color="destructive" variant="soft">
        Danger
      </Button>
    </>
  );
};

export default SoftButton;
