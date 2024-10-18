import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicLineChart from "./line-chart";
import LineChartWithDataLabels from "./line-with-datalabels";
import ZoomableTimeSeries from "./zoomable-timeseries";
import LineWithAnnonotations from "./line-with-annotations";
import DashedLineChart from "./dashed-linechart";
import StepLineChart from "./step-linechart";
import GradiantLineChart from "./gradiant-linechart";
import MissingDataLineChart from "./missingdata-linechart";
import BrushLineChart from "./brush-linechart";
import SynchronizedChart from "./synchronized-chart";

const LineChartPage = () => {
  return (
    <div className="grid xl:grid-cols-2  grid-cols-1 gap-6 ">
      <Card>
        <CardHeader>
          <CardTitle>Basic Line Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <BasicLineChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Line with Data Labels</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChartWithDataLabels />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Zoomable Timeseries</CardTitle>
        </CardHeader>
        <CardContent>
          <ZoomableTimeSeries />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Line with Annotations</CardTitle>
        </CardHeader>
        <CardContent>
          <LineWithAnnonotations />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Dashed Line</CardTitle>
        </CardHeader>
        <CardContent>
          <DashedLineChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Stepline Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <StepLineChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Gradient Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <GradiantLineChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Missing Data/ Null Value Charts</CardTitle>
        </CardHeader>
        <CardContent>
          <MissingDataLineChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Brush Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <BrushLineChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Syncing Charts</CardTitle>
        </CardHeader>
        <CardContent>
          <SynchronizedChart />
        </CardContent>
      </Card>
    </div>
  );
};

export default LineChartPage;
