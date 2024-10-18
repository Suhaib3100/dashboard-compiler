import { Button } from "@/components/ui/button";

const OutlineButton = () => {
  return (
    <>
      <Button variant="outline">Primary</Button>
      <Button color="secondary" variant="outline">
        Secondary
      </Button>
      <Button color="success" variant="outline">
        Success
      </Button>
      <Button color="info" variant="outline">
        Info
      </Button>
      <Button color="warning" variant="outline">
        Warning
      </Button>
      <Button color="destructive" variant="outline">
        Danger
      </Button>
      <Button color="dark" variant="outline">
        Dark
      </Button>
    </>
  );
};

export default OutlineButton;
