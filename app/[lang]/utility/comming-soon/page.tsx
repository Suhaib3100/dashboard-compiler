"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/public/images/logo/logo-2.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LightImage from "@/public/images/utility/comming-soon-light.png";
import DarkImage from "@/public/images/utility/comming-soon-dark.png";
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
          <Image src={logo} alt="logo" className="w-full h-full object-cover" priority={true} />
        </div>
        <Button asChild variant="outline" size="lg">
          <Link href="/dashboard">Contact Us</Link>
        </Button>
      </div>
      {/* main */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="container ">
          <div className="flex flex-col lg:flex-row  justify-between items-center gap-5 ">
            <div className="lg:max-w-[570px]">
              <div className="text-2xl font-medium text-default-900">
                Coming soon
              </div>
              <div className="mt-4 text-5xl 2xl:text-7xl font-semibold text-default-900">
                Get notified when we launch
              </div>
              <div className="mt-6 text-sm xl:text-base text-default-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
              <div className="relative mt-5 lg:mt-12">
                <Input
                  type="text"
                  placeholder="Enter your email"
                  className="h-12 lg:h-16 placeholder:text-base"
                />
                <Button className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 h-8 lg:h-11">
                  Notify me
                </Button>
              </div>
              <div className="mt-4 text-sm text-default-500">
                *Don’t worry we will not spam you :)
              </div>
            </div>

            <div className="mt-10 lg:mt-0 xl:pl-32">
              <Image
                src={theme === "dark" ? DarkImage : LightImage}
                alt="comming soon"
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="flex-none flex flex-col sm:flex-row  flex-wrap gap-4 p-10">
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
