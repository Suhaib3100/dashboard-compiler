export const inputGroupUnmerged = `"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from "@iconify/react";

const InputGroupUnmerged = () => {
  return (
    <React.Fragment>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup>
        <Input type="text" placeholder="Search" />
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupText>@</InputGroupText>
        <Input type="text" placeholder="Username" />
      </InputGroup>
      <InputGroup>
        <Input type="text" placeholder="Recient’s username" />
        <InputGroupText>@example.com</InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupText>https://example.com/users/</InputGroupText>
        <Input type="text" placeholder="Recient’s username" />
      </InputGroup>
      <InputGroup>
        <InputGroupText>$10</InputGroupText>
        <Input type="text" placeholder="Recient’s username" />
        <InputGroupText>00.</InputGroupText>
      </InputGroup>
    </React.Fragment>
  );
};

export default InputGroupUnmerged;
`;
export const inputGroupSize = `"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";

import { Icon } from "@iconify/react";

const InputGroupSize = () => {
  return (
    <React.Fragment>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input type="text" placeholder="Small Size" className="h-8" />
      </InputGroup>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input type="text" placeholder="Default Size" />
      </InputGroup>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input type="text" placeholder="Large Size" className="h-14" />
      </InputGroup>
    </React.Fragment>
  );
};

export default InputGroupSize;
`;
export const horizontalFormLabel = `"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";

const HorizontalFormLabel = () => {
  return (
    <React.Fragment>
      <Label htmlFor="userName" className="flex-none md:w-[100px]">
        Username
      </Label>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input type="text" placeholder="Username" id="userName" />
      </InputGroup>
    </React.Fragment>
  );
};

export default HorizontalFormLabel;
`;
export const mergedInputGroup = `"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from "@iconify/react";

const MergedInputGroup = () => {
  return (
    <React.Fragment>
      <InputGroup merged>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup merged>
        <Input type="text" placeholder="Search" />
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
      </InputGroup>
      <InputGroup merged>
        <InputGroupText>@</InputGroupText>
        <Input type="text" placeholder="Username" />
      </InputGroup>
      <InputGroup merged>
        <Input type="text" placeholder="Recient’s username" />
        <InputGroupText className=" text-sm font-normal">
          @example.com
        </InputGroupText>
      </InputGroup>
      <InputGroup merged>
        <InputGroupText className=" text-sm font-normal">
          https://example.com/users/
        </InputGroupText>
        <Input type="text" placeholder="Recient’s username" />
      </InputGroup>
      <InputGroup merged>
        <InputGroupText>$10</InputGroupText>
        <Input type="text" placeholder="Recient’s username" />
        <InputGroupText>00.</InputGroupText>
      </InputGroup>
    </React.Fragment>
  );
};

export default MergedInputGroup;
`;
export const inputGroupsButton = `"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupButton } from "@/components/ui/input-group";

const InputGroupsButton = () => {
  return (
    <React.Fragment>
      <InputGroup>
        <InputGroupButton>
          <Button>Button</Button>
        </InputGroupButton>
        <Input type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup>
        <Input type="text" placeholder="Search.." />
        <InputGroupButton>
          <Button>Button</Button>
        </InputGroupButton>
      </InputGroup>
      <InputGroup>
        <InputGroupButton>
          <Button>Button</Button>
        </InputGroupButton>
        <Input type="text" placeholder="Search.." />
        <InputGroupButton>
          <Button>Button</Button>
        </InputGroupButton>
      </InputGroup>
    </React.Fragment>
  );
};

export default InputGroupsButton;
`;
