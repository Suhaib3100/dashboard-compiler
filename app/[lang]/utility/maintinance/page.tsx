"use client";
import { Button } from "@/components/ui/button";
import logo from "@/public/images/logo/logo-2.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LightImage from "@/public/images/utility/construction-light.png";
import DarkImage from "@/public/images/utility/construction-dark.png";
import { useTheme } from "next-themes";
const CommingSoonPage = () => {
  const { theme } = useTheme();
  const socials = [
    {
      link: "/",
      icon: <Twitter />,
    },
    {
      link: "/",
      icon: <Facebook />,
    },
    {
      link: "/",
      icon: <Linkedin />,
    },
    {
      link: "/",
      icon: <Instagram />,
    },
  ];
  const menu = [
    {
      label: "Privacy Policy",
      link: "/",
    },
    {
      label: "FAQ",
      link: "/",
    },
    {
      label: "Email Us",
      link: "/",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      {/* header */}
      <div className="flex-none p-10 flex flex-wrap justify-between gap-4">
        <div className="w-[170px] h-[38px]">
          <Image src={logo} alt="logo" className="w-full h-full object-cover" />
        </div>
        <Button asChild variant="outline" size="lg">
          <Link href="/dashboard">Contact Us</Link>
        </Button>
      </div>
      {/* main */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="container flex flex-col items-center">
          <div className="w-full h-full lg:w-[700px] lg:h-[432px]">
            <Image
              src={theme === "dark" ? DarkImage : LightImage}
              alt="construction"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-12 lg:mt-20 text-xl md:text-3xl lg:text-5xl font-semibold text-default-900 text-center">
            We are under maintenance.
          </div>
          <div className="text-sm md:text-base lg:text-xl text-default-600 mt-4 text-center">
            We’re making the system more awesome.
            <br /> We’ll be back shortly.
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="flex-none flex flex-col items-center sm:flex-row  flex-wrap gap-4 p-10">
        <div className="flex flex-wrap items-center gap-4 flex-1 ">
          {socials.map((item, index) => (
            <Button
              key={`social-icon-${index}`}
              size="icon"
              variant="outline"
              className="rounded-full"
              asChild
            >
              <Link href={item.link}> {item.icon} </Link>
            </Button>
          ))}
        </div>
        <ul className="flex-none  flex flex-wrap gap-6">
          {menu.map((item, index) => (
            <li key={`nav-item-${index}`}>
              <Link
                href={item.link}
                className="text-base font-medium text-default-600 hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommingSoonPage;
