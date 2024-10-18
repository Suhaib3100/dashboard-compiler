"use client"
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow } from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';
import { Icon } from '@iconify/react';

const ProgressPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="py-3">
        <PopoverArrow className='fill-default-300 w-3' />
        <div className='text-sm font-medium text-default-900'>Available storage</div>
        <div className='mt-2 mb-4 text-sm text-default-600'>This server has <strong>40</strong> of <strong>120</strong> GB of block storage remaining.</div>
        <Progress value={80} color="destructive" />
        <Button variant="ghost" className="mt-2">
          Upgrade Now <Icon icon="heroicons:chevron-right" />
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default ProgressPopover;