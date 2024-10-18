"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar from "@/public/images/avatar/avatar-7.jpg";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SiteLogo } from "@/components/svg";
import { useMediaQuery } from "@/hooks/use-media-query";
const LockForm = () => {
  const [passwordType, setPasswordType] = useState("password");
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");
  const togglePasswordType = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <Link href="/dashboard" className="inline-block">
          <SiteLogo className="h-10 w-10 2xl:h-14 2xl:w-14 text-primary" />
        </Link>
      </div>
      <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900 text-center">
        Lock Screen
      </div>
      <div className="2xl:text-lg text-base text-default-600 mt-2 leading-6 text-center">
        Enter the information you entered while registering.
      </div>

      <div className="mt-6 flex justify-center">
        <Avatar className="h-[72px] w-[72px]">
          <AvatarImage src={avatar.src} alt="" />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
      </div>
      <div className="text-center mt-4 text-xl font-medium text-default-900">
        Karthikeya Marupthy
      </div>

      <form className="2xl:mt-7 mt-8">
        <div className="relative ">
          <Input
            removeWrapper
            type={passwordType}
            id="password"
            size={!isDesktop2xl ? "xl" : "lg"}
            placeholder=" "
            className="peer"
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
        <div className="mt-6">
          <Button className="w-full" size={!isDesktop2xl ? "lg" : "md"}>
            {" "}
            Sign In{" "}
          </Button>
        </div>
      </form>
      <div className="mt-8 text-center text-base font-medium text-default-600">
        Not you? Return{" "}
        <Link href="/auth/login3" className="text-primary">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default LockForm;
