"use client"
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Icon } from "@iconify/react";
const DisableSoftIcon = () => {
  return (
    <div className="space-y-4">
      <Alert variant="soft" dismissible>
        <Icon icon="heroicons:tv" className="h-4 w-4 flex-none  " />
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="secondary" variant="soft" dismissible>
        <Icon icon="heroicons:signal" className="h-4 w-4 flex-none  " />
        <AlertDescription>
          I'm an alert with secondary background color.!
        </AlertDescription>
      </Alert>

      <Alert color="warning" variant="soft" dismissible>
        <Icon icon="heroicons:exclamation-triangle" className="h-4 w-4 flex-none  " />
        <AlertDescription>
          I'm an alert with warning background color.!
        </AlertDescription>
      </Alert>
      <Alert color="success" variant="soft" dismissible>
        <Icon icon="heroicons:check" className="h-4 w-4 flex-none  " />
        <AlertDescription>
          I'm an alert with success background color.!
        </AlertDescription>
      </Alert>
      <Alert color="destructive" variant="soft" dismissible>
        <Icon icon="heroicons:trash" className="h-4 w-4 flex-none  " />
        <AlertDescription>
          I'm an alert with destructive background color.!
        </AlertDescription>
      </Alert>
      <Alert color="info" variant="soft" dismissible>
        <Icon icon="heroicons:information-circle" className="h-4 w-4 flex-none  " />
        <AlertDescription>
          I'm an alert with info background color.!
        </AlertDescription>
      </Alert>
      <Alert color="dark" variant="soft" dismissible>
        <Icon icon="heroicons:at-symbol" className="h-4 w-4 flex-none  " />
        <AlertDescription>
          I'm an alert with dark background color.!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default DisableSoftIcon;
