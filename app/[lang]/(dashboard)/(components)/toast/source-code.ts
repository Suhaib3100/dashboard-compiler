export const defaultrehToast = `import { toast as reToast } from "react-hot-toast";
const Toast = () => {
  const defaultToast = () => reToast("Here is your toast.");

  return <Button onClick={defaultToast}>Error </Button>;
}
export default Toast`;
export const errorrehToast = `import { toast as reToast } from "react-hot-toast";
const Toast = () => {
  return <Button onClick={onClick={() => reToast.error("This didn't work.")}}>Error </Button>;
}
export default Toast`;
export const successrehToast = `import { toast as reToast } from "react-hot-toast";
const Toast = () => {

  return <Button color="success" onClick={() => reToast.success("Successfully toasted!")}> Success </Button>;
}
export default Toast`;
export const promisrehToast = `import { toast as reToast } from "react-hot-toast";
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
const Toast = () => {
const promise = () =>

  new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));
  return <Button color="success" onClick={(promiseToast}> Promise Toast </Button>;
}
export default Toast`;
export const rehnewlineToast = `import { toast as reToast } from "react-hot-toast";

const Toast = () => {
const newLineToast = () =>
  reToast(
    "This toast is super big. I don't think anyone could eat it in one bite.\n\nIt's larger than you expected. You eat it but it does not seem to get smaller.",
    {
      duration: 6000,
    }
  );


  return <Button onClick={newLineToast}>Error </Button>;
}
export default Toast`;
export const rehemojiToast = `import { toast as reToast } from "react-hot-toast";

const ToastMultiLine = () => {

  return <Button color="info" onClick={() => reToast("Good Job!", { icon: "👏" })} > Emoji Toast </Button>;
}
export default ToastMultiLine`;
export const rehdarkToast = `import { toast as reToast } from "react-hot-toast";

const Toast = () => {
const darkToast = () =>
  reToast("Hello Darkness!", {
    icon: "👏",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
  return <Button variant="outline" onClick={darkToast}> Dark Mode </Button>
}
export default Toast`;

export const rehcustomToast = `import { toast as reToast } from "react-hot-toast";
const Toast = () => {
const customJsx = () => {
  reToast((t) => (
    <span className="space-x-4">
      Custom and <b>bold</b>
      <Button
        size="sm"
        color="destructive"
        onClick={() => toast.dismiss(t.id)}
      >
        Dismiss
      </Button>
    </span>
  ));
};
  return <Button variant="outline" onClick={customJsx}> Custom </Button>
}
export default Toast`;

export const rehtheamToast = `import { toast as reToast } from "react-hot-toast";
const Toast = () => {
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
  return <Button variant="outline" onClick={themToast}> Custom </Button>
}
export default Toast`;

export const rehpositionToast = `import { toast as reToast } from "react-hot-toast";
const Toast = () => {
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
  return <Button color="dark" variant="outline" onClick={() => reToast.success("Always at the bottom.", 
                {
                    position: "bottom-center",
                  })
                }
              >
                Different Position Toast
              </Button>
}
export default Toast`;

export const rehtailwindToast = `import { toast as reToast } from "react-hot-toast";
const Toast = () => {
const tailwindClass = () => {
  reToast.custom((t) => (
    <div
      className={'{
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-background shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5'}
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
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  ));
};
  return <Button variant="soft" color="info" onClick={tailwindClass}> Tailwind Css </Button>
}
export default Toast`;

export const defaultToast = `import { toast } from "@/components/ui/use-toast";";
const Toast = () => {
const defaulToast = () =>
  toast({
    title: "You submitted the following values:",
    description: <>Life is beautiful</>,
  });
  return <Button variant="outline" onClick={defaulToast}> Default Toast </Button>;
}
export default Toast`;

export const dangerToast = `import { toast } from "@/components/ui/use-toast";";
const Toast = () => {
const destructiveToast = () =>
  toast({
    title: "This is wrong",
    description: <>Please Choose Right Toast</>,
    variant: "destructive",
  });
  return <Button variant="outline" onClick={destructiveToast}> Default Toast </Button>;
}
export default Toast`;

export const warningToast = `import { toast } from "@/components/ui/use-toast";";
const Toast = () => {
const warning = () =>
  toast({
    title: "This Could be dangerous",
    variant: "warning",
  });
  return <Button variant="outline" onClick={warning}> Default Toast </Button>;
}
export default Toast`;

export const successToast = `import { toast } from "@/components/ui/use-toast";";
const Toast = () => {
const success = () =>
  toast({
    title: "Success",
    variant: "success",
  });
  return <Button variant="outline" onClick={success}> Default Toast </Button>;
}
export default Toast`;

export const infoToast = `import { toast } from "@/components/ui/use-toast";";
const Toast = () => {
const info = () =>
  toast({
    title: "This is a toast",
    variant: "info",
  });
  return <Button variant="outline" onClick={info}> Default Toast </Button>;
}
export default Toast`;

export const differentTypeToast = `
"use client";
import React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const promise = () =>
  new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));


const DifferentTypeToast = () => {
  return (
    <>
       <Button
        variant="outline"
        onClick={() => toast("Event has been created")}
      >
        Default Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.message("Event has been created", {
            description: "Monday, January 3rd at 6:00pm",
          })
        }
      >
        Description Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("Event has been created")}
      >
        Success Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info("Be at the area 10 minutes before the event time")
        }
      >
        Info Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("Event start time cannot be earlier than 8am")
        }
      >
        Warning Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("Event has not been created")}
      >
        Error Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
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
        color="dark"
        variant="outline"
        onClick={() =>
          toast.promise(promise, {
            loading: "Loading...",
            success: (data) => {
              return '{data.name} toast has been added';
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
    </>
  );
};
export default DifferentTypeToast;
`;
export const differentPositionToast = `
"use client";
import React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const promise = () =>
  new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));


const DifferentPositionToast = () => {
  return (
    <>
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
    </>
  );
};
export default DifferentPositionToast;
`;
export const richColorToast = `
"use client";
import React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const promise = () =>
  new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));


const RichColorToast = () => {
  return (
    <>
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
    </>
  );
};
export default RichColorToast;
`;
