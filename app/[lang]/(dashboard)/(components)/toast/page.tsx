"use client";
import Card from "@/components/ui/card-snippet";
import { toast as reToast } from "react-hot-toast";
import { toast } from "@/components/ui/use-toast";
import { toast as stoast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  dangerToast,
  defaultToast,
  defaultrehToast,
  differentPositionToast,
  differentTypeToast,
  errorrehToast,
  infoToast,
  promisrehToast,
  rehcustomToast,
  rehdarkToast,
  rehemojiToast,
  rehnewlineToast,
  rehpositionToast,
  rehtailwindToast,
  rehtheamToast,
  richColorToast,
  successToast,
  successrehToast,
  warningToast,
} from "./source-code";

const defaultToasts = () => reToast("Here is your toast.");
const darkToast = () =>
  reToast("Hello Darkness!", {
    icon: "👏",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
const newLineToast = () =>
  reToast(
    "This toast is super big. I don't think anyone could eat it in one bite.\n\nIt's larger than you expected. You eat it but it does not seem to get smaller.",
    {
      duration: 6000,
    }
  );
const promiseToast = () => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("foo");
      } else {
        reject("fox");
      }
    }, 1000);
  });

  return reToast.promise(myPromise, {
    loading: "Loading",
    success: "Got the data",
    error: "Error when fetching",
  });
};
const customJsx = () => {
  reToast((t) => (
    <span className="space-x-4">
      Custom and <b>bold</b>
      <Button
        size="sm"
        color="destructive"
        onClick={() => reToast.dismiss(t.id)}
      >
        Dismiss
      </Button>
    </span>
  ));
};
const themToast = () => {
  reToast.success("Look at my styles.", {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });
};
const tailwindClass = () => {
  reToast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-background shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt=""
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">Emilia Gates</p>
            <p className="mt-1 text-sm text-gray-500">
              Sure! 8:30pm works great!
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => reToast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  ));
};

const defaultt = () =>
  toast({
    title: "You submitted the following values:",
    description: <>Life is beautiful</>,
  });
const success = () =>
  toast({
    title: "Success",
    color: "success",
  });
const warning = () =>
  toast({
    title: "This Could be dangerous",
    color: "warning",
  });
const destructive = () =>
  toast({
    title: "This is wrong",
    description: <>Please Choose Right Toast</>,
    color: "destructive",
  });
const info = () =>
  toast({
    title: "This is a toast",
    color: "info",
  });

const promise = () =>
  new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));

const ToasterPage = () => {
  return (
    <div className=" space-y-5">
      <div className=" space-y-5">
        <div className="text-xl pl-3 font-medium mt-3">React Hot Toast</div>
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <Card title=" Default Toast" code={defaultrehToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              The most basic variant does not have an icon.
            </p>
            <div className="flex items-center justify-center">
              <Button onClick={defaultToasts}>Default</Button>
            </div>
          </Card>
          <Card title=" Error Toast" code={errorrehToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              Creates a notification with an animated error icon.
            </p>
            <div className="flex items-center justify-center">
              <Button
                color="destructive"
                onClick={() => reToast.error("This didn't work.")}
              >
                Error
              </Button>
            </div>
          </Card>
          <Card title="Success Toast" code={successrehToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              Creates a notification with an animated checkmark.
            </p>
            <div className="flex items-center justify-center">
              {" "}
              <Button
                color="success"
                onClick={() => reToast.success("Successfully toasted!")}
              >
                Success 
              </Button>
            </div>
          </Card>
          <Card title="Promise Toast" code={promisrehToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              Update automatically when promise resolves / fails.
            </p>
            <div className="flex items-center justify-center">
              {" "}
              <Button variant="outline" onClick={promiseToast}>
                Promise Toast
              </Button>
            </div>
          </Card>
          <Card title="New Line Toast" code={rehnewlineToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              The most basic variant with longer texts
            </p>
            <div className="flex items-center justify-center">
              {" "}
              <Button variant="soft" onClick={newLineToast}>
                New Line Toast
              </Button>
            </div>
          </Card>
          <Card title="Emoji Toast" code={rehemojiToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              Add any emoji instead of an icon
            </p>
            <div className="flex items-center justify-center">
              {" "}
              <Button
                color="info"
                onClick={() => reToast("Good Job!", { icon: "👏" })}
              >
                Emoji Toast
              </Button>
            </div>
          </Card>
          <Card title="Dark Toast" code={rehdarkToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              Customize the default styles the way you want.
            </p>
            <div className="flex items-center justify-center">
              <Button variant="outline" onClick={darkToast}>
                Dark Mode
              </Button>
            </div>
          </Card>
          <Card title="Custom Jsx" code={rehcustomToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              Make a toast using any custom content
            </p>
            <div className="flex items-center justify-center">
              <Button variant="outline" onClick={customJsx}>
                Custom Jsx
              </Button>{" "}
            </div>
          </Card>
          <Card title="Theme Toast" code={rehtheamToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              Customize the default styles the way you want.
            </p>
            <div className="flex items-center justify-center">
              <Button color="warning" onClick={themToast}>
                Design Toast
              </Button>
            </div>
          </Card>
          <Card title="Position Toast" code={rehpositionToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              You can change the toast's position as you like.
            </p>
            <div className="flex items-center justify-center">
              <Button
                variant="outline"
                onClick={() =>
                  reToast.success("Always at the bottom.", {
                    position: "bottom-center",
                  })
                }
              >
                Different Position Toast
              </Button>
            </div>
          </Card>
          <Card title="Design Toast" code={rehtailwindToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              Make a toast using any custom content
            </p>
            <div className="flex items-center justify-center">
              {" "}
              <Button variant="soft" color="info" onClick={tailwindClass}>
                Tailwind Css
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <div className=" space-y-5">
        <div className="text-xl pl-3 font-medium py-3">React Toast</div>
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <Card title=" Default Toast" code={defaultToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              The most basic variant does not have any design.
            </p>
            <div className="flex items-center justify-center">
              <Button variant="outline" onClick={defaultt}>
                {" "}
                Default Toast
              </Button>
            </div>
          </Card>
          <Card title=" Error Toast" code={dangerToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              The variant does show error message with red background.
            </p>
            <div className="flex items-center justify-center">
              <Button color="destructive" onClick={destructive}>
                {" "}
                Error Toast
              </Button>
            </div>
          </Card>
          <Card title="Success Toast" code={successToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              The variant does show success message with green background.
            </p>
            <div className="flex items-center justify-center">
              {" "}
              <Button color="success" variant="outline" onClick={success}>
                Success Toast
              </Button>
            </div>
          </Card>
          <Card title="Warning Toast" code={warningToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              The variant does show warning message with yellow background.
            </p>
            <div className="flex items-center justify-center">
              {" "}
              <Button color="warning" onClick={warning}>
                {" "}
                Warning Toast
              </Button>
            </div>
          </Card>
          <Card title="Info Toast" code={infoToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              The variant does show info message with blue background.
            </p>
            <div className="flex items-center justify-center">
              {" "}
              <Button color="info" variant="soft" onClick={info}>
                {" "}
                Info Toast
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <div className=" space-y-5">
        <div className="text-xl pl-3 font-medium py-3">Sooner Toast</div>
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <Card title="Different Type Toast" code={differentTypeToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              The variant does show different type of message toasts.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                variant="outline"
                onClick={() => stoast("Event has been created")}
              >
                Default Toast
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  stoast.message("Event has been created", {
                    description: "Monday, January 3rd at 6:00pm",
                  })
                }
              >
                Description Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => stoast.success("Event has been created")}
              >
                Success Toast
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  stoast.info("Be at the area 10 minutes before the event time")
                }
              >
                Info Toast
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  stoast.warning("Event start time cannot be earlier than 8am")
                }
              >
                Warning Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => stoast.error("Event has not been created")}
              >
                Error Toast
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  stoast("Event has been created", {
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  })
                }
              >
                Action Toast
              </Button>
              
              <Button
                variant="outline"
                onClick={() =>
                  stoast.promise(promise, {
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
                variant="outline"
                onClick={() =>
                  stoast(
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
            </div>
          </Card>
          <Card title="Different Position Toast" code={differentPositionToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              The variant does show different type of message toasts in
              different position.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                variant="outline"
                onClick={() =>
                  stoast("Event has been created", {
                    position: "top-right",
                  })
                }
              >
                Top Right
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  stoast.message("Event has been created", {
                    position: "top-left",
                  })
                }
              >
                Top Left
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  stoast.message("Event has been created", {
                    position: "top-center",
                  })
                }
              >
                Top Center
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  stoast.message(
                    "Be at the area 10 minutes before the event time",
                    {
                      position: "bottom-right",
                    }
                  )
                }
              >
                Bottom Right
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  stoast.message(
                    "Event start time cannot be earlier than 8am",
                    {
                      position: "bottom-left",
                    }
                  )
                }
              >
                Bottom Left
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  stoast.message("Event has not been created", {
                    position: "bottom-center",
                  })
                }
              >
                Bottom Center
              </Button>
            </div>
          </Card>
          <Card title="Rich Color Toast" code={richColorToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              The variant does show different type of message toasts in
              different color.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                color="success"
                variant="outline"
                onClick={() =>
                  stoast.success("Event has been created", {
                    position: "top-right",
                  })
                }
              >
                Rich Color Success
              </Button>
              <Button
                color="destructive"
                variant="outline"
                onClick={() =>
                  stoast.error("Event has been created", {
                    position: "top-left",
                  })
                }
              >
                Rich Colors Error
              </Button>
              <Button
                color="info"
                variant="outline"
                onClick={() =>
                  stoast.info("Event has been created", {
                    position: "top-center",
                  })
                }
              >
                Rich Colors Info
              </Button>
              <Button
                color="warning"
                variant="outline"
                onClick={() =>
                  stoast.warning(
                    "Be at the area 10 minutes before the event time",
                    {
                      position: "bottom-right",
                    }
                  )
                }
              >
                Rich Colors Warning
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ToasterPage;
