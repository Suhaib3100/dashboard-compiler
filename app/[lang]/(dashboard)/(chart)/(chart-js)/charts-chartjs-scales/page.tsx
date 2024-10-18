
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LinearScaleMinMax from "./linearscale-minmax";
import LinearScaleSuggestedMinMax from "./suggested-minmax";
import LinearScaleStepSize from "./linearscale-stepsize";
import StackedLinearCategory from "./stackedlinear-category";
import LogScaleChart from "./logscale-chart";
import TimeScaleChart from "./timescale-chart";

const ChartsChartJsScales = () => {
  return (
    <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Linear Scale - Min-Max</CardTitle>
        </CardHeader>
        <CardContent>
          <LinearScaleMinMax />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Linear Scale Suggested Min-Max</CardTitle>
        </CardHeader>
        <CardContent>
          <LinearScaleSuggestedMinMax />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Linear Scale Step Size</CardTitle>
        </CardHeader>
        <CardContent>
          <LinearScaleStepSize />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>LogScale</CardTitle>
        </CardHeader>
        <CardContent>
          <LogScaleChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Stacked Linear / Category</CardTitle>
        </CardHeader>
        <CardContent>
          <StackedLinearCategory />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Time Scale</CardTitle>
        </CardHeader>
        <CardContent>
          <TimeScaleChart />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartsChartJsScales;
