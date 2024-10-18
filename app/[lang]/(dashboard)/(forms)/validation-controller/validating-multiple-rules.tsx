"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";
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
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  email: z.string().email({
    message: "Email is not valid.",
  }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters.",
    })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "Password must contain at least one number",
    })
    .refine((password) => /[^A-Za-z0-9]/.test(password), {
      message: "Password must contain at least one special character",
    }),
    confirmPassword: z.string(),

}).refine((data) => data.password === data.confirmPassword, {
  message: "Password and Confirm password didn't match.",
  path: ["confirmPassword"],
});;

const ValidatingMultipleRules = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Username"
                    {...field}
                    className={cn("", {
                      "border-destructive focus:border-destructive":
                        form.formState.errors.username,
                    })}
                  />
                </FormControl>
                <FormMessage className="bg-destructive/90 text-primary-foreground text-[10px] inline-flex justify-center items-center font-base h-[22px] px-2 rounded-sm " />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    className={cn("", {
                      "border-destructive focus:border-destructive":
                        form.formState.errors.email,
                    })}
                  />
                </FormControl>
                <FormMessage className="bg-destructive/90 text-primary-foreground text-[10px] inline-flex justify-center items-center font-base h-[22px] px-2 rounded-sm " />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    {...field}
                    className={cn("", {
                      "border-destructive focus:border-destructive":
                        form.formState.errors.password,
                    })}
                  />
                </FormControl>
                <FormMessage className="bg-destructive/90 text-primary-foreground text-[10px] inline-flex justify-center items-center font-base h-[22px] px-2 rounded-sm " />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter confirm password"
                    {...field}
                    className={cn("", {
                      "border-destructive focus:border-destructive":
                        form.formState.errors.confirmPassword,
                    })}
                  />
                </FormControl>
                <FormMessage className="bg-destructive/90 text-primary-foreground text-[10px] inline-flex justify-center items-center font-base h-[22px] px-2 rounded-sm " />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-4 flex ltr:justify-end rtl:justify-start">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default ValidatingMultipleRules;
