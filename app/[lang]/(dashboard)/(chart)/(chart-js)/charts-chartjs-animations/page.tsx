
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PrograssiveLine from "./prograssive-line";
import DelayChart from "./delay-chart";
import DropChart from "./drop-chart";
import LoopChart from "./loop-chart";


const ChartsChartJsAnimation = () => {
  return (
    <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Delay</CardTitle>
        </CardHeader>
        <CardContent>
          <DelayChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Drop</CardTitle>
        </CardHeader>
        <CardContent>
          <DropChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Loop</CardTitle>
        </CardHeader>
        <CardContent>
          <LoopChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Progressive Line</CardTitle>
        </CardHeader>
        <CardContent>
          <PrograssiveLine />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartsChartJsAnimation;
