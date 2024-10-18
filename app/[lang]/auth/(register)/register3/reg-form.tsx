"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { addUser } from "@/action/auth-action";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Checkbox } from "@/components/ui/checkbox";
import googleIcon from "@/public/images/auth/google.png";
import facebook from "@/public/images/auth/facebook.png";
import apple from "@/public/images/auth/apple.png";
import twitter from "@/public/images/auth/twitter.png";
import { SiteLogo } from "@/components/svg";
import { useMediaQuery } from "@/hooks/use-media-query";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Your email is invalid." }),
  password: z.string().min(4),
});
const RegForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const [passwordType, setPasswordType] = useState("password");
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");
  const togglePasswordType = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };
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
    startTransition(async () => {
      let response = await addUser(data);
      if (response?.status === "success") {
        toast.success(response?.message);
        reset();
        router.push("/");
      } else {
        toast.error(response?.message);
      }
    });
  };
  return (
    <div className="w-full">
      <Link href="/dashboard" className="inline-block">
        <SiteLogo className="h-10 w-10 2xl:w-14 2xl:h-14 text-primary" />
      </Link>
      <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900">
        Hey, Hello 👋
      </div>
      <div className="2xl:text-lg text-base text-default-600 mt-2 leading-6">
        Create account to start using DashTail
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 xl:mt-7">
        <div className="relative">
          <Input
            removeWrapper
            type="text"
            id="name"
            size={!isDesktop2xl ? "xl" : "lg"}
            placeholder=" "
            disabled={isPending}
            {...register("name")}
            className={cn("peer", {
              "border-destructive": errors.name,
            })}
          />
          <Label
            htmlFor="name"
            className="absolute text-base text-default-600  duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0]   bg-background  px-2 peer-focus:px-2
               peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 
               peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Full Name
          </Label>
        </div>
        {errors.name && (
          <div className=" text-destructive mt-2">{errors.name.message as string}</div>
        )}
        <div className="relative mt-4">
          <Input
            removeWrapper
            type="email"
            id="email"
            size={!isDesktop2xl ? "xl" : "lg"}
            placeholder=" "
            disabled={isPending}
            {...register("email")}
            className={cn("peer", {
              "border-destructive": errors.email,
            })}
          />
          <Label
            htmlFor="email"
            className="absolute text-base text-default-600  duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0]   bg-background  px-2 peer-focus:px-2
               peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 
               peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Email
          </Label>
        </div>
        {errors.email && (
          <div className=" text-destructive mt-2">{errors.email.message as string}</div>
        )}
        <div className="relative mt-4">
          <Input
            removeWrapper
            type={passwordType}
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
            Password
          </Label>
          <div
            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
            onClick={togglePasswordType}
          >
            {passwordType === "password" ? (
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

        <div className="mt-5 flex items-center gap-3 mb-8">
          <Checkbox id="terms" className="border-default-300" />
          <Label
            htmlFor="terms"
            className="text-base font-medium text-default-600"
          >
            You accept our Terms & Conditions
          </Label>
        </div>

        <Button
          className="w-full"
          disabled={isPending}
          size={!isDesktop2xl ? "lg" : "md"}
        >
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isPending ? "Registering..." : "Create an Account"}
        </Button>
      </form>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="rounded-full border-default-300 hover:bg-transparent"
        >
          <Image src={googleIcon} alt="google icon" className="w-5 h-5" priority={true} />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="rounded-full border-default-300 hover:bg-transparent"
        >
          <Image src={facebook} alt="google icon" className="w-5 h-5" priority={true} />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="rounded-full  border-default-300 hover:bg-transparent"
        >
          <Image src={apple} alt="google icon" className="w-5 h-5" priority={true} />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="rounded-full border-default-300 hover:bg-transparent"
        >
          <Image src={twitter} alt="google icon" className="w-5 h-5" priority={true} />
        </Button>
      </div>
      <div className="mt-5 2xl:mt-8 text-center text-base text-default-600">
        Already Registered?{" "}
        <Link href="/auth/login3" className="text-primary">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default RegForm;
