import { Card, CardContent } from "@/components/ui/card";
const ProjectDeadline = () => {
  const data = [
    {
      label: "days",
      value: "05",
    },
    {
      label: "hours",
      value: "11",
    },
    {
      label: "minutes",
      value: "22",
    },
    {
      label: "seconds",
      value: "44",
    },
  ];
  return (
    <Card className="h-full w-full bg-primary  pt-8 pb-1 relative overflow-hidden">
      <CardContent>
        <div className="text-4xl text-center font-semibold text-primary-foreground">
          Project Deadline
        </div>
        <div className="grid grid-cols-2 gap-8 mt-10">
          {data.map((item, index) => (
            <div key={`project-overview-${index}`} className="text-center">
              <div className="text-6xl font-semibold text-primary-foreground mb-1">
                {item.value}
              </div>
              <div className="text-3xl font-medium text-primary-foreground/60 ">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectDeadline;
