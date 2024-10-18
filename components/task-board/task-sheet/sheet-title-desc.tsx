"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@iconify/react";
import { updateTaskAction } from "@/action/project-action";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { type Task as TaskType } from "@/app/api/tasks/data";
const schema = z.object({
  title: z.string().min(1, {
    message: "What is your task title? ???",
  }),
  desc: z.string().optional(),
});
const SheetTitleDesc = ({ task, taskId }: {
  task: TaskType;
  taskId: TaskType["id"];
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 3000);
  };

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data: any) => {
    const newData = {
      ...task,
      title: data.title,
      desc: data.desc,
    };
    try {
      await updateTaskAction(taskId, newData);

    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (task) {
      setValue("title", task.title);
      setValue("desc", task.desc || "");
    }
  }, [task, setValue]);
  return (
    <form
      className="py-5 px-6 pb-8 border-b border-default-200"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center gap-1 mb-2">
        <Checkbox className="w-4 h-4" color="secondary" />

        <input
          type="text"
          {...register("title")}
          className="h-7 w-full border border-transparent text-sm font-medium text-default-900 rounded-sm focus:border focus:border-default-200 focus:outline-none px-1 focus:bg-default-50 bg-card"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {errors.title && (
        <div className=" text-destructive">{errors.title.message as string}</div>
      )}

      <div className="flex gap-1 relative">
        <div className="mt-1">
          <Icon
            icon="heroicons:information-circle"
            className="w-5 h-5 text-default-900"
          />
        </div>
        <textarea
          className="w-full h-16 border-none border border-transparent focus:border-default-200 focus:outline-none p-1 text-sm text-default-700 peer bg-card focus:bg-default-50"
          placeholder="Add Task Descriptions"
          rows={1}
          {...register("desc")}
          onInput={handleFocus}
          onBlur={handleBlur}
          style={{ resize: "none", overflowY: "hidden" }}
        />
      </div>
      <div className="flex justify-end">
        {isFocused && (
          <Button className=" text-xs h-6 py-0" type="submit">
            Save
          </Button>
        )}
      </div>
    </form>
  );
};

export default SheetTitleDesc;
