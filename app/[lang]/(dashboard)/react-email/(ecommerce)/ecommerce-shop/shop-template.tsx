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
import p1 from "@/public/images/email-template/img-1.jpg"
import p2 from "@/public/images/email-template/img-2.jpg"
import fb from "@/public/images/email-template/fb-icon.png"
import twitter from "@/public/images/email-template/twiiter.png"
import instagram from "@/public/images/email-template/instagram.png"
 const ShopTemplate = () => {
  return (
    <Html>
      <Head />
      <Preview>Reset your password</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section>
              <Row>
                <Column className="pt-10 flex justify-center mb-8">
                  <Button className="border border-violet-500 font-medium text-violet-700 py-3 px-5 rounded" href="/">
                   DASH TAIL
                  </Button>
                </Column>
              </Row>
            </Section>
            <Hr />
            <Section className="flex justify-center">
              <Link href="/" className="text-sm font-medium text-gray-900 px-4 py-2.5 inline-block">Home</Link>
              <Link href="/" className="text-sm font-medium text-gray-900 px-4  py-2.5 inline-block">New</Link>
              <Link href="/" className="text-sm font-medium text-gray-900 px-4  py-2.5 inline-block">Men</Link>
              <Link href="/" className="text-sm font-medium text-gray-900 px-4  py-2.5 inline-block">Sports</Link>
              <Link href="/" className="text-sm font-medium text-gray-900 px-4  py-2.5 inline-block">Blog</Link>
            </Section>
            <Hr />
            <Text className="px-10 py-10 text-xl leading-8  text-gray-800 text-center">
              Find Amazing Deals on Our Shopping Website! Great <span className="text-violet-600">Prices</span> and
              <span className="text-violet-600"> Big Discounts </span> Await You!
            </Text>
            <Section>
              <Row className="bg-gray-50">
                <Column className="w-1/2">
                  <Text className="px-5 text-lg font-medium text-gray-900">Youthful Woman Dresses</Text>
                  <Text className="px-5 text-sm  text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit Inventore aliquam. </Text>
                  <Button className="border border-violet-500 bg-violet-500 text-white font-medium py-2 px-5 rounded ml-5 mt-4" href="/">
                    SHOP NOW
                  </Button>
                </Column>
                <Column className="w-1/2">
                  <Img src={p1.src} alt="email template" className="w-full h-full object-cover" />
                </Column>
              </Row>
              <Row className="bg-gray-50">
                <Column className="w-1/2">
                  <Img src={p2.src} alt="email template" className="w-full h-full object-cover" />
                </Column>
                <Column className="w-1/2">
                  <Text className="px-5 text-lg font-medium text-gray-900">Youthful Woman Dresses</Text>
                  <Text className="px-5 text-sm  text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit Inventore aliquam. </Text>
                  <Button className="border border-violet-500 bg-violet-500 text-white font-medium py-2 px-5 rounded ml-5 mt-4" href="/">
                    SHOP NOW
                  </Button>
                </Column>
              </Row>
              <Row className="bg-gray-50">
                <Column className="w-1/2">
                  <Text className="px-5 text-lg font-medium text-gray-900">Youthful Woman Dresses</Text>
                  <Text className="px-5 text-sm  text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit Inventore aliquam. </Text>
                  <Button className="border border-violet-500 bg-violet-500 text-white font-medium py-2 px-5 rounded ml-5 mt-4" href="/">
                    SHOP NOW
                  </Button>
                </Column>
                <Column className="w-1/2">
                  <Img src={p1.src} alt="email template" className="w-full h-full object-cover" />
                </Column>
              </Row>
              <Row className="bg-gray-50">
                <Column className="w-1/2">
                  <Img src={p2.src} alt="email template" className="w-full h-full object-cover" />
                </Column>
                <Column className="w-1/2">
                  <Text className="px-5 text-lg font-medium text-gray-900">Youthful Woman Dresses</Text>
                  <Text className="px-5 text-sm  text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit Inventore aliquam. </Text>
                  <Button className="border border-violet-500 bg-violet-500 text-white font-medium py-2 px-5 rounded ml-5 mt-4" href="/">
                    SHOP NOW
                  </Button>
                </Column>
              </Row>
            </Section>
            <Section>
              <Row>
                <Column className="py-12 flex justify-center">
                  <Button className="border border-violet-500 font-medium text-violet-700 py-3 px-5 rounded" href="/">
                    Start Shopping
                  </Button>
                </Column>
              </Row>
            </Section>
            <Hr />
            <Section>
              <Row>
                <Column>
                  <Text className="text-sm  text-gray-900 pl-10">Keep up with shopping updates</Text>
                </Column>
                <Column className="flex items-center gap-3 mt-3.5">
                  <Link href="/">
                    <Img src={fb.src} alt="email template" className="w-5 h-5" />
                  </Link>
                  <Link href="/">
                    <Img src={twitter.src} alt="email template" className="w-5 h-5" />
                  </Link>
                  <Link href="/">
                    <Img src={instagram.src} alt="email template" className="w-5 h-5" />
                  </Link>
                </Column>
              </Row>
            </Section>
            <Text className="px-10 bg-gray-100 py-4 text-sm text-gray-700 my-0">
              If you no longer want to receive these emails,
              <Link href="" className="text-violet-500 hover:underline">unsubscribe here</Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default ShopTemplate;

const main: React.CSSProperties = {
  backgroundColor: "#f6f9fc",

};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  borderRadius: "12px"
};

