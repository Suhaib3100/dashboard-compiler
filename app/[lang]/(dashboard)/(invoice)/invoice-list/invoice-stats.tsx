"use client"
import { Docs, DocsCheck, DocsArrow, Spam } from "@/components/svg";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import AreaChart from "./area-chart"
const InvoiceStats = () => {
  const data = [
    {
      id: 1,
      title: "Total Invoices Amount",
      amount: "427.98",
      percentage: "3.25",
      icon: <Docs className="w-4 h-4 text-primary-foreground" />,
      isUp: true,
      color: "primary",
      series: [
        {
          data: [20, 70, 85, 90, 50, 90],
        }
      ]
    },
    {
      id: 2,
      title: "Total Paid Invoices",
      amount: "165.21",
      percentage: "8.2",
      icon: <DocsCheck className="w-4 h-4 text-primary-foreground" />,
      isUp: true,
      color: "success",
      series: [
        {
          data: [10, 70, 95, 90, 40, 70],
        }
      ]
    },
    {
      id: 3,
      title: "Pending Invoices",
      amount: "42",
      percentage: "8.2",
      icon: <DocsArrow className="w-4 h-4 text-warning" />,
      isUp: true,
      color: "warning",
      series: [
        {
          data: [10, 50, 35, 50, 40, 90],
        }
      ]
    },
    {
      id: 4,
      title: "Overdue Invoices",
      amount: "280.03",
      percentage: "8.2",
      icon: <Spam className="w-4 h-4 text-destructive" />,
      isUp: false,
      color: "destructive",
      series: [
        {
          data: [20, 30, 85, 90, 50, 100],
        }
      ]
    }
  ]
  return (
    <>
      {
        data.map((item, index) => (
          <div
            key={`invoice-stats-${index}`}
            className={cn("rounded-sm p-4 w-full", {
              "bg-primary-50": item.color === "primary",
              "bg-green-50": item.color === "success",
              "bg-orange-50": item.color === "warning",
              "bg-red-50": item.color === "destructive",
            })}
          >
            <div className="flex gap-2">
              <div className="flex-1 text-sm font-medium text-default-800 dark:text-default-50">{item.title}</div>
              <div className={cn("flex-none h-7 w-7 rounded-sm flex justify-center items-center", {
                "bg-blue-500": item.color === "primary",
                "bg-green-500": item.color === "success",
                "bg-orange-500": item.color === "warning",
                "bg-red-500": item.color === "destructive"
              })}>
                {item.icon}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <div className="mt-2">
                  <div className={cn("relative", {
                    "text-primary-600": item.color === "primary",
                    "text-green-600": item.color === "success",
                    "text-orange-600": item.color === "warning",
                    "text-red-600": item.color === "destructive"
                  })}>
                    <span className="text-sm font-medium absolute top-0 left-0">$</span>
                    <span className="text-2xl font-semibold pl-2.5">{item.amount}k</span>
                  </div>
                </div>
                <div className="mt-1.5">
                  <div className="flex items-center flex-wrap gap-1.5">
                    <span className={cn("text-sm font-medium flex items-center", {
                      "text-primary-600": item.color === "primary",
                      "text-green-600": item.color === "success",
                      "text-orange-600": item.color === "warning",
                      "text-red-600": item.color === "destructive"
                    })}>
                      {item.isUp ? "+" : "-"}
                      {item.percentage}
                      {
                        item.isUp ?
                          <Icon icon="heroicons:arrow-trending-up" className="w-3.5 h-3.5" /> :
                          <Icon icon="heroicons:arrow-trending-down" className="w-3.5 h-3.5" />
                      }
                    </span>
                    <span className="text-sm font-medium text-default-600 whitespace-nowrap">than last month</span>
                  </div>
                </div>
              </div>
              <div className="self-end flex-none w-[70px]">
                <AreaChart
                  series={item.series}
                  color={item.color}
                />
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default InvoiceStats;