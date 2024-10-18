import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicBar from "./basic-bar";
import FloatingBar from "./floating-bar";
import HorizontalBar from "./horizontal-bar";
import StackedBar from "./stacked-bar";
import StackedBarWithGroups from "./stackedbar-with-groups";
import VerticalBar from "./vertical-bar";

const ChartsChartJsBarPage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Bar Chart Border Radius</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Floating Bars</CardTitle>
                </CardHeader>
                <CardContent>
                    <FloatingBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Horizontal Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <HorizontalBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Stacked  Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <StackedBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Stacked Bar Chart with Groups</CardTitle>
                </CardHeader>
                <CardContent>
                    <StackedBarWithGroups />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Vertical Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <VerticalBar />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartsChartJsBarPage;
