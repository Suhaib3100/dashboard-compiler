"use client";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const AccessibleCheckbox = () => {
  const [isSelectedCb1, setIsSelectedCb1] = useState<boolean>(true);
  const [isSelectedCb2, setIsSelectedCb2] = useState<boolean>(false);
  const [isSelectedCb3, setIsSelectedCb3] = useState<boolean>(false);
  const [isSelectedCb4, setIsSelectedCb4] = useState<boolean>(false);
  return (
    <div className="flex items-center flex-wrap gap-6">
      <div
        className={cn(
          "bg-default-100  h-8 px-2 rounded-md inline-flex flex-col justify-center",
          {
            "bg-primary/10": isSelectedCb1,
          }
        )}
      >
        <Checkbox
          id="accb1"
          onCheckedChange={() => setIsSelectedCb1(!isSelectedCb1)}
          defaultChecked
        >
          <span
            className={cn("text-default-600", {
              "text-primary": isSelectedCb1,
            })}
          >
            Travelling
          </span>
        </Checkbox>
      </div>

      <div
        className={cn(
          "bg-default-100  h-8 px-2 rounded-md inline-flex flex-col justify-center",
          {
            "bg-info/10": isSelectedCb2,
          }
        )}
      >
        <Checkbox
          id="accb2"
          color="info"
          onCheckedChange={() => setIsSelectedCb2(!isSelectedCb2)}
        >
          <span
            className={cn("text-default-600", { "text-info": isSelectedCb2 })}
          >
            Working
          </span>
        </Checkbox>
      </div>
      <div
        className={cn(
          "bg-default-100  h-8 px-2 rounded-md inline-flex flex-col justify-center",
          {
            "bg-success/10": isSelectedCb3,
          }
        )}
      >
        <Checkbox
          id="accb3"
          color="success"
          onCheckedChange={() => setIsSelectedCb3(!isSelectedCb3)}
        >
          <span
            className={cn("text-default-600", {
              "text-success": isSelectedCb3,
            })}
          >
            Walking
          </span>
        </Checkbox>
      </div>
      <div
        className={cn(
          "bg-default-100  h-8 px-2 rounded-md inline-flex flex-col justify-center",
          {
            "bg-destructive/10": isSelectedCb4,
          }
        )}
      >
        <Checkbox
          id="accb4"
          color="destructive"
          onCheckedChange={() => setIsSelectedCb4(!isSelectedCb4)}
          icon={<X />}
        >
          <span
            className={cn("text-default-600", {
              "text-destructive": isSelectedCb4,
            })}
          >
            Gaming
          </span>
        </Checkbox>
      </div>
    </div>
  );
};

export default AccessibleCheckbox;
