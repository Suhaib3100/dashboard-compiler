
import Card from "@/components/ui/card-snippet";
import DefaultSizeProgress from "./default-size-progress";
import ColorProgress from "./color-progress";
import WidthValue from "./width-value";
import DefaultCircleProgressbar from "./default-circle-progressbar";
import CircleProgressbarSize from "./circle-progressbar-size";
import CircleColorProgress from "./circle-color-progress";
import StrippedProgressbar from "./stripped-progressbar";
import WithLabelProgressbar from "./with-label-progressbar";
import DynamicProgressbar from "./dynamic-progressbar";
import CustomTextProgressbar from "./custom-text-progressbar";
import AnimateStripedProgressbar from "./animate-striped-progressbar";
import LoadingProgressbar from "./loading-progressbar";
import CustomContentProgressbar from "./custom-content-progressbar";
import DefaultProgress from "./default-progress";

import {
  animateStripedProgressbar,
  circleColorProgress,
  circleProgressbarSize,
  colorProgress,
  customContentProgressbar,
  customTextProgressbar,
  defaultCircleProgressbar,
  defaultProgress,
  defaultSizeProgress,
  dynamicProgressbar,
  loadingProgressbar,
  strippedProgressbar,
  widthValue,
  withLabelProgressbar,
} from "./source-code";

const ProgressPage = () => {
  return (
    <div className="space-y-5">
      <Card title="Default Progress Bar" code={defaultProgress}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary">Progress</code> component shows the
          progressbar to show the default component and use.
        </p>
        <div className="w-full md:w-3/5 ">
          <DefaultProgress />
        </div>
      </Card>
      <Card title="Default Circle Progress Bar" code={defaultCircleProgressbar}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary">CircularProgress</code> component shows
          the progressbar in a circular way to show the component and use .
        </p>
        <div className="flex">
          <DefaultCircleProgressbar />
        </div>
      </Card>
      <Card title="Sizes Progressbar" code={defaultSizeProgress}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In Progress component <code className="text-primary">size</code> props
          shows different size to show and resize the component in linier
          progress.
        </p>
        <div className="w-full md:w-3/5 space-y-5">
          <DefaultSizeProgress />
        </div>
      </Card>
      <Card title="Circle Sizes" code={circleProgressbarSize}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In CircularProgress component{" "}
          <code className="text-primary">size</code> props shows different size
          to show and resize the component in circular progress.
        </p>
        <div className="flex flex-wrap flex-row-reverse justify-end items-center  w-full md:w-3/5">
          <CircleProgressbarSize />
        </div>
      </Card>
      <Card title="Colors Progress" code={colorProgress}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In Progress component <code className="text-primary">variant</code>{" "}
          props shows different color component in linier progress.
        </p>
        <div className="w-full ">
          <ColorProgress />
        </div>
      </Card>
      <Card title="Circle Color Progress" code={circleColorProgress}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In CircularProgress component{" "}
          <code className="text-primary">variant</code> props shows different
          color component in circular progress.
        </p>
        <div className="flex flex-wrap gap-4">
          <CircleColorProgress />
        </div>
      </Card>
      <Card title="Striped"  code={strippedProgressbar}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In Progress component <code className="text-primary">isStripe</code>{" "}
          props shows striped in linier progress.
        </p>
        <div className="space-y-5 w-full md:w-3/5">
          <StrippedProgressbar />
        </div>
      </Card>
      <Card title="With Label" code={withLabelProgressbar}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In Progress component <code className="text-primary">Label</code>{" "}
          component used with Progress component to show label for Progress.
        </p>
        <div className="space-y-4 w-full md:w-3/5">
          <WithLabelProgressbar />
        </div>
      </Card>
      <Card title="Animate Striped" code={animateStripedProgressbar}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In Stripes component <code className="text-primary">isAnimate</code>{" "}
          props shows in striped animation in linier progress.
        </p>
        <div className="space-y-5 w-full md:w-3/5">
          <AnimateStripedProgressbar />
        </div>
      </Card>
      <Card title="With Value" code={widthValue}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In Progress component <code className="text-primary">value</code> prop
          to show filled empty space in progress and circular progress according
          to value and <code className="text-primary">showValue</code> prop to
          show value in progressbar and circular progress component.
        </p>
        <div className="space-y-4 w-full md:w-3/5">
          <WidthValue />
        </div>
      </Card>
      <Card title="Dynamic Progressbar" code={dynamicProgressbar}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In Dynamic Progress component we can demonstrate two progress
          component by adding increment and decrement button to control and show
          how much increasing and decreasing the value of the components and the
          data labeling.
        </p>
        <div className="space-y-4 w-full md:w-3/5">
          <DynamicProgressbar />
        </div>
      </Card>
      <Card title="Custom Text Progressbar" code={customTextProgressbar}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In Custom Text Progress component we can demonstrate different text in
          circular progress component using{" "}
          <code className="text-primary">customContent</code> prop so that we
          can show different data.
        </p>
        <div className="flex space-x-4 w-full md:w-3/5">
          <CustomTextProgressbar />
        </div>
      </Card>
      <Card title="Custom Content Progressbar" code={customContentProgressbar}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In Custom Content Progress component we can demonstrate different text
          and data circular and linier progress component using
          <code className="text-primary">interval</code> how can we show growing
          value over time in different interval time.
        </p>
        <div className="space-y-5 w-full md:w-3/5">
          <CustomContentProgressbar />
        </div>
      </Card>
      <Card title="Loading" code={loadingProgressbar}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          This is a circular progress component using static value and
          <code className="text-primary">loading </code> prop to show a loading
          circle.
        </p>
        <div className="flex space-x-4 w-full md:w-3/5">
          <LoadingProgressbar />
        </div>
      </Card>
    </div>
  );
};

export default ProgressPage;
