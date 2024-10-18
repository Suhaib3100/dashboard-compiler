import Card from "@/components/ui/card-snippet";

import {
  defaultSkeleton,
  eCommerceCounterSkeleton,
  eCommerceDefaultSkeleton,
  eCommerceListSkeleton,
  imageBottomSkeleton,
  imageMiddleSkeleton,
  imageTopSkeleton,
  profileSkeleton,
  readMoreButtonSkeleton,
  readMoreSkeleton,
} from "./source-code";

import DefaultSkeleton from "./default-skeleton";
import ProfileSkeleton from "./profile-skeleton";
import ReadMoreSkeleton from "./readmore-skeleton";
import ReadMoreButtonSkeleton from "./readmore-button-skeleton";
import ImageMiddleSkeleton from "./image-middle-skeleton";
import ImageTopSkeleton from "./image-top-skeleton";
import ImageBottomSkeleton from "./image-bottom-skeleton";
import ECommerceDefaultSkeleton from "./e-commerce-default-skeleton";
import ECommerceCounterSkeleton from "./e-commerce-counter-skeleton";
import ECommerceListSkeleton from "./e-commerce-list-skeleton";

const SkeletonPage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Basic Skeleton" code={defaultSkeleton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Skeleton</code> component gives a
          demo that replace the text and gives a loading.
        </p>
        <DefaultSkeleton />
      </Card>
      <Card title="Profile Skeleton" code={profileSkeleton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Skeleton</code> component gives a
          demo that replace the text and gives a loading.
        </p>
        <ProfileSkeleton />
      </Card>
      <Card title="Read More Skeleton" code={readMoreSkeleton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Skeleton</code> component gives a
          demo that replace the text and gives a loading.
        </p>
        <ReadMoreSkeleton />
      </Card>
      <Card title="Read More Button Skeleton" code={readMoreButtonSkeleton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Skeleton</code> component gives a
          demo that replace the text and gives a loading.
        </p>
        <ReadMoreButtonSkeleton />
      </Card>
      <Card title="Image Middle Skeleton" code={imageMiddleSkeleton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Skeleton</code> component gives a
          demo that replace the text and gives a loading.
        </p>
        <ImageMiddleSkeleton />
      </Card>
      <Card title="Image On Top Skeleton" code={imageTopSkeleton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Skeleton</code> component gives a
          demo that replace the text and gives a loading.
        </p>
        <ImageTopSkeleton />
      </Card>
      <Card title="Image On Bottom Skeleton" code={imageBottomSkeleton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Skeleton</code> component gives a
          demo that replace the text and gives a loading.
        </p>
        <ImageBottomSkeleton />
      </Card>
      <Card title="ECommerce Default Skeleton" code={eCommerceDefaultSkeleton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Skeleton</code> component gives a
          demo that replace the text and gives a loading.
        </p>
        <ECommerceDefaultSkeleton />
      </Card>
      <Card title="ECommerce Counter Skeleton" code={eCommerceCounterSkeleton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Skeleton</code> component gives a
          demo that replace the text and gives a loading.
        </p>
        <ECommerceCounterSkeleton />
      </Card>
      <Card title="ECommerce List Skeleton" code={eCommerceListSkeleton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Skeleton</code> component gives a
          demo that replace the text and gives a loading.
        </p>
        <ECommerceListSkeleton />
      </Card>
    </div>
  );
};

export default SkeletonPage;
