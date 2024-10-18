"use client"

import { Cup1 } from "@/components/svg";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react";

interface DataItem {
  id: number;
  name: string;
  count: number;
  isProgress: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'destructive' | 'default' | 'dark'
  icon: React.ReactNode;
}

const data: DataItem[] = [
  {
    id: 1,
    name: "Total Project",
    count: 106,
    isProgress: true,
    color: "primary",
    icon: <Cup1 className="w-6 h-6" />
  },
  {
    id: 2,
    name: "Completed Project",
    count: 60,
    isProgress: true,
    color: "success",
    icon: <Cup1 className="w-6 h-6" />
  },
  {
    id: 3,
    name: "In Progress",
    count: 82,
    isProgress: false,
    color: "destructive",
    icon: <Cup1 className="w-6 h-6" />
  },
]
const Stats = () => {
  return (
    <>
      {data.map((item, index) => (
        <Card
          key={`project-stat-${index}`}
        >
          <CardContent className="p-0">

            <div className="flex p-6">
              <div className="flex-1">
                <div className={`text-3xl font-semibold text-${item.color}/80`}>{item.count}</div>
                <div className="text-lg font-medium text-default-600">{item.name}</div>
              </div>
              <div className="flex-none">
                <div className={`w-10 h-10 flex justify-center items-center rounded bg-${item.color}/10`}>
                  {item.icon}
                </div>
              </div>
            </div>

            <div className={`flex justify-between px-6 py-3.5 bg-${item.color}/10`}>
              <div className="text-sm font-medium text-default-800">Project Progress</div>
              <div>
                {
                  item.isProgress ? <Icon
                    icon="heroicons:arrow-trending-up-16-solid"
                    className={`w-6 h-6 text-${item.color}`}></Icon> :
                    <Icon
                      icon="heroicons:arrow-trending-down-16-solid"
                      className={`w-6 h-6 text-${item.color}`}></Icon>
                }

              </div>
            </div>
          </CardContent>
        </Card >
      ))}
    </>
  );
};

export default Stats;