
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicTimeline from "./basic-timeline";
import CustomColor from "./custom-color";
import MultiSeries from "./multi-series";
import MultiRange from "./multi-range";
import GroupRows from "./group-rows";
import DumbbellTimelineChart from "./dumbbell-timeline";

const RangeChartPage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Basic TimeLine Charts</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicTimeline />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Different Color For Each Bar</CardTitle>
                </CardHeader>
                <CardContent>
                    <CustomColor />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Multi Series Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                    <MultiSeries />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Advanced Timeline (Multiple Range)</CardTitle>
                </CardHeader>
                <CardContent>
                    <MultiRange />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Multiple series (Group rows)</CardTitle>
                </CardHeader>
                <CardContent>
                    <GroupRows />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Dumbbell Chart (Horizontal)</CardTitle>
                </CardHeader>
                <CardContent>
                    <DumbbellTimelineChart />
                </CardContent>
            </Card>
        </div>
    );
};

export default RangeChartPage;
