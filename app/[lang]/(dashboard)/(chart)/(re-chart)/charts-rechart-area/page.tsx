
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicAreaChart from "./basic-area-chart";
import StackedRechartArea from "./stacked-rechart-area";
import TinyRechartArea from "./tiny-rechart-area";
import PercentReAreaChart from "./percent-area";
import CardinalAreaChart from "./cardinal-area";
import AreaChartConnectNulls from "./area-connect-nulls";
import ReSynchronizedAreaChart from "./synchronized-area";
import AreaChartFillByValue from "./areachart-fillby-value";

const RechartAreaPage = () => {
  return (
    <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Area Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <BasicAreaChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Stacked Area Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <StackedRechartArea />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Tiny Area Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <TinyRechartArea />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Percent Area Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <PercentReAreaChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Cardinal Area Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <CardinalAreaChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Area Chart Fill By Value</CardTitle>
        </CardHeader>
        <CardContent>
          <AreaChartFillByValue />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Area Chart Connect Nulls</CardTitle>
        </CardHeader>
        <CardContent>
          <AreaChartConnectNulls />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Synchronized Area Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <ReSynchronizedAreaChart />
        </CardContent>
      </Card>

    </div>
  );
};

export default RechartAreaPage;
