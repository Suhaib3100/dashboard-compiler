import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TitleAlignment from "./title-alignment";

const ChartsChartJsTitlePage = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Alignment</CardTitle>
            </CardHeader>
            <CardContent>
                <TitleAlignment />
            </CardContent>
        </Card>
    );
};

export default ChartsChartJsTitlePage;
