
import { Alert, AlertDescription } from "@/components/ui/alert";

const SoftAlert = () => {
  return (
    <div className="space-y-4">
      <Alert variant="soft">
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="secondary" variant="soft">
        <AlertDescription>
          I'm an alert with secondary background color.!
        </AlertDescription>
      </Alert>

      <Alert color="warning" variant="soft">
        <AlertDescription>
          I'm an alert with warning background color.!
        </AlertDescription>
      </Alert>
      <Alert color="success" variant="soft">
        <AlertDescription>
          I'm an alert with success background color.!
        </AlertDescription>
      </Alert>
      <Alert color="destructive" variant="soft">
        <AlertDescription>
          I'm an alert with destructive background color.!
        </AlertDescription>
      </Alert>
      <Alert color="info" variant="soft">
        <AlertDescription>
          I'm an alert with info background color.!
        </AlertDescription>
      </Alert>
      <Alert color="dark" variant="soft">
        <AlertDescription>
          I'm an alert with dark background color.!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default SoftAlert;
