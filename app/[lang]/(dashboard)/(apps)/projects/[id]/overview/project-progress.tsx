
"use client"
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const data = [
  { name: 'Completed', value: 400, color: "success" },
  { name: 'Incomplete', value: 200, color: "info" },
  { name: 'Overdue', value: 250, color: "destructive" },
  { name: 'Remaning', value: 250, color: "warning" },
];

const RADIAN = Math.PI / 180;

// customized label

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// get total task

const totalTask = data.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.value;
}, 0);

const ProjectProgress = ({ height = 230 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  const COLORS = [
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive})`,
    `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`
  ]
  return (
    <Card>
      <CardHeader className="border-none p-6 pt-7 mb-0">
        <CardTitle>Overall Progress</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ResponsiveContainer width="100%" height={height}>
          <PieChart height={height}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={115}
              fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex-col">

        {/* total value */}
        <div className="text-center text-base font-semibold text-default-900">Total Task: {totalTask}</div>
        {/* custom legend */}
        <div className="flex items-center justify-center mt-4 gap-6">
          {
            data.map(item => (
              <div key={item.name}>
                <div className="flex items-center gap-1">
                  <span className={`h-2.5 w-2.5 rounded-full bg-${item.color}`}></span>
                  <span className="text-xs font-medium text-default-500">{item.name}</span>
                </div>
                <div className="text-xs font-medium text-default-800 mt-1 ml-4">{item.value} Task</div>
              </div>
            ))
          }
        </div>

      </CardFooter>
    </Card>
  );
};

export default ProjectProgress;