"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { SiteLogo } from "@/components/svg";
import { useMediaQuery } from "@/hooks/use-media-query";
const schema = z.object({
  password: z
    .string()
    .min(4, { message: "Your password must be at least 4 characters." }),
  confirmPassword: z
    .string()
    .min(4, { message: "Your password must be at least 4 characters." }),
});
const CreatePasswordForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const [newPasswordType, setNewPasswordType] = React.useState<boolean>(false);
  const [confirmPasswordType, setConfirmPasswordType] = React.useState<boolean>(false);
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all",
  });
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    startTransition(async () => {
      toast.success("reset successful");
      reset();
      router.push("/dashboard");
    });
  };
  return (
    <div className="w-full">
      <Link href="/dashboard" className="inline-block">
        <SiteLogo className="h-10 w-10 2xl:w-14 2xl:h-14 text-primary" />
      </Link>
      <div className="2xl:mt-8 mt-6 2xl:text-3xl lg:text-2xl text-xl font-bold text-default-900">
        Create New Password
      </div>
      <div className="2xl:text-lg text-base text-default-600 mt-2 leading-6">
        Enter your password to unlock the screen!
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 xl:mt-7">
        <div className="space-y-4">
          <div>
            <Label
              htmlFor="password"
              className="mb-2 font-medium text-default-600"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                disabled={isPending}
                {...register("password")}
                type={newPasswordType ? "text" : "password"}
                id="password"
                size={!isDesktop2xl ? "xl" : "lg"}
                className={cn("", {
                  "border-destructive": errors.password,
                })}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
                onClick={() => setNewPasswordType(!newPasswordType)}
              >
                {newPasswordType ? (
                  <Icon
                    icon="heroicons:eye"
                    className="w-5 h-5 text-default-400"
                  />
                ) : (
                  <Icon
                    icon="heroicons:eye-slash"
                    className="w-5 h-5 text-default-400"
                  />
                )}
              </div>
            </div>
            {errors.password && (
              <div className=" text-destructive mt-2">
                {errors.password.message as string}
              </div>
            )}
          </div>
          <div>
            <Label
              htmlFor="confirmPassword"
              className="mb-2 font-medium text-default-600"
            >
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                disabled={isPending}
                {...register("confirmPassword")}
                type={confirmPasswordType ? "text" : "password"}
                id="confirmPassword"
                className={cn("", {
                  "border-destructive": errors.confirmPassword,
                })}
                size={!isDesktop2xl ? "xl" : "lg"}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
                onClick={() => setConfirmPasswordType(!confirmPasswordType)}
              >
                {confirmPasswordType ? (
                  <Icon
                    icon="heroicons:eye"
                    className="w-5 h-5 text-default-400"
                  />
                ) : (
                  <Icon
                    icon="heroicons:eye-slash"
                    className="w-5 h-5 text-default-400"
                  />
                )}
              </div>
            </div>
            {errors.confirmPassword && (
              <div className=" text-destructive mt-2">
                {errors.confirmPassword.message as string}
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 flex  items-center gap-1.5 mt-5 ">
          <Checkbox
            size="sm"
            className="border-default-300 mt-[1px]"
            id="terms"
          />
          <Label
            htmlFor="terms"
            className="text-sm text-default-600 cursor-pointer whitespace-nowrap"
          >
            You accept our Terms & Conditions
          </Label>
        </div>
        <Button className="w-full mt-8" size="lg">
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isPending ? "Resetting..." : "Reset Password"}
        </Button>
      </form>
      <div className="mt-5 2xl:mt-8 text-center text-base text-default-600">
        Not now? Return{" "}
        <Link href="/auth/register5" className="text-primary">
          {" "}
          Sign In{" "}
        </Link>
      </div>
    </div>
  );
};

export default CreatePasswordForm;
