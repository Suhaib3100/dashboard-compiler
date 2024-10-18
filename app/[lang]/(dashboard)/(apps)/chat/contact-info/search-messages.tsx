"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { useState } from "react";
const SearchMessages = ({ handleSetIsOpenSearch }: {
  handleSetIsOpenSearch: () => void
}) => {
  const [values, setValues] = useState("");
  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(e.target.value)
  }
  const handleClearValues = () => {
    setValues("")
  }
  return (
    <div className="px-4 pb-6 pt-5 border-b border-default-300 flex items-center gap-2">
      <div className="relative flex-1">
        <Icon
          icon="bx:search"
          className="text-base absolute top-1/2 left-3.5 -translate-y-1/2 text-default-400"
        />
        <Input
          type="text"
          placeholder="Search"
          radius="xl"
          className="pl-10 pr-10 bg-default-200 "
          variant="flat"
          size="lg"
          onChange={handleChangeValues}
          value={values}
        />
        {
          values.length > 0 &&
          <Button
            type="button"
            size="icon"
            className="rounded-full bg-default-500 text-primary-foreground hover:bg-default-700 absolute top-1/2 right-2 -translate-y-1/2 h-8 w-8"
            onClick={handleClearValues}
          >
            <Icon icon="lucide:x" className="text-lg" />
          </Button>
        }

      </div>
      <Button
        type="button"
        size="icon"
        className="rounded-full bg-default-300"
        disabled
      >
        <Icon icon="mdi:chevron-down" className="text-xl text-primary-foreground" />
      </Button>
      <Button
        type="button"
        size="icon"
        className="rounded-full bg-default-300"
        disabled
      >
        <Icon icon="mdi:chevron-up" className="text-xl text-primary-foreground" />
      </Button>
      <Button
        type="button"
        className="bg-default-200 text-default-900 hover:bg-default-600 hover:text-primary-foreground"
        onClick={handleSetIsOpenSearch}
      >
        Close
      </Button>
    </div>
  );
};

export default SearchMessages;