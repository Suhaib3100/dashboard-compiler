
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const HeadingAlert = () => {
  return (
    <div className="space-y-4">
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
    </div>
  );
};

export default HeadingAlert;
