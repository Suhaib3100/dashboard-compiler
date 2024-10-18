
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomTooltip from "./custom-tooltip";
import InteractionModes from "./interaction-modes";
import TooltipPointStyle from "./tooltip-point-style";
import PositionTooltip from "./position-tooltip";

const ChartsChartJsTitlePage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Custom Tooltip Content</CardTitle>
                </CardHeader>
                <CardContent>
                    <CustomTooltip />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Interaction Modes</CardTitle>
                </CardHeader>
                <CardContent>
                    <InteractionModes />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Point Style</CardTitle>
                </CardHeader>
                <CardContent>
                    <TooltipPointStyle />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Position(incomplete)</CardTitle>
                </CardHeader>
                <CardContent>
                    <PositionTooltip />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartsChartJsTitlePage;
