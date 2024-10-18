import Card from "@/components/ui/card-snippet";
import BasicFormWizard from "./basic-wizard";
import ValidationWizard from "./validation-wizard";
import VStepForm from "./vstep-form";
import CustomWizard from "./custom-wizard";

const FormLayout = () => {
  return (
    <div className="space-y-4">
      <Card title="Basic">
        <BasicFormWizard />
      </Card>
      <Card title="Validation">
        <ValidationWizard />
      </Card>
      <Card title="Vertical">
        <VStepForm />
      </Card>
      <Card title="Custom">
        <CustomWizard />
      </Card>
    </div>
  );
};

export default FormLayout;
