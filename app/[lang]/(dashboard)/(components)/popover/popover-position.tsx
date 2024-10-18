"use client"
import { Button } from "@/components/ui/button";
import { Popover, PopoverArrow, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const PopoverPosition = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Top</Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 border-none" side="top">
          <PopoverArrow className='fill-default-300 w-3' />
          <div
            className='p-2.5  text-default-900 text-sm bg-default-200 font-medium  rounded-t-md'>
            Popover Title
          </div>
          <div
            className='p-2 text-sm text-default-600'>
            Check out this fantastic content. It's incredibly captivating, isn't it?
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Bottom</Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 border-none" side="bottom">
          <PopoverArrow className='fill-default-200 w-3' />
          <div
            className='p-2.5  text-default-900 text-sm bg-default-200 font-medium  rounded-t-md'>
            Popover Title
          </div>
          <div
            className='p-2 text-sm text-default-600'>
            Check out this fantastic content. It's incredibly captivating, isn't it?
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Left</Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 border-none" side="left">
          <PopoverArrow className='fill-default-200 w-3' />
          <div
            className='p-2.5  text-default-900 text-sm bg-default-200 font-medium  rounded-t-md'>
            Popover Title
          </div>
          <div
            className='p-2 text-sm text-default-600'>
            Check out this fantastic content. It's incredibly captivating, isn't it?
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Right</Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 border-none" side="right">
          <PopoverArrow className='fill-default-200 w-3' />
          <div
            className='p-2.5  text-default-900 text-sm bg-default-200 font-medium  rounded-t-md'>
            Popover Title
          </div>
          <div
            className='p-2 text-sm text-default-600'>
            Check out this fantastic content. It's incredibly captivating, isn't it?
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PopoverPosition;