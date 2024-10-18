
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScriptBar from "./script-bar";
import ScriptBubble from "./script-bubble";

const ChartsChartJsScriptBar = () => {
    return (
        <div className="grid  grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScriptBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Bubble Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScriptBubble />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartsChartJsScriptBar;
