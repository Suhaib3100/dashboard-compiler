"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";
const ImageTopSkeleton = () => {
  return (
    <Card className="w-1/3 dark:border dark:border-default-200">
      <CardContent className="p-4">
        <div className="w-full h-[135px] overflow-hidden  rounded-md mb-4">
          <Skeleton className="w-full h-[135px] mb-4" />
        </div>
        <div className="mb-4">
          <Skeleton className="w-1/2 h-4 mb-2" />
          <Skeleton className="w-1/3 h-2 mb-2" />
        </div>
        <div className="mb-6">
          <Skeleton className="w-full h-3 mb-2" />
          <Skeleton className="w-full h-3 mb-2" />
          <Skeleton className="w-3/4 h-3 mb-2" />
        </div>
        <div className="flex gap-4 w-1/2">
          <Skeleton className="w-full h-3 mb-1" />
          <Skeleton className="w-full h-3 mb-1" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageTopSkeleton;
