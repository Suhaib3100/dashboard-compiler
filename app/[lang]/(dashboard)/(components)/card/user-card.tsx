import { Card, CardContent } from "@/components/ui/card";

// images
import img1 from "@/public/images/all-img/colored-img-1.png"
import img2 from "@/public/images/all-img/colored-img-2.png"
import author1 from "@/public/images/all-img/author-1.png"
import author2 from "@/public/images/all-img/author-2.png"

import fbIcon from "@/public/images/social/facebook-1.png"
import linkedinIcon from "@/public/images/social/linkedin-1.png"
import redditIcon from "@/public/images/social/reddit-circle.png"
import pinterestIcon from "@/public/images/social/pinterest-circle.png"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const UserCard = () => {
  const socials = [
    {
      icon: fbIcon,
      link: "#",
    },
    {
      icon: linkedinIcon,
      link: "#",
    },
    {
      icon: redditIcon,
      link: "#",
    },
    {
      icon: pinterestIcon,
      link: "#",
    }
  ];
  const socialsInfo = [
    {
      title: "Followers",
      value: "16.5k"
    },
    {
      title: "Following",
      value: "11.3k"
    },
    {
      title: "Total Post",
      value: "1.4k",
    }
  ]
  return (
    <div className="p-5 space-y-5 bg-background rounded-md shadow-sm">

      <div className="text-base font-medium text-default-900 mb-1 py-2">User Card</div>

      {/* user card */}
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        <Card>
          <CardContent className="p-0">
            <div>
              <Image src={img2} alt="User Card Image" className="w-full h-full object-cover" priority={true} />
            </div>

            <div className="flex justify-center -mt-7">
              <div className="flex-none w-12 h-12 rounded-full">
                <Image src={author2} alt="author image" className="w-full h-full object-cover rounded-full" priority={true} />
              </div>
            </div>

            <h3 className="text-base font-semibold text-default-900 text-center mt-3">Jenny Jennyfer</h3>
            <h5 className="text-sm text-default-600 text-center mt-1">Jr. UX/UI Designer</h5>
            <div className="mt-4 flex justify-center gap-3">
              {
                socials.map((item, index) => (
                  <Link
                    href={item.link}
                    key={`user-card-${index}`}>
                    <Image
                      src={item.icon}
                      alt="Social Icon"
                      className="w-5 h-5"
                      priority={true}
                    />
                  </Link>
                ))
              }
            </div>
            <div className="border border-dashed border-default-200 my-5"></div>
            <div className="mt-4 flex justify-between px-4">
              {
                socialsInfo.map((item, index) => (
                  <div key={`user-card-${index}`} className="flex flex-col items-center text-center ">
                    <h3 className="text-xs text-default-600 mb-0.5">{item.title}</h3>
                    <p className="text-base font-semibold text-default-900">{item.value}</p>
                  </div>
                ))
              }
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-0">
            <div>
              <Image src={img1} alt="User Card Image" className="w-full h-full object-cover" priority={true} />
            </div>

            <div className="flex gap-2.5 px-4 pt-4">
              <div className="flex-none w-12 h-12 rounded-full">
                <Image src={author1} alt="author image" className="w-full h-full object-cover rounded-full" priority={true} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-default-900">Jenny Jennyfer</h3>
                <h5 className="text-sm text-default-600">Jr. UX/UI Designer</h5>
              </div>
            </div>
            <div className="mt-3 flex justify-between px-4">
              {
                socialsInfo.map((item, index) => (
                  <div key={`user-card-${index}`} className="flex flex-col items-center text-center ">
                    <h3 className="text-xs text-default-600 mb-0.5">{item.title}</h3>
                    <p className="text-base font-semibold text-default-900">{item.value}</p>
                  </div>
                ))
              }
            </div>
            <div className="border border-dashed border-default-200 my-5"></div>
            <div className="flex justify-center gap-3 pb-2.5">
              <Button>Message</Button>
              <Button color="info">Follow</Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default UserCard;