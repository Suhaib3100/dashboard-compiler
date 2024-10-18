"use client"
import Image from "next/image";
import RegForm from "./reg-form";
import auth3Light from "@/public/images/auth/auth3-light.png"
import auth3Dark from "@/public/images/auth/auth3-dark.png"
const RegisterPage = () => {
  return (
    <div className="loginwrapper  flex justify-center items-center relative overflow-hidden">
      <Image
        src={auth3Dark}
        alt="background image"
        className="absolute top-0 left-0 w-full h-full light:hidden" />
      <Image
        src={auth3Light}
        alt="background image"
        className="absolute top-0 left-0 w-full h-full dark:hidden" />
      <div className="w-full bg-card   max-w-xl  rounded-xl relative z-10 2xl:p-16 xl:p-12 p-10 m-4 ">
        <RegForm />
      </div>
    </div>
  );
};

export default RegisterPage;