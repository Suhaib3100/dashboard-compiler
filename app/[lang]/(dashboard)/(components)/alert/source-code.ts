export const colorAlert = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
const ColorAlert = () => {
  return (
    <React.Fragment>
      <Alert>
          <AlertDescription>I'm an alert with primary background color.!</AlertDescription>
      </Alert>
      <Alert color="secondary">
          <AlertDescription>I'm an alert with primary background color.!</AlertDescription>
      </Alert>

      <Alert color="warning">
          <AlertDescription>I'm an alert with primary background color.!</AlertDescription>
      </Alert>
      <Alert color="success">
          <AlertDescription>I'm an alert with primary background color.!</AlertDescription>
      </Alert>
      <Alert color="destructive">
          <AlertDescription>I'm an alert with primary background color.!</AlertDescription>
      </Alert>
      <Alert color="info">
          <AlertDescription>I'm an alert with primary background color.!</AlertDescription>
      </Alert>
      <Alert color="dark">
          <AlertDescription>I'm an alert with primary background color.!</AlertDescription>
      </Alert>  
    </React.Fragment>
  )
}
export default ColorAlert;
`;
export const outlineAlert = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
const OutlineAlert = () => {
  return (
    <React.Fragment>
      <Alert variant="outline">
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="secondary" variant="outline">
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="warning" variant="outline">
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="success" variant="outline">
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="destructive" variant="outline">
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="info" variant="outline">
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="dark" variant="outline">
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
    </React.Fragment>
  )
}
export default OutlineAlert;
`;
export const softAlert = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
const SoftAlert = () => {
  return (
    <React.Fragment>
      <Alert variant="soft">
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="secondary" variant="soft">
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="warning" variant="soft">
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="success" variant="soft">
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="destructive" variant="soft">
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="info" variant="soft">
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="dark" variant="soft">
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
    </React.Fragment>
  )
}
export default SoftAlert;
`;

export const linkAlert = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
const LinkAlert = () => {
  return (
    <React.Fragment>
      <Alert variant="soft">
        <AlertDescription>
          This is a primary alert with an{" "}
          <a href="#" className=" font-bold underline">
            example link
          </a>{" "}
          Give it a click.
        </AlertDescription>
      </Alert>
      <Alert color="secondary" variant="soft">
        <AlertDescription>
          This is a primary alert with an{" "}
          <a href="#" className=" font-bold underline">
            example link
          </a>{" "}
          Give it a click.
        </AlertDescription>
      </Alert>
      <Alert color="warning" variant="soft">
        <AlertDescription>
          This is a primary alert with an{" "}
          <a href="#" className=" font-bold underline">
            example link
          </a>{" "}
          Give it a click.
        </AlertDescription>
      </Alert>
      <Alert color="success" variant="soft">
        <AlertDescription>
          This is a primary alert with an{" "}
          <a href="#" className=" font-bold underline">
            example link
          </a>{" "}
          Give it a click.
        </AlertDescription>
      </Alert>
      <Alert color="destructive" variant="soft">
        <AlertDescription>
          This is a primary alert with an{" "}
          <a href="#" className=" font-bold underline">
            example link
          </a>{" "}
          Give it a click.
        </AlertDescription>
      </Alert>
      <Alert color="info" variant="soft">
        <AlertDescription>
          This is a primary alert with an{" "}
          <a href="#" className=" font-bold underline">
            example link
          </a>{" "}
          Give it a click.
        </AlertDescription>
      </Alert>
      <Alert color="dark" variant="soft">
        <AlertDescription>
          This is a primary alert with an{" "}
          <a href="#" className=" font-bold underline">
            example link
          </a>{" "}
          Give it a click.
        </AlertDescription>
      </Alert>
    </React.Fragment>
  )
}
export default LinkAlert;
`;
export const disableAlert = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
const DisableAlert = () => {
  return (
    <React.Fragment>
      <Alert dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="secondary" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="warning" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="success" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="destructive" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="info" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="dark" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
    </React.Fragment>
  )
}
export default DisableAlert;
`;
export const dismissibleOutlineAlert = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
const DismissibleOutlineAlert = () => {
  return (
    <React.Fragment>
      <Alert variant="outline" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="secondary" variant="outline" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>

      <Alert color="warning" variant="outline" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="success" variant="outline" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="destructive" variant="outline" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="info" variant="outline" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="dark" variant="outline" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
    </React.Fragment>
  )
}
export default DismissibleOutlineAlert;
`;
export const dismissibleSoftColor = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
const DismissibleSoftColor = () => {
  return (
    <React.Fragment>
      <Alert variant="soft" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="secondary" variant="soft" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>

      <Alert color="warning" variant="soft" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="success" variant="soft" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="destructive" variant="soft" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="info" variant="soft" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="dark" variant="soft" dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
    </React.Fragment>
  )
}
export default DismissibleSoftColor;
`;
export const disableSoftIcon = `
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Icon } from "@iconify/react";
const DisableSoftIcon = () => {
  return (
    <React.Fragment>
      <Alert variant="soft" dismissible>
        <Icon icon="heroicons:tv" className="h-4 w-4  " />
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="secondary" variant="soft" dismissible>
        <Icon icon="heroicons:signal" className="h-4 w-4  " />
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>

      <Alert color="warning" variant="soft" dismissible>
        <Icon icon="heroicons:exclamation-triangle" className="h-4 w-4  " />
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="success" variant="soft" dismissible>
        <Icon icon="heroicons:check" className="h-4 w-4  " />
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="destructive" variant="soft" dismissible>
        <Icon icon="heroicons:trash" className="h-4 w-4  " />
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="info" variant="soft" dismissible>
        <Icon icon="heroicons:information-circle" className="h-4 w-4  " />
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert color="dark" variant="soft" dismissible>
        <Icon icon="heroicons:at-symbol" className="h-4 w-4  " />
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
    </React.Fragment>
  )
}
export default DisableSoftIcon;
`;
export const borderAlert = `
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Icon } from "@iconify/react";
const BorderAlert = () => {
  return (
    <React.Fragment>
      <Alert variant="soft" className=" border-l-[8px]  " dismissible>
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert
        color="secondary"
        variant="soft"
        className=" border-l-[8px]"
        dismissible
      >
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>

      <Alert
        color="warning"
        variant="soft"
        className=" border-t-[8px]"
        dismissible
      >
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert
        color="success"
        variant="soft"
        className=" border-b-[8px]"
        dismissible
      >
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert
        color="destructive"
        variant="soft"
        className=" border-r-[8px]"
        dismissible
      >
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert
        color="info"
        variant="soft"
        className=" border-l-[8px]"
        dismissible
      >
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
      <Alert
        color="dark"
        variant="soft"
        className=" border-l-[8px]"
        dismissible
      >
        <AlertDescription>
          I'm an alert with primary background color.!
        </AlertDescription>
      </Alert>
    </React.Fragment>
  )
}
export default BorderAlert;
`;
export const headingAlert = `
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Icon } from "@iconify/react";
const HeadingAlert = () => {
  return (
    <React.Fragment>
      <Alert variant="soft" dismissible>
        <div className=" flex-1">
          <AlertTitle>This is a primary alert — check it out!</AlertTitle>
          <AlertDescription>
            Sugar plum apple pie sesame snaps croissant marshmallow apple pie
            liquorice.
          </AlertDescription>
        </div>
      </Alert>
      <Alert color="secondary" variant="soft">
        <div className=" flex-1">
          <AlertTitle>This is a secondary alert — check it out!</AlertTitle>
          <AlertDescription>
            Sugar plum apple pie sesame snaps croissant marshmallow apple pie
            liquorice.
          </AlertDescription>
        </div>
      </Alert>

      <Alert color="warning" variant="soft">
        <div className=" flex-1">
          <AlertTitle>This is a warning alert — check it out!</AlertTitle>
          <AlertDescription>
            Sugar plum apple pie sesame snaps croissant marshmallow apple pie
            liquorice.
          </AlertDescription>
        </div>
      </Alert>
      <Alert color="success" variant="soft">
        <div className=" flex-1">
          <AlertTitle>This is a success alert — check it out!</AlertTitle>
          <AlertDescription>
            Sugar plum apple pie sesame snaps croissant marshmallow apple pie
            liquorice.
          </AlertDescription>
        </div>
      </Alert>
      <Alert color="destructive" variant="soft">
        <div className=" flex-1">
          <AlertTitle>This is a destructive alert — check it out!</AlertTitle>
          <AlertDescription>
            Sugar plum apple pie sesame snaps croissant marshmallow apple pie
            liquorice.
          </AlertDescription>
        </div>
      </Alert>
      <Alert color="info" variant="soft">
        <div className=" flex-1">
          <AlertTitle>This is a info alert — check it out!</AlertTitle>
          <AlertDescription>
            Sugar plum apple pie sesame snaps croissant marshmallow apple pie
            liquorice.
          </AlertDescription>
        </div>
      </Alert>
      <Alert color="dark" variant="soft">
        <div className=" flex-1">
          <AlertTitle>This is a dark alert — check it out!</AlertTitle>
          <AlertDescription>
            Sugar plum apple pie sesame snaps croissant marshmallow apple pie
            liquorice.
          </AlertDescription>
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default HeadingAlert;
`;
export const headingAlertIcon = `
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Icon } from "@iconify/react";
const HeadingAlertIcon = () => {
  return (
    <React.Fragment>
      <Alert variant="soft" dismissible>
        <Icon
          icon="heroicons:tv"
          className="h-6 w-6 self-start relative top-1  "
        />
        <div className=" flex-1">
          <AlertTitle>This is a primary alert — check it out!</AlertTitle>
          <AlertDescription>
            Sugar plum apple pie sesame snaps croissant marshmallow apple pie
            liquorice.
          </AlertDescription>
        </div>
      </Alert>
      <Alert color="secondary" variant="soft">
        <Icon
          icon="heroicons:signal"
          className="h-6 w-6 self-start relative top-1  "
        />
        <div className=" flex-1">
          <AlertTitle>This is a secondary alert — check it out!</AlertTitle>
          <AlertDescription>
            Sugar plum apple pie sesame snaps croissant marshmallow apple pie
            liquorice.
          </AlertDescription>
        </div>
      </Alert>

      <Alert color="warning" variant="soft">
        <Icon
          icon="heroicons:exclamation-triangle"
          className="h-6 w-6 self-start relative top-1  "
        />
        <div className=" flex-1">
          <AlertTitle>This is a warning alert — check it out!</AlertTitle>
          <AlertDescription>
            Sugar plum apple pie sesame snaps croissant marshmallow apple pie
            liquorice.
          </AlertDescription>
        </div>
      </Alert>
      <Alert color="success" variant="soft">
        <Icon
          icon="heroicons:check"
          className="h-6 w-6 self-start relative top-1  "
        />
        <div className=" flex-1">
          <AlertTitle>This is a success alert — check it out!</AlertTitle>
          <AlertDescription>
            Sugar plum apple pie sesame snaps croissant marshmallow apple pie
            liquorice.
          </AlertDescription>
        </div>
      </Alert>
      <Alert color="destructive" variant="soft">
        <Icon
          icon="heroicons:trash"
          className="h-6 w-6 self-start relative top-1  "
        />
        <div className=" flex-1">
          <AlertTitle>This is a destructive alert — check it out!</AlertTitle>
          <AlertDescription>
            Sugar plum apple pie sesame snaps croissant marshmallow apple pie
            liquorice.
          </AlertDescription>
        </div>
      </Alert>
      <Alert color="info" variant="soft">
        <Icon
          icon="heroicons:information-circle"
          className="h-6 w-6 self-start relative top-1  "
        />
        <div className=" flex-1">
          <AlertTitle>This is a info alert — check it out!</AlertTitle>
          <AlertDescription>
            Sugar plum apple pie sesame snaps croissant marshmallow apple pie
            liquorice.
          </AlertDescription>
        </div>
      </Alert>
      <Alert color="dark" variant="soft">
        <Icon
          icon="heroicons:at-symbol"
          className="h-6 w-6 self-start relative top-1  "
        />
        <div className=" flex-1">
          <AlertTitle>This is a dark alert — check it out!</AlertTitle>
          <AlertDescription>
            Sugar plum apple pie sesame snaps croissant marshmallow apple pie
            liquorice.
          </AlertDescription>
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default HeadingAlertIcon;
`;
export const alertDialogPage = `
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
const AlertDialogPage = () => {
  return (
    <React.Fragment>
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </React.Fragment>
  )
}
export default AlertDialogPage;
`;
