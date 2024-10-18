import { Badge } from "@/components/ui/badge";

const OutlineBadge = () => {
  return (
    <>
      <Badge variant="outline">Primary</Badge>
      <Badge color="secondary" variant="outline">
        Secondary
      </Badge>
      <Badge color="success" variant="outline">
        Success
      </Badge>
      <Badge color="info" variant="outline">
        Info
      </Badge>
      <Badge color="warning" variant="outline">
        Warning
      </Badge>
      <Badge color="destructive" variant="outline">
        Danger
      </Badge>
      <Badge color="dark" variant="outline">
        Dark
      </Badge>
    </>
  );
};

export default OutlineBadge;
