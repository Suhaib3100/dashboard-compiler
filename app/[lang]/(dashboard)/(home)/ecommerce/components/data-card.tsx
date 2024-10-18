"use client"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';

type DataItem = {
  id: number;
  name: string;
  count: string;
  color: 'success' | 'primary';
  icon: string;
};

const DataCard = () => {
  
  const data: DataItem[] = [
    {
      id: 1,
      name: "today visit",
      count: "29,103",
      color: "success",
      icon: "mdi:user"
    },
    {
      id: 2,
      name: "TODAY TOTAL SALE",
      count: "$89,346.5",
      color: "primary",
      icon: "mdi:cart"
    }
  ]
  return (
    <>
      {data.map(item => (
        <Card key={item.id}
          className={cn("p-6 rounded-lg flex justify-between items-center relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-[1px] before:h-12 before:w-[2px] before:bg-primary", {
            "bg-success bg-opacity-20 before:bg-success/50": item.color === "success",
            "bg-primary bg-opacity-20  before:bg-primary/50": item.color === "primary",
          })}
        >
          <div className='flex flex-col gap-2'>
            <span className='text-sm uppercase font-semibold text-default-800'>{item.name}</span>
            <span className='text-3xl font-medium text-default-900'>{item.count}</span>
          </div>
          <div>
            <Button
              type="button"
              size="icon"
              color={item.color}
            >
              <Icon icon={item.icon} className='w-5 h-5' />
            </Button>
          </div>
        </Card>
      ))}
    </>
  );
};

export default DataCard;