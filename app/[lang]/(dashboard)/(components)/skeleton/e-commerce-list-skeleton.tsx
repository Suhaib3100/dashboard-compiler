"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";

const ECommerceListSkeleton = () => {
  return (
    <Card className="p-3 rounded-md md:flex sm:flex-none w-2/4 dark:border dark:border-default-200">
      <Skeleton className=" h-[208px] w-[210px] mb-4 rounded-md  md:mr-3 md:mb-0 " />

      <div className="md:mt-3 mt-0 w-full">
        <Skeleton className="w-1/12	h-2 mb-2" />
        <Skeleton className="w-full	h-4 mb-3" />
        <Skeleton className="w-full	h-2 mb-2" />
        <Skeleton className="w-3/4	h-2 mb-4" />
        <div className="mb-5 flex space-x-4">
          <Skeleton className="w-1/12 h-3" />
          <Skeleton className="w-1/12 h-3" />
        </div>
        <Skeleton className="w-1/3 h-3 mb-3" />
        <div className="flex space-x-6">
          <Skeleton className="w-4/6	h-10" />
          <Skeleton className="w-2/6	h-10" />
        </div>
      </div>
    </Card>
  );
};

export default ECommerceListSkeleton;
