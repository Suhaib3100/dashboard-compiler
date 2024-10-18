"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const ValidateInputWithIcon = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-default-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 text-default-950">Username</FormLabel>
              <FormControl>
                <>
                  <Input
                    placeholder="DashTail"
                    {...field}
                    className={cn("", {
                      "border-destructive focus:border-destructive":
                        form.formState.errors.username,
                    })}
                  />
                </>
              </FormControl>
              <div className="inline-flex items-center gap-1 bg-destructive px-2 text-primary-foreground rounded-md">
                {form.formState.errors.username && (
                  <Icon icon="material-symbols:info-outline" />
                )}
                <FormMessage tooltip className="px-0" />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ValidateInputWithIcon;
