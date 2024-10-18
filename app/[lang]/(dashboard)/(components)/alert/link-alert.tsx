
import { Alert, AlertDescription } from "@/components/ui/alert";

const LinkAlert = () => {
  return (
    <div className="space-y-4">
      <Alert variant="soft">
        <AlertDescription>
          This is a primary alert with an
          <a href="#" className=" font-bold underline px-1">
            example link
          </a>
          Give it a click.
        </AlertDescription>
      </Alert>
      <Alert color="secondary" variant="soft">
        <AlertDescription>
          This is a secondary alert with an
          <a href="#" className=" font-bold underline px-1">
            example link
          </a>
          Give it a click.
        </AlertDescription>
      </Alert>

      <Alert color="warning" variant="soft">
        <AlertDescription>
          This is a warning alert with an
          <a href="#" className=" font-bold underline px-1">
            example link
          </a>
          Give it a click.
        </AlertDescription>
      </Alert>
      <Alert color="success" variant="soft">
        <AlertDescription>
          This is a success alert with an
          <a href="#" className=" font-bold underline px-1">
            example link
          </a>
          Give it a click.
        </AlertDescription>
      </Alert>
      <Alert color="destructive" variant="soft">
        <AlertDescription>
          This is a destructive alert with an
          <a href="#" className=" font-bold underline px-1">
            example link
          </a>
          Give it a click.
        </AlertDescription>
      </Alert>
      <Alert color="info" variant="soft">
        <AlertDescription>
          This is a info alert with an
          <a href="#" className=" font-bold underline px-1">
            example link
          </a>
          Give it a click.
        </AlertDescription>
      </Alert>
      <Alert color="dark" variant="soft">
        <AlertDescription>
          This is a dark alert with an
          <a href="#" className=" font-bold underline px-1">
            example link
          </a>
          Give it a click.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default LinkAlert;
