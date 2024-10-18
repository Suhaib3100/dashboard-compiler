import { Button } from "@/components/ui/button";
import Link from "next/link";
const DefaultButton = () => {
  return (
    <>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="info">Info</Button>
      <Button color="warning">Warning</Button>
      <Button color="destructive">Danger</Button>
      <Button color="dark">Dark</Button>
      <Button asChild>
        <Link href="/dashboard/button">Link Button</Link>
      </Button>
    </>
  );
};

export default DefaultButton;
