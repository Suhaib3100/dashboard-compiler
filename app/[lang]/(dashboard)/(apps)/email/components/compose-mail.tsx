import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Minimize2, Minus, X } from "lucide-react";
import { useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createEmailAction } from "./_action";
import { toast } from "react-hot-toast";
const schema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  description: z.string().optional(),
  subject: z.string().optional(),
});
const ComposeMail = ({ onClose }: { onClose: () => void }) => {
  const [minimize, setMinimize] = useState<boolean>(false);
  const [maximize, setMaximize] = useState<boolean>(false);

  const { quillRef } = useQuill();
  const [isPending, startTransition] = React.useTransition();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: any) => {
    startTransition(async () => {
      data.category = "primary";
      data.date = new Date();
      let response = await createEmailAction(data);
      if (response?.status === "success") {
        toast.success(response?.message);
        reset();
        onClose();
      } else {
        toast.error(response?.message);
      }
    });
    onClose();
    reset();
  };

  const handleMaximize = () => {
    if (minimize) {
      setMinimize(false)
    }
    setMaximize(!maximize)
  }
  const handleMinimize = () => {
    if (maximize) {
      setMaximize(false)
    }
    setMinimize(!minimize)
  }

  return (
    <Card
      className={cn(
        "absolute bottom-0 ltr:right-2.5 rtl:left-2.5 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[650px] bg-background z-20",
        {
          "fixed  ltr:left-1/2 rtl:right-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 top-1/2 -translate-y-1/2 h-[calc(100vh-350px)]  lg:w-[800px] xl:w-[1000px] shadow-2xl":
            maximize,
        }
      )}
    >
      <CardHeader className="border-none p-0 block mb-0">
        <div className="py-3.5 px-6 bg-primary/10 rounded-t-md flex gap-3">
          <div className="text-sm font-medium text-default-900 flex-1">
            New Message
          </div>
          <button
            type="button"
            className="flex-none"
            onClick={handleMinimize}
          >
            <Minus className="h-5 w-5 text-default-500" />
          </button>
          <button
            type="button"
            className="flex-none hidden lg:block"
            onClick={handleMaximize}
          >
            <Minimize2 className="h-5 w-5 text-default-500" />
          </button>
          <button type="button" className="flex-none" onClick={onClose}>
            <X className="h-5 w-5 text-default-500" />
          </button>
        </div>
      </CardHeader>
      <CardContent
        className={cn("px-6", {
          hidden: minimize,
        })}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative h-11 border-b border-default-200 flex items-center ">
            <label
              htmlFor="recepients"
              className="text-sm text-default-500 cursor-text"
            >
              {true ? "To" : "Recepients"}
            </label>
            <input
              {...register("name")}
              type="text"
              id="recepients"
              className="w-full bg-background border-none focus:outline-none pl-2"
            />
          </div>
          <div className="mb-7">
            <input
              {...register("subject")}
              type="text"
              className="w-full bg-background  focus:outline-none h-11 border-b border-default-200 text-sm placeholder:text-default-500 text-default-600"
              placeholder="Subject"
            />
          </div>

          <div
            className="snow-editor border border-default-200 h-[250px]"
            ref={quillRef}
          >
          </div>

          <div className="mt-4">
            <Button size="sm" className=" min-w-[100px]">
              Send
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ComposeMail;
