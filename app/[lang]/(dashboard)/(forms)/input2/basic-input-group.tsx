"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupButton,
  InputGroupText,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";

const BasicInputGroup = () => {
  return (
    <>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:at-symbol" />
        </InputGroupText>
        <Input type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup>
        <Input type="text" placeholder="Search.." />
        <InputGroupText>
          <Icon icon="heroicons:at-symbol" />
        </InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupButton>
          <Button disabled variant="outline" size="sm" color="secondary">
            <Icon icon="heroicons:at-symbol" />
          </Button>
        </InputGroupButton>
        <Input disabled type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:at-symbol" />
        </InputGroupText>
        <Input readOnly type="text" placeholder="Search.." />
      </InputGroup>
      <div>
        <Label className="mb-3" htmlFor="username5">
          Password
        </Label>
        <InputGroup>
          <Input
            type="password"
            placeholder="Password"
            id="username5"
            required
          />
        </InputGroup>
      </div>
      <InputGroup>
        <Input type="text" placeholder="Recient’s username" />
        <InputGroupText>@example.com</InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupText>https://example.com/users/</InputGroupText>
        <Input type="text" placeholder="Recient’s username" />
      </InputGroup>
    </>
  );
};

export default BasicInputGroup;
