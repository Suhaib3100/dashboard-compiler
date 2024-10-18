import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
const LoaderButton = () => {
  return (
    <>
      <Button disabled>
        <Loader2 className="ltr:mr-2 rtl:ml-2 h-4 w-4 animate-spin" />
        Loading ...
      </Button>
      <Button color="secondary" disabled>
        <Loader2 className="ltr:mr-2 rtl:ml-2 h-4 w-4 animate-spin" />
        Loading ...
      </Button>
      <Button color="success" disabled>
        <Loader2 className="ltr:mr-2 rtl:ml-2 h-4 w-4 animate-spin" />
        Loading ...
      </Button>
      <Button color="info" disabled>
        <Loader2 className="ltr:mr-2 rtl:ml-2 h-4 w-4 animate-spin" />
        Loading ...
      </Button>
      <Button color="warning" disabled>
        <Loader2 className="ltr:mr-2 rtl:ml-2 h-4 w-4 animate-spin" />
        Loading ...
      </Button>
      <Button color="destructive" disabled>
        <Loader2 className="ltr:mr-2 rtl:ml-2 h-4 w-4 animate-spin" />
        Loading ...
      </Button>
    </>
  );
};

export default LoaderButton;
