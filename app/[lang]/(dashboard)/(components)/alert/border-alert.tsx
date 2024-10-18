
import { Alert, AlertDescription } from "@/components/ui/alert";

const BorderAlert = () => {
  return (
    <div className="space-y-4">
      <Alert variant="soft" className=" border-l-[8px]  " dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert
        color="secondary"
        variant="soft"
        className=" border-l-[8px] border-slate-600"
        dismissible
      >
        <AlertDescription>
          I'm an alert with secondary background color.!
        </AlertDescription>
      </Alert>

      <Alert
        color="warning"
        variant="soft"
        className=" border-t-[8px]"
        dismissible
      >
        <AlertDescription>
          I'm an alert with warning background color.!
        </AlertDescription>
      </Alert>
      <Alert
        color="success"
        variant="soft"
        className=" border-b-[8px]"
        dismissible
      >
        <AlertDescription>
          I'm an alert with success background color.!
        </AlertDescription>
      </Alert>
      <Alert
        color="destructive"
        variant="soft"
        className=" border-r-[8px]"
        dismissible
      >
        <AlertDescription>
          I'm an alert with destructive background color.!
        </AlertDescription>
      </Alert>
      <Alert
        color="info"
        variant="soft"
        className=" border-l-[8px]"
        dismissible
      >
        <AlertDescription>
          I'm an alert with info background color.!
        </AlertDescription>
      </Alert>
      <Alert
        color="dark"
        variant="soft"
        className=" border-l-[8px] border-slate-950"
        dismissible
      >
        <AlertDescription>
          I'm an alert with dark background color.!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default BorderAlert;
