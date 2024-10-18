"use client";

import Card from "@/components/ui/card-snippet";
import DefaultSwitch from "./default-switch";
import SwitchWithLabel from "./switch-with-label";
import DisabledSwitch from "./disabled-switch";
import SwitchSize from "./switch-size";
import SwitchWithIcon from "./switch-with-icon";
import SwitchWithThumbIcon from "./switch-with-thumbicon";
import ColorsSwitch from "./colors-switch";
import ThumbSize from "./thumb-size";
import ControlledSwtich from "./controlled-switch";
import SwitchWithBadge from "./switch-with-badge";
import SwitchLabelPlacement from "./switch-label-placement";
import CustomStyle from "./custom-style";
import CustomizedSwitch from "./customized-switch";
import SwitchShadow from "./switch-shadow";
import SwitchLineStyle from "./switch-line-style";
import SwitchWithBackground from "./switch-with-background";
import SwitchWithText from "./switch-with-text";
import {
  colorsSwitch,
  controlledSwitch,
  customStyle,
  customizedSwitch,
  defaultSwitch,
  disabledSwitch,
  switchLabelPlacement,
  switchLineStyle,
  switchShadow,
  switchSize,
  switchWithBackground,
  switchWithBadge,
  switchWithIcon,
  switchWithLabel,
  switchWithText,
  switchWithThumbIcon,
  thumbSize,
} from "./source-code";

const SwitchPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="Default Switch" code={defaultSwitch}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          No<code className="text-primary"> props </code> are required for our
          default style.
        </p>
        <DefaultSwitch />
      </Card>
      <Card title="Switch With Label" code={switchWithLabel}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use<code className="text-primary"> Label component </code> for the
          switch label.
        </p>
        <SwitchWithLabel />
      </Card>
      <Card title="Disabled Switch" code={disabledSwitch}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use the<code className="text-primary"> disabled </code> attribute to
          disabled the switch.
        </p>
        <DisabledSwitch />
      </Card>
      <Card title="Switch Size" code={switchSize}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The size prop is used to change the switch sizes. <br />
          Our available sizes are{" "}
          <code className="text-primary">
            small (sm), medium (md) and large (lg)
          </code>{" "}
          .
        </p>
        <SwitchSize />
      </Card>
      <Card title="Switch With Icon" code={switchWithIcon}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          {" "}
          Use the <code className="text-primary">startContent</code> and{" "}
          <code className="text-primary">endContent</code> properties to display
          the icon.
        </p>
        <SwitchWithIcon />
      </Card>
      <Card title="Switch With Thumb Icon" code={switchWithThumbIcon}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          {" "}
          Use the <code className="text-primary">thumbIcon</code> property to
          display the icon.
        </p>
        <SwitchWithThumbIcon />
      </Card>
      <Card title="Colors" code={colorsSwitch}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The color prop is used to change the switch color. <br />
          Our available colors are{" "}
          <code className="text-primary">
            primary, indfo, warning, success, destructive
          </code>{" "}
          .
        </p>
        <ColorsSwitch />
      </Card>
      <Card title="Thumb Size" code={thumbSize}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use the <code className="text-primary">thumbSize</code> class to
          adjust the size of the thumb.
        </p>
        <ThumbSize />
      </Card>
      <Card title="Controlled Switch" code={controlledSwitch}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use the <code className="text-primary">handleCheckedChange</code>{" "}
          method to capture the switch value.
        </p>
        <ControlledSwtich />
      </Card>
      <Card title="Switch with Badge" code={switchWithBadge}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use{" "}
          <code className="text-primary">
            startContent="On" and endContent="Off"
          </code>{" "}
          as label text for the switch. You can customize the "On" and "Off"
          labels as needed.
        </p>
        <SwitchWithBadge />
      </Card>
      <Card title="Label Placement" code={switchLabelPlacement}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Adjust the label position by applying a CSS class.
        </p>
        <SwitchLabelPlacement />
      </Card>
      <Card title="Custom Style" code={customStyle}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Style the label as per your custom preferences.
        </p>
        <CustomStyle />
      </Card>
      <Card title="Customization" code={customizedSwitch}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Customize the switch styles according to your preferences.
        </p>
        <CustomizedSwitch />
      </Card>
      <Card title="Switch Shadow" code={switchShadow}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Apply a shadow to the custom class as needed.
        </p>
        <SwitchShadow />
      </Card>
      <Card title="Switch Line Style" code={switchLineStyle}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Apply a line style to the custom class as necessary.
        </p>
        <SwitchLineStyle />
      </Card>
      <Card title="Switch With Background" code={switchWithBackground}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Apply a custom background to the switch.
        </p>
        <SwitchWithBackground />
      </Card>
      <Card title="Switch With Text" code={switchWithText}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          You can also use text in the Icon props.
        </p>
        <SwitchWithText />
      </Card>
    </div>
  );
};

export default SwitchPage;
