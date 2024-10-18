import Card from "@/components/ui/card-snippet";
import BasicTabs from "./basic-tabs";
import DisabledTabs from "./disabled-tabs";
import SizesTabs from "./sizes";
import RoundedTabs from "./rounded-tabs";
import ColorVariants from "./colors-variants";
import StyleVariants from "./style-variants";
import IconVariants from "./icon-variants";
import {
  basicTabs,
  colorVariants,
  disabledTabs,
  iconVariants,
  roundedTabs,
  sizesTabs,
  styleVariants,
} from "./source-code";
const TabsPage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Basic Tabs" code={basicTabs}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary"> Tabs</code> component wraps the.{" "}
          <code className="text-primary">
            {" "}
            TabsList, TabsTrigger, TabsContent
          </code>{" "}
          component to change tabs and wrap it as necessary component.
        </p>
        <BasicTabs />
      </Card>
      <Card title="Disabled Tabs" code={disabledTabs}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary"> Tabs</code> component wraps the.{" "}
          <code className="text-primary">
            {" "}
            TabsList, TabsTrigger, TabsContent
          </code>{" "}
          component to change tabs and wrap it as necessary component.{" "}
          <code className="text-primary">disabled </code>props in TabsTrigger
          component makes the tab disabled.
        </p>
        <DisabledTabs />
      </Card>
      <Card title="Sizes Tabs" code={sizesTabs}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary"> Size </code> can be change by
          changing padding and font size of TabsTrigger component.
        </p>
        <div className=" space-y-5">
          <SizesTabs />
        </div>
      </Card>
      <Card title="Rounded Tabs" code={roundedTabs}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary"> Rounded </code> can be change by
          changing tailwind class rounded rounded-lg and rounded-xl in
          TabsTrigger component.
        </p>
        <div className=" space-y-5">
          <RoundedTabs />
        </div>
      </Card>
      <Card title="Color  Variants" code={colorVariants}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary"> color</code> can be change by
          changing tailwind class data-[state=active]:text-primary-foreground in
          TabsTrigger component.
        </p>
        <ColorVariants />
      </Card>
      <Card title="Style Variants" code={styleVariants}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary"> Style</code> can be change by
          changing tailwind class in TabsTrigger and TabsList component.
        </p>
        <StyleVariants />
      </Card>
      <Card title="Icon Variants" code={iconVariants}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary"> Icon</code> can be change by
          changing Icon component in TabsTrigger and TabsList component and
          tailwind class .
        </p>
        <IconVariants />
      </Card>
    </div>
  );
};

export default TabsPage;
