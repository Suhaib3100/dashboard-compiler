
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicFunnel from "./basic-funnel";
import PyramidChart from "./pyramid";


const FunnelChartPage = () => {
    return (
        <div className="grid   grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Funnel Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicFunnel />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Pyramid Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <PyramidChart />
                </CardContent>
            </Card>
        </div>
    );
};

export default FunnelChartPage;
