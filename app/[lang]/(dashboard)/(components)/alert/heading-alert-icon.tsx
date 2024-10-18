"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Icon } from "@iconify/react";
const HeadingAlertIcon = () => {
  return (
    <div className="space-y-4">
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
    </div>
  );
};

export default HeadingAlertIcon;
