"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";

const ProfileSkeleton = () => {
  return (
    <>
      <Card className="w-1/3  dark:border dark:border-default-200">
        <CardContent className="p-0">
          <div className="w-full h-[191px] overflow-hidden rounded-t-md">
            <Skeleton className="w-full h-full rounded-b-none" />
          </div>
          <div className="p-4">
            <div className="w-14 h-14 rounded-full p-[2px] bg-background overflow-hidden -mt-10 relative z-20 mb-2">
              <Skeleton className="w-full h-full rounded-full" />
            </div>
            <Skeleton className="w-1/2 h-4 mb-1" />
            <Skeleton className="w-1/4 h-2 mb-3" />
            <Skeleton className="w-full h-3 mb-2" />
            <Skeleton className="w-full h-3 mb-2" />
            <Skeleton className="w-full h-3 mb-2" />
            <Skeleton className="w-3/4 h-3 mb-2" />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProfileSkeleton;
