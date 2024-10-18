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
  Hr,
  Row,
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
        <Body >
          <Container>
            <Section>
              <Row>
                <Column className="flex justify-center">
                  <Img
                    src={DashTailLogo.src}
                    alt="Dropbox"
                    style={logo}
                  />
                </Column>
              </Row>
            </Section>

            <Section className="bg-white border border-gray-300 rounded mt-12  px-10">
              <Row>
                <Column>
                  <Text className="text-center text-2xl font-medium text-slate-900 px-10 pt-5">Password Reset</Text>
                  <Text className="text-center text-sm font-medium text-gray-700 px-10 ">
                    If you've lost your password or wish to reset it, <br /> use the link below to get started
                  </Text>
                  <Button className="bg-violet-600 mx-auto mt-5" style={button} href="/">
                    Reset your password
                  </Button>
                  <Text className="text-sm text-center mt-10 px-10 text-slate-900 pb-4">
                    If you didn't make the request, just ignore this message. <br />
                    Otherwise you can reset your password
                  </Text>
                </Column>
              </Row>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default ResetPassword;


const logo: React.CSSProperties = {
  width: "160px",
}


const button: React.CSSProperties = {
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "210px",
  padding: "12px 7px",
  marginLeft: "40px"
};


