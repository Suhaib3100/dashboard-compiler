"use client";
import React from "react";
import Card from "@/components/ui/card-snippet";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

import {
  defaultButton,
  sizeButton,
  outlineButton,
  raisedButton,
  roundedButton,
  roundedOutline,
  softButton,
  ghostButton,
  disabledButton,
  iconButton,
  loaderButton,
  blockButton,
  socialButton,
  socialIconButton,
  toggleButton,
} from "./source-code";
import DefaultButton from "./default-button";
import SizeButton from "./size-button";
import OutlineButton from "./outline-button";
import RaisedButton from "./raised-button";
import RoundedButton from "./rounded-button";
import RoundedOutline from "./rounded-outline";
import SoftButton from "./soft-button";
import GhostButton from "./ghost-button";
import DisabledButton from "./disabled-button";
import IconButton from "./icon-button";
import LoaderButton from "./loader-button";
import BlockButton from "./block-button";
import SocialButton from "./social-button";
import SocialIconButton from "./social-icon-button";
import ToggleButton from "./toggle-button";

const ButtonPage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Default Buttons" code={defaultButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant</code> prop is used to
          change the background colo of the Button.
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <DefaultButton />
        </div>
      </Card>
      <Card title="Size Button" code={sizeButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">size</code> prop is used to change
          the button sizes
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <SizeButton />
        </div>
      </Card>
      <Card title="Outline Buttons" code={outlineButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary"> variant="outline" </code> prop is
          used to for Outline Button
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <OutlineButton />
        </div>
      </Card>
      <Card title="Raised" code={raisedButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          You can use direct <span className=" font-medium">TawlindCss</span>{" "}
          className{" "}
          <code className="text-primary">shadow-md, shadow-sm, shadow-xs</code>{" "}
          for shadow
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <RaisedButton />
        </div>
      </Card>
      <Card title="Rounded" code={roundedButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          You can use direct <span className=" font-medium">TawlindCss</span>{" "}
          className <code className="text-primary">rounded-full</code> for or
          any other's className
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <RoundedButton />
        </div>
      </Card>
      <Card title="Rounded Outline Buttons" code={roundedOutline}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          You can use direct <span className=" font-medium">TawlindCss</span>{" "}
          className <code className="text-primary">rounded-full</code> for or
          any other's className
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <RoundedOutline />
        </div>
      </Card>
      <Card title="Soft Buttons" code={softButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant='soft'</code> prop is used
          to change for soft color
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <SoftButton />
        </div>
      </Card>
      <Card title="Ghost Buttons" code={ghostButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant='ghost'</code> prop is used
          to change for soft color
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <GhostButton />
        </div>
      </Card>
      <Card title="Disabled" code={disabledButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">disabled</code> prop disables any
          action of the button
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <DisabledButton />
        </div>
      </Card>
      <Card title="Icon Buttons" code={iconButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">size='icon'</code> props design
          size of the button as icon
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <IconButton />
        </div>
      </Card>
      <Card title="Loading" code={loaderButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Loader</code> component design the
          button as loading button
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <LoaderButton />
        </div>
      </Card>
      <Card title="Block Buttons" code={blockButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">full width</code> design the button
          as block button.
        </p>

        <div className="grid xl:grid-cols-2  grid-cols-1 gap-5">
          <div className="  space-y-4">
            <BlockButton />
          </div>
          <div className=" space-y-4">
            <Button className="w-full" variant="outline">
              Primary
            </Button>
            <Button className="w-full" color="success" variant="outline">
              <Icon
                icon="heroicons:heart-20-solid"
                className="w-6 h-6 mr-2  "
              />
              Icon Left
            </Button>
            <Button className="w-full" color="warning" variant="outline">
              Icon Right Outline
              <Icon icon="heroicons:heart-20-solid" className="w-6 h-6 ml-2 " />
            </Button>
          </div>
        </div>
      </Card>
      <Card title="Social Buttons" code={socialButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">size='icon'</code> props design the
          button with icon
        </p>
        <div className="grid  xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          <SocialButton />
        </div>
      </Card>
      <Card title="Social Icon Buttons" code={socialIconButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">size='icon'</code> props design
          size of the button as icon
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-5  xl:divide-x rtl:divide-x-reverse divide-card-foreground/20">
          <SocialIconButton />
        </div>
      </Card>
      <Card title="Buttons Toggle Status" code={toggleButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Toggle</code> component design the
          button works toggle
        </p>
        <ToggleButton />
      </Card>
    </div>
  );
};

export default ButtonPage;
