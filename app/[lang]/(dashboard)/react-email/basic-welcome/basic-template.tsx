"use client"
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Row,
  Column
} from "@react-email/components";
import * as React from "react";
import { Tailwind } from "@react-email/tailwind";
import avatar from "@/public/images/avatar/avatar-2.jpg"

export const Welcome = () => (
  <Tailwind>
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Tailwind>
        <Body>
          <Container className="mx-auto bg-white px-5">
            <Section>
              <Row>
                <Column className="p-10 pb-5">
                  <Img
                    src={avatar.src}
                    alt="Sakil Anwar"
                    className="mx-auto rounded-full h-[70px] w-[70px]"
                  />
                  <Text className="text-3xl text-center font-semibold text-default-900">Hi Sakil Anwar,</Text>
                  <Text className="text-base text-default-700 text-center">
                    Welcome to CodeShaper, where innovation meets precision.
                    Crafting your digital future with elegant solutions.
                    Let's shape your success together. Evolve, adapt, conquer.
                  </Text>
                  <Section className="text-center">
                    <Button style={button} href="https://codeshaper.net/contact-us">
                      Get started
                    </Button>
                  </Section>
                  <Text className="text-base text-default-700 text-center">
                    Best,
                    <br />
                    The Codeshaper team
                  </Text>
                  <Hr className="border border-default-300 my-5" />
                  <Text className="text-xs leading-6 text-center text-default-700">
                    3rd Floor, Road# 29, House# 395, New DOHS, <br /> Mohakhali,
                    Dhaka - 1206, Bangladesh
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  </Tailwind>
);


export default Welcome;


const button: React.CSSProperties = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};


