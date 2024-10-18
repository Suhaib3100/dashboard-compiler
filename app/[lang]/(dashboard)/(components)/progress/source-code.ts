export const defaultProgress = `"use client"
import React from "react";
import { Progress } from "@/components/ui/progress";

const DefaultProgress = () => {
  return (
    <>
      <Progress value={33} />
    </>
  );
};

export default DefaultProgress;
`;
export const defaultCircleProgressbar = `"use client"
import React from "react";
import { CircularProgress} from "@/components/ui/progress";

const DefaultCircleProgressbar = () => {

  return (
    <>
      <CircularProgress value="70" />
      <CircularProgress value="70" showValue />
    </>
  );
};

export default DefaultCircleProgressbar;
`;
export const defaultSizeProgress = `"use client"
import React from "react";
import { Progress } from "@/components/ui/progress";

const DefaultSizeProgress = () => {
  return (
    < >
      <Progress value={20} size="xs" />
      <Progress value={30} size="sm" />
      <Progress value={40} size="md" />
      <Progress value={70} size="lg" />
      <Progress value={90} size="xl" />
    </>
  );
};

export default DefaultSizeProgress;`;
export const circleProgressbarSize = `"use client";
import React from "react";
import { CircularProgress} from "@/components/ui/progress";

const CircleProgressbarSize = () => {

  return (
    <>
      <CircularProgress value="70" size="xs" />
      <CircularProgress value="70" size="sm" />
      <CircularProgress value="70" size="md" />
      <CircularProgress value="70" size="lg" />
      <CircularProgress value="70" size="xl" />
    </>
  );
};

export default CircleProgressbarSize;
`;
export const colorProgress = `"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";

const ColorProgress = () => {

  return (
    <>
      <Progress value={30} color="primary" />
      <Progress value={40} color="dark" />
      <Progress value={80} color="destructive" />
      <Progress value={60} color="warning" />
      <Progress value={70} color="info" />
      <Progress value={20} color="success" />
    </>
  );
};

export default ColorProgress;
`;
export const circleColorProgress = `"use client";
import React from "react";
import { CircularProgress} from "@/components/ui/progress";

const CircleColorProgress = () => {

  return (
    <>
      <CircularProgress value="30" color="primary" />
      <CircularProgress value="60" color="dark" />
      <CircularProgress value="90" color="warning" />
      <CircularProgress value="20" color="destructive" />
      <CircularProgress value="50" color="success" />
      <CircularProgress value="80" color="info" />
    </>
  );
};

export default CircleColorProgress;
`;
export const strippedProgressbar = `"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";

const StrippedProgressbar = () => {

  return (
    <>
      <Progress value="50" color="primary" isStripe />
      <Progress value="30" color="dark" isStripe />
      <Progress value="20" color="destructive" isStripe />
      <Progress value="60" color="warning" isStripe />
      <Progress value="70" color="info" isStripe />
      <Progress value="90" color="success" isStripe />
    </>
  );
};

export default StrippedProgressbar;
`;
export const withLabelProgressbar = `"use client";
import { Label } from "@/components/ui/label";
import { CircularProgress, Progress } from "@/components/ui/progress";
import React from "react";

const WithLabelProgressbar = () => {
  return (
    <>
      <div className="space-y-2">
      <Label>Loading....</Label>
      <Progress value="50" color="success"/>
      </div>
      <CircularProgress
        value="50"
        color="success"
        showValue
        customContent="...."
      />
    </>
  );
};

export default WithLabelProgressbar;`;
export const animateStripedProgressbar = `"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";

const AnimateStripedProgressbar = () => {
  return (
    <>
      <Progress value="50" color="primary" isStripe isAnimate />
      <Progress value="30" color="dark" isStripe isAnimate />
      <Progress value="20" color="destructive" isStripe isAnimate />
      <Progress value="60" color="warning" isStripe isAnimate />
      <Progress value="70" color="info" isStripe isAnimate />
      <Progress value="90" color="success" isStripe isAnimate />
    </>
  );
};

export default AnimateStripedProgressbar;
`;
export const widthValue = `"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";

const WidthValue = () => {
  const [value, setValue] = React.useState(50);

  return (
    <>
      <div className="space-y-2">
        <Label>{value}%</Label>
        <Progress value={value} color="warning" />
      </div>
      <Progress value={value} color="warning" showValue />
      <div className="flex gap-2">
        <Progress className="flex-1" value={value} color="warning" />
        <Label className="inline-flex">{value}%</Label>
      </div>
    </>
  );
};

export default WidthValue;
`;
export const dynamicProgressbar = `"use client";
import React from "react";
import { CircularProgress, Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const DynamicProgressbar = () => {
  const [value2, setValue2] = React.useState(10);

  return (
    <>
      <CircularProgress value={value2} color="primary" showValue />

      <Progress value={value2} />

      <div className="flex gap-3">
        <Button
          size="xs"
          disabled={value2 >= 100}
          color="secondary"
          variant="outline"
          onClick={() => setValue2(value2 < 100 ? value2 + 5 : value2)}
        >
          <Plus className="w-3 h-3" />
        </Button>
        <Button
          size="xs"
          disabled={value2 <=0}
          color="secondary"
          variant="outline"
          onClick={() => setValue2(value2 > 0 ? value2 - 5 : value2)}
        >
          <Minus className="w-3 h-3" />
        </Button>
      </div>
    </>
  );
};
export default DynamicProgressbar;
`;
export const customTextProgressbar = `"use client";
import { CircularProgress } from "@/components/ui/progress";
import React from "react";

const CustomTextProgressbar = () => {

  return (
    <>
      <CircularProgress
        value="70"
        color="primary"
        showValue
        customContent="75 Days"
      />
      <CircularProgress
        value="100"
        color="success"
        showValue
        customContent="Done"
      />
    </>
  );
};

export default CustomTextProgressbar;
`;
export const customContentProgressbar = `"use client";
import React from "react";
import { CircularProgress, Progress } from "@/components/ui/progress";

const CustomContentProgressbar = () => {
  const [value, setValue] = React.useState(30);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Progress value={value} color="warning" showValue />

      <div className="flex gap-4">
        <CircularProgress
          value={value}
          color="success"
          showValue
          customContent="Done"
        />
        <CircularProgress value={value} color="warning" showValue />
      </div>
    </>
  );
};

export default CustomContentProgressbar;
`;
export const loadingProgressbar = `"use client"
import React from "react";
import { CircularProgress } from "@/components/ui/progress";

const LoadingProgressbar = () => {
  return (
    <div>
      <CircularProgress value="50" color="primary" loading />
    </div>
  );
};

export default LoadingProgressbar;
`;
