
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicLine from "./basic-line";
import InterpolationModes from "./interpolation-modes";
import MultiAxisLineChart from "./multi-axisline-chart";
import PointStyling from "./point-styling";
import LineSegmentStyling from "./linesegment-styling";
import SteppedLineCharts from "./steppedline-charts";
import LineStyling from "./line-styling";

const ChartsChartJsBar = () => {
  return (
    <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
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
          <CardTitle>Interpolation Modes</CardTitle>
        </CardHeader>
        <CardContent>
          <InterpolationModes />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Multi Axis Line Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <MultiAxisLineChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Point Styling</CardTitle>
        </CardHeader>
        <CardContent>
          <PointStyling />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Line Segment Styling</CardTitle>
        </CardHeader>
        <CardContent>
          <LineSegmentStyling />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Stepped Line Charts</CardTitle>
        </CardHeader>
        <CardContent>
          <SteppedLineCharts />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Line Styling</CardTitle>
        </CardHeader>
        <CardContent>
          <LineStyling />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartsChartJsBar;
