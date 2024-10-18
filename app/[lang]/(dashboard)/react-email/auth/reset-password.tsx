"use client";

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

import DashTailLogo from "@/public/images/logo/logo-2.png"
export const ResetPassword = () => {
  return (
    <Html>
      <Head />
      <Preview>Reset your password</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section>
              <Column className="pt-10 pl-10">
                <Img
                  src={DashTailLogo.src}
                  alt="Dropbox"
                  style={logo}
                />
              </Column>
            </Section>
            <Section>
              <Text className="mt-5 text-base font-medium text-slate-900 px-10">Hi Sakil,</Text>
              <Text className="text-sm px-10 text-slate-900">
                We've received a request to reset your password.
              </Text>
              <Text className="text-sm px-10 text-slate-900 mb-5">
                If you didn't make the request, just ignore this message.
                Otherwise you can reset your password
              </Text>
              <Button style={button} className="bg-violet-600 ms-10" href="/">
                Reset your password
              </Button>
              <Text className="mt-4 text-sm text-slate-900 px-10">
                Thanks, <br />
                The Dashtail Team
              </Text>
            </Section>
            <Text className="border border-gray-100 mx-10 mt-7"></Text>
            <Text className="px-10 text-sm text-gray-900 mt-5">Sent with ❤️ from DashTail </Text>
            <Text className="px-10 text-sm text-gray-900 -mt-2">  New DOHS, Mohakhali,
              Dhaka - 1206, Bangladesh </Text>
            <Text className="px-10 text-sm text-gray-900 -mt-2">Thank You</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default ResetPassword;

const main:React.CSSProperties  = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",

};
const logo:React.CSSProperties  = {
  width: "200px",
}
const container:React.CSSProperties  = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  borderRadius: "12px"
};

const button: React.CSSProperties = {
  backgroundColor: "#7c3aed",
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "210px",
  padding: "12px 7px",
  margin: "20px 0",
};
