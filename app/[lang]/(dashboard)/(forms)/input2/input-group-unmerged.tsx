"use client";

import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from "@iconify/react";

const InputGroupUnmerged = () => {
  return (
    <>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>

        <Input type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup>
        <InputGroupText color="info" className=" border-info-500">
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input type="text" placeholder="Search.." color="info" />
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
    </>
  );
};

export default InputGroupUnmerged;
