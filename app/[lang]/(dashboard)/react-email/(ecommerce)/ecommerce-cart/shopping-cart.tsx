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
import p1 from "@/public/images/email-template/pr-2.png"
import p2 from "@/public/images/email-template/pr-3.png"
const ShoppingCart = () => {
  return (
    <Html>
      <Head />
      <Preview>Reset your password</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section>
              <Row>
                <Column className="px-10 pt-10">
                  <Button className="border border-violet-500 font-medium text-violet-700 py-3 px-5 rounded" href="/">
                   DASH TAIL
                  </Button>
                  <Text className="text-base font-medium text-gray-900 uppercase mt-5">Big Sale offer</Text>
                  <Text className="text-sm text-gray-700">
                    Unbeatable deals on everything you need, <br /> limited time only! Shop now!
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section>
              <Row>
                <Column className="px-10">
                  <Text className="text-sm font-medium text-gray-900">Product</Text>
                </Column>
                <Column className="px-10">
                  <Text className="text-end text-sm font-medium text-gray-900">Price</Text>
                </Column>
              </Row>
              <Hr className="pb-5" />
              <Row>
                <Column className="pl-10 w-24 relative">
                  <Img src={p1.src} alt="product" className="absolute top-0 left-10 w-full h-24 bg-slate-50 rounded" />
                </Column>
                <Column className="pl-14">
                  <Text className="text-sm font-medium text-gray-900 mb-0 ">New Model Watch</Text>
                  <Text className="text-sm mt-0 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque iste ad.
                  </Text>
                </Column>
                <Column>
                  <Text className="text-sm font-medium text-gray-900 pr-6">$75.00</Text>
                </Column>
              </Row>
              <Hr className="my-5" />
              <Row>
                <Column className="pl-10 w-24 relative">
                  <Img src={p2.src} alt="product" className="absolute top-0 left-10 w-full h-24 bg-slate-50 rounded" />
                </Column>
                <Column className="pl-14">
                  <Text className="text-sm font-medium text-gray-900 mb-0 ">New Model Headphone</Text>
                  <Text className="text-sm mt-0 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque iste ad.
                  </Text>
                </Column>
                <Column>
                  <Text className="text-sm font-medium text-gray-900 pr-6">$85.00</Text>
                </Column>
              </Row>
              <Hr className="my-5" />
              <Button className="ml-10 mb-10 mt-5 border border-violet-500 bg-violet-500 font-medium text-white py-3 px-5 rounded " href="/">
                Confirm your order
              </Button>
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


export default ShoppingCart;

const main: React.CSSProperties = {
  backgroundColor: "#f6f9fc",

};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  borderRadius: "12px"
};

