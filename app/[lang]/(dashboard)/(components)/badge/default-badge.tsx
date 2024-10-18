
import { Badge } from "@/components/ui/badge";
const DefaultBadge = () => {
  return (
    <>
      <Badge>Badge</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="destructive">Danger</Badge>
      <Badge color="dark">Dark</Badge>
    </>
  );
};

export default DefaultBadge;
