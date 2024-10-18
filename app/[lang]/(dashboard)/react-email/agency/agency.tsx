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
import p1 from "@/public/images/email-template/img-8.jpg"
import p2 from "@/public/images/email-template/img-9.jpg"
import p3 from "@/public/images/email-template/img-10.jpg"
import p4 from "@/public/images/email-template/img-11.jpg"
const Agency = () => {
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
                  <Link href="/" className="text-2xl font-medium text-black">Agency</Link>
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
                    <Column className="w-1/2 pr-2 pb-4 mb-5">
                      <Img src={p1.src} alt="email template" className="w-full h-[152px] object-cover" />
                      <Text className="my-0 text-center font-medium text-gray-900 mt-4">VirtuTech Solutions</Text>
                      <Text className="my-0 text-center  text-gray-500">
                        Tech Solutions for Digital
                      </Text>
                    </Column>
                    <Column className="w-1/2 pl-2 pb-4 mb-5">
                      <Img src={p2.src} alt="email template" className="w-full h-[152px] object-cover" />
                      <Text className="my-0 text-center font-medium text-gray-900 mt-4">VirtuTech Solutions</Text>
                      <Text className="my-0 text-center  text-gray-500">
                        Tech Solutions for Digital
                      </Text>
                    </Column>
                  </Row>
                  <Row>
                    <Column className="w-1/2 pr-2 ">
                      <Img src={p3.src} alt="email template" className="w-full h-[152px] object-cover" />
                      <Text className="my-0 text-center font-medium text-gray-900 mt-4">VirtuTech Solutions</Text>
                      <Text className="my-0 text-center  text-gray-500">
                        Tech Solutions for Digital
                      </Text>
                    </Column>
                    <Column className="w-1/2 pl-2">
                      <Img src={p4.src} alt="email template" className="w-full h-[152px] object-cover" />
                      <Text className="my-0 text-center font-medium text-gray-900 mt-4">VirtuTech Solutions</Text>
                      <Text className="my-0 text-center  text-gray-500">
                        Tech Solutions for Digital
                      </Text>
                    </Column>
                  </Row>
                  <Row>
                    <Column className="w-1/2 pr-2 pb-4 pt-5">
                      <Img src={p1.src} alt="email template" className="w-full h-[152px] object-cover" />
                      <Text className="my-0 text-center font-medium text-gray-900 mt-4">VirtuTech Solutions</Text>
                      <Text className="my-0 text-center  text-gray-500">
                        Tech Solutions for Digital
                      </Text>
                    </Column>
                    <Column className="w-1/2 pl-2 pb-4 pt-5">
                      <Img src={p2.src} alt="email template" className="w-full h-[152px] object-cover" />
                      <Text className="my-0 text-center font-medium text-gray-900 mt-4">VirtuTech Solutions</Text>
                      <Text className="my-0 text-center  text-gray-500">
                        Tech Solutions for Digital
                      </Text>
                    </Column>
                  </Row>
                  <Row>
                    <Column className="w-1/2 pr-2 pt-5">
                      <Img src={p3.src} alt="email template" className="w-full h-[152px] object-cover" />
                      <Text className="my-0 text-center font-medium text-gray-900 mt-4">VirtuTech Solutions</Text>
                      <Text className="my-0 text-center  text-gray-500">
                        Tech Solutions for Digital
                      </Text>
                    </Column>
                    <Column className="w-1/2 pl-2 pt-5">
                      <Img src={p4.src} alt="email template" className="w-full h-[152px] object-cover" />
                      <Text className="my-0 text-center font-medium text-gray-900 mt-4">VirtuTech Solutions</Text>
                      <Text className="my-0 text-center  text-gray-500">
                        Tech Solutions for Digital
                      </Text>
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


export default Agency;

const main: React.CSSProperties = {
  backgroundColor: "#f6f9fc",

};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
};

