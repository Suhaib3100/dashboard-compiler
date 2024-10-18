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
  Column,
} from "@react-email/components";
import * as React from "react";
import { Tailwind } from "@react-email/tailwind";
import logo from "@/public/images/logo/logo-2.png"
import logo2 from "@/public/images/logo/logo-1.png"
import dashtail from "@/public/images/all-img/dashtail-screenshot.png"
import avatar from "@/public/images/avatar/avatar-3.jpg"
import clock from "@/public/images/chart/clock.png"
import blog1 from "@/public/images/all-img/email-blog-1.jpg"
import blog2 from "@/public/images/all-img/email-blog-2.png"
import supportGirl from "@/public/images/all-img/support-girl.jpeg"
const AdvancedTemplate = () => (
  <Html>
    <Head />
    <Preview>
      Advanced Email Template
    </Preview>
    <Tailwind>
      <Body>
        <Container className="mx-auto bg-white rounded">
          <Row>
            <Column className="pt-6 pl-5 ">
              <Img
                src={logo.src}
                alt="DashTail"
              />
            </Column>
            <Column className="flex justify-end pt-10 pr-5   ">
              <Button
                href="https://codeshaper.net/contact-us"
                className="bg-violet-500 border border-violet-500 py-2 px-7 rounded-2xl font-medium text-white hover:bg-white hover:text-violet-500"
              >
                Sign In
              </Button>
            </Column>
          </Row>
          <Section className="mt-5">
            <Row>
              <Column className="pl-5 w-1/2">
                <Text className="text-xl font-medium text-slate-800 mt-6">Welcome to</Text>
                <Text className="text-xl  font-semibold text-slate-900 -mt-3">DashTail</Text>
                <Text className="text-sm text-slate-700">Dive into customization and thrive. Your journey starts now. </Text>
              </Column>
              <Column className="pr-5 w-1/2">
                <Img
                  src={dashtail.src}
                  alt="DashTail"
                  className="w-full h-full object-cover pl-6"
                />
              </Column>
            </Row>
          </Section>
          <Section className=" mt-5">
            <Row>
              <Column className="flex flex-col items-center p-5 mx-5 bg-slate-200   border border-slate-300 rounded-md">
                <Img
                  src={avatar.src}
                  alt="Logo"
                  className="w-12 h-12 rounded-full"
                />
                <Text className="text-lg font-medium text-slate-900 mb-0">John Doe  </Text>
                <Text className="text-sm  text-slate-700 mt-0">johndoe@example.com  </Text>
                <Button
                  href="https://codeshaper.net/contact-us"
                  className="bg-violet-500 border border-violet-500 py-2 px-7 rounded-full font-medium text-white hover:bg-white hover:text-violet-500"
                >
                  Start Now
                </Button>
              </Column>
            </Row>
          </Section>
          <Section className="mt-5">
            <Text className="text-base font-medium text-slate-900 px-5">One month of free plan included.😂</Text>
            <Text className="text-sm  text-slate-700 px-5">
              The package comes with a one-month complimentary plan, enabling users to experience the service at no cost for the first month.
              Take advantage of this introductory offer now!</Text>
          </Section>
          <Section>
            <Row>
              <Column className="min-w-[78px]">
                <Img
                  src={clock.src}
                  alt="Logo"
                  className="w-12 h-12 block m-auto"
                />
              </Column>
              <Column>
                <Text className="text-lg font-medium text-slate-900">24/7 Client Support</Text>
                <Text className="text-sm  text-slate-700 -mt-2">
                  We offer 24/7 client support for your convenience,
                  ensuring assistance is available whenever you need it, day or night.</Text>
              </Column>
            </Row>
            <Hr className="border border-slate-300 my-5" />
            <Row>
              <Column className="min-w-[78px]">
                <Img
                  src={clock.src}
                  alt="Logo"
                  className="w-12 h-12 block m-auto"
                />
              </Column>
              <Column>
                <Text className="text-lg font-medium text-slate-900">Get rich component library</Text>
                <Text className="text-sm  text-slate-700 -mt-2">
                  We offer 24/7 client support for your convenience,
                  ensuring assistance is available whenever you need it, day or night.</Text>
              </Column>
            </Row>
            <Hr className="border border-slate-300 my-5" />
            <Row>
              <Column className="min-w-[78px]">
                <Img
                  src={clock.src}
                  alt="Logo"
                  className="w-12 h-12 block m-auto"
                />
              </Column>
              <Column>
                <Text className="text-lg font-medium text-slate-900">Big sale offer</Text>
                <Text className="text-sm  text-slate-700 -mt-2">
                  We offer 24/7 client support for your convenience,
                  ensuring assistance is available whenever you need it, day or night.</Text>
              </Column>
            </Row>
          </Section>
          <Section className="flex justify-center mt-5">
            <Button
              href="https://codeshaper.net/contact-us"
              className="bg-violet-500 border border-violet-500 py-2.5 px-7 rounded-full font-medium text-white hover:bg-white hover:text-violet-500"
            >
              See More
            </Button>
          </Section>
          <Section className="mt-5">
            <Row>
              <Column>
                <Text className="text-xl font-medium text-slate-900 pl-5">Blog Tutorials</Text>
              </Column>
              <Column className="text-end pr-5">
                <Button
                  href="https://codeshaper.net/contact-us"
                  className="border border-violet-500 text-violet-500 py-2 px-7 rounded font-medium hover:bg-violet-500 hover:text-white"
                >
                  More Tutorials
                </Button>
              </Column>
            </Row>
            <Row className="mt-5 ">
              <Column className="pr-2 w-1/2 pl-5">
                <Img
                  src={blog1.src}
                  alt="Logo"
                  className="w-full h-full object-cover rounded-md"
                />
                <Text className="text-sm font-medium text-slate-900">
                  How to cusomize your template?
                </Text>
                <Text className="text-sm text-slate-700 -mt-2">
                  Edit template: adjust text, images, colors as desired.
                </Text>
              </Column>
              <Column className="pl-2 w-1/2 pr-5">
                <Img
                  src={blog2.src}
                  alt="Logo"
                  className="w-full h-full object-cover  rounded-md"
                />
                <Text className="text-sm font-medium text-slate-900">
                  How to use starter kit?
                </Text>
                <Text className="text-sm text-slate-700 -mt-2">
                  Edit template: adjust text, images, colors as desired.
                </Text>
              </Column>
            </Row>
          </Section>
          <Section className="bg-slate-300  mt-5">
            <Row>
              <Column className="w-1/2 pl-5">
                <Img
                  src={logo2.src}
                  alt="Logo"
                  className="w-12 h-12 object-cover  "
                />
                <Text className="text-base font-medium text-slate-900">Book Your Demo</Text>
                <Text className="text-sm text-slate-700 -mt-3">
                  Book a demo to explore our service's features and benefits.
                </Text>
                <Button
                  href="https://codeshaper.net/contact-us"
                  className="bg-violet-500 border border-violet-500 py-2 px-7 rounded-full font-medium text-white hover:bg-white hover:text-violet-500"
                >
                  Book Now
                </Button>
              </Column>
              <Column>
                <Img
                  src={supportGirl.src}
                  alt="Logo"
                  className="w-full h-full object-cover  rounded-r-md"
                />
              </Column>
            </Row>
          </Section>
          <Section className="mt-5 text-center">
            <Text className="text-sm text-slate-700">
              3rd Floor, Road# 29, House# 395, New DOHS, <br /> Mohakhali,
              Dhaka - 1206, Bangladesh
            </Text>

            <Button
              href="https://codeshaper.net/contact-us"
              className="border border-violet-500 text-violet-500 py-2 px-7 rounded font-medium hover:bg-violet-500 hover:text-white"
            >
              Contact Us
            </Button>
            <Text className="pb-2"></Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>

);


export default AdvancedTemplate;




