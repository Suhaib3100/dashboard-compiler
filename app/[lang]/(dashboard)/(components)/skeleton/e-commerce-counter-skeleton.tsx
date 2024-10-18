"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { Card } from "@/components/ui/card";

const ECommerceCounterSkeleton = () => {
  return (
    <Card className="w-1/3 p-4 rounded-md dark:border dark:border-default-200">
      <div className="h-[191px] w-full mb-4 rounded-md">
        <Skeleton className="w-full h-[191px]" />
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <Skeleton className="w-1/12	h-2" />
          <Skeleton className="w-1/12	h-2" />
        </div>

        <Skeleton className="w-5/6 h-4 mb-2" />

        <Skeleton className="w-full h-2 mb-1.5" />
        <Skeleton className="w-full h-2 mb-4" />

        <div className="mb-4 flex space-x-4">
          <Skeleton className="w-1/12 h-3" />
          <Skeleton className="w-1/12 h-3" />
        </div>
        <div className="flex space-x-6">
          <Skeleton className="w-4/6	h-10" />
          <Skeleton className="w-2/6	h-10" />
        </div>
      </div>
    </Card>
  );
};

export default ECommerceCounterSkeleton;
