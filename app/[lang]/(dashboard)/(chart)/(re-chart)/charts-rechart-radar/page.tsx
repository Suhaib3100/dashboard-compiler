import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReSimpleRadarChart from "./simple-radar-chart";
import ReSpecifiedDomainRadarChart from "./specified-domain-radar";
const ChartJsRechartRadar = () => {
  return (
    <div className="grid   grid-cols-1 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>SimpleRadarChart</CardTitle>
        </CardHeader>
        <CardContent>
          <ReSimpleRadarChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Specified Domain Radar Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <ReSpecifiedDomainRadarChart />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartJsRechartRadar;
