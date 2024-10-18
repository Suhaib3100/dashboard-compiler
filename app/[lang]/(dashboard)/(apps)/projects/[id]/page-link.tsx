"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
const pages = [
  {
    text: "overview",
    value: "overview",
  },
  {
    text: "task",
    value: "task",
  },
  {
    text: "docs",
    value: "documents",
  },
  {
    text: "files",
    value: "files",
  },
  {
    text: "activity",
    value: "activity",
  },
  {
    text: "team",
    value: "team",
  },
  {
    text: "discussion",
    value: "discussion",
  },
  {
    text: "settings",
    value: "settings",
  },
];
const PageLink = ({ id }: { id: string }) => {
  const locationName = usePathname();
  return pages.map((item) => (
    <Link
      key={item.value}
      href={`/projects/${id}/${item.value}`}
      className={cn(
        "text-sm font-semibold text-default-500 capitalize pb-3 border-b border-transparent cursor-pointer",
        {
          "border-primary": locationName === `/projects/${id}/${item.value}`,
        }
      )}
    >
      {item.value}
    </Link>
  ));
};

export default PageLink;
