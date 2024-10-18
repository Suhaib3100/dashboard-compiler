"use client"
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow } from '@/components/ui/popover';

const BasicPopover = () => {
  return (
    <div className='flex items-center gap-2'>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 border-none rounded-md">
          <PopoverArrow className='fill-default-200 w-3' />
          <div
            className='p-2.5  text-default-900 text-sm bg-default-200 font-medium rounded-t-md'>
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
          <Button>Without Arrow</Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 border-none rounded-md">

          <div
            className='p-2.5  text-default-900 text-sm bg-default-200 font-medium rounded-t-md'>
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

export default BasicPopover;