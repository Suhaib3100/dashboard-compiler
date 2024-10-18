"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const ReportChart = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();

  const getLabel = (colors: string) => ({
    style: {
      colors: colors,
      fontFamily: "Inter",
    },
  });
  const getGridConfig = (colors: string) => ({
    show: true,
    borderColor: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
      })`,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    strokeDashArray: 0,
    position: "back",
    row: {
      colors: undefined,
      opacity: 0.5,
    },
    column: {
      colors: undefined,
      opacity: 0.5,
    },
    padding: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 10,
    },
  });


  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "Completed Task",
      data: [45, 52, 38, 24, 33, 40],
    },
    {
      name: "Inprogress",
      data: [35, 41, 62, 42, 13, 35],
    },
    {
      name: "Overdue",
      data: [87, 57, 74, 99, 75, 50],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2],
      curve: "straight",
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },

    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisTicks: {
        show: false,
      },

      lines: {
        show: true,
      },
      labels: getLabel(
        `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
        })`
      ),
    },
    yaxis: {
      axisTicks: {
        show: false,
      },

      lines: {
        show: true,
      },
      labels: getLabel(
        `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
        })`
      ),
    },
    legend: {
      labels: {
        colors: `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
          })`,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 5,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        offsetX: isRtl ? 5 : -5
      }
    },
  };
  return (
    <Card>
      <CardHeader className="mb-0 border-none pt-6 pl-7 pb-0 flex-row items-center justify-between">
        <CardTitle>Reports Area</CardTitle>
        <div className="w-[170px]">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">Jan 10,2024</SelectItem>
              <SelectItem value="11">Jan 11,2024</SelectItem>
              <SelectItem value="12">Jan 12,2024</SelectItem>
              <SelectItem value="13">Jan 13,2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Chart
          options={options}
          series={series}
          type="line"
          height={height}
          width={"100%"}
        />
      </CardContent>
    </Card>
  );
};

export default ReportChart;
