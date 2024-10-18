"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import pdfi from "@/public/images/files/pdf.png";
import htmli from "@/public/images/files/html.png";
import zipi from "@/public/images/files/zip.png";
import figmai from "@/public/images/files/figma.png";
import aii from "@/public/images/files/ai.png";
import { Icon } from "@iconify/react";
import { type File } from "./view-files";
function getImageSource(ext: string) {
  switch (ext) {
    case "pdf":
      return pdfi;
    case "html":
      return htmli;
    case "ai":
      return aii;
    case "fig":
      return figmai;
    case "zip":
      return zipi;
    default:
      return null;
  }
}
const SingleFileCard = ({ item }: { item: File }) => {
  return (
    <div className="relative min-h-[164px] shadow-sm dark:border rounded">
      {
        item.background &&
        <Image
          alt=""
          src={item?.background}
          className={cn(
            "absolute top-0 left-0 h-full w-full object-cover dark:border-none rounded",
            {
              hidden: item.background === undefined,
            }
          )}
        />
      }
      <div className="p-6">
        <div
          className={cn("bg-card p-2.5 h-14 w-14 rounded mx-auto block", {
            "hidden": item.ext === "png",
          })}
        >
          {
            item.ext !== "png" &&
            <Image
              alt=""
              className="h-full w-full object-cover"
              src={
                (item?.ext === "pdf" && pdfi) ||
                (item?.ext === "html" && htmli) ||
                (item?.ext === "ai" && aii) ||
                (item?.ext === "fig" && figmai) ||
                (item?.ext === "zip" && zipi) || ""
              }
            />
          }
        </div>

        <div
          className={cn("text-center mt-3", {
            "text-left mt-2.5 bottom-4 absolute left-4 z-20":
              item?.ext == "png",
          })}
        >
          <p
            className={cn("text-base font-medium text-default-800 dark:text-primary-foreground truncate", {
              "text-default-50": item?.ext == "png",
            })}
          >
            {item?.heading}
          </p>
          <p
            className={cn("text-sm font-normal text-default-600 dark:text-primary-foreground", {
              "text-default-50": item?.ext == "png",
            })}
          >
            <span>{item?.date}</span> / <span>{item?.size}</span>
          </p>
        </div>

        <div className="absolute  top-3 right-3 flex gap-1.5">
          <Button size="icon" variant="outline" className=" h-6 w-6">
            <Icon icon="heroicons:arrow-down-tray" className=" h-4 w-4  " />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className=" h-6 w-6"
            color="destructive"
          >
            <Icon icon="heroicons:trash" className=" h-4 w-4  " />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleFileCard;
