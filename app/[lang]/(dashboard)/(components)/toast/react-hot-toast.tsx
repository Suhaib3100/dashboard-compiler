import React from "react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";


const ReactHotToast = () => {
  const defaultToast = () => toast("Here is your toast.");
  const darkToast = () =>
    toast("Hello Darkness!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  const newLineToast = () =>
    toast(
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

    return toast.promise(myPromise, {
      loading: "Loading",
      success: "Got the data",
      error: "Error when fetching",
    });
  };
  const customJsx = () => {
    toast((t) => (
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
  const themToast = () => {
    toast.success("Look at my styles.", {
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
    toast.custom((t) => (
      <div
        className={`${t.visible ? "animate-enter" : "animate-leave"
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
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };
  return (
    <>
      <Button onClick={defaultToast}>Default</Button>
      <Button
        color="destructive"
        onClick={() => toast.error("This didn't work.")}
      >
        Error
      </Button>
      <Button
        color="success"
        onClick={() => toast.success("Successfully toasted!")}
      >
        Success
      </Button>
      <Button variant="outline" onClick={promiseToast}>
        Promise Toast
      </Button>
      <Button variant="soft" onClick={newLineToast}>
        New Line Toast
      </Button>
      <Button color="info" onClick={() => toast("Good Job!", { icon: "👏" })}>
        Emoji Toast
      </Button>
      <Button variant="outline" onClick={darkToast}>
        Dark Mode
      </Button>
      <Button color="dark" variant="outline" onClick={customJsx}>
        Custom Jsx
      </Button>
      <Button color="warning" onClick={themToast}>
        Design Toast
      </Button>
      <Button
        color="dark"
        variant="outline"
        onClick={() =>
          toast.success("Always at the bottom.", {
            position: "bottom-center",
          })
        }
      >
        Different Position Toast
      </Button>
      <Button variant="soft" color="info" onClick={tailwindClass}>
        Tailwind Css
      </Button>
    </>
  );
};

export default ReactHotToast;
