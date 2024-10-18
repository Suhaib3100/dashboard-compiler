"use client"

import image1 from "@/public/images/all-img/blog-1.jpg"
import image2 from "@/public/images/all-img/blog-2.jpg"
import image3 from "@/public/images/all-img/blog-3.jpg"
import image4 from "@/public/images/all-img/blog-4.jpg"
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
const BlogCard = () => {
  const posts = [
    {
      id: 1,
      title: "10 Tips for Stunning Landscape Photography",
      name: "Erich Ahsan",
      like: "5.4",
      comments: "2.4",
      image: image1,
      link: "/",
      authLink: "/"
    },
    {
      id: 2,
      title: "Mastering Composition: The Key to Captivating Photos",
      name: "Jane Doe",
      like: "7.2",
      comments: "3.8",
      image: image2,
      link: "/",
      authLink: "/"
    },
    {
      id: 3,
      title: "Exploring Street Photography: Capturing Life in the Urban Jungle",
      name: "John Smith",
      like: "9.8",
      comments: "4.6",
      image: image3,
      link: "/",
      authLink: "/"
    },
    {
      id: 4,
      title: "Macro Photography: Revealing the Beauty of the Small World",
      name: "Emily Johnson",
      like: "3.5",
      comments: "1.9",
      image: image4,
      link: "/",
      authLink: "/"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-3.5 py-6 gap-6">
      {
        posts.map((item, index) => (
          <Link
            key={`post-${index}`}
            className="group"
            href={item.link}
          >
            <div className="h-[220px] lg:h-[292px] rounded-md before:rounded-md relative before:absolute before:top-0 before:left-0 before:w-full before:h-full group-hover:before:bg-default-900 group-hover:before:bg-opacity-30">
              <Image src={item.image} alt="image text" className="w-full h-full object-cover rounded-md" priority={true} />
              <span
                className="absolute bottom-2 left-3 text-base transition-all duration-300  text-primary-foreground opacity-0 invisible group-hover:opacity-100 group-hover:visible  group-hover:bottom-4  ">
                {item.title}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm font-light  text-default-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum laudantium eveniet dolor, cumque optio?</p>
            </div>

            <div className="flex mt-2">
              <div className="flex-1">
                <span className="text-sm font-medium text-default-500">by</span> {" "}
                <Link
                  href={item.authLink}
                  className="text-sm font-medium text-default-900 hover:text-primary"
                >
                  {item.name}
                </Link>
              </div>
              <div className="flex-none">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Icon icon="heroicons:hand-thumb-up-solid"
                      className="w-3.5 h-3.5 text-default-500" />
                    <span className="text-sm font-medium text-default-500">
                      {item.like}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon
                      icon="heroicons:envelope-solid"
                      className="w-3.5 h-3.5 text-default-500" />
                    <span className="text-sm font-medium text-default-500">
                      {item.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </Link>
        ))}
    </div>
  );
};

export default BlogCard;