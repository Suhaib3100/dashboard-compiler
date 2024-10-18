import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

const SocialButton = () => {
  return (
    <>
      <Button
        className="w-full hover:bg-default-200  text-default-700  hover:text-default-700"
        color="secondary"
        variant="outline"
      >
        <Icon icon="flat-color-icons:google" className="w-6 h-6 ltr:mr-2 rtl:ml-2  " />
        Sign in with Google
      </Button>
      <Button
        className="w-full hover:bg-default-200  text-default-700  hover:text-default-700"
        color="secondary"
        variant="outline"
      >
        <Icon icon="flat-color-icons:google" className="w-6 h-6 ltr:mr-2 rtl:ml-2  " />
        Sign in with Google
      </Button>
      <Button
        className="w-full hover:bg-default-200  text-default-700  hover:text-default-700"
        color="secondary"
        variant="outline"
      >
        <Icon
          icon="ant-design:google-outlined"
          className="w-6 h-6 mr-2  text-muted-foreground "
        />
        Sign in with Google
      </Button>
      <Button className="bg-[#1877F2] hover:bg-[#1877F2]/90">
        <Icon icon="ic:baseline-facebook" className="w-6 h-6 ltr:mr-2 rtl:ml-2  " />
        Sign in with Facebook
      </Button>
      <Button
        color="secondary"
        className="w-full hover:bg-default-200  text-default-700  hover:text-default-700"
        variant="outline"
      >
        <Icon
          icon="ic:baseline-facebook"
          className="w-6 h-6 mr-2  text-[#1877F2] "
        />
        Sign in with Facebook
      </Button>
      <Button
        className="w-full hover:bg-default-200  text-default-700  hover:text-default-700"
        color="secondary"
        variant="outline"
      >
        <Icon
          icon="ic:outline-facebook"
          className="w-6 h-6 ltr:mr-2 rtl:ml-2 text-muted-foreground  "
        />
        Sign in with Facebook
      </Button>
      <Button color="dark">
        <Icon icon="ic:baseline-apple" className="w-6 h-6 ltr:mr-2 rtl:ml-2  " />
        Sign in with Apple
      </Button>
      <Button
        color="secondary"
        className="w-full hover:bg-default-200  text-default-700  hover:text-default-700"
        variant="outline"
      >
        <Icon
          icon="ic:baseline-apple"
          className="w-6 h-6 ltr:mr-2 rtl:ml-2"
        />
        Sign in with Apple
      </Button>
      <Button
        className="w-full hover:bg-default-200  text-default-700  hover:text-default-700"
        color="secondary"
        variant="outline"
      >
        <Icon
          icon="ic:baseline-apple"
          className="w-6 h-6 mr-2  text-muted-foreground "
        />
        Sign in with Apple
      </Button>
      <Button className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90">
        <Icon icon="mdi:twitter" className="w-6 h-6 ltr:mr-2 rtl:ml-2  " />
        Sign in with Twitter
      </Button>
      <Button
        color="secondary"
        className="w-full hover:bg-default-200  text-default-700  hover:text-default-700"
        variant="outline"
      >
        <Icon icon="mdi:twitter" className="w-6 h-6 ltr:mr-2 rtl:ml-2  text-[#1DA1F2] " />
        Sign in with Twitter
      </Button>
      <Button
        className="w-full hover:bg-default-200  text-default-700  hover:text-default-700"
        color="secondary"
        variant="outline"
      >
        <Icon
          icon="mdi:twitter"
          className="w-6 h-6 ltr:mr-2 rtl:ml-2 text-muted-foreground"
        />
        Sign in with Twitter
      </Button>
    </>
  );
};

export default SocialButton;
