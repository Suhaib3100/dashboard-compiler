

import Card from "@/components/ui/card-snippet";
import BasicInputText from "./basic-input-text";
import InputSize from "./input-size";
import DisabledTextInput from "./disabled-text-input";
import InputColors from "./input-colors";
import LabelInput from "./label-input";
import LabelInputRequired from "./label-input-required";
import ReadOnlyInput from "./read-only-input";
import InputWithButton from "./input-with-button";
import InputVariant from "./input-variant";
import InputRadius from "./input-radius";
import InputWithDescription from "./input-with-description";
import InputWithErrorMessage from "./input-with-errormessage";
import InputControlled from "./input-controlled";
import InputWithHelperText from "./input-with-helpertext";
import LabelPlacement from "./label-placement";

import {
  basicInput,
  disabledTextInput,
  inputColors,
  inputControlled,
  inputRadius,
  inputSizes,
  inputVariant,
  inputWithButton,
  inputWithDescription,
  inputWithErrorMessage,
  inputWithHelperText,
  labelInput,
  labelInputRequired,
  labelPlacement,
  readonlyInput,
} from "./source-code";

const InputPage = () => {
  return (
    <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
      <Card title="Basic Input Text" code={basicInput}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          No <span className="text-primary">props</span> are required when using
          the default style.
        </p>
        <BasicInputText />
      </Card>
      <Card title="Disabled Text Input" code={disabledTextInput}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use <span className="text-primary">disabled</span> attribute to
          disable input.
        </p>
        <DisabledTextInput />
      </Card>
      <Card title="Label Input" code={labelInput}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use <span className="text-primary">Label</span> components for our
          label style
        </p>
        <LabelInput />
      </Card>
      <Card title="Label Input Required" code={labelInputRequired}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use <span className="text-primary">required</span> attribute to
          required input.
        </p>
        <LabelInputRequired />
      </Card>
      <Card title="Read Only" code={readonlyInput}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Apply <span className="text-primary">the readonly attribute</span> to
          make the text input non-editable.
        </p>
        <ReadOnlyInput />
      </Card>
      <Card title="Input With Button" code={inputWithButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use <span className="text-primary">Button</span> component for button
        </p>
        <InputWithButton />
      </Card>
      <Card title="With Description" code={inputWithDescription}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Use the <span className="text-primary">description</span> below the
          input field.
        </p>
        <InputWithDescription />
      </Card>
      <Card title="With Error Message" code={inputWithErrorMessage}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Display the error message using a{" "}
          <span className="text-destructive">destructive</span> color.
        </p>
        <InputWithErrorMessage />
      </Card>
      <Card title="Controlled" code={inputControlled}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          {" "}
          No props are available here.
        </p>
        <InputControlled />
      </Card>
      <Card title="Input With Helper Text" code={inputWithHelperText}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          You have the option to include{" "}
          <span className="text-primary">supportive text</span> either below or
          above the input field.
        </p>
        <InputWithHelperText />
      </Card>
      <div className="col-span-2">
        <Card title="Sizes" code={inputSizes}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            The <span className="text-primary">size</span> prop is used to
            change the input sizes. <br />
            Our available sizes are{" "}
            <span className="text-primary">
              small (sm), medium (md), large (lg), and extra-large (xl)
            </span>{" "}
            .
          </p>
          <InputSize />
        </Card>
      </div>
      <div className="col-span-2">
        <Card title="Radius" code={inputRadius}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            The <span className="text-primary">radius</span> prop is used to set
            the radius of an input field. <br />
            Our available radius prop values are{" "}
            <span className="text-primary">sm,md,lg,xl</span> .
          </p>
          <InputRadius />
        </Card>
      </div>
      <div className="col-span-2">
        <Card title="Colors" code={inputColors}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            The <span className="text-primary">color</span> prop is used to
            change the input color. <br />
            Our available colors are{" "}
            <span className="text-primary">
              default, primary, info, warning, success, destructive
            </span>{" "}
            . <br />
            Use <span className="text-primary">variant="flat"</span> prop to
            flat style.
          </p>
          <InputColors />
        </Card>
      </div>
      <div className="col-span-2">
        <Card title="Variant" code={inputVariant}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            The <span className="text-primary">variant</span> property is
            employed to modify the appearance of the input. <br />
            Our available variant values are{" "}
            <span className="text-primary">
              flat,underlined, filled, faded, borderedfaded, bgboredered, ghost
            </span>{" "}
            . <br />
          </p>
          <InputVariant />
        </Card>
      </div>
      <div className="col-span-2">
        <Card title="Label Placement" code={labelPlacement}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            You have the flexibility to adjust the label position based on our
            markup.
          </p>
          <LabelPlacement />
        </Card>
      </div>
    </div>
  );
};

export default InputPage;
