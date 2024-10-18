"use client";
import Card from "@/components/ui/card-snippet";
import InputFormValidation from "./input-validation";
import CheckboxReactHookFormMultiple from "./checkbox-validation";
import DatePickerForm from "./date-picker";
import RadioGroupForm from "./radio-group";
import SelectForm from "./select-form";
import SwitchForm from "./switch-form";
import TextareaForm from "./textarea-form";
import ComboboxForm from "./combobox-form";
import InputFormBordered from "./input-form-bordered";
import ValidateInputWithIcon from "./validateinput-with-icon";
import InvalidButton from "./invalid-button";
import ValidateTextareaTooltip from "./validate-textarea-tooltip";
import ValidatingMultipleRules from "./validating-multiple-rules";

const InputPage = () => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card title="Input Form Validation">
          <InputFormValidation />
        </Card>
        <Card title="Validation with tooltip">
          <InputFormBordered />
        </Card>
        <Card title="Validation with icon">
          <ValidateInputWithIcon />
        </Card>
        <Card title="Validation disabled button">
          <InvalidButton />
        </Card>
        <Card title="Textarea  Validation">
          <TextareaForm />
        </Card>
        <Card title="Textarea  Validation with tooltip">
          <ValidateTextareaTooltip />
        </Card>
        <Card title="Select Form ">
          <SelectForm />
        </Card>
        <Card title="Date Picker Form">
          <DatePickerForm />
        </Card>
        <Card title="Checkbox React Hook Multiple Form">
          <CheckboxReactHookFormMultiple />
        </Card>
        <Card title="Radio Form Group">
          <RadioGroupForm />
        </Card>
        <Card title="Switch Form">
          <SwitchForm />
        </Card>
        <Card title="Combobox Form">
          <ComboboxForm />
        </Card>
      </div>
      <Card title="Validating Multiple Rules">
        <ValidatingMultipleRules />
      </Card>
    </div>
  );
};

export default InputPage;
