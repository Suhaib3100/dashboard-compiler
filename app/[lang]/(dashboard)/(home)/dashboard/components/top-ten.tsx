"use client"
import { Eye } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardDropdown from "@/components/dashboard-dropdown";
import facebook from "@/public/images/social/facebook.png"
import instagram from "@/public/images/social/instagram.png"
import dribble from "@/public/images/social/dribble.png"
import linkedin from "@/public/images/social/linkedin.png"
import github from "@/public/images/social/github.png"
import behance from "@/public/images/social/behance.png"
import twitter from "@/public/images/social/twitter.png"
import pinterest from "@/public/images/social/pinterest.png"
import whatsapp from "@/public/images/social/whatsapp.png"
import reddit from "@/public/images/social/reddit.png"
const socials = [
  {
    id: 1,
    name: "facebook",
    link: "www.facebook.com",
    total: "4963",
    image: facebook
  },
  {
    id: 2,
    name: "Instagram",
    link: "www.instagram.com",
    total: "2963",
    image: instagram
  },
  {
    id: 3,
    name: "Dribble",
    link: "www.dribble.com",
    total: "1963",
    image: dribble
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "www.linkedin.com",
    total: "963",
    image: linkedin
  },
  {
    id: 5,
    name: "GitHub",
    link: "www.github.com",
    total: "663",
    image: github
  },
  {
    id: 6,
    name: "Behance",
    link: "www.behance.com",
    total: "363",
    image: behance
  },
  {
    id: 7,
    name: "Twitter",
    link: "www.twitter.com",
    total: "333",
    image: twitter
  },
  {
    id: 8,
    name: "Pinterest",
    link: "www.pinterest.com",
    total: "293",
    image: pinterest
  },
  {
    id: 9,
    name: "WhatsApp",
    link: "www.whatsapp.com",
    total: "213",
    image: whatsapp
  },
  {
    id: 10,
    name: "Reddit",
    link: "www.reddit.com",
    total: "113",
    image: reddit
  }
];
const TopTen = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between border-none pb-0">
        <CardTitle> Top 10 Referrals </CardTitle>
        <DashboardDropdown />
      </CardHeader>
      <CardContent className="px-0">
        <div>
          {
            socials.map((item, index) => (
              <div className="flex flex-wrap  gap-2 hover:bg-default-50 py-[11px] px-4" key={`social-item-${index}`}>
                <div className="flex-1 flex items-center gap-3">
                  <div className="w-8 h-8 md:h-10 md:w-10">
                    <Image src={item.image} alt={item.name} className="w-full h-full object-cover" priority={true} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-default-600">{item.name}</div>
                    <div className="text-xs text-default-500"> {item.link}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="text-base font-medium text-default-600"> {item.total}</div>
                  <div className="h-5 w-5 rounded-full bg-primary bg-opacity-10  justify-center items-center hidden md:flex">
                    <Eye className="w-2.5 h-2.5 text-primary" />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default TopTen;