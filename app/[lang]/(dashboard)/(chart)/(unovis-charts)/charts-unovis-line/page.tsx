import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicLine from "./basic-line";
import MultiLine from "./multi-line";
import LineChartWithDataGaps from "./data-gaps-line";

const ChartsUnovisLinePage = () => {
  return (
    <div className="grid xl:grid-cols-2  grid-cols-1 gap-6 ">
      <Card>
        <CardHeader>
          <CardTitle>Basic Line Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <BasicLine />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Multi Line Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <MultiLine />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Line Chart with Data Gaps</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChartWithDataGaps />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartsUnovisLinePage;
