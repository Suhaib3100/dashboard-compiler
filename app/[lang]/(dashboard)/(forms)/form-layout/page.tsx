import Card from "@/components/ui/card-snippet";
import FormGrid from "./form-grid";
import Gutters from "./gutters-box";
import VFormWithLabel from "./vform-withlabel";
import VFormWithIcon from "./vform-withicon";
import HrFormWithLabel from "./hform-withlabel";
import HrFormWithIcon from "./hform-withicon";
import HrFormLabelSizing from "./hform-labelsizing";
import ColumnSizing from "./column-sizing";
import FormAutoSize from "./form-auto-size";
const FormLayout = () => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Form Grid">
          <FormGrid />
        </Card>
        <Card title="Gutters">
          <Gutters />
        </Card>
        <Card title="Vertical Form With Label">
          <VFormWithLabel />
        </Card>
        <Card title="Vertical Form With Icon">
          <VFormWithIcon />
        </Card>
        <Card title="Horizontal Form With Label">
          <HrFormWithLabel />
        </Card>
        <Card title="Horizontal Form With Icon">
          <HrFormWithIcon />
        </Card>
        <Card title="Horizontal Form Label Sizing">
          <HrFormLabelSizing />
        </Card>
        <Card title="Column Sizing">
          <ColumnSizing />
        </Card>
      </div>
      <Card title="Auto Sizing">
        <FormAutoSize />
      </Card>
    </div>
  );
};

export default FormLayout;
