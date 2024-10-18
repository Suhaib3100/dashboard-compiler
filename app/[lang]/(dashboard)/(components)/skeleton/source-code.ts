export const defaultSkeleton = `import { Skeleton } from "@/components/ui/skeleton";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SkeletonPage = () => {
  return (
    <Card>
        <CardContent className="p-0">
          <div className="w-full h-[191px] overflow-hidden rounded-t-md">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="p-4">
            <Skeleton className="w-full mb-2 h-3" />
            <Skeleton className="w-full h-3 mb-0.5" />
            <Skeleton className="w-full h-3 mb-0.5" />
            <Skeleton className="w-full h-3 mb-0.5" />
            <Skeleton className="w-full h-3 mb-0.5" />
          </div>
        </CardContent>
      </Card>
  );
};
export default SkeletonPage;
`;
export const profileSkeleton = `import { Skeleton } from "@/components/ui/skeleton";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProfileSkeleton = () => {
  return (
    <Card className="w-1/3">
        <CardContent className="p-0">
          <div className="w-full h-[191px] overflow-hidden rounded-t-md">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="p-4">
            <div className="w-14 h-14 rounded-full p-[2px] bg-background overflow-hidden -mt-10 relative z-20 mb-2">
              <Skeleton className="w-full h-full rounded-full" />
            </div>
            <Skeleton className="w-1/3 h-3 mb-1" />
            <Skeleton className="w-1/4 h-2 mb-3" />

            <Skeleton className="w-full h-3 mb-2" />
            <Skeleton className="w-full h-3 mb-2" />
            <Skeleton className="w-full h-3 mb-2" />
            <Skeleton className="w-full h-3 mb-2" />
          </div>
        </CardContent>
      </Card>
  );
};
export default ProfileSkeleton;
`;
export const readMoreButtonSkeleton = `"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";

const ReadMoreButtonSkeleton = () => {
  return (
    <>
      <Card className="w-1/3">
        <CardContent className="p-0">
          <div className="w-full h-[191px] overflow-hidden rounded-t-md">
            <Skeleton className="w-full h-full" />
          </div>

          <div className="p-4 ">
            <Skeleton className="w-1/2 h-4 mb-4" />
            <Skeleton className="w-full h-3 mb-2" />
            <Skeleton className="w-full h-3 mb-2" />
            <Skeleton className="w-full h-3 mb-2" />
            <Skeleton className="w-3/4 h-3 mb-3" />

            <div className="flex justify-end">
              <Skeleton className="w-28 h-9 mb-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ReadMoreButtonSkeleton;
`;
export const readMoreSkeleton = `import { Skeleton } from "@/components/ui/skeleton";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ReadMoreSkeleton = () => {
  return (
<Card className="w-1/3">
      <CardContent className="p-0">
        <div className="w-full h-[191px] overflow-hidden rounded-t-md">
          <Skeleton className="w-full h-full" />
        </div>

        <div className="p-4 ">
          <Skeleton className="w-full h-3 mb-2" />
          <Skeleton className="w-full h-3 mb-1" />
          <Skeleton className="w-full h-3 mb-1" />
          <Skeleton className="w-full h-3 mb-1" />
          <Skeleton className="w-3/4 h-3 mb-4" />

          <Skeleton className="w-28 h-6 mb-1" />
        </div>
      </CardContent>
    </Card>
  );
};
export default ReadMoreSkeleton;
`;
export const imageTopSkeleton = `"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";
const ImageTopSkeleton = () => {
  return (
    <Card className="w-1/3">
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

`;
export const imageMiddleSkeleton = `"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";
const ImageMiddleSkeleton = () => {
  return (
    <Card className="w-1/3">
      <CardContent className="p-4">
        <div className="mb-4">
          <Skeleton className="w-1/2 h-4 mb-2" />
          <Skeleton className="w-1/3 h-2 mb-2" />
        </div>
        <div className="w-full h-[135px] overflow-hidden  rounded-md mb-4">
          <Skeleton className="w-full h-[135px] mb-4" />
        </div>
        <div className="mb-6">
          <Skeleton className="w-full h-3 mb-2" />
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

export default ImageMiddleSkeleton;

`;
export const imageBottomSkeleton = `"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";

const ImageBottomSkeleton = () => {
  return (
    <Card className="w-1/3">
      <CardContent className="p-4">
        <div className="mb-4">
          <Skeleton className="w-1/2 h-4 mb-2" />
          <Skeleton className="w-1/3 h-2 mb-2" />
        </div>
        <div className="mb-4">
          <Skeleton className="w-full h-3 mb-2" />
          <Skeleton className="w-3/4 h-3 mb-2" />
        </div>
        <div className="w-full h-[191px] overflow-hidden  rounded-md mb-4">
          <Skeleton className="w-full h-[191px] mb-4" />
        </div>

        <div className="flex justify-start">
          <Skeleton className="w-3/4 h-3 mb-2" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageBottomSkeleton;

`;
export const eCommerceDefaultSkeleton = `"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";
const ECommerceDefaultSkeleton = () => {
  return (
    <Card className="w-1/3 p-4 rounded-md">
      <div className="h-[191px] w-full mb-4 rounded-md">
        <Skeleton className="w-full h-[191px]" />
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <Skeleton className="w-1/12	h-2" />
          <Skeleton className="w-1/12	h-2" />
        </div>

        <Skeleton className="w-5/6 h-4 mb-1.5" />

        <Skeleton className="w-full h-2 mb-1.5" />
        <Skeleton className="w-full h-2 mb-1.5" />

        <div className="mb-4 flex space-x-4">
          <Skeleton className="w-1/12 h-3" />
          <Skeleton className="w-1/12 h-3" />
        </div>
        <Skeleton className="w-full	 h-10" />
      </div>
    </Card>
  );
};

export default ECommerceDefaultSkeleton;
`;
export const eCommerceCounterSkeleton = `"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";
const ECommerceCounterSkeleton = () => {
  return (
    <Card className="w-1/3 p-4 rounded-md">
      <div className="h-[191px] w-full mb-4 rounded-md">
        <Skeleton className="w-full h-[191px]" />
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <Skeleton className="w-1/12	h-2" />
          <Skeleton className="w-1/12	h-2" />
        </div>

        <Skeleton className="w-5/6 h-4 mb-1.5" />

        <Skeleton className="w-full h-2 mb-1.5" />
        <Skeleton className="w-full h-2 mb-1.5" />

        <div className="mb-4 flex space-x-4">
          <Skeleton className="w-1/12 h-3" />
          <Skeleton className="w-1/12 h-3" />
        </div>
       <div className="flex justify-between">
          <Skeleton className="w-4/6	h-10" />
          <Skeleton className="w-2/6	h-10" />
        </div>
      </div>
    </Card>
  );
};

export default ECommerceCounterSkeleton;
`;
export const eCommerceListSkeleton = `"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";

const ECommerceListSkeleton = () => {
  return (
    <Card className="p-3 rounded-md md:flex sm:flex-none w-2/4">
      <Skeleton className=" h-[208px] w-[210px] mb-4 rounded-md  md:mr-3 md:mb-0" />

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

`;
