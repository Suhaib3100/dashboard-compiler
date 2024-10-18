import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicScatter from "./basic-scatter";
import DateTime from "./date-time";
import ScatterImage from "./scatter-image";

const AreaChartPage = () => {
  return (
    <div className="grid grid-cols-2  gap-6">
      <div className="col-span-2 lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Basic Scatter Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <BasicScatter />
          </CardContent>
        </Card>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Scatter - Datetime Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <DateTime />
          </CardContent>
        </Card>
      </div>
      <div className="col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Scatter - Image Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <ScatterImage />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AreaChartPage;
