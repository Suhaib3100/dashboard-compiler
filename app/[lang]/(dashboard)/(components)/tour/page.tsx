"use client";
import React, { useContext, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShepherdTour, ShepherdTourContext, Tour } from "react-shepherd";
import { Icon } from "@iconify/react";
import newSteps from "./steps";
import "shepherd.js/dist/css/shepherd.css";

import tourlogo from "@/public/images/watermark/codeshaperlogo1.png";
import Image from "next/image";

const tourOptions:any = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
    classes: "shadow-md bg-purple-dark",
    scrollTo: { behavior: "smooth", block: "center" },
  },
  useModalOverlay: true,
};

const Autton = () => {
  const tour = useContext<any>(ShepherdTourContext);
  useEffect(() => {
    tour.start();
  }, [tour]);
  return <> </>;
};

const UiTour = () => {
  return (
    <div>
      <ShepherdTour
        steps={newSteps}
        tourOptions={tourOptions}
      >
        <Autton />
        <div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Tour</CardTitle>
              </CardHeader>
              <CardContent>
                {" "}
                <p className="text-sm text-default-400 dark:text-default-600  mb-4">
                  The{" "}
                  <code className="text-primary">steps and tourOptions</code>{" "}
                  props passes data in{" "}
                  <code className="text-primary">ShepherdTour</code> component
                  to navigate the tour.
                </p>
              </CardContent>
              <CardContent>
                <div className="mb-4">
                  <Button>Start Tour</Button>
                </div>

                <p className=" text-muted-foreground mb-4">
                  Use when you want to help users along getting accustomed to
                  your user interface or Use when you want to notify your users
                  of new or unfamiliar features.
                </p>

                <div>
                  <div>
                    <div className="text-center mt-4 mb-5 max-w-[400px] mx-auto">
                      <div
                        className="py-3 px-2  inline-block text-xl font-bold"
                        id="logo-tour"
                      >
                        <div className="w-30 h-5">
                          <Image
                            className="w-full h-full"
                            src={tourlogo}
                            alt=" dashtail logo"
                          />
                        </div>
                      </div>
                      <h5 className=" text-base mb-2 font-medium text-default-700 ">
                        Responsive Admin Dashboard Template
                      </h5>
                      <p className=" text-muted-foreground text-sm mb-3">
                        Vestibulum auctor tincidunt semper. Phasellus ut
                        vulputate lacus. Suspendisse ultricies mi eros, sit amet
                        tempor nulla varius sed dapibus in tellus.
                      </p>
                      <div className="  space-x-3 rtl:space-x-reverse">
                        <Button size="sm">View more</Button>
                        <Button color="success" size="sm">
                          Email us
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className=" grid xl:grid-cols-3 grid-cols-1 gap-5">
                    <Card id="register-tour" className="border shadow-none p-4">
                      <CardContent className="text-center">
                        <div className="mx-auto h-20 w-20 mb-4">
                          <div className="flex items-center justify-center bg-accent dark:bg-default-200 rounded-full overflow-hidden w-20 h-20">
                            <Icon
                              icon="heroicons:pencil-square"
                              className=" h-6 w-6 text-primary"
                            />
                          </div>
                        </div>
                        <h5 className="mb-2 text-default-700  font-medium text-base">
                          Free register
                        </h5>
                        <p className="text-muted-foreground mb-0 text-sm">
                          Get your Free DashTail account now.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border shadow-none p-4">
                      <CardContent className="text-center">
                        <div className="mx-auto h-20 w-20 mb-4">
                          <div
                            id="login-tour"
                            className="flex items-center justify-center bg-accent dark:bg-default-200  rounded-full overflow-hidden w-20 h-20"
                          >
                            <Icon
                              icon="heroicons:user-plus"
                              className=" h-6 w-6 text-primary"
                            />
                          </div>
                        </div>
                        <h5 className="mb-2 text-default-700  font-medium text-base ">
                          Log in account
                        </h5>
                        <p className="text-muted-foreground mb-0 text-sm">
                          Sign in to continue to DashTail.
                        </p>
                      </CardContent>
                    </Card>
                    <Card
                      id="getproduct-tour"
                      className="border shadow-none p-4"
                    >
                      <CardContent className="text-center">
                        <div className="mx-auto h-20 w-20 mb-4">
                          <div className="flex items-center justify-center bg-accent dark:bg-default-200  rounded-full overflow-hidden w-20 h-20">
                            <Icon
                              icon="heroicons:document-arrow-down"
                              className=" h-6 w-6 text-primary"
                            />
                          </div>
                        </div>
                        <h5 className="mb-2 text-default-700  font-medium text-base">
                          Get Product
                        </h5>
                        <p className="text-muted-foreground mb-0 text-sm">
                          Sign in to continue to DashTail.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <div className="text-center mt-4 mb-5 mx-auto">
                      <div
                        className="pt-0 w-max mx-auto text-xl font-bold shepherd-enabled shepherd-target "
                        id="thankyou-tour"
                      >
                        <div className="w-30">
                          <Button>Thank you !</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ShepherdTour>
    </div>
  );
};

export default UiTour;
