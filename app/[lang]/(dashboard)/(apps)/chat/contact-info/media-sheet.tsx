"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

import baby from "@/public/images/all-img/baby.jpg";
import banana from "@/public/images/all-img/banana.jpg";
import busket from "@/public/images/all-img/busket.jpg";
import mic from "@/public/images/all-img/mic.jpg";
import orange from "@/public/images/all-img/orange.jpg";
import waterfall from "@/public/images/all-img/water-fall.jpg";

const MediaSheet = ({ showDrawer, handleDrawer }: {
  showDrawer: string | null;
  handleDrawer: (value: string | null) => void;
}) => {
  return (
    <Card className="absolute top-0 right-0 w-full h-full z-10 bg-card">
      <CardHeader className="mb-0">
        <div className="flex gap-2.5 items-center">
          <Button
            type="button"
            size="icon"
            className="rounded-full bg-transparent hover:bg-default-200"
            onClick={() => handleDrawer(null)}
          >
            <Icon
              icon="mynaui:arrow-left"
              className="text-default-900 text-2xl"
            />
          </Button>
          <span className="text-base font-medium text-default-900">
            {" "}
            Media, Files and Links
          </span>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-5 h-full">
        <Tabs
          defaultValue={showDrawer ? showDrawer : "media"}
          className="h-full "
        >
          <TabsList className="flex flex-wrap gap-2 dark:border dark:border-border">
            <TabsTrigger value="media" className="flex-1">
              Media
            </TabsTrigger>
            <TabsTrigger value="files" className="flex-1">
              Files
            </TabsTrigger>
            <TabsTrigger value="links" className="flex-1">
              Links
            </TabsTrigger>
          </TabsList>
          <div className="h-[calc(100%-91px)] ">
            <ScrollArea className="h-full">
              <TabsContent value="media">
                <div className="grid grid-cols-2 gap-2 mt-8">
                  <Link
                    href="/images/all-img/baby.jpg"
                    target="_blank"
                    download
                  >
                    <Image
                      placeholder="blur"
                      src={baby}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <Link
                    href="/images/all-img/banana.jpg"
                    target="_blank"
                    download
                  >
                    <Image
                      placeholder="blur"
                      src={banana}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <Link
                    href="/images/all-img/busket.jpg"
                    target="_blank"
                    download
                  >
                    <Image
                      placeholder="blur"
                      src={busket}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <Link href="/images/all-img/mic.jpg" target="_blank" download>
                    <Image
                      placeholder="blur"
                      src={mic}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <Link
                    href="/images/all-img/orange.jpg"
                    target="_blank"
                    download
                  >
                    <Image
                      placeholder="blur"
                      src={orange}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <Link
                    href="/images/all-img/water-fall.jpg"
                    target="_blank"
                    download
                  >
                    <Image
                      placeholder="blur"
                      src={waterfall}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="files">
                <Link
                  href="/files/example.txt"
                  target="_blank"
                  download
                  className="flex items-center gap-2 border-b border-default-200 group py-2 last:border-none"
                >
                  <div className="h-16 w-16 rounded-sm bg-default-50 flex justify-center items-center">
                    <Icon
                      icon="mdi:file-text-edit-outline"
                      className="text-3xl text-default-700"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-default-500 group-hover:text-default-800">
                      example.text
                    </div>
                    <p className="text-sm text-default-500">293B</p>
                  </div>
                </Link>
                <Link
                  href="/files/example.txt"
                  target="_blank"
                  download
                  className="flex items-center gap-2 border-b border-default-200 group  py-2 last:border-none"
                >
                  <div className="h-16 w-16 rounded-sm bg-default-50 flex justify-center items-center">
                    <Icon
                      icon="mdi:file-text-edit-outline"
                      className="text-3xl text-default-700"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-default-500 group-hover:text-default-800">
                      example.text
                    </div>
                    <p className="text-sm text-default-500">293B</p>
                  </div>
                </Link>
              </TabsContent>
              <TabsContent value="links">
                <Link
                  target="_blank"
                  href="https://stackoverflow.com/"
                  className="flex items-center gap-2 border-b border-default-200 group py-2 last:border-none"
                >
                  <div className="h-16 w-16 rounded-sm bg-default-50 flex justify-center items-center">
                    <Icon
                      icon="bx:link"
                      className="text-3xl text-default-700"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-default-500 group-hover:text-default-800">
                      Stack Overflow
                    </div>
                    <p className="text-sm text-default-500">
                      Developer Meeting place
                    </p>
                  </div>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.envato.com/"
                  className="flex items-center gap-2 border-b border-default-200 group py-2 last:border-none"
                >
                  <div className="h-16 w-16 rounded-sm bg-default-50 flex justify-center items-center">
                    <Icon
                      icon="bx:link"
                      className="text-3xl text-default-700"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-default-500 group-hover:text-default-800">
                      Envato
                    </div>
                    <p className="text-sm text-default-500">
                      Sell Your code here
                    </p>
                  </div>
                </Link>
              </TabsContent>
            </ScrollArea>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MediaSheet;
