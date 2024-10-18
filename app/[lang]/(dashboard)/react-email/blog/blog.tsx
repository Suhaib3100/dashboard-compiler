"use client";

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";


import blog1 from "@/public/images/all-img/blog-4.jpg"
import blog2 from "@/public/images/all-img/blog-1.jpg"
import blog3 from "@/public/images/all-img/blog-2.jpg"
import blog4 from "@/public/images/all-img/blog-3.jpg"
import blog5 from "@/public/images/email-template/img-13.jpg"
import blog6 from "@/public/images/email-template/img-14.jpg"

const Blog = () => {
  return (
    <Html>
      <Head />
      <Preview>Blog</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section>
              <Row>
                <Column className="text-center pt-10 pb-3">
                  <Link href="/" className="text-2xl font-medium text-black">BLOGGY</Link>
                </Column>
              </Row>
              <Row>
                <Column className="flex justify-center items-center gap-4">
                  <Link href="/" className="text-sm font-medium text-gray-500 mt-1.5">Home</Link>
                  <Link href="/" className="text-sm font-medium text-gray-500 mt-1.5">About</Link>
                  <Link href="/" className="text-sm font-medium text-gray-500 mt-1.5">Blog</Link>
                  <Link href="/" className="text-sm font-medium text-gray-500 mt-1.5">Contact</Link>
                </Column>
              </Row>
            </Section>
            <Section>
              <Row>
                <Column className="mt-10 flex flex-col items-center relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-900/50 before:z-10 py-10 pb-16">
                  <Img src={blog1.src} alt="email template" className="absolute top-0 left-0 w-full h-full" />
                  <Text className="relative z-30  text-center text-3xl font-bold text-white capitalize px-10">Wonders of Wildlife Blog</Text>
                  <Text className="relative z-30 text-center text-base text-white  px-10 my-0">
                    Codeshaper is a creative agency that helps people to bring their business online.
                    we also offer various digital marketing, web design, and development services.</Text>
                  <Button className="relative z-30 text-center border border-violet-500  bg-violet-500 text-white font-medium py-2.5 px-8 mt-7 rounded-full" href="/">
                    Read More
                  </Button>
                </Column>
              </Row>
            </Section>
            <Section>
              <Row>
                <Column className="pt-10 pb-5 ">
                  <Text className="text-center text-2xl uppercase font-bold text-gray-900">Our Blog</Text>
                  <Text className="px-10 text-base text-gray-500 text-center">
                    The works that don't compromise with quality and standard. We're creating awesome projects
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column className="px-5 pb-10 pt-6">
                  <Row>
                    <Column className="w-1/2 pr-2 pb-4 mb-5">
                      <Img src={blog1.src} alt="email template" className="w-full h-[200px] object-cover " />
                      <Text className="my-0 text-sm font-medium text-slate-400 mt-4 mb-1">
                        POSTED ON FEB 18, 2019
                      </Text>
                      <Text className=" my-0 text-sm font-medium text-gray-900">
                        Wildlife Gastronomic Adventures
                      </Text>
                      <Text className="mt-2 text-sm text-gray-500">
                        The works that don't compromise with quality and standard.
                      </Text>
                      <Button className="relative z-30 text-center border border-violet-500  bg-violet-500 text-white font-medium py-2.5 px-8  rounded-full" href="/">
                        Read More
                      </Button>
                    </Column>
                    <Column className="w-1/2 pl-2 pb-4 mb-5">
                      <Img src={blog2.src} alt="email template" className="w-full h-[200px] object-cover " />
                      <Text className="my-0 text-sm font-medium text-slate-400 mt-4 mb-1">
                        POSTED ON FEB 18, 2019
                      </Text>
                      <Text className=" my-0 text-sm font-medium text-gray-900">
                        Wildlife Gastronomic Adventures
                      </Text>
                      <Text className="mt-2 text-sm text-gray-500">
                        The works that don't compromise with quality and standard.
                      </Text>
                      <Button className="relative z-30 text-center border border-violet-500  bg-violet-500 text-white font-medium py-2.5 px-8  rounded-full" href="/">
                        Read More
                      </Button>
                    </Column>
                  </Row>
                  <Row>
                    <Column className="w-1/2 pr-2 pb-4 mb-5 pt-5">
                      <Img src={blog3.src} alt="email template" className="w-full h-[200px] object-cover " />
                      <Text className="my-0 text-sm font-medium text-slate-400 mt-4 mb-1">
                        POSTED ON FEB 18, 2019
                      </Text>
                      <Text className=" my-0 text-sm font-medium text-gray-900">
                        Wildlife Gastronomic Adventures
                      </Text>
                      <Text className="mt-2 text-sm text-gray-500">
                        The works that don't compromise with quality and standard.
                      </Text>
                      <Button className="relative z-30 text-center border border-violet-500  bg-violet-500 text-white font-medium py-2.5 px-8  rounded-full" href="/">
                        Read More
                      </Button>
                    </Column>
                    <Column className="w-1/2 pl-2 pb-4 mb- pt-5">
                      <Img src={blog4.src} alt="email template" className="w-full h-[200px] object-cover " />
                      <Text className="my-0 text-sm font-medium text-slate-400 mt-4 mb-1">
                        POSTED ON FEB 18, 2019
                      </Text>
                      <Text className=" my-0 text-sm font-medium text-gray-900">
                        Wildlife Gastronomic Adventures
                      </Text>
                      <Text className="mt-2 text-sm text-gray-500">
                        The works that don't compromise with quality and standard.
                      </Text>
                      <Button className="relative z-30 text-center border border-violet-500  bg-violet-500 text-white font-medium py-2.5 px-8  rounded-full" href="/">
                        Read More
                      </Button>
                    </Column>
                  </Row>
                  <Row>
                    <Column className="w-1/2 pr-2 pb-4 mb-5 pt-5">
                      <Img src={blog5.src} alt="email template" className="w-full h-[200px] object-cover " />
                      <Text className="my-0 text-sm font-medium text-slate-400 mt-4 mb-1">
                        POSTED ON FEB 18, 2019
                      </Text>
                      <Text className=" my-0 text-sm font-medium text-gray-900">
                        Wildlife Gastronomic Adventures
                      </Text>
                      <Text className="mt-2 text-sm text-gray-500">
                        The works that don't compromise with quality and standard.
                      </Text>
                      <Button className="relative z-30 text-center border border-violet-500  bg-violet-500 text-white font-medium py-2.5 px-8  rounded-full" href="/">
                        Read More
                      </Button>
                    </Column>
                    <Column className="w-1/2 pl-2 pb-4 mb- pt-5">
                      <Img src={blog6.src} alt="email template" className="w-full h-[200px] object-cover " />
                      <Text className="my-0 text-sm font-medium text-slate-400 mt-4 mb-1">
                        POSTED ON FEB 18, 2019
                      </Text>
                      <Text className=" my-0 text-sm font-medium text-gray-900">
                        Wildlife Gastronomic Adventures
                      </Text>
                      <Text className="mt-2 text-sm text-gray-500">
                        The works that don't compromise with quality and standard.
                      </Text>
                      <Button className="relative z-30 text-center border border-violet-500  bg-violet-500 text-white font-medium py-2.5 px-8  rounded-full" href="/">
                        Read More
                      </Button>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Section>
            <Section>
              <Row>
                <Column className="bg-gray-900 text-white pt-12 px-10">
                  <Row>
                    <Column className="pr-2 w-1/3">
                      <Text className="text-xl font-medium">About</Text>
                      <Text className="text-sm text-slate-400">Codeshaper is a creative agency that helps people to bring their business online.</Text>
                    </Column>
                    <Column className="px-2 w-1/3">
                      <Text className="text-xl font-medium">Contact Info</Text>
                      <Text className="text-sm text-slate-400">New DOHS, Mohakhali,<br />
                        Dhaka - 1206, Bangladesh</Text>
                    </Column>
                    <Column className="pl-2 w-1/3">
                      <Text className="text-xl font-medium">Pages</Text>
                      <Link href="/" className="text-sm font-medium text-slate-400 mt-1.5 block">Home</Link>
                      <Link href="/" className="text-sm font-medium text-slate-400 mt-1.5 block">Services</Link>
                      <Link href="/" className="text-sm font-medium text-slate-400 mt-1.5 block">Shop</Link>
                      <Link href="/" className="text-sm font-medium text-slate-400 mt-1.5 block">Contact</Link>
                    </Column>
                  </Row>
                  <Row>
                    <Column className="pt-10 pb-2">
                      <Text className="text-xs text-slate-300">COPYRIGHT &copy; 2024 DashTail All rights <br /> Reserved</Text>
                    </Column>
                    <Column className="pt-10 pb-2">
                      <Link href="/" className="text-xs font-medium  text-slate-300">Unsubscribe</Link>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default Blog;

const main: React.CSSProperties = {
  backgroundColor: "#f6f9fc",

};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
};

