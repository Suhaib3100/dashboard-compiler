export const defaultButton = `import { Button } from "@/components/ui/button";
import Link from "next/link";
const DefaultButton = () => {
  return (
    <>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="info">Info</Button>
      <Button color="warning">Warning</Button>
      <Button color="destructive">Danger</Button>
      <Button color="dark">Dark</Button>
      <Button asChild>
        <Link href="/dashboard/button">Link Button</Link>
      </Button>
    </>
  );
};

export default DefaultButton;

`;

export const sizeButton = `import { Button } from '@/components/ui/button'
const SizeButton = () => {
  return (
    <React.Fragment>
      <Button size="xl">Button xl</Button>
      <Button size="lg">Button lg</Button>
      <Button>Button</Button>
      <Button size="md">Button md</Button>
      <Button size="xs">Button xs</Button>
    </React.Fragment>
  )
}
export default SizeButton;
`;

export const outlineButton = `import { Button } from '@/components/ui/button'
const OutlineButton = () => {
  return (
    <React.Fragment>
      <Button variant="outline">Primary</Button>
      <Button color="secondary" variant="outline">Secondary</Button>
      <Button color="success" variant="outline">Success</Button>
      <Button color="info" variant="outline">Info</Button>
      <Button color="warning" variant="outline">Warning</Button>
      <Button color="destructive" variant="outline">Danger</Button>
      <Button color="dark" variant="outline">Dark</Button>
    </React.Fragment>
  )
}
export default OutlineButton;
`;

export const raisedButton = `import { Button } from '@/components/ui/button'
const RaisedButton = () => {
  return (
    <React.Fragment>
      <Button className="shadow-md">Default</Button>
      <Button color="secondary" className="shadow-md">Secondary</Button>
      <Button color="success" className="shadow-md">Success</Button>
      <Button color="info" className="shadow-md">Info</Button>
      <Button color="warning" className="shadow-md">Warning</Button>
      <Button color="destructive" className="shadow-md">Danger</Button>
    </React.Fragment>
  )
}
export default RaisedButton;
`;

export const roundedButton = `import { Button } from '@/components/ui/button'
const RoundedButton = () => {
  return (
    <React.Fragment>
      <Button className="rounded-full">Default</Button>
      <Button color="secondary" className="rounded-full">Secondary</Button>
      <Button color="success" className="rounded-full">Success</Button>
      <Button color="info" className="rounded-full">Info</Button>
      <Button color="warning" className="rounded-full">Warning</Button>
      <Button color="destructive" className="rounded-full">Danger</Button>
    </React.Fragment>
  )
}
export default RoundedButton;
`;

export const roundedOutline = `import { Button } from '@/components/ui/button'
const RoundedOutline = () => {
  return (
    <React.Fragment>
      <Button className="rounded-full" variant="outline">Default</Button>
      <Button color="secondary" variant="outline" className="rounded-full">Secondary</Button>
      <Button color="success" variant="outline" className="rounded-full">Success</Button>
      <Button color="info" variant="outline" className="rounded-full">Info</Button>
      <Button color="warning" variant="outline" className="rounded-full">Warning</Button>
      <Button color="destructive" variant="outline" className="rounded-full">Danger</Button>
    </React.Fragment>
  )
}
export default RoundedOutline;
`;

export const softButton = `import { Button } from '@/components/ui/button'
const SoftButton = () => {
  return (
    <React.Fragment>
      <Button variant="soft">Primary</Button>
      <Button color="secondary" variant="soft"Secondary</Button>
      <Button color="success" variant="soft">Success</Button>
      <Button color="info" variant="soft">Info</Button>
      <Button color="warning" variant="soft">Warning</Button>
      <Button color="destructive" variant="soft">Danger</Button>
      <Button color="dark" variant="soft">Dark</Button>
    </React.Fragment>
  )
}
export default SoftButton;
`;

export const ghostButton = `import { Button } from '@/components/ui/button'
const GhostButton = () => {
  return (
    <React.Fragment>
      <Button variant="ghost">Primary</Button>
      <Button color="secondary" variant="ghost">Secondary</Button>
      <Button color="success" variant="ghost">Success</Button>
      <Button color="info" variant="ghost">Info</Button>
      <Button color="warning" variant="ghost">Warning</Button>
      <Button color="destructive" variant="ghost">Danger</Button>    
    </React.Fragment>
  )
}
export default GhostButton;
`;

export const disabledButton = `import { Button } from '@/components/ui/button'
const DisabledButton = () => {
  return (
    <React.Fragment>
        <Button disabled>Default</Button>
        <Button color="secondary" disabled>Secondary</Button>
        <Button color="success" disabled>Success</Button>
        <Button color="info" disabled>Info</Button>
        <Button color="warning" disabled>Warning</Button>
        <Button color="destructive" disabled>Danger</Button>
    </React.Fragment>
  )
}
export default DisabledButton;
`;

export const iconButton = `import { Button } from '@/components/ui/button'
import { Icon } from "@iconify/react";
const IconButton = () => {
  return (
    <React.Fragment>
      <Button size="icon">
        <Icon icon="heroicons:heart-20-solid" className=" h-6 w-6 " />
      </Button>
      <Button size="icon" variant="outline" className="group">
        <Icon icon="heroicons:heart-20-solid" className=" h-6 w-6 " />
      </Button>
      <Button size="icon" variant="ghost" className="group">
        <Icon icon="heroicons:heart-20-solid" className=" h-6 w-6 " />
      </Button>
      <Button size="icon" className=" rounded-full">
        <Icon icon="heroicons:heart-20-solid" className=" h-6 w-6 " />
      </Button>
      <Button>
        <Icon icon="heroicons:heart-20-solid" className="w-6 h-6 mr-2  " />
        Icon Left
      </Button>
      <Button>
        Icon Right Outline
        <Icon icon="heroicons:heart-20-solid" className="w-6 h-6 ml-2 " />
      </Button>   
    </React.Fragment>
  )
}
export default IconButton;
`;

export const loaderButton = `import { Button } from "@/components/ui/button";
import { Loader2, Heart } from "lucide-react";
const LoaderButton = () => {
  return (
    <React.Fragment>
      <Button>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading ...
      </Button>
      <Button color="secondary">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading ...
      </Button>
      <Button color="success">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading ...
      </Button>
      <Button color="info">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading ...
      </Button>
      <Button color="warning">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading ...
      </Button>
      <Button color="destructive">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading ...
      </Button>
    </React.Fragment>
  )
}
export default LoaderButton;
`;

export const blockButton = `import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
const BlockButton = () => {
  return (
    <React.Fragment>
      <Button className="w-full">Primary</Button>
      <Button className="w-full" color="success">
        <Icon
          icon="heroicons:heart-20-solid"
          className="w-6 h-6 mr-2"
        />
        Icon Left
      </Button>
      <Button className="w-full" color="warning">
        Icon Right Outline
        <Icon icon="heroicons:heart-20-solid" className="w-6 h-6 ml-2 " />
      </Button>
    </React.Fragment>
  )
}
export default BlockButton;
`;

export const socialButton = `import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
const SocialButton = () => {
  return (
    <React.Fragment>
       <Button
        className="w-full hover:bg-opacity-5  text-default-700  hover:text-default-700"
        color="secondary"
        variant="outline"
      >
        <Icon icon="flat-color-icons:google" className="w-6 h-6 mr-2" />
        Sign in with Google
      </Button>
      <Button
        className="w-full hover:bg-opacity-5  text-default-700  hover:text-default-700"
        color="secondary"
        variant="outline"
      >
        <Icon icon="flat-color-icons:google" className="w-6 h-6 mr-2" />
        Sign in with Google
      </Button>
      <Button
        className="w-full hover:bg-opacity-5  text-default-700  hover:text-default-700"
        color="secondary"
        variant="outline"
      >
        <Icon
          icon="ant-design:google-outlined"
          className="w-6 h-6 mr-2  text-muted-foreground"
        />
        Sign in with Google
      </Button>
      <Button className="bg-[#1877F2] hover:bg-[#1877F2]/90">
        <Icon icon="ic:baseline-facebook" className="w-6 h-6 mr-2" />
        Sign in with Facebook
      </Button>
      <Button
        color="secondary"
        className="w-full hover:bg-opacity-5  text-default-700  hover:text-default-700"
        variant="outline"
      >
        <Icon
          icon="ic:baseline-facebook"
          className="w-6 h-6 mr-2  text-[#1877F2]"
        />
        Sign in with Facebook
      </Button>
      <Button
        className="w-full hover:bg-opacity-5  text-default-700  hover:text-default-700"
        color="secondary"
        variant="outline"
      >
        <Icon
          icon="ic:outline-facebook"
          className="w-6 h-6 mr-2 text-muted-foreground"
        />
        Sign in with Facebook
      </Button>
      <Button color="dark">
        <Icon icon="ic:baseline-apple" className="w-6 h-6 mr-2" />
        Sign in with Apple
      </Button>
      <Button
        color="secondary"
        className="w-full hover:bg-opacity-5  text-default-700  hover:text-default-700"
        variant="outline"
      >
        <Icon
          icon="ic:baseline-apple"
          className="w-6 h-6 mr-2 
   "
        />
        Sign in with Apple
      </Button>
      <Button
        className="w-full hover:bg-opacity-5  text-default-700  hover:text-default-700"
        color="secondary"
        variant="outline"
      >
        <Icon
          icon="ic:baseline-apple"
          className="w-6 h-6 mr-2  text-muted-foreground"
        />
        Sign in with Apple
      </Button>
      <Button className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90">
        <Icon icon="mdi:twitter" className="w-6 h-6 mr-2 " />
        Sign in with Twitter
      </Button>
      <Button
        color="secondary"
        className="w-full hover:bg-opacity-5  text-default-700  hover:text-default-700"
        variant="outline"
      >
        <Icon icon="mdi:twitter" className="w-6 h-6 mr-2  text-[#1DA1F2]" />
        Sign in with Twitter
      </Button>
      <Button
        className="w-full hover:bg-opacity-5  text-default-700  hover:text-default-700"
        color="secondary"
        variant="outline"
      >
        <Icon
          icon="mdi:twitter"
          className="w-6 h-6 mr-2 text-muted-foreground "
        />
        Sign in with Twitter
      </Button>
    </React.Fragment>
  )
}
export default SocialButton;
`;

export const socialIconButton = `import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

const SocialIconButton = () => {
  return (
    <>
      <div className=" flex space-x-3 justify-center ">
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
      <div className=" flex space-x-3  justify-center">
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
      <div className=" flex space-x-3  justify-center">
        <Button
          size="icon"
          color="secondary"
          className=" rounded-full  hover:bg-opacity-10 "
          variant="outline"
        >
          <Icon icon="ant-design:google-outlined" className="w-6 h-6   " />
        </Button>
        <Button
          size="icon"
          color="secondary"
          className=" rounded-full  hover:bg-opacity-10 "
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
          className=" rounded-full  hover:bg-opacity-10 "
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
          className=" rounded-full  hover:bg-opacity-10 "
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
`;

export const toggleButton = `import { Toggle } from "@/components/ui/toggle";
const ToggleButton = () => {
  return (
    <React.Fragment>
      <Toggle aria-label="Toggle italic">Toggle Button</Toggle>
    </React.Fragment>
  )
}
export default ToggleButton;
`;
