
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicRadialBar from "./basic-radial-bar";



const ChartJsRadialBarPage = () => {


    return (
            <Card>
                <CardHeader>
                    <CardTitle>Simple Radial Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicRadialBar />
                </CardContent>
            </Card>
    );
};

export default ChartJsRadialBarPage;
