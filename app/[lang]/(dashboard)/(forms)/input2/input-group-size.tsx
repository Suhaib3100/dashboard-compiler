"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";

import { Icon } from "@iconify/react";

const InputGroupSize = () => {
  return (
    <>
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
    </>
  );
};

export default InputGroupSize;
