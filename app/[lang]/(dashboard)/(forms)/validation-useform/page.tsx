import Card from "@/components/ui/card-snippet";
import SimpleForm from "./simple-form";
import ValidateWithTooltip from "./validate-with-tooltip";
import MultipleTypes from "./multiple-types";
import ValidateRadio from "./validate-radio";
import ValidateCheckbox from "./validate-checkbox";

const ValidationUseForm = () => {
  return (
    <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 gap-6">
      <Card title="Simple Form">
        <SimpleForm />
      </Card>
      <Card title="Validation with Tooltip">
        <ValidateWithTooltip />
      </Card>

      <Card title="Validate Radio Group">
        <ValidateRadio />
      </Card>
      <Card title="Validate Checkbox">
        <ValidateCheckbox />
      </Card>
      <div className="col-span-2">
        <Card title="Multiple Types">
          <MultipleTypes />
        </Card>
      </div>
    </div>
  );
};

export default ValidationUseForm;