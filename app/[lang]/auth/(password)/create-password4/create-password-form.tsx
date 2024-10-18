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
import { useMediaQuery } from "@/hooks/use-media-query";
import { SiteLogo } from "@/components/svg";
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
        <SiteLogo className="h-10 w-10 2xl:h-14 2xl:w-14 text-primary" />
      </Link>
      <div className="2xl:mt-8 mt-6 2xl:text-3xl lg:text-2xl text-xl font-bold text-default-900">
        Create New Password
      </div>
      <div className="2xl:text-lg text-base text-default-600 mt-2 leading-6">
        Enter your password to unlock the screen!
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="2xl:mt-7 mt-8">
        <div className="relative mt-4">
          <Input
            removeWrapper
            type={newPasswordType ? "text" : "password"}
            id="password"
            size={!isDesktop2xl ? "xl" : "lg"}
            placeholder=" "
            disabled={isPending}
            {...register("password")}
            className={cn("peer", {
              "border-destructive": errors.password,
            })}
          />
          <Label
            htmlFor="password"
            className="absolute text-base text-default-600  duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0]   bg-background  px-2 peer-focus:px-2
               peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 
               peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            New Password
          </Label>
          <div
            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
            onClick={() => setNewPasswordType(!newPasswordType)}
          >
            {newPasswordType ? (
              <Icon icon="heroicons:eye" className="w-5 h-5 text-default-400" />
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

        <div className="relative mt-4">
          <Input
            removeWrapper
            type={confirmPasswordType ? "text" : "password"}
            id="confirmPassword"
            size={!isDesktop2xl ? "xl" : "lg"}
            placeholder=" "
            disabled={isPending}
            {...register("confirmPassword")}
            className={cn("peer", {
              "border-destructive": errors.confirmPassword,
            })}
          />
          <Label
            htmlFor="confirmPassword"
            className="absolute text-base text-default-600  duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0]   bg-background  px-2 peer-focus:px-2
               peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 
               peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Confirm Password
          </Label>
          <div
            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
            onClick={() => setConfirmPasswordType(!confirmPasswordType)}
          >
            {confirmPasswordType ? (
              <Icon icon="heroicons:eye" className="w-5 h-5 text-default-400" />
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
        <div className="mt-5 flex  items-center gap-1.5 ">
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

        <Button className="w-full mt-8" size={!isDesktop2xl ? "lg" : "md"}>
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isPending ? "Resetting..." : "Reset Password"}
        </Button>
      </form>
      <div className="mt-6 text-center text-base text-default-600">
        Not now? Return{" "}
        <Link href="/auth/login4" className="text-primary">
          {" "}
          Sign In{" "}
        </Link>
      </div>
    </div>
  );
};

export default CreatePasswordForm;
