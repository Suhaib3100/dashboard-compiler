export const avatarLetter = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarsLetter = () => {
  return (
    <React.Fragment>
      <Avatar>
        <AvatarFallback className=" bg-primary text-primary-foreground">
          PR
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className=" bg-secondary text-secondary-foreground">
          LI
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-destructive text-destructive-foreground">
          SH
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-warning text-warning-foreground">
          SU
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-success text-success-foreground">
          PR
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-info text-info-foreground">
          SR
        </AvatarFallback>
      </Avatar>
    </React.Fragment>
  );
};

export default AvatarsLetter;
;
`;
export const avatarsTonal = `import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AvatarsTonal = () => {
  return (
    <React.Fragment>
      <Avatar>
        <AvatarFallback className=" bg-primary/10 text-primary">
          PR
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className=" bg-secondary/70 text-muted-foreground">
          LI
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-destructive/10 text-destructive">
          SH
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-warning/10 text-warning">
          SU
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-success/10 text-success">
          PR
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="  bg-info/10 text-info">SR</AvatarFallback>
      </Avatar>
    </React.Fragment>
  );
};

export default AvatarsTonal;
`;

export const fallbackAvatar = `import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@iconify/react";
const FallbackAvatar = () => {
  return (
    <React.Fragment>
      <Avatar>
        <AvatarFallback className=" bg-primary text-primary-foreground">
          <Icon icon="heroicons:user-20-solid" className=" h-6 w-6" />
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className=" bg-secondary text-secondary-foreground">
          <Icon
            icon="heroicons:chat-bubble-left-20-solid"
            className=" h-6 w-6"
          />
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className=" bg-destructive text-primary-foreground">
          <Icon icon="heroicons:trash-20-solid" className=" h-6 w-6" />
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className=" bg-success text-primary-foreground">
          <Icon icon="heroicons:check-circle-20-solid" className=" h-6 w-6" />
        </AvatarFallback>
      </Avatar>
    </React.Fragment>
  );
};

export default FallbackAvatar;
`;

export const imageAvatar = `import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
const ImageAvatar = () => {
  return (
    <React.Fragment>
      <Avatar>
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>SN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>GH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>IJ</AvatarFallback>
      </Avatar>
    </React.Fragment>
  );
};

export default ImageAvatar;
`;

export const avatarSize = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
const AvatarSize = () => {
  return (
    <React.Fragment>
      <Avatar className="h-[64px] w-[64px]">
        <AvatarImage src={faker.image.avatarLegacy()} alt="" />
        <AvatarFallback>SN</AvatarFallback>
      </Avatar>
      <Avatar className="h-[56px] w-[56px]">
        <AvatarImage src={faker.image.avatarLegacy()} alt="" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src={faker.image.avatarLegacy()} alt="" />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar className="h-11 w-11">
        <AvatarImage src={faker.image.avatarLegacy()} alt="" />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
      <Avatar className="h-10 w-10">
        <AvatarImage src={faker.image.avatarLegacy()} alt="" />
        <AvatarFallback>GH</AvatarFallback>
      </Avatar>
      <Avatar className="h-9 w-9">
        <AvatarImage src={faker.image.avatarLegacy()} alt="" />
        <AvatarFallback>IJ</AvatarFallback>
      </Avatar>
      <Avatar className="h-8 w-8">
        <AvatarImage src={faker.image.avatarLegacy()} alt="" />
        <AvatarFallback>KL</AvatarFallback>
      </Avatar>
      <Avatar className="h-[30px] w-[30px]">
        <AvatarImage src={faker.image.avatarLegacy()} alt="" />
        <AvatarFallback>MN</AvatarFallback>
      </Avatar>
    </React.Fragment>
  );
};

export default AvatarSize;
`;
export const roundedAvatar = `import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
const RoundedAvatar = () => {
  return (
    <React.Fragment>
      <Avatar className=" rounded-md">
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>SN</AvatarFallback>
      </Avatar>
      <Avatar className=" rounded-lg">
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className=" rounded-xl">
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
    </React.Fragment>
  );
};

export default RoundedAvatar;
`;
export const avatarBorder = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
const AvatarBorder = () => {
  return (
    <React.Fragment>
      <Avatar className=" ring-1 ring-border ring-offset-[3px]  ring-offset-background">
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>SN</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-border ring-offset-[3px]  ring-offset-background">
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-border ring-offset-[3px]  ring-offset-background">
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-border ring-offset-[3px]  ring-offset-background">
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-border ring-offset-[3px]  ring-offset-background">
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>GH</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-border ring-offset-[3px]  ring-offset-background">
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>IJ</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-border ring-offset-[3px]  ring-offset-background">
        <AvatarFallback className=" bg-success  text-success-foreground">
          KL
        </AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-border ring-offset-[3px]  ring-offset-background">
        <AvatarFallback className=" bg-info/10  text-info">FK</AvatarFallback>
      </Avatar>
    </React.Fragment>
  );
};

export default AvatarBorder;
`;
export const avatarBorderColor = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";

const AvatarBorderColor = () => {
  return (
    <>
      <Avatar className=" ring-1 ring-primary ring-offset-[3px]  ring-offset-background">
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-warning ring-offset-[3px]  ring-offset-background">
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-success ring-offset-[3px]  ring-offset-background">
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-destructive ring-offset-[3px]  ring-offset-background">
        <AvatarImage src={faker.image.avatarLegacy()} />
        <AvatarFallback>GH</AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-info ring-offset-[3px]  ring-offset-background">
        <AvatarFallback className=" bg-success  text-success-foreground">
          IJ
        </AvatarFallback>
      </Avatar>
      <Avatar className=" ring-1 ring-dark ring-offset-[3px]  ring-offset-background">
        <AvatarFallback className=" bg-info/10  text-info">FK</AvatarFallback>
      </Avatar>
    </>
  );
};

export default AvatarBorderColor;
`;
export const avatarGroupBlock = `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
const AvatarGroupBlock = () => {
  return (
    <React.Fragment>
      <AvatarGroup>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>CD</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>GH</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarFallback className=" font-medium">M</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </React.Fragment>
  );
};

export default AvatarGroupBlock;
`;
export const avatarGroupMax = `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";

const AvatarGroupMax = () => {
  return (
    <React.Fragment>
      <AvatarGroup max={4}>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>CD</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarFallback className="  font-normal">+3</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </React.Fragment>
  );
};

export default AvatarGroupMax;
`;
export const avatarGroupTotal = `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";

const AvatarGroupTotal = () => {
  return (
    <React.Fragment>
      <AvatarGroup max={3} total={10}>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>CD</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarFallback className="font-normal">+10</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </React.Fragment>
  );
};

export default AvatarGroupTotal;
`;
export const avatarGroupCustom = `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";

const AvatarGroupCustom = () => {
  return (
    <React.Fragment>
      <AvatarGroup max={4} custom>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>CD</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background">
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <p className="ps-5">+10 others</p>
      </AvatarGroup>
    </React.Fragment>
  );
};

export default AvatarGroupCustom;
`;
export const avatarGroupSize = `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
const AvatarGroupSize = () => {
  return (
    <React.Fragment>
      <div className="space-y-4">
        <AvatarGroup>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-10 w-10">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-10 w-10">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-10 w-10">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-10 w-10">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-10 w-10">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-10 w-10">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-10 w-10">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-10 w-10">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-10 w-10">
            <AvatarFallback className="  font-normal">M</AvatarFallback>
          </Avatar>
        </AvatarGroup>
        <AvatarGroup>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>

          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-8 w-8">
            <AvatarFallback className="  font-normal">M</AvatarFallback>
          </Avatar>
        </AvatarGroup>
        <AvatarGroup>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
            <AvatarImage src={faker.image.avatarLegacy()} />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <Avatar className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-6 w-6">
            <AvatarFallback className=" font-normal">M</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
    </React.Fragment>
  );
};

export default AvatarGroupSize;
`;
export const avatarWithTooltip =`import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";
import avatar9 from "@/public/images/avatar/avatar-9.jpg";
import avatar10 from "@/public/images/avatar/avatar-10.jpg";
import avatar11 from "@/public/images/avatar/avatar-11.jpg";
const avatars = [
  {
    name: "Alex Smith",
    avatar: avatar5
  },
  {
    name: "Emily Johnson",
    avatar: avatar6
  },
  {
    name: "Max Brown",
    avatar: avatar7
  },
  {
    name: "Sophia Lee",
    avatar: avatar8
  },
  {
    name: "Liam Garcia",
    avatar: avatar9
  },
  {
    name: "Ava Martinez",
    avatar: avatar10
  },
  {
    name: "Noah Taylor",
    avatar: avatar11
  },
]
const AvatarWithTooltip = () => {
  return (
    <AvatarGroup>
      {
        avatars.map((item, index) => (
          <TooltipProvider
            key={index}
            delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar className="ring-1 ring-background ring-offset-[2px]  ring-offset-background  h-10 w-10"
                >
                  <AvatarImage src={item.avatar.src} />
                  <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))
      }
    </AvatarGroup>
  );
};

export default AvatarWithTooltip;
`