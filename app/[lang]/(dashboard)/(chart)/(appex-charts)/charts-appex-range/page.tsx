
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicRange from "./basic-range";
import ComboRange from "./combo-range";

const RangeChartPage = () => {
    return (
        <div className="grid grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Range Area Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicRange />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Combo</CardTitle>
                </CardHeader>
                <CardContent>
                    <ComboRange />
                </CardContent>
            </Card>
        </div>
    );
};

export default RangeChartPage;
