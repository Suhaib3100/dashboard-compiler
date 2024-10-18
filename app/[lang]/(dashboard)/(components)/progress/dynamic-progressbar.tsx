"use client";

import { CircularProgress, Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React from "react";

const DynamicProgressbar = () => {
  const [value2, setValue2] = React.useState<number>(10);

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
          disabled={value2 <= 0}
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
