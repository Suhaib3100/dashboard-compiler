import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

const SocialIconButton = () => {
  return (
    <>
      <div className=" flex gap-3 justify-center ">
        <Button
          size="icon"
          color="secondary"
          className=" rounded-full  hover:bg-opacity-10 "
          variant="outline"
        >
          <Icon icon="flat-color-icons:google" className="w-6 h-6   " />
        </Button>
        <Button
          size="icon"
          className=" rounded-full bg-[#1877F2]  text-primary-foreground hover:bg-[#1877F2]/90"
          variant="outline"
        >
          <Icon icon="ic:round-facebook" className="w-6 h-6   " />
        </Button>
        <Button color="dark" size="icon" className=" rounded-full">
          <Icon icon="ic:baseline-apple" className="w-6 h-6  " />
        </Button>
        <Button
          size="icon"
          className=" rounded-full bg-[#1DA1F2]  text-primary-foreground hover:bg-[#1DA1F2]/90"
          variant="outline"
        >
          <Icon icon="mdi:twitter" className="w-6 h-6   " />
        </Button>
      </div>
      <div className=" flex gap-3  justify-center">
        <Button
          size="icon"
          color="secondary"
          className=" rounded-full  hover:bg-opacity-10 "
          variant="outline"
        >
          <Icon icon="flat-color-icons:google" className="w-6 h-6   " />
        </Button>
        <Button
          size="icon"
          color="secondary"
          className=" rounded-full  hover:bg-opacity-10 "
          variant="outline"
        >
          <Icon
            icon="ic:round-facebook"
            className="w-6 h-6  text-[#1877F2]  "
          />
        </Button>
        <Button
          size="icon"
          color="secondary"
          className=" rounded-full  hover:bg-opacity-10 "
          variant="outline"
        >
          <Icon
            icon="ic:baseline-apple"
            className="w-6 h-6   text-card-foreground "
          />
        </Button>
        <Button
          size="icon"
          color="secondary"
          className=" rounded-full  hover:bg-opacity-10 "
          variant="outline"
        >
          <Icon icon="mdi:twitter" className="w-6 h-6 text-[#1DA1F2]   " />
        </Button>
      </div>
      <div className=" flex gap-3  justify-center">
        <Button
          size="icon"
          color="secondary"
          className=" rounded-full  hover:bg-default-200  "
          variant="outline"
        >
          <Icon icon="ant-design:google-outlined" className="w-6 h-6 text-muted-foreground " />
        </Button>
        <Button
          size="icon"
          color="secondary"
          className=" rounded-full  hover:bg-default-200 "
          variant="outline"
        >
          <Icon
            icon="ic:round-facebook"
            className="w-6 h-6   text-muted-foreground  "
          />
        </Button>
        <Button
          size="icon"
          color="secondary"
          className=" rounded-full  hover:bg-default-200 "
          variant="outline"
        >
          <Icon
            icon="ic:baseline-apple"
            className="w-6 h-6   text-muted-foreground "
          />
        </Button>
        <Button
          size="icon"
          color="secondary"
          className=" rounded-full  hover:bg-default-200 "
          variant="outline"
        >
          <Icon
            icon="mdi:twitter"
            className="w-6 h-6 text-muted-foreground   "
          />
        </Button>
      </div>
    </>
  );
};

export default SocialIconButton;
