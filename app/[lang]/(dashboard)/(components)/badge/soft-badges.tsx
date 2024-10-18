import { Badge } from "@/components/ui/badge";

const SoftBadge = () => {
  return (
    <>
      <Badge variant="soft">Primary</Badge>
      <Badge color="secondary" variant="soft">
        Secondary
      </Badge>
      <Badge color="success" variant="soft">
        Success
      </Badge>
      <Badge color="info" variant="soft">
        Info
      </Badge>
      <Badge color="warning" variant="soft">
        Warning
      </Badge>
      <Badge color="destructive" variant="soft">
        Danger
      </Badge>
      <Badge color="dark" variant="soft">
        Dark
      </Badge>
    </>
  );
};

export default SoftBadge;
