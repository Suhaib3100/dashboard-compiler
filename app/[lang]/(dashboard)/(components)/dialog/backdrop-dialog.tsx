"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const DialogBackdrop = () => {

  return (
    <div className="flex flex-wrap  gap-x-5 gap-y-4 ">
      <Dialog>
        <DialogTrigger asChild>
          <Button type="button">Default</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base font-medium">
              Your modals component has been published
            </DialogTitle>
          </DialogHeader>
          <Tabs defaultValue="link" className="w-full">
            <TabsList className=" bg-transparent p-0 border-b-2 w-full rounded-none justify-start">
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150
                 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="code"
              >
                Embed code
              </TabsTrigger>
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 
                before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="link"
              >
                Share link
              </TabsTrigger>
            </TabsList>
            <TabsContent value="code">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb_1" />
                <Label
                  htmlFor="cb_1"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again{" "}
                </Label>
              </div>
            </TabsContent>
            <TabsContent value="link">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb2" />
                <Label
                  htmlFor="cb2"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again
                </Label>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button type="button">Without Blur</Button>
        </DialogTrigger>
        <DialogContent overlayClass="backdrop-blur-none">
          <DialogHeader>
            <DialogTitle className="text-base font-medium ">
              Your modals component has been published
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="link" className=" w-full">
            <TabsList className="bg-transparent p-0 border-b-2 w-full rounded-none justify-start">
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 
                before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2
                 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="code"
              >
                Embed code
              </TabsTrigger>
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 
                before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2
                before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="link"
              >
                Share link
              </TabsTrigger>
            </TabsList>
            <TabsContent value="code">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb3" />
                <Label
                  htmlFor="cb3"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again
                </Label>
              </div>
            </TabsContent>
            <TabsContent value="link">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb4" />
                <Label
                  htmlFor="cb4"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again
                </Label>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Transparent</Button>
        </DialogTrigger>
        <DialogContent overlayClass="backdrop-blur-none bg-transparent">
          <DialogHeader>
            <DialogTitle className="text-base font-medium ">
              Your modals component has been published
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="link" className=" w-full">
            <TabsList className=" bg-transparent p-0 border-b-2 w-full rounded-none justify-start">
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 
                before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="code"
              >
                Embed code
              </TabsTrigger>
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150
                 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="link"
              >
                Share link
              </TabsTrigger>
            </TabsList>
            <TabsContent value="code">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb5" />
                <Label
                  htmlFor="cb5"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again
                </Label>
              </div>
            </TabsContent>
            <TabsContent value="link">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb6" />
                <Label
                  htmlFor="cb6"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again
                </Label>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Customization Backdrop</Button>
        </DialogTrigger>
        <DialogContent overlayClass=" bg-gradient-to-b from-background/60 to-primary/30">
          <DialogHeader>
            <DialogTitle className="text-base font-medium ">
              Your modals component has been published
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="link" className=" w-full">
            <TabsList className=" bg-transparent p-0 border-b-2 w-full rounded-none justify-start">
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 
                before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="code"
              >
                Embed code
              </TabsTrigger>
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0 data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 
                before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="link"
              >
                Share link
              </TabsTrigger>
            </TabsList>
            <TabsContent value="code">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb7" />
                <Label
                  htmlFor="cb7"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again
                </Label>
              </div>
            </TabsContent>
            <TabsContent value="link">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb7" />
                <Label
                  htmlFor="cb7"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again
                </Label>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogBackdrop;
