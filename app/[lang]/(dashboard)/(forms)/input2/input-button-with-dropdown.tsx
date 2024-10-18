"use client";

import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupButton } from "@/components/ui/input-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

const InputButtonWithDropdown = () => {
  return (
    <>
      <InputGroup>
        <InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button color="secondary" size="sm">
                Success
                <Icon
                  icon="heroicons:chevron-right"
                  className=" h-5 w-5 ml-2"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupButton>
        <Input type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup>
        <Input type="text" placeholder="Search.." />
        <InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button color="secondary" size="sm">
                Success
                <Icon
                  icon="heroicons:chevron-right"
                  className=" h-5 w-5 ml-2"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupButton>
      </InputGroup>
      <InputGroup>
        <InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button color="secondary" size="sm">
                Success
                <Icon
                  icon="heroicons:chevron-right"
                  className=" h-5 w-5 ml-2"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupButton>
        <Input type="text" placeholder="Search.." />
        <InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button color="secondary" size="sm">
                Success
                <Icon
                  icon="heroicons:chevron-right"
                  className=" h-5 w-5 ml-2"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupButton>
      </InputGroup>
    </>
  );
};

export default InputButtonWithDropdown;
