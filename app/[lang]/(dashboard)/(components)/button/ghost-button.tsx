import { Button } from "@/components/ui/button";

const GhostButton = () => {
  return (
    <>
      <Button variant="ghost">Primary</Button>
      <Button color="secondary" variant="ghost">
        Secondary
      </Button>
      <Button color="success" variant="ghost">
        Success
      </Button>
      <Button color="info" variant="ghost">
        Info
      </Button>
      <Button color="warning" variant="ghost">
        Warning
      </Button>
      <Button color="destructive" variant="ghost">
        Danger
      </Button>
    </>
  );
};

export default GhostButton;
