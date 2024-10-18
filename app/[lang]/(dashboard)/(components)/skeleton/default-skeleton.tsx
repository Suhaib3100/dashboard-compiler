"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";

const DefaultSkeleton = () => {
  return (
    <div className="grid xl:grid-cols-3 grid-cols-2 gap-5">
      <Card className="dark:border dark:border-default-200">
        <CardContent className="p-0">
          <div className="w-full h-[191px] overflow-hidden ">
            <Skeleton className="w-full h-full rounded-b-none" />
          </div>
          <div className="p-4">
            <Skeleton className="w-2/3 mb-3 h-4" />
            <Skeleton className="w-full h-3 mb-2" />
            <Skeleton className="w-full h-3 mb-2" />
            <Skeleton className="w-full h-3 mb-2" />
            <Skeleton className="w-full h-3 mb-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DefaultSkeleton;
