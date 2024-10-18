"use client";

import Card from "@/components/ui/card-snippet";
import RightSideSheet from "./right-slide-sheet";
import LeftSideSheet from "./left-slide-sheet";
import TopSideSheet from "./top-slide-sheet";
import BottomSideSheet from "./bottom-slide-sheet";
import TopExtraActionsSheet from "./topslide-extraaction-sheet";
import BottomExtraActionSheet from "./bottom-extraaction-sheet";
import RightExtraActionSheet from "./right-extraaction-sheet";
import LeftExtraActionSheet from "./left-extraaction-sheet";
import SubmitFormInSheet from "./submitform-sheet";
import MultiLabelSheet from "./multilabel-sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar1 from "@/public/images/avatar/avatar-1.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import PreviewSheet from "./preview-sheet";
import {
  basicSheet,
  extraActionsSheet,
  multiLabelSheet,
  previewSheet,
  submitFormInSheet,
} from "./source-code";
const SheetPage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Basic Sheet" code={basicSheet}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary"> Sheet</code> component wraps the.{" "}
          <code className="text-primary">
            SheetTrigger, SheetContent, SheetHeader, SheetTitle,
            SheetDescription , SheetFooter, SheetClose
          </code>{" "}
          component to make sheet and wrap it as necessary to make sheet close.{" "}
          <code className="text-primary">side</code> props helps to identify
          from where the sheet will come from.
        </p>
        <div className="flex flex-wrap gap-5">
          <TopSideSheet />
          <BottomSideSheet />
          <RightSideSheet />
          <LeftSideSheet />
        </div>
      </Card>
      <Card title="Extra Actions" code={extraActionsSheet}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In the extra action component there wil be new section to the bottom
          of the sheet that has two button to do some action. That added extra
          functionality to this component.
        </p>
        <div className="flex flex-wrap gap-5">
          <TopExtraActionsSheet />
          <BottomExtraActionSheet />
          <RightExtraActionSheet />
          <LeftExtraActionSheet />
        </div>
      </Card>
      <Card title="Submit Form In Sheet" code={submitFormInSheet}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Adding component to the sheet like a form. Give extra facility to so
          that this could help the user to add information.
        </p>
        <div className="space-x-5">
          <SubmitFormInSheet />
        </div>
      </Card>
      <Card title="Multi-Label Sheet" code={multiLabelSheet}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Multi Label sheet is all about nested sheet. Specially when we need
          extra functionality in a simple design the we come with a idea of
          multi label sheet. That could be a nested form or information.
        </p>
        <div className="space-x-5">
          <MultiLabelSheet />
        </div>
      </Card>
      <Card title="Preview Sheet" code={previewSheet}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Preview sheet is to show some information in different idea and
          details about someone that might help us to know about the product or
          person on permission.
        </p>
        <div className="max-w-[684px] border rounded-[6px]">
          <div className="flex flex-col sm:flex-row p-3 pt-4 sm:pt-3">
            <div className="flex-1 flex flex-col sm:flex-row items-center gap-2 text-center sm:text-start">
              <Avatar className="h-8 w-8">
                <AvatarImage src={avatar2.src} alt="" />
                <AvatarFallback>IJ</AvatarFallback>
              </Avatar>
              <div className="mt-2 sm:mt-0">
                <h4 className="text-sm font-medium text-default-950 ">
                  Hey Prantik
                </h4>
                <p className="text-sm text-default-500 mt-1 sm:mt-0 ">
                  Read Some Preview Text
                </p>
              </div>
            </div>
            <PreviewSheet />
          </div>
          <hr />
          <div className="flex flex-col sm:flex-row p-3 pt-4 sm:pt-3">
            <div className="flex-1 flex flex-col sm:flex-row items-center gap-2 text-center sm:text-start">
              <Avatar className="h-8 w-8">
                <AvatarImage src={avatar1.src} alt="" />
                <AvatarFallback>IJ</AvatarFallback>
              </Avatar>
              <div className="mt-2 sm:mt-0">
                <h4 className="text-sm font-medium text-default-950 ">
                  Hey Hasi
                </h4>
                <p className="text-sm text-default-500 mt-1 sm:mt-0">
                  Read Some Preview Text
                </p>
              </div>
            </div>
            <PreviewSheet />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SheetPage;
