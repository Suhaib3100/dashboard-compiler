import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicHeatMap from "./basic-heatmap";
import MultipleColorsHeatMap from "./mulitple-colors-heatmap";
import RoundedHeatMap from "./rounded-heatmap";

const HeatMapChartPage = () => {
    return (
        <div className="grid grid-cols-1   gap-6 ">
            <Card>
                <CardHeader>
                    <CardTitle>Heat Map Chart(Single Color)</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicHeatMap />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Heatmap - Multiple Colors</CardTitle>
                </CardHeader>
                <CardContent>
                    <MultipleColorsHeatMap />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Rounded(range without shades)</CardTitle>
                </CardHeader>
                <CardContent>
                    <RoundedHeatMap />
                </CardContent>
            </Card>
        </div>
    );
};

export default HeatMapChartPage;
