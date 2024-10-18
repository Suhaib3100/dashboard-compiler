"use client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const promise = () =>
  new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));
const SoonerToastDemo = () => {
  return (
    <>
      <Button
        variant="outline"
        onClick={() => toast("Event has been created")}
      >
        Default
      </Button>
      <Button
        color="success"
        onClick={() => toast.success("Event has been created")}
      >
        Toast Success
      </Button>
      <Button
        color="success"
        variant="outline"
        onClick={() =>
          toast.success("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
      >
        Toast Description
      </Button>
      <Button
        color="info"
        onClick={() => toast.info("Event has been created", {})}
      >
        Toast Info
      </Button>
      <Button
        color="dark"
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            position: "top-right",
          })
        }
      >
        Toast Top Right
      </Button>
      <Button
        color="info"
        variant="outline"
        onClick={() =>
          toast.info("Event has been created", {
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Toast With Action
      </Button>
      <Button
        color="dark"
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            position: "top-left",
          })
        }
      >
        Toast Top Left
      </Button>
      <Button
        color="warning"
        onClick={() => toast.warning("Event has been created", {})}
      >
        Toast Warning
      </Button>
      <Button
        color="warning"
        variant="outline"
        onClick={() =>
          toast.warning("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
      >
        Toast Warning Description
      </Button>
      <Button
        color="warning"
        variant="outline"
        onClick={() =>
          toast.warning("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            position: "top-right",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Toast All Function
      </Button>
      <Button
        color="dark"
        variant="outline"
        onClick={() =>
          toast.promise(promise, {
            loading: "Loading...",
            success: (data:any) => {
              return `${data.name} toast has been added`;
            },
            error: "Error",
          })
        }
      >
        Toast Promises
      </Button>
      <Button
        color="info"
        variant="outline"
        onClick={() =>
          toast(
            <div className="p-2 text-center mx-auto border border-1 rounded-md">
              <p className="text-info text-base font-normal">
                A custom toast with default styling
              </p>
            </div>
          )
        }
      >
        Toast Custom
      </Button>
      <Button
        color="warning"
        variant="outline"
        onClick={() =>
          toast.warning("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            position: "top-center",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Toast Top center
      </Button>
      <Button
        color="dark"
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            position: "bottom-left",
          })
        }
      >
        Toast Bottom Left
      </Button>
      <Button
        color="destructive"
        onClick={() => toast.error("Event has not been created", {})}
      >
        Toast Error
      </Button>
      <Button
        color="destructive"
        variant="outline"
        onClick={() =>
          toast.error("Event has not been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Toast Error Action
      </Button>
      <Button
        color="dark"
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            position: "bottom-center",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Toast Bottom Center
      </Button>
    </>
  );
};

export default SoonerToastDemo;
