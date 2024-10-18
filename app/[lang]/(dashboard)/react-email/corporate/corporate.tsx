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
import * as React from "react";
import bgImage from "@/public/images/email-template/img-6.jpg"
import meetingImage from "@/public/images/email-template/img-7.jpg"
import p1 from "@/public/images/email-template/img-8.jpg"
import p2 from "@/public/images/email-template/img-9.jpg"
import p3 from "@/public/images/email-template/img-10.jpg"
import p4 from "@/public/images/email-template/img-11.jpg"
const Corporate = () => {
  return (
    <Html>
      <Head />
      <Preview>Reset your password</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section>
              <Row>
                <Column className="pl-8 py-4">
                  <Link href="/" className="text-2xl font-medium text-black">CODESHAPER</Link>
                </Column>
                <Column className="flex justify-end items-center gap-4 py-4 pr-8">
                  <Link href="/" className="text-sm font-medium text-gray-500 mt-1.5">Home</Link>
                  <Link href="/" className="text-sm font-medium text-gray-500 mt-1.5">Services</Link>
                  <Link href="/" className="text-sm font-medium text-gray-500 mt-1.5">Shop</Link>
                  <Link href="/" className="text-sm font-medium text-gray-500 mt-1.5">Blog</Link>
                  <Link href="/" className="text-sm font-medium text-gray-500 mt-1.5">Contact</Link>
                </Column>
              </Row>
            </Section>
            <Section>
              <Row>
                <Column className="flex flex-col items-center relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-900/60 before:z-10 py-10 pb-16">
                  <Img src={bgImage.src} alt="email template" className="absolute top-0 left-0 w-full h-full" />
                  <Text className="relative z-30  text-center text-3xl font-bold text-white capitalize px-10">Grow your online business</Text>
                  <Text className="relative z-30 text-center text-base text-white  px-10 my-0">
                    Codeshaper is a creative agency that helps people to bring their business online.
                    we also offer various digital marketing, web design, and development services.</Text>
                  <Button className="relative z-30 text-center border  text-white border-white font-medium py-2.5 px-8 mt-7 rounded-full" href="/">
                    CONTACT US
                  </Button>
                </Column>
              </Row>
              <Row>
                <Column className="pt-10 pb-5">
                  <Text className="text-center text-2xl uppercase font-bold text-gray-900">Our Services</Text>
                  <Text className="px-10 text-base text-gray-500 text-center">
                    The works that don't compromise with quality and standard. We're creating awesome projects
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column className="px-4 pb-10">
                  <Row>
                    <Column className="text-center bg-slate-50 w-1/3">
                      <Text className="text-lg font-bold text-gray-900">Design</Text>
                      <Text className="text-sm text-gray-500 px-1">
                        Creating engaging websites to enhance online presence effectively.
                      </Text>
                    </Column>
                    <Column className="text-center bg-slate-100 w-1/3">
                      <Text className="text-lg font-bold text-gray-900">Development</Text>
                      <Text className="text-sm text-gray-500 px-1">
                        Creating engaging websites to enhance online presence effectively.</Text>
                    </Column>
                    <Column className="text-center bg-slate-50 w-1/3 ">
                      <Text className="text-lg font-bold text-gray-900">Marketting</Text>
                      <Text className="text-sm text-gray-500 px-1">
                        Creating engaging websites to enhance online presence effectively.
                      </Text>

                    </Column>
                  </Row>
                </Column>
              </Row>
            </Section>
            <Section>
              <Row>
                <Column className="bg-gray-50 py-10 px-5">
                  <Row>
                    <Column className="w-1/2 pr-10">
                      <Img src={meetingImage.src} alt="email template" className="w-full h-[230px] object-cover" />
                    </Column>
                    <Column className="w-1/2">
                      <Text className="text-xl uppercase font-bold text-gray-900 mt-0">Discussion</Text>
                      <Text className="text-sm texty-gray-500">Codeshaper is a creative agency that helps people to bring their business online.
                        we also offer  web  development services.</Text>
                      <Button className=" border border-gray-900 font-medium py-2.5 px-8  rounded-full mt-2" href="/">
                        Read More
                      </Button>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Section>
            <Section>
              <Row>
                <Column className="pt-10 pb-5 ">
                  <Text className="text-center text-2xl uppercase font-bold text-gray-900">Our Projects</Text>
                  <Text className="px-10 text-base text-gray-500 text-center">
                    The works that don't compromise with quality and standard. We're creating awesome projects
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column className="px-5 pb-10 pt-6">
                  <Row>
                    <Column className="w-1/2 pr-2 pb-4">
                      <Img src={p1.src} alt="email template" className="w-full h-[152px] object-cover" />
                    </Column>
                    <Column className="w-1/2 pl-2 pb-4">
                      <Img src={p2.src} alt="email template" className="w-full h-[152px] object-cover" />
                    </Column>
                  </Row>
                  <Row>
                    <Column className="w-1/2 pr-2">
                      <Img src={p3.src} alt="email template" className="w-full h-[152px] object-cover" />
                    </Column>
                    <Column className="w-1/2 pl-2">
                      <Img src={p4.src} alt="email template" className="w-full h-[152px] object-cover" />
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Section>
            <Section>
              <Row>
                <Column className="bg-gray-50 text-gray-900 py-10 px-10 mt-4 flex flex-col items-center">
                  <Text className="text-2xl font-medium uppercase text-center ">Build your website</Text>
                  <Text className="text-base text-center mt-0">Codeshaper is a creative agency that helps people to bring their business online.
                    we also offer various digital marketing, web design, and development services.</Text>
                  <Button className=" border border-gray-900 text-gray-900 font-medium py-2.5 px-8  rounded-full mt-3" href="/">
                    Get Started
                  </Button>
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


export default Corporate;

const main: React.CSSProperties = {
  backgroundColor: "#f6f9fc",

};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
};

