"use client";

import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupButton,
  InputGroupText,
} from "@/components/ui/input-group";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const MergedInputGroup = () => {
  return (
    <>
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
        <InputGroupButton>
          <Button disabled variant="outline" size="sm" color="secondary">
            <Icon icon="heroicons:at-symbol" />
          </Button>
        </InputGroupButton>
        <Input disabled type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup merged>
        <InputGroupText>
          <Icon icon="heroicons:at-symbol" />
        </InputGroupText>
        <Input readOnly type="text" placeholder="Search.." />
      </InputGroup>
      <div>
        <Label className="mb-3" htmlFor="username2">
          Password
        </Label>
        <InputGroup>
          <Input
            type="password"
            placeholder="Password"
            id="username2"
            required
          />
        </InputGroup>
      </div>
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
    </>
  );
};

export default MergedInputGroup;
