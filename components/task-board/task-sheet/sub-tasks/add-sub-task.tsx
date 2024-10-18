"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { cn, formatDate } from "@/lib/utils";
import { toast } from "react-hot-toast";
import { addSubTaskAction } from "@/action/project-action";
const schema = z.object({
  title: z.string().min(2, { message: "title lagbe re vai ." }),
});
import { type Task as TaskType } from "@/app/api/tasks/data";
const AddSubTask = ({ taskId }: { taskId: TaskType["id"] }) => {
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
    data.assignDate = formatDate(new Date());
    data.completed = false;
    data.taskId = taskId;
    var result;

    startTransition(async () => {
      result = await addSubTaskAction(data);
      toast.success("Successfully added");
    });

    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative pr-1.5">
      <Label
        htmlFor="add-subtask"
        className="p-0 m-0 absolute top-1/2 -translate-y-1/2 left-6 z-10 cursor-pointer"
      >
        <Plus className="w-5 h-5 text-default-500 " />
      </Label>
      <Input
        id="add-subtask"
        {...register("title")}
        className={cn(
          "h-[52px] rounded-none border-b border-default-200 pl-12 text-sm font-medium text-default-600 focus:shadow-sm focus:drop-shadow-sm focus:inset-4 focus:border-default-300",
          {
            "border-destructive focus:border-destructive": errors.title,
          }
        )}
        placeholder="Add a new subtask..."
      />
    </form>
  );
};

export default AddSubTask;
