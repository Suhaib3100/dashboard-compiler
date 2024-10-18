
import { Alert, AlertDescription } from "@/components/ui/alert";

const DismissibleOutlineAlert = () => {
  return (
    <div className="space-y-4">
      <Alert variant="outline" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="secondary" variant="outline" dismissible>
        <AlertDescription>
          I'm an alert with secondary background color.!
        </AlertDescription>
      </Alert>

      <Alert color="warning" variant="outline" dismissible>
        <AlertDescription>
          I'm an alert with warning background color.!
        </AlertDescription>
      </Alert>
      <Alert color="success" variant="outline" dismissible>
        <AlertDescription>
          I'm an alert with success background color.!
        </AlertDescription>
      </Alert>
      <Alert color="destructive" variant="outline" dismissible>
        <AlertDescription>
          I'm an alert with destructive background color.!
        </AlertDescription>
      </Alert>
      <Alert color="info" variant="outline" dismissible>
        <AlertDescription>
          I'm an alert with info background color.!
        </AlertDescription>
      </Alert>
      <Alert color="dark" variant="outline" dismissible>
        <AlertDescription>
          I'm an alert with dark background color.!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default DismissibleOutlineAlert;
